
document.querySelector('.noite').addEventListener('click', dark);

document.querySelector('.dia').addEventListener('click', light);

function dark() {
    const body = document.querySelector('.body'); // ou document.body se preferir
    body.classList.add('dark'); // adiciona a classe 'dark'

    verificaClasse = body.classList.contains('dark')
    if(verificaClasse){
        const dia = document.querySelector('.dia');
        dia.style.display = 'flex';

        const noite = document.querySelector('.noite')
        noite.style.display='none';
    }
   
}

function light(){
    const body = document.querySelector('.body');
    body.classList.toggle('dark');
    const dia = document.querySelector('.dia');
        dia.style.display = 'none';

        const noite = document.querySelector('.noite')
        noite.style.display='flex';
}