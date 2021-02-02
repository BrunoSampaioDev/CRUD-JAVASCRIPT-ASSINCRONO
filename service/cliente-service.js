
/********************************************** 
                LISTAR CLIENTE
**********************************************/ 

const listaClientes = () => {

    return fetch(`http://localhost:3000/profile`)
    .then( resposta =>{
        return resposta.json();
    });

};



/********************************************** 
                CADASTRAR CLIENTE
**********************************************/ 

const criaCliente = (nome, email) =>{
    return fetch(`http://localhost:3000/profile`, {

        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },

        body: JSON.stringify({

                nome: nome,
                email: email
            }
        )
    })
    .then(resposta =>{
        return resposta.body;
    });

};

/********************************************** 
                REMOVER CLIENTE
**********************************************/ 
const removeCliente = (id) =>{

    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}


/********************************************** 
                ATUALIZA CLIENTES
**********************************************/ 
const detalhaCliente = (id) =>{

    return fetch(`http://localhost:3000/profile/${id}`)
    .then( resposta =>{
        return resposta.json();
    });
}

const atualizaCliente = (id, nome, email) =>{

    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers:{
            'content-type' : 'application/json'
        },

        body: JSON.stringify({

            nome: nome,
            email: email
        }
    )}
    )
    .then(resposta =>{
        return resposta.json()
    })
}

/********************************************** 
                EXPORT COMPONENTES
**********************************************/ 
export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
};