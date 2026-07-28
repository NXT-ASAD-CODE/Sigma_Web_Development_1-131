console.log("Promise");
 
let prom1 = new Promise((reslove,reject)=>{
setTimeout(()=>{
    console.log("promise");
    reslove("Resolve")
},3000);
})
prom1.then((a)=>{
    console.log(a);
    
})