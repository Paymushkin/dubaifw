import { Resend } from 'resend';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'paymushkinandrew@gmail.com', // Изменили на верифицированный email
      subject: 'New Contact Form Message',
      html: `
        <h2>New message from contact form</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : 'Failed to send email'
    });
  }
}); 