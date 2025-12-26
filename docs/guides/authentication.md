# Authentication

Set up authentication for your applications.

## API Keys

### Create API Key

```bash
kloudihub keys create my-key --description "CI/CD key"
```

### List API Keys

```bash
kloudihub keys list
```

### Revoke API Key

```bash
kloudihub keys revoke my-key
```

## OAuth Providers

### GitHub OAuth

```yaml
auth:
  providers:
    - name: github
      client_id: YOUR_CLIENT_ID
      client_secret: YOUR_CLIENT_SECRET
```

### Google OAuth

```yaml
auth:
  providers:
    - name: google
      client_id: YOUR_CLIENT_ID
      client_secret: YOUR_CLIENT_SECRET
```

## JWT Tokens

Generate JWT tokens for API access:

```bash
kloudihub tokens create --expires 24h
```

## Role-Based Access Control

### Assign Roles

```bash
kloudihub users add user@example.com --role admin
kloudihub users add user@example.com --role developer
kloudihub users add user@example.com --role viewer
```

### Roles

- **Admin**: Full access to all resources
- **Developer**: Deploy and manage applications
- **Viewer**: Read-only access

## Two-Factor Authentication

Enable 2FA for your account:

```bash
kloudihub auth enable-2fa
```

## Session Management

Configure session settings:

```yaml
auth:
  session:
    timeout: 24h
    refresh: true
```

## Best Practices

1. **Use Strong Passwords**: Minimum 12 characters
2. **Enable 2FA**: Add extra security layer
3. **Rotate Keys**: Regularly rotate API keys
4. **Least Privilege**: Grant minimum necessary permissions
5. **Monitor Access**: Review access logs regularly
