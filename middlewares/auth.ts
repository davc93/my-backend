import {Request,Response,NextFunction} from 'express'
import {getAuth} from 'firebase-admin/auth'

export function checkAuth(req:Request, res:Response, next:NextFunction) {
  if (req.headers.authorization) {
      getAuth().verifyIdToken(req.headers.authorization as string)
        .then((decodedToken) => {
          next()
        }).catch((error) => {
          next(error)
        });
    } else {
      next( new Error('No estas autorizado'))
    }
  }