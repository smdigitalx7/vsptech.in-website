# 🚀 VSP Technologies - Setup Guide

## ✅ Your Mailjet Credentials Are Ready!

I can see you've added your Mailjet credentials to `env.example`. Now let's get everything working!

## 📋 Quick Setup Steps

### 1. **Environment Variables Setup**

Your credentials are already in `env.example`:

```env
MJ_API_KEY=b5f26afa422abb05c1c0c84cfc0882b7
MJ_API_SECRET=84b0f9bb3d4114799405a40c5a1816e7
CONTACT_EMAIL=contact@vsptech.in
FROM_EMAIL=contact@vsptech.in
```

### 2. **Start Development Server**

```bash
npm run dev
```

### 3. **Test Mailjet Integration**

In a new terminal:

```bash
npm run test:mailjet
```

## 🧪 Testing Your Setup

### **Test 1: Health Check**

```bash
curl http://localhost:3000/api/health
```

**Expected Response:**

```json
{
  "status": "ok",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "environment": "development"
}
```

### **Test 2: Contact Form (with Mailjet)**

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "subject": "Test Message",
    "message": "This is a test message to verify Mailjet integration."
  }'
```

**Expected Response:**

```json
{
  "success": true,
  "message": "Thank you for your message. We'll get back to you soon!"
}
```

## 📧 Email Flow

1. **User submits form** → Frontend sends POST to `/api/contact`
2. **API validates data** → Zod schema validation
3. **Mailjet sends email** → Professional HTML email to `contact@vsptech.in`
4. **User gets confirmation** → Success message displayed

## 🔧 Troubleshooting

### **Issue: 500 Internal Server Error**

**Solution:** Check if environment variables are loaded:

```bash
# Check if .env.local exists
ls -la .env.local

# If not, create it:
cp env.example .env.local
```

### **Issue: Email not sending**

**Solution:** Check Mailjet credentials:

1. Go to [Mailjet Dashboard](https://app.mailjet.com/account/api_keys)
2. Verify your API Key and Secret
3. Check if sender email is verified

### **Issue: CORS errors**

**Solution:** The API already includes CORS headers, but if you still get errors:

```javascript
// In your frontend fetch request:
fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
```

## 🚀 Production Deployment

### **For Vercel:**

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add these variables:
   - `MJ_API_KEY` = `b5f26afa422abb05c1c0c84cfc0882b7`
   - `MJ_API_SECRET` = `84b0f9bb3d4114799405a40c5a1816e7`
   - `CONTACT_EMAIL` = `contact@vsptech.in`
   - `FROM_EMAIL` = `contact@vsptech.in`
   - `NODE_ENV` = `production`

### **Deploy:**

```bash
vercel --prod
```

## 📊 Monitoring

### **Check Email Delivery:**

1. Go to [Mailjet Dashboard](https://app.mailjet.com/)
2. Navigate to "Statistics" → "Email Activity"
3. Check delivery status of test emails

### **Check API Logs:**

- **Local:** Check terminal where `npm run dev` is running
- **Vercel:** Go to Vercel Dashboard → Functions → View Logs

## ✅ Success Indicators

You'll know everything is working when:

- ✅ Health endpoint returns 200 OK
- ✅ Contact form returns success message
- ✅ Email appears in `contact@vsptech.in` inbox
- ✅ Email has professional HTML formatting
- ✅ Reply-to is set to user's email

## 🎉 You're Ready!

Your VSP Technologies website is now fully configured with:

- ✅ **Static React frontend**
- ✅ **Vercel serverless API**
- ✅ **Mailjet email integration**
- ✅ **Professional email templates**
- ✅ **Error handling & validation**

**Next step:** Deploy to Vercel and go live! 🚀
