const nothing = () => {};

const identity = (x) => x;

const defaultTo = (x) => (y) => y || x;

const always = (x) => (y) => x;
