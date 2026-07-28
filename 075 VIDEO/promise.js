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
let prom2 = new Promise((reslove,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No Random number 2 ")
    }
    else{

        setTimeout(()=>{
            console.log("promise 2");
            reslove("Resolve 2")
        },1000);
    }
})
let p3 = Promise.allSettled([prom1,prom2])
p3.then((a)=>{
    console.log(a);
}).catch(err=>{
    console.log(err);
})