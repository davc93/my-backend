import express from "express";
import { checkAuth } from "../../middlewares/auth";
import { success } from "../../network/response";
import controller from "./index";

const router = express.Router();
router.post("/", checkAuth,async (req, res, next) => {
    
    const response = await controller.upsert(req.body)
    success(req,res,response,200)
        
});
router.get('/',async (req,res,next)=>{

    

    const services = await controller.list()
    res.json(services)
    
    

})
router.get('/:id',async (req,res,next)=>{

    

    const service = await controller.get(req.params.id)
    res.json(service)
    
    

})

export default router;