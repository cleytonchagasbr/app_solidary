//string 
let nome: string = 'Cleyton'

//number 
let idade: number = 27

//boolean
let valida: boolean = false

//tipos explicitos
let minhaIdade
minhaIdade = 27
minhaIdade = 'não é 27'

//-- -- 

//array
let hobbies: any[] = ['Jogar','Comer','Cozinhar',28, 229, false]

// tuplas
let endereco = ['Av Brazil', 512, 'Bloco A']
let endereco2: [string, number, string] = ['Av Jaragua', 338, 'Esquina']

//enums
enum Cor {
    Azul,
    Amarelo,
    Verde
}

let minhaCor: Cor = Cor.Azul

// any
let car: any = "Tesla"
car = 25
car = ['Tesla', 30.000, 'San Francisco']

// -- --

//functions
function retornaNome(): string {
    return nome
}

function multi(numA: number, numB:number): number {
    return numA * numB
}

//tipo function
/*
    Criada uma constante que recebe uma function.
    Nos parenteses colocar todos os tipos que seram passados
    para a function 
*/
let calculo: (numA: number, numB: number) => number
calculo = multi
console.log(calculo(5, 6))

// -- -- 

//objetos 
let usuario: { nome: string, idade: number } = {
    nome: 'Cleyton',
    idade: 20
}

usuario = {
    nome: 'Cleyton',
    idade: 20
}

//Desafio

//Type para objetos
type Funcionario = {
    supervisores: string[], 
    baterPonto: (horario:number) => string 
}

let funcionario: Funcionario = {
     
    supervisores: ['Cleyton', 'Elon'],
    baterPonto(horario: number): string {
        if (horario <=8) return 'Ponto normal'
        
        else (horario > 8) 
        return 'Fora do normal'
    }
}
// console.log(funcionario.supervisores)
// console.log(funcionario.baterPonto(5));
// console.log(funcionario.baterPonto(10));


