import express, { Request, Response, ErrorRequestHandler, NextFunction } from "express";
import cors from 'cors'
const app = express();
import { config } from "./config";
import { initFirebase } from "./firebase";
import services from './components/services/network'
import users from './components/users/network'
import projects from './components/projects/network'
import { errors } from "./network/errors";
initFirebase();
app.use(cors())
app.use(express.json());
app.use('/api/services',services)
app.use('/api/projects',projects)
app.use('/api/users',users)
app.use(errors);
app.listen(config.PORT, () => {
  console.log(`escuchando en el ${config.PORT}`);
});
