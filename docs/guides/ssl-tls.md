# SSL/TLS Configuration

Configure SSL/TLS certificates for secure connections.

## Automatic SSL

KloudiHub automatically provisions SSL certificates via Let's Encrypt:

```yaml
networking:
  ssl:
    auto: true
    provider: letsencrypt
```

Certificates are automatically renewed before expiration.

## Custom Certificates

### Upload Certificate

```bash
kloudihub ssl upload \
  --cert certificate.pem \
  --key private-key.pem \
  --chain chain.pem
```

### Certificate Formats

Supported formats:
- PEM
- PFX/PKCS12

## Certificate Management

### List Certificates

```bash
kloudihub ssl list
```

### View Certificate Details

```bash
kloudihub ssl show certificate-id
```

### Renew Certificate

```bash
kloudihub ssl renew certificate-id
```

### Delete Certificate

```bash
kloudihub ssl delete certificate-id
```

## TLS Configuration

### TLS Version

Configure minimum TLS version:

```yaml
networking:
  ssl:
    min_version: "1.2"
    preferred_version: "1.3"
```

### Cipher Suites

Specify allowed cipher suites:

```yaml
networking:
  ssl:
    ciphers:
      - TLS_AES_256_GCM_SHA384
      - TLS_CHACHA20_POLY1305_SHA256
```

## HTTP to HTTPS Redirect

Automatically redirect HTTP to HTTPS:

```yaml
networking:
  ssl:
    redirect_http: true
```

## HSTS

Enable HTTP Strict Transport Security:

```yaml
networking:
  ssl:
    hsts:
      enabled: true
      max_age: 31536000
      include_subdomains: true
```

## Certificate Monitoring

Monitor certificate expiration:

```bash
kloudihub ssl check
```

Set up alerts for expiring certificates:

```yaml
alerts:
  - name: ssl-expiring
    metric: ssl_expiry
    threshold: 30
    action: email
```
