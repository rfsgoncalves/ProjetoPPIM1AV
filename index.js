import express from 'express';

const app = express();

//faz aí um projeto que fornece uma página exibindo o cálculo de potência de um número (expoente de 1 a 100)

const host = '0.0.0.0'; //ip genérico que representa todas as interfaces de rede (placas de rede) locais do seu computador
const porta = 3000; //porta identifica uma aplicação, dentro inúmeras, que podem estar sendo executadas no seu computador.

//requisicao e a resposta são parâmetro que o express automaticamente passará para sua função
function paginaInicial(requisicao, resposta) {
    resposta.send(`<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Seja bem-vindo a minha primeira aplicação para a Internet</title>
    </head>
    <body>
        <h1>Essa é minha página inicial</h1>
    </body>
    </html>
    `);
    resposta.end();
}

function gerarPaginaPotencia(requisicao, resposta) {
    try{
     const numero = Number(requisicao.query.numero);  
     let conteudoResposta = `
        <!DOCTYPE html>	
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Potência de 0 a 100 da base ${numero}</title>
            </head>
            <body>
                <h1>Potência de 0 a 100 da base ${numero}</h1>
                <ul>
        
    `; 
    for (let i=0; i<=100; i++){
      const linha = `<li>${numero} elevado a ${i} = ${numero**i}</li>`;
      conteudoResposta += linha;
    }
    conteudoResposta+=`
                </ul>
            </body>
        </html>
    `;
    resposta.end(conteudoResposta);
    
    } catch (erro) {
        resposta.end(`
        <!DOCTYPE html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Erro ao processar a potência de um número</title>
            </head>
            <body>
                <h1>Não foi possível processar a sua requisição</h1>
                <h2>Erro ao tentar gerar os resultados</h2>
                <h2>Na barra de endereços digite por exemplo http://localhost:3000/potencia?numero=2</h2>
                <h3>${erro.message}</h3> 
            </body>
        </html>
        `);
    }
}

app.get('/',paginaInicial);
app.get('/potencia', gerarPaginaPotencia);

// () => {}  é uma função anônima (arrow function ou função de seta)
app.listen(porta, host,  () => {
    //string literals permite concatenar variáveis com strings de uma maneira mais amigável
    // string literal = ``
    console.log(`Servidor executando em http://${host}:${porta}.`);
});