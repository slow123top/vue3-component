// 在根目录下创建组件
// 拿到根目录路径
import { mkdir } from "node:fs/promises";
import readline from "node:readline";
import path from "path";
console.log("请输入组件名称：");
const r1 = readline.createInterface({ input: process.stdin });
r1.on("line", (res) => {
  const dirCreation = mkdir(res, { recursive: true }).then((e) => {
    console.log(process.argv);
    console.log(__dirname);
  });
});
// 输入组件的名称  比如Modal  应该使用大驼峰形式  或者烤串形式名称

//根据组件名称创建目录 生成文件夹以及tsx组件  less样式文件  index.tsx文件
// fs.mkdir();
