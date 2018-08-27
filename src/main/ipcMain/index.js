// 接收渲染进程广播的数据执行最小化 最大化  关闭的操作

var {ipcMain, BrowserWindow} = require('electron')

// 获取当前的窗口对象   BrowserWindow.getFocusedWindow();

var mainWindow = BrowserWindow.getFocusedWindow()

ipcMain.on('min', () => {
  mainWindow.minimize()
})

ipcMain.on('max', () => {
  if (mainWindow.isMaximized()) {
    mainWindow.restore()
  } else {
    mainWindow.maximize()
  }
})

ipcMain.on('close', () => {
  mainWindow.close()
})
