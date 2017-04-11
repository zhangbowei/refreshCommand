## 默认delay = 24小时.
```
updateAllConf --path=/Users/ZhangBowei/.zsh/data
```
## 自定义
```
updateAllConf --path=/Users/ZhangBowei/.zsh/data --delay=10
```

##path说明

path指向`已经存在`的文件夹, 文件夹中是需要执行文件的`软链接`;

> 例如, 下述文件的软链接：

```
#!/usr/bin/env node
const updatelaodhost = require('../src/index.js');

updatelaodhost();
```

