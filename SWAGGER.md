# Evolution API - Swagger Documentation

This document describes how to use and configure the Swagger documentation for Evolution API.

## Accessing the Documentation

The Swagger documentation is available at:
```
http://localhost:8080/docs
```

Or replace `localhost:8080` with your server URL configured in `SERVER_URL`.

## Configuration

### Enable/Disable Documentation

To control whether Swagger documentation is available, use the environment variable:

```bash
# Disable documentation (recommended for production)
SERVER_DISABLE_DOCS=true

# Enable documentation (development)
SERVER_DISABLE_DOCS=false
```

**Security Recommendation**: In production environments, it is recommended to disable public documentation or protect it with additional authentication.

## Documentation Features

The Swagger documentation includes:

- ✅ All API endpoints organized by categories
- ✅ Request and response schemas
- ✅ Usage examples for each endpoint
- ✅ API Key authentication
- ✅ Interactive interface to test endpoints
- ✅ Complete data models

## Endpoint Categories

### Instance
- Create, connect, restart, and manage WhatsApp instances
- Get connection state
- Set presence (typing, recording, etc.)

### Message
- Send text messages
- Send media (image, video, audio, document)
- Send location
- Send contacts
- Send reactions
- Send polls
- Send interactive lists
- Send interactive buttons

### Chat
- Manage conversations
- Search messages
- Mark as read/unread

### Group
- Create and manage groups
- Add/remove participants
- Update group settings

### Settings
- Configure instances
- Webhooks
- Integrations

### Business (WhatsApp Business)
- WhatsApp Business API specific endpoints
- Message templates

### Metrics
- Prometheus metrics for monitoring
- Instance status

## Authentication

All endpoints (except `/` and `/docs`) require authentication via API Key in the header:

```http
apikey: YOUR_API_KEY_HERE
```

Configure your API Key in:
```bash
AUTHENTICATION_API_KEY=your-secret-key
```

## Testing Endpoints

1. Access `/docs` in your browser
2. Click "Authorize" at the top of the page
3. Enter your API Key
4. Navigate through endpoints and click "Try it out"
5. Fill in the required parameters
6. Click "Execute" to test

## Updating the Documentation

The `swagger.json` file in the project root contains the complete OpenAPI 3.0 specification.

To add new endpoints:

1. Edit `swagger.json`
2. Add the path under `paths:`
3. Define schemas in `components.schemas` if needed
4. Restart the server to apply changes

### Example of a New Endpoint

```json
"/message/sendExample/{instanceName}": {
  "post": {
    "tags": ["Message"],
    "summary": "Send Example Message",
    "description": "Description of what this endpoint does",
    "security": [{"ApiKeyAuth": []}],
    "parameters": [
      {
        "name": "instanceName",
        "in": "path",
        "required": true,
        "schema": {"type": "string"}
      }
    ],
    "requestBody": {
      "required": true,
      "content": {
        "application/json": {
          "schema": {"$ref": "#/components/schemas/ExampleSchema"}
        }
      }
    },
    "responses": {
      "201": {
        "description": "Success response",
        "content": {
          "application/json": {
            "schema": {"$ref": "#/components/schemas/SuccessResponse"}
          }
        }
      }
    }
  }
}
```

## Integration with Other Tools

### Postman/Insomnia

You can import the Swagger documentation into tools like Postman or Insomnia:

1. Access `http://localhost:8080/docs`
2. Download the `swagger.json` file (available in project root)
3. Import into your API testing tool

### Client SDK Generation

Use tools like [OpenAPI Generator](https://openapi-generator.tech/) to generate SDKs in various languages:

```bash
# Example: Generate TypeScript SDK
openapi-generator-cli generate -i swagger.json -g typescript-axios -o ./sdk/typescript

# Example: Generate Python SDK
openapi-generator-cli generate -i swagger.json -g python -o ./sdk/python
```

## Dynamic Server URL

Swagger automatically updates the server URL based on `SERVER_URL`:

```bash
SERVER_URL=https://api.yourdomain.com
```

This ensures that examples and tests in the documentation use the correct URL.

## UI Customization

The Swagger UI interface can be customized by editing the options in `src/main.ts`:

```typescript
swaggerUi.setup(swaggerDocument, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'Evolution API Documentation',
  customfavIcon: 'https://evolution-api.com/favicon.ico',
})
```

## Troubleshooting

### Documentation doesn't appear
- Check that `SERVER_DISABLE_DOCS=false`
- Ensure the `swagger.json` file exists in the project root
- Check server logs for loading errors

### Endpoints don't appear
- Verify the endpoint is defined in `swagger.json`
- Confirm the JSON is valid (use a JSON validator)
- Restart the server after changes

### Authentication doesn't work
- Verify the API Key is correct
- Confirm the `apikey` header is being sent
- Check that `AUTHENTICATION_API_KEY` is configured correctly

## Useful Links

- [Official Evolution API Documentation](https://doc.evolution-api.com)
- [OpenAPI 3.0 Specification](https://swagger.io/specification/)
- [Swagger UI Documentation](https://swagger.io/tools/swagger-ui/)
- [GitHub - Evolution API](https://github.com/EvolutionAPI/evolution-api)

## Support

For questions or issues:
- GitHub Issues: https://github.com/EvolutionAPI/evolution-api/issues
- Email: contato@evolution-api.com
- Documentation: https://doc.evolution-api.com
