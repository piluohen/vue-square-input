## 打包发布命令

```BASH
# 切换分支到gh_pages

# 打包
npm run build

# 强制添加dist文件夹，因为.gitignore文件中定义了忽略该文件
git add -f dist

# 提交到本地暂存区
git commit -m '部署'

# 部署dist目录下的代码

git subtree push --prefix dist origin gh-pages
```
