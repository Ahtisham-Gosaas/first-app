// function say_hello(name){
//   console.log('Hello ' + name);
// }
// say_hello('Ahtisham');

// global.console.log('window is replaced by global')

// var msg = 'hello'
// console.log(global.msg)
// //Gives undefined error

// console.log(module)

// const logger = require('./logger');
// logger.log_function('ahtisham');

// const path = require('path');
// var obj = path.parse(__filename);
// console.log(obj);

// const os = require('os');
// var mem = os.freemem();
// console.log(`Free Memory: ${mem}`);
// //ES6 syntax

// const fs = require('fs');
// const files = fs.readdir('.', function(err, files){
//   if (err) console.log('Error ', err);
//   else console.log('Success ', files)
// });

// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// emitter.on('message_logged', (e) => {
//   console.log('message_logged event raised', e);
// });
// emitter.emit('message_logged', { id: 1, url: 'some_url' });

// const Logger = require('./logger');
// const obj = new Logger();
// obj.on('message_logged', (e) => {
//   console.log('message_logged event raised', e);
// });
// obj.log('ahtisham');

// const http = require('http');
// const server = http.createServer();
// server.on('connection', (socket) => {
//   console.log('New connection...');
// });
// server.listen(3000);
// console.log('Listening on port 3000...');

const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/'){
    console.log('Hello World');
    res.write('Hello World');
    res.end();
  }
  if (req.url === '/api/courses'){
    console.log(JSON.stringify([1, 2, 3]));
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
server.listen(3000);
console.log('Listening on port 3000...');