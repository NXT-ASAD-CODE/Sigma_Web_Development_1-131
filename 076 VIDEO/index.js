async function getData() {
    // Promise has Three states fulfilled , rejected , pending  
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500)
    })
}
async function FetchingData() {
   let a = await fetch('https://jsonplaceholder.typicode.com/todos/1',{
    method:'POST' // We can use POST , DELETE , PUT , PULL and GET is by default
   })
     let data = await a.json()
      .console.log(data);
      
}
async function main() {
    console.log("Loading Modules");
    console.log("another code");
    console.log("data Loading");
    // settle means resolve or reject
    // resolve means promis has settled successfully
    // reject means promis has not settled successfully

    let data = await getData()
    console.log(data);
    console.log("process data 1");
    console.log("process data 2");
}

// data.then((v)=>{
//     console.log(data);
//     console.log("process data 1" );
//     console.log("process data 2");
// })
main()

