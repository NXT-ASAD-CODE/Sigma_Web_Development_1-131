console.log("Promise");
 
let prom1 = new Promise((reslove,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No Random number")
    }
    else{

        setTimeout(()=>{
            console.log("promise");
            reslove("Resolve")
        },3000);
    }
})
prom1.then((a)=>{
    console.log(a);
})