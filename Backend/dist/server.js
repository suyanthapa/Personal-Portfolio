"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = __importDefault(require("./connect"));
const mainRoute_1 = __importDefault(require("./Routes/mainRoute"));
const Ienv_1 = __importDefault(require("./Ienv"));
// import mainRoutes from './routes/mainRoutes';
const server = (0, express_1.default)();
const port = Ienv_1.default.PORT;
// Middleware to parse JSON bodies
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ limit: '10mb', extended: true })); // Parse URL-encoded payloads
// Connect to the database
(0, connect_1.default)()
    .then((connectMessage) => {
    console.log(connectMessage);
    // Routes
    server.use(mainRoute_1.default);
    // Start the server
    server.listen(port, () => {
        console.log('Server Started on Port: ' + port);
    });
})
    .catch((e) => {
    console.error('Database connection error:', e);
});
exports.default = server;
