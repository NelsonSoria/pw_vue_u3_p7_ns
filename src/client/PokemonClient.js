function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const obtenerArregloNumerico = () => {
    const arreglo = [];
    for (let i = 0; i < 4; i++) {
        arreglo[i] = obtenerAleatorio(1, 600);
    }
    return arreglo;
}
const obtenerArregloPokemons = (arreglo) => {
    const arregloPokemons = [];

    const obj1= {

    };
    const obj2= {

    };
    const obj3= {

    };
    const obj4= {

    };
    arregloPokemons[0]=obj1;
    arregloPokemons[1]=obj2;
    arregloPokemons[2]=obj3;
    arregloPokemons[3]=obj4;

}