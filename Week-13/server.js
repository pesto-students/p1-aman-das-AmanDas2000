import chalk from 'chalk';
import http from 'http';
import app from './app.js';
import { HOST, PORT } from './env.js';

const server = http.Server(app);

server.listen(Number(PORT), HOST, () => {
  console.log(chalk.hex('#00FFFF')('🔥 App: Bootstrap Succeeded. ✔️'));
  console.log(chalk.hex('#00FFFF')(`🔥 Host: http://${HOST}:${PORT}/. ✔️`));
});



export default server;