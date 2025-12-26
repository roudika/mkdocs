# Quick Start Guide

Get your first application deployed on KloudiHub in under 5 minutes!

## Step 1: Create a Simple Application

Create a new directory and add a simple application file:

```bash
mkdir my-app
cd my-app
```

Create a simple `app.py`:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello from KloudiHub!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
```

## Step 2: Create Configuration File

Create a `kloudihub.yml` file in your project root:

```yaml
name: my-app
runtime: python3.9
entrypoint: app:app
port: 8080
```

## Step 3: Deploy

Deploy your application:

```bash
kloudihub deploy
```

That's it! Your application is now live.

## Step 4: Access Your Application

After deployment, you'll receive a URL like:
```
https://my-app.kloudihub.com
```

Visit this URL in your browser to see your application running!

## What's Next?

- Learn about [Deployment Strategies](deployment.md)
- Configure [Environment Variables](environment-variables.md)
- Set up [Monitoring](monitoring.md)
- Read about [Core Concepts](concepts.md)

## Example Projects

Check out our example projects on GitHub for more complex applications:

- [Simple Web App](https://github.com/example/simple-webapp)
- [API Server](https://github.com/example/api-server)
- [Microservice](https://github.com/example/microservice)
