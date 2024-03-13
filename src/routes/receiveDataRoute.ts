import express from "express";
import { Request, Response } from "express";
import { receiveDataController } from "../controllers/receiveDataController";

const router = express.Router();

router.post("/receive-data", (req: Request, res: Response) => {
  receiveDataController.receiveData(req, res);
});

export default router;
