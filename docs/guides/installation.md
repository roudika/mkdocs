# Installation Guide

This guide will help you install and set up KloudiHub on your system.

## Prerequisites

Before installing KloudiHub, ensure you have:

- Python 3.8 or higher
- pip (Python package manager)
- Git (optional, for version control)

## Installation Methods

### Method 1: Using pip (Recommended)

```bash
pip install kloudihub
```

### Method 2: Using pipx

```bash
pipx install kloudihub
```

### Method 3: From Source

```bash
git clone https://github.com/roudika/mkdocs.git
cd mkdocs
pip install -e .
```

## Verify Installation

After installation, verify that KloudiHub is installed correctly:

```bash
kloudihub --version
```

You should see the version number printed to the console.

## Initial Setup

1. **Create an account** (if you haven't already):
   ```bash
   kloudihub register
   ```

2. **Login to your account**:
   ```bash
   kloudihub login
   ```

3. **Initialize a project**:
   ```bash
   kloudihub init
   ```

## Next Steps

Now that you have KloudiHub installed, check out our [Quick Start Guide](quickstart.md) to deploy your first application!

## Troubleshooting

### Installation Issues

If you encounter permission errors, try using `pip install --user kloudihub` or use a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install kloudihub
```

### Command Not Found

If the `kloudihub` command is not found after installation:

- Ensure your Python scripts directory is in your PATH
- Try using `python -m kloudihub` instead
- Restart your terminal/command prompt
