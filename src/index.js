const http = require('http');

const fetchRepositories = require('./functions/repositories');

//create a server object:
http
  .createServer((req, res) => {
    fetchRepositories.handler({}).then((response) => {
      res.write(JSON.stringify(response));
      res.end();
    });
  })
  .listen(8080);
