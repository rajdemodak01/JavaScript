//Immedaitely Invoked function Expressions.(IIFE)

(function chai(){
    //named IIFE
    console.log("DB connected");
})();

// ()()
//to get rid from global scope pollution we use IIFE

(   ()=>{
    //unnamed IIFE
    console.log("DB Connected");
} )();

(   (name)=>{
    //how to pass parameter in IIFE
    console.log(`DB Connected ${name}`);
} )('Raj');