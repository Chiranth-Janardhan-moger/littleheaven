import express, { Request, Response } from 'express';
import { expressMiddleware as sqlguard } from 'sqlguardjs';
import { shield } from '@chiranthmoger/fortifyjs';

const app = express();
const PORT = process.env.PORT || 3001;

// Parse JSON and URL-encoded bodies
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

// 1. Apply FortifyJS Global Security Shield (Headers, Rate-Limiting, Bot-Detection)
app.use(
  shield('medium', {
    headers: true,
    rateLimit: {
      max: 100, // Limit each IP to 100 requests per 15 minutes
      windowMs: 15 * 60 * 1000
    },
    cors: {
      origin: true,
      credentials: true
    }
  })
);

// 2. Apply SqlGuardJS Web Application Firewall (WAF) for SQLi, XSS, and NoSQL sanitization
app.use(
  '/api',
  sqlguard({
    level: 'balanced',
    mode: 'block',
    scanBody: true,
    scanQuery: true,
    scanParams: true,
    blockStatus: 400,
    logAttacks: (event) => {
      console.warn('[SQLGuardJS Threat Intercepted]:', event);
    }
  })
);

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    security: {
      fortifyjs: 'active',
      sqlguardjs: 'active'
    },
    timestamp: new Date().toISOString()
  });
});

// Admissions Enquiry API endpoint
app.post('/api/enquire', (req: Request, res: Response) => {
  const { parentName, email, phone, program, message } = req.body || {};

  if (!parentName || !email) {
    return res.status(400).json({
      success: false,
      error: 'Parent name and email are required.'
    });
  }

  console.log('[Admissions Enquiry Received]:', { parentName, email, phone, program });

  return res.json({
    success: true,
    message: 'Thank you for your enquiry! Our admissions team will contact you shortly.',
    data: { parentName, email, program }
  });
});

// Campus Tour Booking API endpoint
app.post('/api/tour-booking', (req: Request, res: Response) => {
  const { parentName, phone, preferredDate, preferredTimeSlot } = req.body || {};

  if (!parentName || !phone || !preferredDate) {
    return res.status(400).json({
      success: false,
      error: 'Parent name, phone number, and preferred date are required.'
    });
  }

  console.log('[Campus Tour Booked]:', { parentName, phone, preferredDate, preferredTimeSlot });

  return res.json({
    success: true,
    message: 'Campus tour successfully scheduled! We look forward to welcoming you.',
    booking: { parentName, preferredDate, preferredTimeSlot }
  });
});

app.listen(PORT, () => {
  console.log(`🔒 Security API Server running on http://localhost:${PORT}`);
});
