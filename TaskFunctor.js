const fs = require("fs");
const { task } = require("folktale/concurrency/task");
const { split, find } = require("lodash/fp");

const readFile = (fileName) => {
    // 返回task函子
    return task((resolver) => {
        // fs3个参数：1.文件路径 2.编码格式 3.回调函数
        fs.readFile(fileName, "utf-8", (err, data) => {
            if (err) {
                resolver.reject(data);
            }
            resolver.resolve(data);
        });
    });
};

readFile("package.json")
    .map(split("\n"))
    .map(find((v) => v.includes("version")))
    .run() // task函子接口
    .listen({
        // task函子提供监听方式获取数据
        onReject: (err) => {
            console.log(err);
        },
        onResolved: (value) => {
            console.log(value); // => "version": "1.0.0",
        },
    });
