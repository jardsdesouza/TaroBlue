let ultimoIndice = -1;

const deckDeCartas = [
    
    { imagem: 'imagens/block-bc.png', texto: 'Proibido o uso de Brave Counter' },
    { imagem: 'imagens/batalha-de-throw.png', texto: 'Somente será permitido Throw nessa Match.' },
    { imagem: 'imagens/block-golpe-ascendente.png', texto: 'Proibido o uso de Golpe Ascendente.' },
    { imagem: 'imagens/block-jump.png', texto: 'Proibido pular.' },
    { imagem: 'imagens/cmd-manual.png', texto: 'Somente é permitido comando Manual.' },
    { imagem: 'imagens/block-heavy.png', texto: 'Não é permitido botão Heavy.' },
    { imagem: 'imagens/main-swap.png', texto: 'Troca de Personagem, jogadores irão jogar com o main do oponente.' },
    { imagem: 'imagens/Chat_lunalu.png', texto: 'O chat vai escolher os personagens dos jogadores.'},
    { imagem: 'imagens/block-cristall.png', texto: 'Não e permitido o uso do cristal.'},
    { imagem: 'imagens/block-botton.png', texto: 'Não e permitido o uso do botão de Block.'},
    { imagem: 'imagens/block-botton-unique.png', texto: 'Não e permitido o uso do botão de Unique.'},  
    { imagem: 'imagens/block-skill.png', texto: 'Não e permitido o uso de Skill.'},
    { imagem: 'imagens/block-back-dash.png', texto: 'Não e permitido o uso do back dash.'},
    { imagem: 'imagens/block-unique-person.png', texto: 'Não e permitido o uso do unique do personagem'},
    { imagem: 'imagens/block-dash.png', texto: 'Não e permitido correr'},   
    { imagem: 'imagens/block-autocombo.png', texto: 'Não e permitido autocombo'},
    { imagem: 'imagens/block-barra.png', texto: 'Não e permitido o uso da barra AC'},
    { imagem: 'imagens/chat-select-card.png', texto: 'o chat pode escolher uma carta'},
    { imagem: 'imagens/lunalu.png', texto: 'jogadores escolhem lunalu, sem colocarem o main'},
    { imagem: 'imagens/block-66L.png', texto: 'Não é permitido o uso de 66L'},
    { imagem: 'imagens/double-card.png', texto: 'Será selecionado duas cartas para a match'},
    
];

const cardContainer = document.getElementById('tarotContainer');
const card = document.getElementById('tarotCard');
const statusText = document.getElementById('status');
const cardText = document.getElementById('cardText');
const cardResult = document.getElementById('cardResult');
let isAnimating = false;

cardContainer.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    cardText.classList.remove('show');
    card.classList.remove('flip');
    card.classList.add('invocando');
    
    let tempo = 5;
    statusText.innerText = `Invocando destino... ${tempo}`;

    const timer = setInterval(() => {
        tempo--;
        if (tempo > 0) {
            statusText.innerText = `Invocando destino... ${tempo}`;
        } else {
            clearInterval(timer);
            card.classList.remove('invocando');
            
            // Lógica para evitar repetição imediata
            let novoIndice;
            do {
                novoIndice = Math.floor(Math.random() * deckDeCartas.length);
            } while (novoIndice === ultimoIndice && deckDeCartas.length > 1);
            
            // Atualiza o último índice
            ultimoIndice = novoIndice;
            
            const cartaEscolhida = deckDeCartas[novoIndice];
            cardResult.style.backgroundImage = `url('${cartaEscolhida.imagem}')`;
            cardText.innerText = cartaEscolhida.texto;
            
            card.classList.add('flip');
            statusText.innerText = "Desafio revelado!";
            cardText.classList.add('show');
            isAnimating = false;
        }
    }, 1000);
});