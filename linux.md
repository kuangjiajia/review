### linux

常用命令

cd
cd ~ //根目录
cd - //上一次的目录
cd ..
cd 路径

ls
ls -a
ls -l
ls -i 查看i节点

rm -rf 文件夹/文件

cp -r 目标文件夹 目的文件夹
cp -p 连带文件属性复制
cp -a 相当于-pdf  就是直接引用的意思

mv 目标 目的  //可用来剪切或改名

mkdir -p 文件名称 
-p => 递归的创建


常用目录

bin
sbin

usr
 bin
 sbin

bin 是用户就能执行
sbin 超级用户才能执行

boot 启动
dev 特殊文件保存
etc 系统的配置文件

home 普通用户
root 超级用户

lib 程序库 

misc 
media
mnt 
这三个是用来挂载外接设备的

proc
sys 
别动这两个目录

tmp
root
在这三个下做练习


ln 源地址 目标地址
生成的是软链接

-s 软链接

硬链接
 两个文件指向同一个位置，删除一个，另一个也能访问
 两文件是同一文件(inode相同)
 不能跨分区
 不针对目录，只能文件才能创建
软链接
 删除原文件，软链接不能用
 源文件记得写绝对路径


locate (只能搜索文件)
emmm... 速度快

locate 文件名
搜索是在 /var/lib/mlocate中去搜索，新创建的文件可能搜不到

updatedb 强制更新mlocate


搜索规则定义在/etc/updatedb.conf文件中

whereis(只能搜索可执行文件)
-b 只看可执行文件
-m 只看帮助文档
// 只能搜索系统命令

which

whereis which 搜索变量的路径依赖$PATH

find(能文件也能可执行文件) 运行特别的慢
find [搜索范围] [搜索条件]
要模糊查询的话需要通配符 

-iname
-user
-nouser

<!-- find /root user root -->