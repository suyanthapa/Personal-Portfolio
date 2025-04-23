
import express from 'express';
import connectToDB from './connect';
import portfolioRouter from './Routes/mainRoute';
import env from './Ienv';


// import mainRoutes from './routes/mainRoutes';




const server = express();

const port = env.PORT;

// Middleware to parse JSON bodies
server.use(express.json());

server.use(express.urlencoded({ limit: '10mb', extended: true })); // Parse URL-encoded payloads


// Connect to the database
connectToDB()
  .then((connectMessage) => {
    console.log(connectMessage);

    // Routes
    server.use(portfolioRouter);

    // Start the server
    server.listen(port, () => {
      console.log('Server Started on Port: ' + port);
    });
  })
  .catch((e) => {
    console.error('Database connection error:', e);
  });

export default server;