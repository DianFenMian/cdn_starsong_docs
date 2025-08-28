# 🤝 贡献指南

欢迎为星歌计划官方文档站做出贡献！我们非常感谢每一位贡献者的努力。

## 📋 目录

- [🎯 贡献类型](#-贡献类型)
- [🚀 快速开始](#-快速开始)
- [📝 提交规范](#-提交规范)
- [🔍 代码审查](#-代码审查)
- [📧 获得帮助](#-获得帮助)

## 🎯 贡献类型

我们欢迎以下类型的贡献：

### 📖 文档内容
- 添加新的游戏指南和教程
- 更新过时的信息
- 修复错别字和语法错误
- 改进内容的清晰度和准确性

### 🐛 问题报告
- 报告文档中的错误信息
- 建议内容改进
- 反馈用户体验问题

### 💡 功能建议
- 提议新的文档章节
- 建议网站功能改进
- 提出用户体验优化建议

### 🎨 设计与样式
- 改进网站视觉设计
- 优化移动端体验
- 提升可访问性

## 🚀 快速开始

### 前置要求

确保你的开发环境已安装：
- [Node.js](https://nodejs.org/) (v14 或更高版本)
- [Git](https://git-scm.com/)
- 代码编辑器（推荐 VS Code）

### 设置开发环境

1. **Fork 仓库**
   
   点击仓库页面右上角的 "Fork" 按钮

2. **克隆你的 Fork**
   
   ```bash
   git clone https://github.com/YOUR_USERNAME/cdn_starsong_docs.git
   cd cdn_starsong_docs
   ```

3. **添加上游仓库**
   
   ```bash
   git remote add upstream https://github.com/DianFenMian/cdn_starsong_docs.git
   ```

4. **安装依赖**
   
   ```bash
   npm install
   ```

5. **启动开发服务器**
   
   ```bash
   npm run dev
   ```
   
   访问 `http://localhost:5173` 查看本地开发网站

### 工作流程

1. **创建新分支**
   
   ```bash
   git checkout -b feature/your-feature-name
   ```
   
   分支命名规范：
   - `feature/新功能名称` - 新功能或内容
   - `fix/修复内容` - 修复问题
   - `docs/文档更新` - 文档更新
   - `style/样式调整` - 样式相关修改

2. **进行修改**
   
   - 遵循[写作规范](docs/STYLE_GUIDE.md)
   - 遵循[内容准则](docs/CONTENT_GUIDELINES.md)
   - 参考[术语表](docs/GLOSSARY.md)

3. **测试修改**
   
   ```bash
   # 本地预览
   npm run dev
   
   # 构建测试
   npm run build
   ```

4. **提交更改**
   
   ```bash
   git add .
   git commit -m "类型: 简洁的提交信息"
   ```

5. **推送分支**
   
   ```bash
   git push origin feature/your-feature-name
   ```

6. **创建 Pull Request**
   
   - 到你的 Fork 页面
   - 点击 "Compare & pull request"
   - 填写 PR 模板信息

## 📝 提交规范

### 提交信息格式

```
类型: 简洁的描述信息

详细的描述信息（可选）

关闭的 Issue（如果有）
```

### 提交类型

- `feat`: 新功能或新内容
- `fix`: 修复问题
- `docs`: 文档更新
- `style`: 样式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

### 示例

```bash
git commit -m "feat: 添加新手指南章节"
git commit -m "fix: 修复服务器规则中的错误信息"
git commit -m "docs: 更新贡献指南"
git commit -m "style: 优化移动端显示效果"
```

## 📂 文件组织

### 目录结构

遵循项目的[文档结构规范](docs/CONTENT_GUIDELINES.md#文档结构)：

```
pages/
├── docs/              # 服务器相关文档
│   ├── rules.md       # 服务器规则
│   ├── commands.md    # 指令说明
│   └── plugins.md     # 插件介绍
├── guides/            # 玩家指南
│   ├── beginner/      # 新手指南
│   ├── advanced/      # 进阶技巧
│   └── building/      # 建筑教程
└── updates/           # 更新日志
    └── changelog.md
```

### 文件命名

- 使用小写字母和连字符
- 使用有意义的文件名
- 示例：`beginner-guide.md`、`server-rules.md`

## 🔍 内容要求

### 质量标准

1. **准确性**
   - 确保所有信息与服务器实际情况一致
   - 数据和指令必须经过验证
   - 定期更新过时信息

2. **清晰性**
   - 使用简洁明了的语言
   - 结构清晰，逻辑连贯
   - 适当使用标题和列表

3. **完整性**
   - 提供足够的背景信息
   - 包含必要的示例和说明
   - 添加相关链接和参考

### 写作风格

- 使用统一的[术语表](docs/GLOSSARY.md)
- 遵循[写作规范](docs/STYLE_GUIDE.md)
- 保持友好和专业的语调
- 面向目标受众（新手/进阶玩家）

## 🔍 代码审查

### 审查流程

1. **自动检查**
   - 代码格式检查
   - 链接有效性验证
   - 构建测试

2. **人工审查**
   - 内容准确性
   - 写作质量
   - 用户体验

### 审查标准

- ✅ 内容准确无误
- ✅ 格式符合规范
- ✅ 无拼写和语法错误
- ✅ 链接正常工作
- ✅ 移动端显示正常

## 🚫 禁止事项

- 不要添加与服务器无关的内容
- 不要复制其他网站的内容
- 不要使用不当语言或内容
- 不要修改核心配置文件（除非你知道自己在做什么）
- 不要添加未经验证的信息

## 📧 获得帮助

如果你在贡献过程中遇到问题，可以通过以下方式获得帮助：

- 📝 [提交 Issue](https://github.com/DianFenMian/cdn_starsong_docs/issues/new)
- 💬 在已有的 Issue 或 PR 中评论
- 📧 联系维护者团队
- 🎮 加入服务器 QQ 群：123456789

## 🎉 感谢

感谢所有为星歌计划文档站做出贡献的朋友们！你们的每一份努力都让我们的社区变得更好。

### 贡献者名单

我们会在这里记录所有贡献者的信息。如果你希望被列入其中，请在 PR 中提及。

---

<div align="center">
  <p>再次感谢你对星歌计划的支持！ 🌟</p>
  <p>Happy Contributing! 🚀</p>
</div>