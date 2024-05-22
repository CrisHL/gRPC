const grpc = require('@grpc/grpc-js');

function initializeServer(service, implementation) {
    const server = new grpc.Server();
    server.addService(service, implementation);
    return server;
}

function bindServer(server, port) {
    server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (err, actualPort) => {
        if (err) {
            console.error('Error al enlazar el servidor gRPC:', err);
            return;
        }
        const address = `http://${process.env.RENDER_EXTERNAL_HOSTNAME || 'localhost'}:${actualPort}`;
        console.log('Servidor gRPC iniciado en:', address);
        server.start();
    });
}

module.exports = { initializeServer, bindServer };
