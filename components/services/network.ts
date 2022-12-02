import express from "express";
import { checkAuth } from "../../middlewares/auth";
import controller from "./index";

const router = express.Router();
router.post("/", checkAuth,async (req, res, next) => {
    try {
        const response = await controller.upsert(req.body)
        res.json(response)
        
    } catch (error) {
        next(error)
    }
});
router.get('/',async (req,res,next)=>{

    try {
        console.log('paso por aqui');
        // const response = await controller.list()
        // res.json(response)
    } catch {
        next
    }

})


export default router;