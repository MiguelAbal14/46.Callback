(() => {
    function sacarCuadrado(value, callback) {
        setTimeout(() => {
            callback(value, value * value);
        }, 0 | Math.random() * 1000);
    }

    sacarCuadrado(5, (value, result) => {
        console.log(`El cuadrado de ${value} es ${result}`);
    });



    function cosas() {
        setTimeout((() => {
            console.log(`-------------------`);

        }), 0)
    }
    cosas();
})();


//Ejemplo 2
(() => {

    function myCallback(message) {
        console.log(message);
    }

    function welcome(variable, funcion) {
        const message = `welcome ${variable}`;
        myCallback(message);
    }

    welcome("Miguel", myCallback());

})();

//Ejemplo 2
(() => {
   
    function add(a, b, callback) {
        callback(a + b);
    }

   add(3,5,function(result){
    console.log(result);
   });


})()