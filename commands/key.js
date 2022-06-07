const Keymanager= require('../lib/keymanager');   
const inquirer=require('inquirer');
const colors=require('colors');
const {isvalidated}=require('../utils/validation');
const key={
    async setKey(){
    try {
        const keymanager=new Keymanager();
        const input=await inquirer.prompt([
            {
                type:'input',
                name:'key',
                message:'Enter Api key'.blue,
                validate:isvalidated
            }
        ]);
        const key=keymanager.setKey(input.key);
        
        if(key){
            console.log('Api key set successfully'.green);
        }
    } catch (error) {
        console.log(error);
    }
    },
    show(){
        try {
            const keymanager=new Keymanager;
            const key=keymanager.getkey();
            console.log('Key: '+key);
            return key;
        } catch (error) {
            console.log(error.message);
        }
    },
    remove(){
        try {
            const keymanager=new Keymanager;
            keymanager.deletekey();
            console.log('Key removed'.red);
            return;
        } catch (error) {
            console.log(error.message.red);
        }
    }

}
module.exports=key;