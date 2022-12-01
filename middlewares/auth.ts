import {Request,Response,NextFunction} from 'express'
import admin from 'firebase-admin'

export function checkAuth(req:Request, res:Response, next:NextFunction) {
    if (req.headers.authtoken) {
      admin.auth().verifyIdToken(req.headers.authtoken as string)
        .then(() => {
          next()
        }).catch(() => {
          res.status(403).send('Unauthorized')
        });
    } else {
      res.status(403).send('Unauthorized')
    }
  }