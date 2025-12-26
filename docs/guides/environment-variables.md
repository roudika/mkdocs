# Environment Variables

Manage environment variables for your applications.

## Setting Environment Variables

### Via CLI

```bash
kloudihub env set DATABASE_URL=postgres://localhost/db
kloudihub env set API_KEY=secret123
```

### Via Configuration File

```yaml
env:
  DATABASE_URL: postgres://localhost/db
  API_KEY: secret123
  NODE_ENV: production
```

### Via Dashboard

1. Go to your application
2. Navigate to "Environment Variables"
3. Click "Add Variable"
4. Enter key and value

## Viewing Environment Variables

List all environment variables:

```bash
kloudihub env list
```

Get a specific variable:

```bash
kloudihub env get DATABASE_URL
```

## Using Environment Variables

### In Your Application

Access environment variables in your code:

**Python:**
```python
import os

database_url = os.environ.get('DATABASE_URL')
api_key = os.environ.get('API_KEY')
```

**Node.js:**
```javascript
const databaseUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;
```

## Secret Management

For sensitive values, use secrets:

```bash
kloudihub secrets set DATABASE_PASSWORD=secret123
```

Secrets are encrypted and never exposed in logs or environment listings.

## Environment-Specific Variables

Set different values per environment:

```bash
kloudihub env set DATABASE_URL=postgres://staging/db --env staging
kloudihub env set DATABASE_URL=postgres://prod/db --env production
```

## Variable Precedence

Variables are loaded in this order (later overrides earlier):

1. Default values from configuration
2. Environment-specific values
3. Secrets
4. Runtime-provided variables

## Best Practices

1. **Never commit secrets**: Use secrets management
2. **Use descriptive names**: Clear, consistent naming
3. **Document variables**: Keep a list of required variables
4. **Validate on startup**: Check required variables exist
5. **Use defaults**: Provide sensible defaults when possible
