const http = require('http');

const { routing } = require('./routing');


const server = http.createServer((req, res) => {
    routing(req, res);

});

const PORT = process.env.PORT || 4444;

server.listen(PORT, () => console.log(`Server listening on http://127.0.0.1:${PORT}`));