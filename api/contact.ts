import type { IncomingMessage, ServerResponse } from 'http';

export default async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  // Parse body if needed
  let bodyData = req.body;
  if (!bodyData) {
    const buffers: Buffer[] = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const rawBody = Buffer.concat(buffers).toString();
    try {
      bodyData = JSON.parse(rawBody);
    } catch {
      bodyData = {};
    }
  }

  const { firstName, lastName, email, subject, message } = bodyData || {};

  if (!firstName || !email || !message) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Missing required fields (First Name, Email, Message)' }));
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn('RESEND_API_KEY is not configured in environment variables.');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        success: true,
        message: 'Enquiry received! (Dev mode: add RESEND_API_KEY to environment variables to send live emails)',
      })
    );
    return;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Little\'s Heaven Enquiry <onboarding@resend.dev>',
        to: ['contact@littlesheaven.edu.in'],
        reply_to: email,
        subject: `New Preschool Enquiry: ${subject || 'General Inquiry'} - ${firstName} ${lastName || ''}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
            <h2 style="color: #0284c7; margin-top: 0; margin-bottom: 16px;">New Website Parent Enquiry</h2>
            <p style="margin: 6px 0; color: #334155;"><strong>Parent Name:</strong> ${firstName} ${lastName || ''}</p>
            <p style="margin: 6px 0; color: #334155;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 6px 0; color: #334155;"><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="margin-bottom: 8px; color: #334155;"><strong>Message:</strong></p>
            <div style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 12px; color: #1e293b; border: 1px solid #f1f5f9;">${message}</div>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API Error:', data);
      res.statusCode = response.status;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: data.message || 'Failed to send email via Resend' }));
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true, id: data.id }));
  } catch (error: any) {
    console.error('Error sending email via Resend:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: error.message || 'Internal server error' }));
  }
}
