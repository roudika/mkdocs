# Backup & Recovery

Backup and restore your applications and data.

## Automatic Backups

Enable automatic backups:

```yaml
backup:
  enabled: true
  schedule: "0 2 * * *"  # Daily at 2 AM
  retention: 30  # Keep 30 days
```

## Manual Backups

### Create Backup

```bash
kloudihub backup create my-app
```

### List Backups

```bash
kloudihub backup list my-app
```

### Restore from Backup

```bash
kloudihub backup restore my-app backup-id
```

## Database Backups

### PostgreSQL

```bash
kloudihub db backup postgresql my-db
```

### MySQL

```bash
kloudihub db backup mysql my-db
```

### MongoDB

```bash
kloudihub db backup mongodb my-db
```

## Volume Backups

Backup persistent volumes:

```bash
kloudihub volume backup my-volume
```

## Backup Storage

Backups are stored securely:

- Encrypted at rest
- Stored in multiple regions
- Versioned for point-in-time recovery

## Recovery Procedures

### Application Recovery

1. List available backups
2. Select backup to restore
3. Restore application

```bash
kloudihub backup restore my-app backup-123
```

### Database Recovery

```bash
kloudihub db restore postgresql my-db backup-456
```

## Backup Best Practices

1. **Regular Backups**: Schedule automatic backups
2. **Test Restores**: Regularly test restore procedures
3. **Offsite Storage**: Keep backups in multiple locations
4. **Retention Policy**: Define how long to keep backups
5. **Documentation**: Document recovery procedures
6. **Monitor**: Monitor backup success/failure
