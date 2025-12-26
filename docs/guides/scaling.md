# Scaling

Scale your applications to handle varying loads.

## Manual Scaling

### Scale Instances

```bash
kloudihub scale --instances 5
```

### Scale Resources

```bash
kloudihub scale --cpu 2.0 --memory 2GB
```

## Auto-Scaling

Configure automatic scaling:

```yaml
scaling:
  enabled: true
  min_instances: 2
  max_instances: 10
  target_cpu: 70
  target_memory: 80
  scale_up_cooldown: 5m
  scale_down_cooldown: 10m
```

### Scaling Metrics

Auto-scaling can be based on:

- **CPU Usage**: Scale when CPU exceeds threshold
- **Memory Usage**: Scale when memory exceeds threshold
- **Request Rate**: Scale based on requests per second
- **Queue Length**: Scale based on queue depth
- **Custom Metrics**: Scale based on your own metrics

## Horizontal Scaling

Add more instances:

```bash
kloudihub scale --instances 10
```

## Vertical Scaling

Increase resources per instance:

```bash
kloudihub scale --cpu 4.0 --memory 8GB
```

## Scheduled Scaling

Scale based on schedule:

```yaml
scaling:
  schedules:
    - name: business-hours
      min_instances: 5
      cron: "0 9 * * 1-5"  # 9 AM weekdays
    - name: off-hours
      min_instances: 2
      cron: "0 18 * * 1-5"  # 6 PM weekdays
```

## Scaling Best Practices

1. **Start Small**: Begin with minimum instances
2. **Monitor First**: Understand your traffic patterns
3. **Set Reasonable Limits**: Prevent runaway scaling
4. **Use Cooldowns**: Avoid rapid scaling up/down
5. **Test Scaling**: Verify scaling works as expected
6. **Cost Awareness**: Balance performance and cost
