function soma(a: number, b: number): number {
    return a + b;
}

const resultado: number = soma(5, 3);
console.log("Resultado da Soma:", resultado);

// -----------------------------------------------
const nome: string  = 'lucas';
function saudacao(): void {
    console.log("Olá: " +nome);
}

saudacao();