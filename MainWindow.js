const { BrowserWindow } = require('electron') 

class MainWindow extends BrowserWindow {
    constructor(file, isDev) {
        super({
            title: 'Sys track',
            width: isDev ? 900 : 355,
            height: 600,
            icon: './assets/icons/icon.png',
            resizable: isDev ? true : false,
            show: false,
            opacity: 0.9,
            webPreferences: {
              nodeIntegration: true,
            },
          })

          this.loadFile(file)

          if (isDev) {
            this.webContents.openDevTools()
          }
    }
}

module.exports = MainWindow