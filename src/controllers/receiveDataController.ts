import { Request, Response } from "express";
import { sendMail } from "../utils/sendMail";

const receiveDataController = {
  receiveData(req: Request, res: Response) {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).send("Todos os campos são obrigatórios.");
    }

    sendMail(name, email, phone, subject, message);

    return res.status(200).send("Dados recebidos e e-mail enviado.");
  },
};

export { receiveDataController };
