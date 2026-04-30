const alunos = [
    { nome: "Simon", nota1: 10.0, nota2: 7.25 },
    { nome: "Augusto", nota1: 5.1, nota2: 6.8 },
    { nome: "Andre ", nota1: 7.0, nota2: 8.9 },
    { nome: "Erik", nota1: 6.0, nota2: 6 },
    { nome: "Cristiano", nota1: 9.0, nota2: 8.2 },
]

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2
}

alunos.map((a) => a['media'] = calcularMedia(a.nota1, a.nota2))
const aprovados = alunos.filter((a) => a.media >= 6)


console.log(alunos)
console.log(`Alunos aprovados: `, aprovados);
console.log(`Media da sala de aula ${alunos.reduce((sum, a) => sum += a.media, 0) / alunos.length}`);
