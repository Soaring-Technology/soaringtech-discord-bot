const COMMAND_HELLO_WORLD = {
  name: 'greeting',
  description: 'Greeting with bot',
  type: 1,
  integration_types: [0],
  contexts: [0],
};

const COMMAND_SELECT_RANDOM = {
  name: 'select_random',
  description: 'Select item randomly',
  type: 1,
  integration_types: [0],
  contexts: [0],
};

const ALL_COMMANDS = [
  COMMAND_HELLO_WORLD,
  COMMAND_SELECT_RANDOM,
];

function run() {
  console.log('running commands.js');
  console.log(process.argv);
  console.log(import.meta);
  console.log(new URL(import.meta.url));
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  run();
}

export {
  run,
  ALL_COMMANDS,
};

