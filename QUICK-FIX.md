# 🔧 Quick Fix for API 404 Error

## ❌ **Problem:**

`POST http://localhost:3000/api/contact 404 (Not Found)`

## ✅ **Solution:**

The issue is that Vite doesn't handle API routes. I've set up a proper development environment.

## 🚀 **How to Fix:**

### **Option 1: Use the Setup Script (Recommended)**

```bash
# Windows
start-dev.bat

# Linux/Mac
./start-dev.sh
```

### **Option 2: Manual Setup**

```bash
# 1. Install dependencies
npm install

# 2. Start both servers
npm run dev
```

This will start:

- **Frontend:** http://localhost:3000 (Vite)
- **API Server:** http://localhost:3001 (Express with API routes)

## 🔄 **How It Works Now:**

1. **Frontend** runs on port 3000
2. **API Server** runs on port 3001
3. **Vite proxy** forwards `/api/*` requests to port 3001
4. **Your contact form** will now work! ✅

## 🧪 **Test It:**

```bash
# Test the API directly
curl http://localhost:3001/api/health

# Test with Mailjet
npm run test:mailjet
```

## 📧 **Email Flow:**

```
Frontend (3000) → Vite Proxy → API Server (3001) → Mailjet → Your Email
```

## 🎉 **Result:**

- ✅ No more 404 errors
- ✅ Contact form works
- ✅ Emails sent via Mailjet
- ✅ Professional development setup

**Try it now!** 🚀
