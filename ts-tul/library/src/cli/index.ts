#!/usr/bin/env node
// import yargs from 'yargs/yargs';
// import { hideBin } from 'yargs/helpers';
// import inquirer from 'inquirer';
// // Basic 'hello' command
// yargs(hideBin(process.argv))
//   .scriptName('your-cli-name')
//   .usage('$0 <cmd> [args]')
//   .command(
//     'hello',
//     'Print a hello world message',
//     () => {},
//     () => {
//       console.log('Hello World!');
//     }
//   )
//   .command(
//     'ask-name',
//     'Ask for a name and greet',
//     () => {},
//     async () => {
//       const answers = await inquirer.prompt([
//         {
//           type: 'input',
//           name: 'name',
//           message: 'What is your name?'
//         }
//       ]);
//       console.log(`Hello ${answers.name}!`);
//     }
//   )
//   .command(
//     'config [options]',
//     'Accepts various configurations',
//     (yargs) => {
//       return yargs
//         .option('requiredOption', {
//           alias: 'r',
//           describe: 'A required option',
//           demandOption: true, // This option is required
//           type: 'string'
//         })
//         .option('optionalOption', {
//           alias: 'o',
//           describe: 'An optional option',
//           type: 'string'
//         });
//     },
//     (argv) => {
//       console.log(`Required option value: ${argv.requiredOption}`);
//       console.log(`Optional option value: ${argv.optionalOption || 'none'}`);
//       // Add your library function call here and output the result
//       console.log('Processing with your library...');
//     }
//   )
//   .help('help', 'Show help')
//   .alias('help', 'h')
//   .showHelpOnFail(false, 'Specify --help for available options')
//   .demandCommand(1, 'You need at least one command before moving on')
//   .recommendCommands()
//   // .wrap(yargs.())
//   .epilogue('For more information, visit [your documentation url]').argv;
console.log('Hello World!');
