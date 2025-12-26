# Frequently Asked Questions

Common questions about KloudiHub.

## General

### What is KloudiHub?

KloudiHub is a cloud platform that simplifies application deployment and infrastructure management. It provides everything you need to deploy, scale, and monitor applications.

### How is KloudiHub different from other platforms?

KloudiHub focuses on simplicity and developer experience. We provide:
- Easy deployment process
- Built-in monitoring and logging
- Automatic scaling
- Comprehensive documentation

### Is KloudiHub free?

We offer a free tier with generous limits. Paid plans are available for production workloads with additional features and support.

## Getting Started

### How do I get started?

1. [Install KloudiHub](installation.md)
2. Create an account
3. Follow our [Quick Start Guide](quickstart.md)

### What programming languages are supported?

KloudiHub supports:
- Python
- Node.js
- Go
- Java
- Ruby
- PHP
- Docker containers (any language)

### Do I need to know Docker?

No! KloudiHub can build and deploy your application automatically. Docker support is available for advanced use cases.

## Deployment

### How long does deployment take?

Most deployments complete in 2-5 minutes. Initial deployments may take longer as we build your application.

### Can I deploy from Git?

Yes! You can deploy directly from GitHub, GitLab, or any Git repository.

### How do I rollback a deployment?

Use the rollback command:
```bash
kloudihub rollback
```

Or rollback to a specific version:
```bash
kloudihub rollback --version v1.0.0
```

## Scaling

### How does auto-scaling work?

KloudiHub monitors your application's CPU and memory usage. When metrics exceed thresholds, it automatically adds instances. When traffic decreases, it scales down.

### What's the maximum number of instances?

The maximum depends on your plan. Contact support for higher limits.

### Can I scale manually?

Yes! Use the scale command:
```bash
kloudihub scale --instances 5
```

## Pricing

### How much does it cost?

Pricing is based on:
- Compute resources (CPU, memory)
- Storage
- Bandwidth
- Additional services

See our pricing page for details.

### Is there a free tier?

Yes! Our free tier includes:
- 512MB memory
- 0.5 CPU
- 5GB storage
- 100GB bandwidth per month

### Can I change my plan?

Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.

## Security

### Is my data secure?

Yes! All data is encrypted at rest and in transit. We follow industry best practices and are SOC 2 compliant.

### How do I manage secrets?

Use the secrets management feature:
```bash
kloudihub secrets set MY_SECRET=value
```

Never commit secrets to version control.

### Can I use my own SSL certificate?

Yes! You can upload your own certificates or use our automatic Let's Encrypt certificates.

## Support

### How do I get help?

- Documentation: Browse our guides
- FAQ: Check this page
- Community: Join our Discord
- Support: Contact support for paid plans

### What's the response time for support?

- Free tier: Community support
- Pro plan: Email support (24-48 hours)
- Enterprise: 24/7 priority support

## Technical

### Can I use a custom domain?

Yes! Add your domain in the networking configuration or via the dashboard.

### Do you support databases?

Yes! We offer managed databases (PostgreSQL, MySQL, MongoDB) or you can connect to external databases.

### Can I run background jobs?

Yes! KloudiHub supports scheduled tasks and background workers.

### How do I access logs?

View logs via CLI:
```bash
kloudihub logs
```

Or access them in the web dashboard.

## Limits

### What are the resource limits?

Limits vary by plan. Free tier includes:
- 512MB memory
- 0.5 CPU
- 5GB storage

See our pricing page for plan details.

### What happens if I exceed limits?

You'll receive notifications. For paid plans, you can set up auto-scaling or upgrade your plan.
