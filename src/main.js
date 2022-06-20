const { func1 } = await import("./lib1.mjs");
const { func2 } = require("./lib2.js");

func1();
func2();

export {};
