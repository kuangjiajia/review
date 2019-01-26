三大特征 

镜像 image (只读，可用来创建容器)
容器 container (看成mini linux)
仓库 registry (存放镜像文件的场所)


uname-r

docker run hello-world

docker 命令

docker version
// 版本号
docker info
// 本机docker的描述
docker --help
// 帮助命令

docker images
//本地镜像
docker images -a

docker images -qa

docker images --digests

docker search

docker pull

docker rmi xxx [-f]

docker run 

docker ps
 
docker ps -l

docker ps -a

docker ps -n 3

docker start

docker restart

docker stop

docker kill 

docker rm xxx

docker rm -f $(docker ps -a -q)

docker run -d centos

docker logs -t [-f] id

dcoker inspect id

ctrl + p + q

docker attach id 进入容器

docker exec -t 6f6a0108c889 ls -l /tmp

docker cp id:dir targetDir

docker commit 

docker run -it -p 8888:8080 tomcat

docker run -it -P tomcat


--no-trunc 
-s
--automated
