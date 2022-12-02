import express, { Request, Response, ErrorRequestHandler, NextFunction } from "express";
import cors from 'cors'
const app = express();
import { config } from "./config";
import { initFirebase } from "./firebase";
import {getAuth} from 'firebase-admin/auth'
import services from './components/services/network'
import users from './components/users/network'
import projects from './components/projects/network'
import { errors } from "./network/errors";
initFirebase();
// getAuth().getUserByEmail('davc93@gmail.com').then((value)=>{
//   console.log(value);
//   getAuth().id
//   getAuth().createCustomToken(value.uid).then((response)=>console.log(response))
// })

app.use(cors())
app.use(express.json());

app.use('/api/services',services)
app.use('/api/projects',projects)
app.use('/api/users',users)
app.use(errors);
app.listen(config.PORT, () => {
  console.log(`escuchando en el ${config.PORT}`);
});
