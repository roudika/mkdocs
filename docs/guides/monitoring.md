# Monitoring & Logging

Monitor your applications and track their performance with KloudiHub's built-in monitoring tools.

## Metrics Dashboard

Access your metrics dashboard:

```bash
kloudihub metrics
```

Or visit the web dashboard at: `https://dashboard.kloudihub.com`

## Key Metrics

### Application Metrics

- **CPU Usage**: Current and average CPU utilization
- **Memory Usage**: Memory consumption and limits
- **Request Rate**: Requests per second
- **Response Time**: Average and p95/p99 response times
- **Error Rate**: Percentage of failed requests

### Infrastructure Metrics

- **Instance Count**: Number of running instances
- **Network Traffic**: Inbound and outbound traffic
- **Disk Usage**: Storage consumption

## Logs

### View Logs

View real-time logs:

```bash
kloudihub logs
```

### Filter Logs

Filter logs by level, time, or search term:

```bash
kloudihub logs --level error
kloudihub logs --since 1h
kloudihub logs --grep "database"
```

### Download Logs

Export logs to a file:

```bash
kloudihub logs --output logs.txt
```

## Alerts

### Create Alerts

Set up alerts for important metrics:

```yaml
alerts:
  - name: high-cpu
    metric: cpu_usage
    threshold: 80
    duration: 5m
    action: email
  
  - name: high-error-rate
    metric: error_rate
    threshold: 5
    duration: 2m
    action: slack
```

### Alert Channels

Configure notification channels:

- Email
- Slack
- PagerDuty
- Webhooks

## Custom Metrics

Send custom metrics from your application:

```python
from kloudihub import metrics

metrics.increment('user.signup')
metrics.gauge('queue.size', 42)
metrics.timing('db.query', 150)
```

## Logging Best Practices

1. **Use Structured Logging**: Log in JSON format
2. **Include Context**: Add request IDs, user IDs, etc.
3. **Log Levels**: Use appropriate log levels (DEBUG, INFO, WARN, ERROR)
4. **Avoid Sensitive Data**: Never log passwords or tokens
5. **Centralized Logging**: Aggregate logs from all instances

## Performance Monitoring

### Application Performance Monitoring (APM)

Track detailed performance metrics:

- Database query times
- External API calls
- Function execution times
- Memory allocations

### Distributed Tracing

Trace requests across services:

```python
from kloudihub import trace

@trace
def process_order(order_id):
    # Your code here
    pass
```

## Dashboards

Create custom dashboards:

1. Go to the Metrics section
2. Click "New Dashboard"
3. Add widgets for the metrics you care about
4. Save and share with your team
