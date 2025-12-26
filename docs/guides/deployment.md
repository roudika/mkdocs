# Deployment Strategies

Learn different ways to deploy applications on KloudiHub.

## Basic Deployment

The simplest way to deploy:

```bash
kloudihub deploy
```

This deploys your current code to the default environment.

## Deployment Methods

### 1. Git-based Deployment

Deploy directly from a Git repository:

```bash
kloudihub deploy --git https://github.com/user/repo.git
```

### 2. Docker Deployment

Deploy a Docker container:

```bash
kloudihub deploy --docker my-app:latest
```

### 3. Directory Deployment

Deploy from a local directory:

```bash
kloudihub deploy ./my-app
```

## Deployment Environments

### Production Deployment

```bash
kloudihub deploy --env production
```

### Staging Deployment

```bash
kloudihub deploy --env staging
```

## Rolling Deployments

Deploy with zero downtime:

```bash
kloudihub deploy --strategy rolling
```

This gradually replaces old instances with new ones.

## Blue-Green Deployment

Deploy to a new environment, then switch traffic:

```bash
kloudihub deploy --strategy blue-green
```

## Canary Deployment

Deploy to a small subset of instances first:

```bash
kloudihub deploy --strategy canary --percentage 10
```

## Deployment Options

### Skip Build

If you've already built your application:

```bash
kloudihub deploy --skip-build
```

### Force Deployment

Deploy even if there are no changes:

```bash
kloudihub deploy --force
```

### Specific Version

Deploy a specific version or commit:

```bash
kloudihub deploy --version v1.2.3
kloudihub deploy --commit abc123
```

## Deployment Status

Check the status of your deployment:

```bash
kloudihub status
```

## Rollback

Roll back to a previous deployment:

```bash
kloudihub rollback
kloudihub rollback --version v1.0.0
```

## Best Practices

1. **Test First**: Always test in staging before production
2. **Use Version Control**: Tag your deployments
3. **Monitor**: Watch metrics during deployment
4. **Have a Rollback Plan**: Know how to rollback quickly
5. **Deploy During Low Traffic**: Schedule deployments during off-peak hours
