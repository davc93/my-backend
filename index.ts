import express from 'express'
const app = express()
import {applicationDefault, initializeApp} from 'firebase-admin/app'
import serviceAccount from './firebase/serviceAccountKey.json'

initializeApp({
    credential:applicationDefault()
})

app.use(express.json())
app.listen(3000,()=>{

    console.log('escuchando en el 3000')
})


