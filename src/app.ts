
import express from 'express'
import ticketRoutes from './routes/routes';

const app = express()

app.use(express.json()); // application/json

app.use((req, res, next) => {  // avoid CORS error
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');  
  next();
});

app.use((error: any, req: any, res: any, next: any) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});



app.use(ticketRoutes)


export default app;