import {clienteService} from '../service/cliente-service.js'

const criaNovaLinha = (nome, email, id) => {

    const linhaNovoCliente = document.createElement('tr');

    const conteuto = `

    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td> 

    `

    linhaNovoCliente.innerHTML = conteuto;
    linhaNovoCliente.dataset.id = id;

    return linhaNovoCliente;
}


const tabelas = document.querySelector('[data-tabela]');



tabelas.addEventListener('click', (evento)=>{
    let ehBotaoDeletar =  evento.target.className == 'botao-simples botao-simples--excluir'
    if(ehBotaoDeletar){
        const linhaCliente = evento.target.closest('[data-id]');
        let id = linhaCliente.dataset.id
        clienteService.removeCliente(id)
        .then( ()=>{
            linhaCliente.remove()
        })
    }
})

clienteService.listaClientes()
.then(data =>{
    data.forEach(elemento => {
        tabelas.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id));
    });
});