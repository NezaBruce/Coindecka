const program=require('commander');
const key=require('../commands/key');

program
    .command('set')
    .description('set your Api key')
    .action(key.setKey)

program
    .command('show')
    .description('show your Api key')
    .action(key.show)

program
    .command('remove')
    .description('Remove your Api key')
    .action(key.remove);

program.
    parse(process.argv)

//If no args, output help
if(!process.argv[2]){
    program.outputHelp();
}   