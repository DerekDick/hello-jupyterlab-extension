import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette, MainAreaWidget
} from '@jupyterlab/apputils';

import {
  Widget
} from '@phosphor/widgets';


/**
 * Initialization data for the hello_jupyterlab_extension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'hello_jupyterlab_extension',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension hello_jupyterlab_extension is activated!');

    // Create a blank content widget inside of a MainAreaWidget
    const content = new Widget();
    const widget = new MainAreaWidget({content});
    widget.id = 'hello-jupyterlab-ext-jupyterlab';
    widget.title.label = 'Astronomy Picture from hello_jupyterlab_ext';
    widget.title.closable = true;

    // Add an application command
    const command: string = 'hjle:open';
    app.commands.addCommand(command, {
      label: 'Random Astronomy Picture from hello_jupyterlab_ext',
      execute: () => {
        if (!widget.isAttached) {
          // Attach the widget to the main work area if it's not there
          app.shell.add(widget, 'main');
        }
        // Activate the widget
        app.shell.activateById(widget.id);
      }
    });

    // Add the command to the palette.
    palette.addItem({command, category: 'Tutorial'});
  }
};

export default extension;
