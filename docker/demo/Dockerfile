# 下载node
FROM node:carbon

# 创建 app 目录
WORKDIR /app

# 安装 app 依赖
# 使用通配符确保 package.json 与 package-lock.json 复制到需要的地方。（npm 版本 5 以上） COPY package*.json ./
RUN npm install -g nodemon



RUN npm install
# 如果你需要构建生产环境下的代码，请使用：
# RUN npm install --only=production

# 打包 app 源码
COPY src /app

EXPOSE 8080
CMD [ "node", "server.js" ]
