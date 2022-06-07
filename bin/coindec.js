#!/usr/bin/env node
const program=require('commander');
 
const pkg=require('../package.json')

program
    .version(pkg.version)
    .command('key','Manage Api key')
    .command('check','Check Api key')
    .parse(process.argv)