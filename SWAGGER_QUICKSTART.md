# Quick Start Guide - Swagger UI

## 🚀 Quick Start

### 1. Start the Server

```bash
# Development
npm run dev:server

# Production
npm run build
npm run start:prod
```

### 2. Access the Documentation

Open your browser and navigate to:
```
http://localhost:8080/docs
```

### 3. Test an Endpoint

#### Step by Step:

1. **Authenticate**
   - Click the "Authorize" button at the top of the page
   - Enter your API Key (configured in `AUTHENTICATION_API_KEY`)
   - Click "Authorize" then "Close"

2. **Create an Instance**
   - Expand the "Instance" section
   - Click `POST /instance/create`
   - Click "Try it out"
   - Edit the example JSON:
   ```json
   {
     "instanceName": "test-instance",
     "qrcode": true
   }
   ```
   - Click "Execute"
   - Check the response below

3. **Connect to WhatsApp**
   - Expand `GET /instance/connect/{instanceName}`
   - Click "Try it out"
   - Enter "test-instance" in instanceName
   - Click "Execute"
   - You will receive a QR Code in the response

4. **Send a Text Message**
   - Expand `POST /message/sendText/{instanceName}`
   - Click "Try it out"
   - Enter "test-instance" in instanceName
   - Edit the request body:
   ```json
   {
     "number": "5511999999999",
     "text": "Hello, this is a test message!"
   }
   ```
   - Click "Execute"

## 📋 Main Endpoints

### Instance Management
- `POST /instance/create` - Create new instance
- `GET /instance/connect/{instanceName}` - Connect to WhatsApp
- `GET /instance/connectionState/{instanceName}` - Check connection state
- `GET /instance/fetchInstances` - List all instances
- `DELETE /instance/delete/{instanceName}` - Delete instance

### Message Sending
- `POST /message/sendText/{instanceName}` - Send text
- `POST /message/sendMedia/{instanceName}` - Send media
- `POST /message/sendLocation/{instanceName}` - Send location
- `POST /message/sendContact/{instanceName}` - Send contact
- `POST /message/sendPoll/{instanceName}` - Send poll
- `POST /message/sendList/{instanceName}` - Send interactive list
- `POST /message/sendButtons/{instanceName}` - Send buttons

## 🔑 API Key Configuration

### Via Environment Variable
```bash
# In the .env file
AUTHENTICATION_API_KEY=my-secret-key-123
```

### Using in Swagger
1. Copy your API Key
2. Click "Authorize"
3. Paste in the "Value" field
4. Save and you're ready!

## 💡 Tips

### View Complete Response
- After executing an endpoint, scroll down
- You'll see the HTTP status code
- Response body in JSON
- Response headers

### Copy cURL Code
- After executing, click "Copy as cURL"
- Paste in terminal to test outside the browser

### Download Response
- Click "Download" to save the response
- Useful for large responses or files

### Save Configuration
- Swagger remembers your API Key in the browser
- No need to authenticate after each refresh

## 🐛 Troubleshooting

### "Unauthorized" (401)
- Check if the API Key is correct
- Confirm you authenticated by clicking "Authorize"
- Verify `AUTHENTICATION_API_KEY` is configured

### "Instance not found" (404)
- Create the instance first with `/instance/create`
- Check the instance name (case-sensitive)
- List instances with `/instance/fetchInstances`

### "Bad Request" (400)
- Verify all required fields are filled
- Confirm data format (number with country code, for example)
- See error message for details

### Swagger doesn't load
```bash
# Check if documentation is enabled
SERVER_DISABLE_DOCS=false

# Restart the server
npm run dev:server
```

## 📱 Complete Flow Example

```bash
# 1. Configure the API Key
export AUTHENTICATION_API_KEY=my-key-123

# 2. Start the server
npm run dev:server

# 3. Access http://localhost:8080/docs

# 4. Authenticate with the API Key

# 5. Create an instance
POST /instance/create
{
  "instanceName": "production",
  "qrcode": true
}

# 6. Connect to WhatsApp
GET /instance/connect/production
# Scan the QR Code with WhatsApp

# 7. Check the connection
GET /instance/connectionState/production

# 8. Send a message
POST /message/sendText/production
{
  "number": "5511999999999",
  "text": "Hello! API working!"
}
```

## 🌐 Access from Another Device

If you want to access Swagger from another computer/mobile:

```bash
# Configure SERVER_URL with your local IP
SERVER_URL=http://192.168.1.100:8080

# Or use a domain if you have one
SERVER_URL=https://api.yourdomain.com
```

Then access: `http://192.168.1.100:8080/docs`

## 📚 Next Steps

- Explore all endpoints in the documentation
- Read [SWAGGER.md](./SWAGGER.md) for advanced information
- Visit [doc.evolution-api.com](https://doc.evolution-api.com) for complete guides
- Download the [Postman Collection](https://evolution-api.com/postman)

## 🤝 Support

- Discord: https://evolution-api.com/discord
- WhatsApp: https://evolution-api.com/whatsapp
- GitHub Issues: https://github.com/EvolutionAPI/evolution-api/issues
