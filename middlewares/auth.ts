import {Request,Response,NextFunction} from 'express'
import {getAuth} from 'firebase-admin/auth'

export function checkAuth(req:Request, res:Response, next:NextFunction) {
    if (req.headers.authtoken) {
      getAuth().verifyIdToken(req.headers.authtoken as string)
        .then((decodedToken) => {
          console.log(decodedToken)
          next()
        }).catch(() => {
          res.status(403).send('Unauthorized')
        });
    } else {
      res.status(403).send('Unauthorized')
    }
  }