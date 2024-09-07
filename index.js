//note
//i stole the backedn from sunset v1
import express from 'express';
import http from 'node:http';
import cors from 'cors';
import path from "path";
import { hostname } from "node:os"
import { createBareServer } from '@tomphttp/bare-server-node';

const server = http.createServer();
const app = express(server);
const __dirname = process.cwd();
const PORT = 8080;
//bear server
const bare = createBareServer("/bare/");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cors());


app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/public/index.html'));
});

server.on("request", (req, res) => {
	if (bare.shouldRoute(req)) {
		bare.routeRequest(req, res);
	} else {
		app(req, res);
	}
});

server.on("upgrade", (req, socket, head) => {
    if (bare.shouldRoute(req)) {
		bare.routeUpgrade(req, socket, head);
	} else {
		socket.end();
	}
});

server.on('listening', () => {
    const address = server.address();
    
    console.log("uhh im supposed to comment on this???")
    console.log("Listening on:");
    console.log(`\thttp://localhost:${address.port}`);
    console.log(`\thttp://${hostname()}:${address.port}`);
    console.log(
        `\thttp://${address.family === "IPv6" ? `[${address.address}]` : address.address
        }:${address.port}`
    );
    console.log("sunset v2 > sunset v1 frfr")
})

server.listen({ port: PORT, })

// SIGMA SHUTDOWN
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
    console.log("SIGTERM signal received: closing HTTP server");
    server.close();
    process.exit(0);
}