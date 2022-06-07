const axios=require('axios');

class CryptoApi{
   constructor(apiKey){
    this.apiKey=apiKey;
    this.baseurl='https://api.nomics.com/v1/currencies/ticker'
   }
   async getPriceData(coinOpt,curOpt){
        try{
            const formatter=new Intl.NumberFormat('en-US',{
                style:'currency',
                currency:'USD'
            })
            console.log("curOpt");
            const as={
                dL:'1d,30d'
            };
            const res=await axios.get(
                `${this.baseurl}?key=${this.apiKey}&ids=${coinOpt}`
            )
            const resa= await axios.get('https://api.nomics.com/v1/currencies/ticker?key=09130893aa0d9bae964fac36e0a08c4ef8738a29&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1')
            let output='';
            let i=resa.data.length;    
            console.log(i);
            let arraya=[];
            res.data.forEach(coin=>{
                arraya.push(coin);
                output+=`Coin:${coin.symbol.yellow} (${coin.name}) | Price:${
                formatter.format(coin.price).green
                } | Rank: ${coin.rank.blue}\n`;
            });
            arraya.forEach(coin=>{
                console.log(coin.price*100);
            })
            return output;    
            
        }catch(err){
            handleAPiError(err);
            }
   }
}
    function handleAPiError(error){
        if(error.response.status === 401){
            throw new Error('Data requested not found');
        }else if(err.response.status === 404){
            throw new Error('Api is not responding');
        }else{
            throw new Error('Somethin went wrong');
        }
    }
    
module.exports=CryptoApi;    