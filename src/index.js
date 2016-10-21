import blessed from 'blessed';

import config from './config';
import initBox from './initBox';

// Create a screen object.
const screen = blessed.screen({
  smartCSR: true,
  title: 'My Dashboard',
});

const programs = config.map(
  configObj => initBox(screen, configObj)
);

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], () => {
  programs.forEach(program => program.kill());
  return process.exit(0);
});

// Render the screen.
screen.render();
