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

1. 安装 Java SDK 环境
2. 安装 NodeJS 环境
3. 安装 Android SDK 环境(Tools + Android 8.1.0 + Android 6.0)
4. 配置环境变量
5. 安装夜神模拟器
6. 初始化项目并调试

- windows OS(Android)
- mac OS(iOS/Android)

## 搭建项目

```sh
npm i -g react-native-cli
react-native init myapp
adb remount 重新挂载
adb kill-server 启动服务
adb start-server 停止服务
cd myapp && react-native run-android

```

react native项目链接模拟器调试

```sh
react-native start 启动服务
adb connect 127.0.0.1:62001 链接模拟器(62001:夜神模拟器的端口)
react-native run-android 项目运行在模拟器上
```

1. `react-native start` 命令开启RN守护进程
2. 用`adb connect 127.0.0.1:62001`命令链接模拟器
3. `react-native run-adnroid` 将本地app打包成临时抱，传输到模拟器
4. 模拟器安装好临时包，然后请求系统环境中守护进程，获得app内的数据，然后展示出来
5. 点击菜单键 -> Dev Settings -> Debug server host & port for device -> 192.168.1.89:8081

www.expressvpn.com

- 文件：`local.properties`
  - 内容：`sdk.dir=D:\\AndroidSDKLocation`

### adb

> Android debug bridge，用于管理模拟器或真机

- 包括三个部分
  - adb客户端（PC上）
  - adb服务器（PC上）
  - adbd（模拟器或真机上）

adb服务器与所有正在运行的模拟器和真机连接。它通过扫描5555—5585之间的奇数端口来搜索模拟器或真机，一旦发现adb守护进程，就通过此端口进行连接。需要说明的是，每一个模拟器或真机使用一对端口，奇数端口用于adb连接，偶数端口用于控制台连接。

如果模拟器与adb在5555端口连接，则控制台的连接端口将是5554

### Android 命令

使用Android命令的前提条件，一定要将`sdk\tools`目录放到环境变量中。

使用`android -h`获取帮助信息。`android list device`和`adb devices`输出的内容不一致，应该是 android 输出的并不是已经运行的设备，而是其能创建虚拟机的设备列表，使用eclipse创建虚拟机的时候，可以选择的那个列表。另外android命令执行的时间比较长。android命令没有特别去操作，只是在网上看到很多人写的博客中都有android命令，但是自己用的时候却提示不是内部或外部命令。所以将使用android命令的前提写出来。
