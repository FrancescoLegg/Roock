const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    titole: "Roock",
    width: 860,
    height: 650,
    icon: "../assets/logo.ico",
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
      },
  })

  win.loadFile("./pages/index.html");
}

app.whenReady().then(() => {
  createWindow()
})
