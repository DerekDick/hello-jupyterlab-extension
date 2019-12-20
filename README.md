# hello_jupyterlab_extension

A hello world example of jupyter-lab extension.


## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install @derekdick/hello_jupyterlab_extension
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

