console.log("Video 75");
console.log("Start");

 setTimeout(()=>{
    console.log("I am inside a Timeout");  
 },1000)
 console.log("End");
 
// Callback Function

const fn = () => {
  console.log("console");
  
}

const callback = (arg) =>{
console.log(arg);
fn()
}
const loadScript = (src,callback) => {
 let Script = document.createElement("script")
 Script.src = src;
 Script.onload = callback("Asad",fn)
 document.head.append(Script)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)