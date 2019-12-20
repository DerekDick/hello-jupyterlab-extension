import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the hello_jupyterlab_extension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'hello_jupyterlab_extension',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension hello_jupyterlab_extension is activated!');
  }
};

export default extension;
