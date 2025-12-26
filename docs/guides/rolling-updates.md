# Rolling Updates

Update applications without downtime using rolling updates.

## What are Rolling Updates?

Rolling updates gradually replace old instances with new ones, ensuring your application remains available during the update.

## Enable Rolling Updates

```yaml
deployment:
  strategy: rolling
  max_surge: 1
  max_unavailable: 0
```

## Rolling Update Configuration

### Max Surge

Number of extra instances allowed during update:

```yaml
deployment:
  strategy: rolling
  max_surge: 2  # Allow 2 extra instances
```

### Max Unavailable

Maximum instances that can be unavailable:

```yaml
deployment:
  strategy: rolling
  max_unavailable: 1  # At most 1 instance down
```

## Health Checks

Health checks ensure new instances are ready:

```yaml
health:
  path: /health
  interval: 10s
  timeout: 5s
  retries: 3
```

## Update Process

1. New instance is created
2. Health check passes
3. Traffic is routed to new instance
4. Old instance is terminated
5. Process repeats for remaining instances

## Rollback

If health checks fail, automatically rollback:

```yaml
deployment:
  strategy: rolling
  auto_rollback: true
  rollback_on_failure: true
```

## Manual Rollback

Rollback manually if needed:

```bash
kloudihub rollback
```

## Best Practices

1. **Health Checks**: Ensure health checks are accurate
2. **Gradual Updates**: Update instances gradually
3. **Monitor**: Watch metrics during updates
4. **Test First**: Test updates in staging
5. **Have Rollback Plan**: Know how to rollback quickly
6. **Low Traffic Windows**: Update during low traffic periods
