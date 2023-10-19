import express from 'express';

const app = express();

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

app.get('/',paginaInicial);

// () => {}  é uma função anônima (arrow function ou função de seta)
app.listen(porta, host,  () => {
    //string literals permite concatenar variáveis com strings de uma maneira mais amigável
    // string literal = ``
    console.log(`Servidor executando em http://${host}:${porta}.`);
});