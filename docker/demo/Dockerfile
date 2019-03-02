# 下载node
FROM node:carbon


COPY . /app

# 创建 app 目录
WORKDIR /app/app

# 安装 app 依赖
RUN npm install -g nodemon cnpm

RUN cnpm install


# 打包 app 源码

EXPOSE 6677

CMD [ "node", "server.js" ] 
