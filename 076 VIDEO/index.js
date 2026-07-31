function getData(){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve(455)
},3500)
})
}
console.log("Loading Modules");
console.log("another code");
console.log("data Loading");
let data = getData()
console.log("process data");
console.log();
console.log();
