/**
 * How to implement Singleton?
 * 
 * 1. Make the constructor private 
 * 2. Create a static method who calls the private 
 * constructor and save the instance  in a static  variable
 * 
 */

class SingletonTs{
    private static instance: SingletonTs; //Atributo estático para almacenar el valor, llamado para la validación de getInstance() 
    private version: String;

    private constructor(version: String){
        this.version = version;
    }

    static getInstance(version: String): SingletonTs{
        //Si no existe el atributo instance...
        if(!SingletonTs.instance){
            SingletonTs.instance =  new SingletonTs(version);
        }
        //...lo crea. 
        return SingletonTs.instance;
    }
}

function appSingletonTs(){
    //Todas las variables tienen la misma referencia al mismo objeto. 1 sola instancia a lo largo de la aplicación:
    const singleton1 = SingletonTs.getInstance('version-1');
    const singleton2 = SingletonTs.getInstance('version-2');
    const singleton3 = SingletonTs.getInstance('version-3');

    console.log(singleton1 === singleton2); //true
    console.log(singleton1 === singleton3); //true
}

appSingletonTs();