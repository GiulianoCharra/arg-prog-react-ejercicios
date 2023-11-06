let mensaje: String = "Hola Mundo";

mensaje = "chanchito feliz";

console.log(mensaje);

mensaje = "chao mundo";


//Tipos de datos
// let extincionDinosaurios: number = 76_000_000;
// let dinosaurioFavorito: string = "T-Rex";
// let extintos: boolean = true;

let extincionDinosaurios = 76_000_000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;

// extintos = 42;


let miVariable
miVariable = 5;
miVariable = "hola mundo";


function chanchitoFeliz(config: any) {
    return config
}

let animales = ["chanchito", "feliz", "felipe"]
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

animales.map(a => a.toUpperCase())
// El autocompletado sugiere los metodos de los tipos de datos numeero
//nums.map(n => n.)

let tupla: [number, string[]] = [1, ["chanchito feliz", "chanchito felipe"]]

let chica = "s"
let mediana = "m"
let grande = "l"
let extragrande = "xl"

enum Tallas { Chica = "s", Mediana = "m", Grande = "l", ExtraGrande = "xl" }

const variable1 = Tallas.Grande
console.log(variable1);

const enum LoadingState {
    Idle, Loading, Success, Error
}

const estado = LoadingState.Success


// const objeto: {
//     readonly id: number,
//     nombre: string,
//     talla: Tallas
// } = {
//     id: 1,
//     nombre: "Hola Mundo",
//     talla: Tallas.Mediana
// }


//objeto.id = 42
type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id: number,
    nombre: string,
    talla: Tallas,
    direccion: Direccion
}

const objeto: Persona = {
    id: 1,
    nombre: "Hola Mundo",
    talla: Tallas.Mediana,
    direccion: {
        numero: 1,
        calle: "Siempre viva",
        pais: "Chanchitolandia"
    }
}

const arr: Persona[] = []
