#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


git pull

git add .

# 声明变量，不带空格
my_variable=$(git commit -m '更新') ? 1 : 0

# 使用变量，在变量名前加上$
echo $my_variable

if [ $my_variable ]
then
echo "提交成功"
fi
echo "提交失败"

#git push origin gh-pages

# 生成静态文件
#npm run build

# 进入生成的文件夹
#cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
#git push -f git@github.com:zhouyunfu111/zhouyunfu111.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:zhouyunfu111/zhouyunfu111.github.io.git master:gh-pages

#cd -
