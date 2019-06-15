# React Native

## What React Native

> Facebook 2015年4月开源的跨平台移动应用开发框架，是 UI 框架 React 在原生移动应用平台的衍生产物，支持 iOS和Android。

## React Native 特性

- JavaScript
- 跨平台 - Learn once, write anywhere
- 开发成本低
- 开发周期短
- 开发灵活度高
- 性能相对好
- 应用局限最小

## 环境搭建

1. 安装Java SDK环境
2. 安装NodeJS环境
3. 安装Android SDK环境
4. 配置环境变量
5. 安装夜神模拟器
6. 初始化项目并调试

- windows OS(Android)
- mac OS(iOS/Android)

## 搭建项目

```sh
npm i -g react-native-cli
react-native init myapp
cd myapp && react-native run-android
adb connect 127.0.0.1:62001 (62001:夜神模拟器的端口)
```