# API Reference

Complete API documentation for KloudiHub.

## Authentication

All API requests require authentication using an API key:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.kloudihub.com/v1/apps
```

## Base URL

```
https://api.kloudihub.com/v1
```

## Applications API

### List Applications

```http
GET /apps
```

**Response:**
```json
{
  "apps": [
    {
      "id": "app-123",
      "name": "my-app",
      "status": "running",
      "url": "https://my-app.kloudihub.com"
    }
  ]
}
```

### Get Application

```http
GET /apps/{app_id}
```

### Create Application

```http
POST /apps
Content-Type: application/json

{
  "name": "my-app",
  "runtime": "python3.9",
  "entrypoint": "app:app"
}
```

### Update Application

```http
PATCH /apps/{app_id}
```

### Delete Application

```http
DELETE /apps/{app_id}
```

## Deployments API

### List Deployments

```http
GET /apps/{app_id}/deployments
```

### Get Deployment

```http
GET /apps/{app_id}/deployments/{deployment_id}
```

### Create Deployment

```http
POST /apps/{app_id}/deployments
```

### Rollback Deployment

```http
POST /apps/{app_id}/deployments/{deployment_id}/rollback
```

## Metrics API

### Get Metrics

```http
GET /apps/{app_id}/metrics
```

**Query Parameters:**
- `start`: Start time (ISO 8601)
- `end`: End time (ISO 8601)
- `metric`: Metric name (cpu, memory, requests, etc.)

## Logs API

### Get Logs

```http
GET /apps/{app_id}/logs
```

**Query Parameters:**
- `since`: Time duration (e.g., "1h", "30m")
- `level`: Log level (debug, info, warn, error)
- `limit`: Number of log entries

## Environment Variables API

### List Environment Variables

```http
GET /apps/{app_id}/env
```

### Set Environment Variable

```http
POST /apps/{app_id}/env
Content-Type: application/json

{
  "key": "DATABASE_URL",
  "value": "postgres://..."
}
```

### Delete Environment Variable

```http
DELETE /apps/{app_id}/env/{key}
```

## Scaling API

### Get Scaling Configuration

```http
GET /apps/{app_id}/scaling
```

### Update Scaling Configuration

```http
PATCH /apps/{app_id}/scaling
Content-Type: application/json

{
  "min_instances": 2,
  "max_instances": 10,
  "target_cpu": 70
}
```

## Error Responses

All errors follow this format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {}
  }
}
```

### Common Error Codes

- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Rate Limit Exceeded
- `500` - Internal Server Error

## Rate Limits

API requests are rate-limited:
- Free tier: 100 requests/hour
- Pro tier: 1000 requests/hour
- Enterprise: Custom limits

Rate limit headers:
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

## SDKs

Official SDKs are available:

- **Python**: `pip install kloudihub-sdk`
- **Node.js**: `npm install @kloudihub/sdk`
- **Go**: `go get github.com/kloudihub/sdk-go`

## Webhooks

Configure webhooks to receive events:

```http
POST /apps/{app_id}/webhooks
Content-Type: application/json

{
  "url": "https://example.com/webhook",
  "events": ["deployment.completed", "app.scaled"]
}
```

## Examples

### Python Example

```python
from kloudihub import Client

client = Client(api_key="YOUR_API_KEY")

# List apps
apps = client.apps.list()

# Create app
app = client.apps.create(
    name="my-app",
    runtime="python3.9"
)

# Deploy
deployment = client.deployments.create(
    app_id=app.id,
    source="./my-app"
)
```

### Node.js Example

```javascript
const { Client } = require('@kloudihub/sdk');

const client = new Client({ apiKey: 'YOUR_API_KEY' });

// List apps
const apps = await client.apps.list();

// Create app
const app = await client.apps.create({
  name: 'my-app',
  runtime: 'nodejs18'
});
```
