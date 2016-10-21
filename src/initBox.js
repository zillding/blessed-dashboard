import blessed from 'blessed';
import { spawn } from 'child_process';

function initBox(screen, { boxConfig, programParams }) {
  // Create a box
  const box = blessed.box(Object.assign({
    tags: true,
    border: {
      type: 'line',
    },
  }, boxConfig));

  const log = blessed.log({
    parent: box,
    width: '100%-5',
    scrollable: true,
    alwaysScroll: true,
    scrollbar: {
      ch: '',
      inverse: true,
    },
    mouse: true,
  });

  const program = spawn(...programParams);

  program.stdout.on('data', data => {
    log.log(`${data}`);
  });

  program.stderr.on('data', data => {
    log.log(`${data}`);
  });

  program.on('close', code => {
    log.log(`child process exited with code ${code}`);
  });

  screen.append(box);

  return program;
}

export default initBox;
