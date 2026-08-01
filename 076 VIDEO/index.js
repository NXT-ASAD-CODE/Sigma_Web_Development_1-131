async function getData() {
    // Promise has Three states fulfilled , rejected , pending  
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500)
    })
}
async function FetchingData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json)) 
}
async function main() {
    console.log("Loading Modules");
    console.log("another code");
    console.log("data Loading");
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

