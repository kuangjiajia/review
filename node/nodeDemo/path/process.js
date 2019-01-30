// console.log(process.env.PATH.split(':').join('\n'));

// process.env.PATH += ":/a_new_path_to_executables"

// console.log(process.env.PATH.split(":"))

// console.log(process)

// 获取平台信息
console.log(process.arch) // x64
console.log(process.platform) // darwin

// 获取内存使用情况
console.log(process.memoryUsage());

// 获取命令行参数
console.log(process.argv)