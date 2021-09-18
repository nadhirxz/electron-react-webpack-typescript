import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import dotenv from 'dotenv';

dotenv.config();

const createWindow = () => {
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		}
	});
	win.loadURL(isDev ? 'http://localhost:3000' : `file://${app.getAppPath()}/index.html`,);
}

app.on('ready', createWindow);