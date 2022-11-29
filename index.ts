import express from 'express'

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{

    if(Object.keys(req.body).length == 0 ){
        res.json({
            message:'no tiene Cuerpo'
        })
        throw new Error('No tiene cuerpo')
    } else {
        res.json({
            req:req.body,
            message:'respuesta correcta'
        })
    }

})

app.listen(3000,()=>{

    console.log('escuchando en el 3000')
})



