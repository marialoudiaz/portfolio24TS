// /app/api/sendEmail/route.js ou /pages/api/sendEmail.js pour le système de pages
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { prenom, email, message } = await request.json();

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true, // Utiliser TLS
      auth: {
        user: process.env.SMTP_USER, // Variable d'environnement
        pass: process.env.SMTP_PASS, // Variable d'environnement
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.SMTP_USER,
      subject: `Prise de contact via le formulaire de ${prenom}`,
      text: `Prénom: ${prenom}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email envoyé avec succès' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Erreur lors de l'envoi de l'email" }), { status: 500 });
  }
}
