// function minhaFunction() {
//     // Este
//     this.name = 'Gohara';
    
//     const minhaArrowFunction = () => {
//         this.lastName = 'Junior';
//     };

//     minhaArrowFunction()
// }

// console.log(new minhaFunction());
// console.log(this);


// const soma = () => {
//     console.log(arguments);
// }

// soma(1, 2, 3, 4, 5, 6, 7, 'Gohara');

const soma = () => {
    console.log('Corpo da função');
}
soma();


const soma2 = () => 'Hello World'
console.log(soma2());


const algumNumero = 10;
const soma3 = () => (
    algumNumero >= 10
        ? 'Maior igual a 10'
        : 'Menor que dez'
);

console.log(soma3());


const getUser = () => {
    return {
        id: '123',
        name: 'Gohara'
    };
};

console.log(getUser());
