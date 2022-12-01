require("dotenv").config();
import { applicationDefault, initializeApp, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
const initFirebase = () => {
  initializeApp({
    credential: applicationDefault()
})  
}

export {
  initFirebase
}


