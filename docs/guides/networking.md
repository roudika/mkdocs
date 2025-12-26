# Networking

Configure network settings for your applications.

## Custom Domains

### Add a Domain

```bash
kloudihub domains add example.com
```

### Configure DNS

Point your domain to KloudiHub:

```
Type: CNAME
Name: @
Value: kloudihub.com
```

Or use A records:

```
Type: A
Name: @
Value: 192.0.2.1
```

### SSL Certificates

SSL certificates are automatically provisioned via Let's Encrypt:

```yaml
networking:
  ssl:
    auto: true
    provider: letsencrypt
```

Or upload your own certificate:

```bash
kloudihub ssl upload --cert cert.pem --key key.pem
```

## Load Balancing

KloudiHub automatically load balances traffic across instances:

```yaml
networking:
  load_balancer:
    algorithm: round_robin
    health_check:
      path: /health
      interval: 30s
```

## Firewall Rules

Configure firewall rules:

```yaml
firewall:
  rules:
    - port: 80
      protocol: tcp
      source: 0.0.0.0/0
    - port: 443
      protocol: tcp
      source: 0.0.0.0/0
    - port: 22
      protocol: tcp
      source: 10.0.0.0/8
```

## Private Networks

Use private networks for internal communication:

```yaml
networking:
  private: true
  vpc: my-vpc
  subnets:
    - 10.0.1.0/24
    - 10.0.2.0/24
```

## Port Configuration

Configure which ports your application listens on:

```yaml
networking:
  ports:
    - 8080
    - 8443
```

## CDN Integration

Enable CDN for static assets:

```yaml
networking:
  cdn:
    enabled: true
    cache_ttl: 3600
```

## Rate Limiting

Configure rate limits:

```yaml
networking:
  rate_limit:
    requests_per_minute: 100
    burst: 20
```
