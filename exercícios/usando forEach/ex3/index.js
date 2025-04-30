
let aprovados = [];

 let reprovados = [];

const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carlos', nota: 7 },
    { nome: 'Diana', nota: 4 },
    { nome: 'Eduarda', nota: 9 }
  ];

    alunos.forEach((item)=>{
        if (item.nota >= 6){
            console.log (`Senhor ${item.nome} sua nota foi ${item.nota} e foi aprovado`);
            aprovados.push(item)
        }else{
            console.log(`Senhor ${item.nome} sua nota foi ${item.nota} e foi reprovado`)
            reprovados.push(item)
        }
    }) 

        let toralAprovados = 0;
        let toralReprovados = 0;


    console.log (`total de aprovaod ${aprovados.length}, total de reprovados ${reprovados.length}`)