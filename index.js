const port = process.env.PORT || 5000;

const server = require('./server');

const projectRouter = require('./routers/projectRouter');
const resourceRouter = require('./routers/resourceRouter');
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});