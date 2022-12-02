import {Request,Response,NextFunction} from 'express'
import {getAuth} from 'firebase-admin/auth'

export function checkAuth(req:Request, res:Response, next:NextFunction) {
  if (req.headers.authorization) {
      console.log(req.headers.authorization);
      getAuth().verifyIdToken(req.headers.authorization as string)
        .then((decodedToken) => {
          console.log(decodedToken)
          next()
        }).catch((error) => {
          console.log(error);
          res.status(403).send('Unauthorized')
        });
    } else {
      console.log(req.headers);
      res.status(403).send('Unauthorized')
    }
  }