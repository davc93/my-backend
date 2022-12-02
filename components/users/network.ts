import express from "express";
import { checkAuth } from "../../middlewares/auth";
import { success } from "../../network/response";
import controller from "./index";


const router = express.Router();
router.get('/',checkAuth, async (req,res,next) => {
    success(req,res,{} as string,200)
    
    
})
router.post("/",checkAuth, async (req, res, next) => {
    try {
        const response = await controller.upsert(req.body)
        res.json(response)
        
    } catch (error) {
        next(error)
    }
});

export default router;
