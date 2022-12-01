require("dotenv").config();
import { applicationDefault, initializeApp} from 'firebase-admin/app'
import { getMessaging } from 'firebase-admin/messaging'
const initFirebase = () => {
  initializeApp({
    credential: applicationDefault()
})  
}

export {
  initFirebase
}


