const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    /*alert('teste');*/
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    //console.log(name, email);

    let info = {
        name, email
    }

    let convertInfo = JSON.stringify(info);

    localStorage.setItem('lead', convertInfo);

    let content = document.getElementById('content');
    let loading = `<p>carregando...</p>` //colocar imagem
    let cadastro = `<p>Você foi cadastrado com sucesso.</p>`
    content.innerHTML= loading;
    setTimeout(() => {
        content.innerHTML= cadastro;
    },1000)
})