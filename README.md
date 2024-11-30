# EXPO_APP_TEMP

## 项目简介
这是一个基于React Native和Expo开发的应用程序。

## 技术栈
- React Native
- Expo
- TypeScript
- Redux Toolkit
- React Navigation
- Axios
- React Native BLE Manager (蓝牙通信)

## 功能特点
- 数据传输
- 用户友好的界面
- 安全的API调用
- 响应式设计

## 项目结构
```
src/
├── assets/         # 静态资源文件
├── components/     # 可复用组件
├── constants/      # 常量定义
├── hooks/          # 自定义Hooks
├── navigation/     # 导航配置
├── screens/        # 页面组件
├── services/       # API服务和蓝牙通信服务
├── store/          # Redux状态管理
├── types/          # TypeScript类型定义
└── utils/          # 工具函数
```

## 开始使用

### 环境要求
- Node.js (推荐使用最新的LTS版本)
- npm 或 yarn
- iOS开发需要Mac电脑和Xcode
- Android开发需要Android Studio和相关SDK
- 支持蓝牙通信的设备

### 安装步骤
1. 克隆项目
```bash
git clone [项目地址]
cd temp_app
```

2. 安装依赖
```bash
npm install
# 或
yarn install
```

3. 启动开发服务器
```bash
npm start
# 或
yarn start
```

### 运行应用
- iOS:
```bash
npm run ios
# 或
yarn ios
```

- Android:
```bash
npm run android
# 或
yarn android
```

### 蓝牙权限配置
- Android需要在AndroidManifest.xml中添加以下权限：
  - BLUETOOTH
  - BLUETOOTH_ADMIN
  - ACCESS_FINE_LOCATION（用于蓝牙扫描）
- iOS需要在Info.plist中添加以下权限：
  - NSBluetoothAlwaysUsageDescription
  - NSBluetoothPeripheralUsageDescription

## 开发指南

### 代码规范
项目使用ESLint和Prettier来保证代码质量和统一的格式化：
- 运行代码检查：`npm run lint`
- 格式化代码：`npm run format`
- 类型检查：`npm run type-check`

### 项目脚本
- `start`: 启动Expo开发服务器
- `android`: 运行Android应用
- `ios`: 运行iOS应用
- `web`: 启动Web版本
- `lint`: 运行ESLint检查
- `format`: 使用Prettier格式化代码
- `type-check`: 运行TypeScript类型检查

## 贡献指南
1. Fork项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request
