console.log("Video 75");
console.log("Start");

 setTimeout(()=>{
    console.log("I am inside a Timeout");  
 },1000)
 console.log("End");
 
// Callback Function
const callback = (arg) =>{
console.log(arg);

}
const loadScript = (src,callback) => {
 let Script = document.createElement("script")
 Script.src = src;
 sc.onload = callback("Asad")
 document.head.append(sc)
}
