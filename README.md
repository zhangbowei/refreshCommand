

## updateAllConf简介

作用：自定义周期 更新 指定文件夹 中的可执行命令。

意义：解决需要频繁手动调用执行的更新类型命令。

## 配置说明

注：参数通过yargs.js解析。

```
updateAllConf --path=/???/??? --delay=1000
```

## 参数含义

### path

`必填`：path指向`已经存在`的文件夹, 文件夹是可执行文件。

`注`：path必须是`绝对路径`。

### delay

`选填`：delay表示循环周期即间隔时间，默认值1000 * 60 * 60 * 24(即24小时)。

## 使用示例

1. 首先将可执行文件软/硬链接或复制进某个文件夹(e.g 路径为`/Users/ZhangBowei/.zsh/data`)

![](https://ww3.sinaimg.cn/large/006tNc79ly1ffg4gawg4xj30gs02kwel.jpg)

![](https://ww2.sinaimg.cn/large/006tNc79ly1ffg4hvxdu5j30vu02ut8x.jpg)

2. 运行命令(e.g `updateAllConf --path=/Users/ZhangBowei/.zsh/data --delay=10`)

![](https://ww3.sinaimg.cn/large/006tNc79ly1ffg4joz0wuj30jq09i758.jpg)

3. 文件夹中的命令执行完毕

