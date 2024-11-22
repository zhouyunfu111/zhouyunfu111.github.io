#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
# set -e

git pull

git add .

git commit -m '更新'

git push origin gh-pages

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:zhouyunfu111/zhouyunfu111.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:zhouyunfu111/zhouyunfu111.github.io.git master:gh-pages

cd -
