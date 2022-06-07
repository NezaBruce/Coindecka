const Keymanager=require('../lib/keymanager');
const CryptoApi=require('../lib/cryptoApi');
const colors=require('colors');

const check={
    async price(cmd){
    
    try {
    const keymanager=new Keymanager;
    const key= keymanager.getkey();
    const api=new CryptoApi(key);

    const priceoutputdata=await api.getPriceData(cmd.coin,cmd.curr)
    console.log(cmd);
    console.log(priceoutputdata);
    
    } catch (error) {
        console.log(error);
    }    
    
    }
}

module.exports=check;
