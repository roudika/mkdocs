# CI/CD Integration

Integrate KloudiHub with your CI/CD pipelines.

## GitHub Actions

### Basic Workflow

```yaml
name: Deploy to KloudiHub

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to KloudiHub
        uses: kloudihub/action@v1
        with:
          api-key: ${{ secrets.KLOUDIHUB_API_KEY }}
          app: my-app
```

### Advanced Workflow

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: npm test
  
  deploy-staging:
    if: github.ref == 'refs/heads/develop'
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: kloudihub/action@v1
        with:
          api-key: ${{ secrets.KLOUDIHUB_API_KEY }}
          app: my-app-staging
          env: staging
  
  deploy-production:
    if: github.ref == 'refs/heads/main'
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: kloudihub/action@v1
        with:
          api-key: ${{ secrets.KLOUDIHUB_API_KEY }}
          app: my-app
          env: production
```

## GitLab CI/CD

```yaml
stages:
  - test
  - deploy

test:
  stage: test
  script:
    - npm test

deploy:
  stage: deploy
  script:
    - kloudihub deploy --api-key $KLOUDIHUB_API_KEY
  only:
    - main
```

## Jenkins

```groovy
pipeline {
    agent any
    
    stages {
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'kloudihub deploy --api-key ${KLOUDIHUB_API_KEY}'
            }
        }
    }
}
```

## CircleCI

```yaml
version: 2.1

jobs:
  deploy:
    docker:
      - image: cimg/python:3.9
    steps:
      - checkout
      - run: kloudihub deploy --api-key $KLOUDIHUB_API_KEY

workflows:
  deploy:
    jobs:
      - deploy
```

## Environment Variables

Store your API key as a secret:

- **GitHub**: Settings → Secrets → Actions
- **GitLab**: Settings → CI/CD → Variables
- **Jenkins**: Credentials → Add Secret
- **CircleCI**: Project Settings → Environment Variables

## Deployment Strategies

### Automatic Deployment

Deploy on every push to main:

```yaml
on:
  push:
    branches: [main]
```

### Manual Deployment

Require manual approval:

```yaml
deploy-production:
  if: github.ref == 'refs/heads/main'
  environment:
    name: production
    url: https://my-app.kloudihub.com
```

### Conditional Deployment

Deploy only when tests pass:

```yaml
deploy:
  needs: test
  if: success()
```

## Best Practices

1. **Test First**: Always run tests before deployment
2. **Use Secrets**: Never commit API keys
3. **Separate Environments**: Different configs for staging/production
4. **Rollback Plan**: Have a way to quickly rollback
5. **Notifications**: Get notified of deployment status
6. **Review Changes**: Review code before deploying to production
