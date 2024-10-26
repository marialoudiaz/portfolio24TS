// /app/api/sendEmail/route.js (ou /pages/api/sendEmail.js pour le système de pages)
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { prenom, email, message } = await request.json();

    // Configurer le transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.your-email-provider.com', // Ex. smtp.gmail.com pour Gmail
      port: 587,
      secure: false, // Utiliser TLS
      auth: {
        user: process.env.SMTP_USER, // Défini dans les variables d'environnement
        pass: process.env.SMTP_PASS, // Défini dans les variables d'environnement
      },
    });

    const mailOptions = {
      from: email,
      to: 'your-email@example.com',
      subject: `Message de ${prenom}`,
      text: message,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email envoyé avec succès' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Erreur lors de l\'envoi de l\'email' }), { status: 500 });
  }
}
