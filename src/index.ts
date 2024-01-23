import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the semi-formal-programming extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'semi-formal-programming:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension semi-formal-programming is activated!');
  }
};

export default plugin;
