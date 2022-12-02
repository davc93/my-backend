import express from "express";
import { checkAuth } from "../../middlewares/auth";
import controller from "./index";

const router = express.Router();
router.post("/", checkAuth,async (req, res, next) => {
    try {
        const response = await controller.upsert(req)
        res.json(response)
        
    } catch (error) {
        next(error)
    }
});


export default router;