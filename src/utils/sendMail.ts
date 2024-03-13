import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASSWORD,
  },
});

export function sendMail(
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
): void {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: "Nova solicitação de contato",
    html: `<h1>${subject}</h1>
           <p><strong>Nome:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Telefone:</strong> ${phone}</p>
           <p><strong>Mensagem:</strong> ${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erro ao enviar email:", error);
    } else {
      console.log("Email enviado com sucesso:", info.response);
    }
  });
}
