/**
 * How to implement Singleton?
 * 
 * 1. Make the constructor private 
 * 2. Create a static method who calls the private 
 * constructor and save the instance  in a static  variable
 * 
 */

class Singleton{
    static instance  = undefined; //Atributo estático para almacenar el valor, llamado para la validación de getInstance() 

    constructor(version){
        this.version = version;
    }

    static getInstance(version){
        //Si no existe el atributo instance...
        if(!Singleton.instance){
            Singleton.instance =  new Singleton(version);
        }
        //...lo crea. 
        return Singleton.instance;
    }
}

function appSingleton(){
    //Todas las variables tienen la misma referencia al mismo objeto. 1 sola instancia a lo largo de la aplicación:
    const singleton1 = Singleton.getInstance('version-1');
    const singleton2 = Singleton.getInstance('version-2');
    const singleton3 = Singleton.getInstance('version-3');

    console.log(singleton1 === singleton2); //true
    console.log(singleton1 === singleton3); //true
}

appSingleton();