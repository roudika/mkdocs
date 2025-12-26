# Core Concepts

Understanding the fundamental concepts of KloudiHub will help you make the most of the platform.

## Applications

An **application** is your deployed code running on KloudiHub. Each application has:

- A unique name
- A runtime environment (Python, Node.js, etc.)
- Configuration settings
- Environment variables
- Resource limits

## Deployments

A **deployment** is a specific version of your application. Each deployment:

- Has a unique deployment ID
- Points to a specific code version
- Can be rolled back if needed
- Has its own logs and metrics

## Environments

**Environments** are isolated spaces for your applications:

- **Production**: Your live, user-facing application
- **Staging**: Testing environment that mirrors production
- **Development**: Local development environment

## Regions

**Regions** are geographic locations where your applications run:

- Choose regions close to your users for better performance
- Deploy to multiple regions for high availability
- Each region is independent and isolated

## Scaling

KloudiHub supports automatic and manual scaling:

- **Horizontal Scaling**: Add more instances of your application
- **Vertical Scaling**: Increase resources for a single instance
- **Auto-scaling**: Automatically adjust based on demand

## Networking

- **Domains**: Custom domains for your applications
- **SSL/TLS**: Automatic HTTPS certificates
- **Load Balancing**: Distribute traffic across instances
- **Private Networks**: Isolated network segments

## Storage

- **Volumes**: Persistent storage for your applications
- **Object Storage**: For files and media
- **Databases**: Managed database services

## Monitoring

Track your application's health and performance:

- **Metrics**: CPU, memory, network usage
- **Logs**: Application and system logs
- **Alerts**: Notifications for important events
