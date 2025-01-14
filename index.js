import { argv } from 'node:process';
import * as emoji from 'node-emoji';

if (argv.length < 3) {
  // This happens if there is no user input
  console.log(emoji.random().emoji);
} else if (emoji.get(argv[2])) {
  // This happens only if the emoji exists
  console.log(emoji.get(argv[2]));
} else {
  // This happens if the userInput is undefined
  console.log(`Sorry ${argv[2]} doesn't exist`);
}
