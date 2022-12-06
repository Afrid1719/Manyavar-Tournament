require('dotenv').config();
const http = require('http');
const app = require('./app');

const { mongoConnect } = require('./utils/mongo');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    try {
        await mongoConnect();
    } catch(e) {
        console.log(e);
    }
    
    server.listen(PORT, () => {
        console.log(`Server listening on port: ${PORT}`);
    })

    
}

startServer();