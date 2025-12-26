# Configuration Guide

Learn how to configure KloudiHub for your specific needs.

## Configuration File

KloudiHub uses a `kloudihub.yml` file in your project root for configuration.

### Basic Configuration

```yaml
name: my-application
runtime: python3.9
entrypoint: app:app
port: 8080
```

### Advanced Configuration

```yaml
name: my-application
runtime: python3.9
entrypoint: app:app
port: 8080

# Resource limits
resources:
  cpu: 1.0
  memory: 512MB
  disk: 10GB

# Scaling configuration
scaling:
  min_instances: 1
  max_instances: 10
  target_cpu: 70

# Environment variables
env:
  DATABASE_URL: ${DATABASE_URL}
  API_KEY: secret-key

# Health checks
health:
  path: /health
  interval: 30s
  timeout: 5s

# Networking
networking:
  domains:
    - example.com
    - www.example.com
```

## Environment Variables

Set environment variables in your configuration or via the CLI:

```bash
kloudihub env set DATABASE_URL=postgres://...
kloudihub env get DATABASE_URL
```

## Runtime Configuration

### Python

```yaml
runtime: python3.9
entrypoint: app:app
requirements: requirements.txt
```

### Node.js

```yaml
runtime: nodejs18
entrypoint: server.js
package_manager: npm
```

### Docker

```yaml
runtime: docker
dockerfile: Dockerfile
image: my-app:latest
```

## Resource Limits

Configure CPU, memory, and disk limits:

```yaml
resources:
  cpu: 2.0          # CPU cores
  memory: 1GB       # Memory limit
  disk: 20GB       # Disk space
```

## Scaling Configuration

```yaml
scaling:
  min_instances: 2
  max_instances: 20
  target_cpu: 70
  target_memory: 80
```

## Health Checks

Configure health check endpoints:

```yaml
health:
  path: /health
  interval: 30s
  timeout: 5s
  retries: 3
```

## Custom Domains

```yaml
networking:
  domains:
    - example.com
    - api.example.com
  ssl:
    auto: true
    provider: letsencrypt
```
