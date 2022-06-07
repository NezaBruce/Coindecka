const pkg=require('../package.json');
const configstore=require('configstore');

class KeyManager{
    constructor(){
        this.conf=new configstore(pkg.name);
    }
    setKey(key){
        this.conf.set('apikey',key);
        return key;
    }
    getkey(){
        const key = this.conf.get('apikey');
        if(!key){
            throw new Error('No Api key found please contact https://bruceneza.co');
        }
        return key;
    }
    deletekey(){
        const key = this.conf.get('apikey');
        if(!key){
            throw new Error('No Api key found please contact https://bruceneza.co');
        }
        this.conf.delete('apikey');
        return;
    }
}
module.exports=KeyManager