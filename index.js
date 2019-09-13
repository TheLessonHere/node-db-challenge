const port = process.env.PORT || 5000;

const server = require('./server');

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});