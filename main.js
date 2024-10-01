// Características iniciais do herói
let vida = 100;
let forca = 10;
let recurso = 50;
const rodadas = 5;

function startGame() {
    console.log("Bem-vindo à Aventura de Artemis!");
    console.log(`Você começa com: Vida: ${vida}, Força: ${forca}, Recurso: ${recurso}`);
    for (let i = 1; i <= rodadas; i++) {
        if (vida <= 0) {
            console.log("Artemis caiu em batalha. Fim do jogo.");
            return;
        }
        rodada(i);
    }
    console.log("Parabéns! Artemis completou a aventura com sucesso!");
}

function rodada(numero) {
    console.log(`\n--- Rodada ${numero} ---`);
    let desafio = Math.floor(Math.random() * 3); // 0, 1 ou 2
    let resultado;

    switch (desafio) {
        case 0:
            resultado = lutarContraInimigo();
            break;
        case 1:
            resultado = encontrarAliado();
            break;
        case 2:
            resultado = encontrarArmadilha();
            break;
    }

    console.log(resultado);
    console.log(`Status após a rodada: Vida: ${vida}, Força: ${forca}, Recurso: ${recurso}`);
}

function lutarContraInimigo() {
    const dano = Math.floor(Math.random() * 20) + 5; // Dano entre 5 e 25
    vida -= dano;
    return `Você encontrou um inimigo e sofreu ${dano} de dano.`;
}

function encontrarAliado() {
    const ganho = Math.floor(Math.random() * 30) + 10; // Ganho entre 10 e 40
    recurso += ganho;
    return `Você encontrou um aliado que lhe deu ${ganho} recursos.`;
}

function encontrarArmadilha() {
    const dano = Math.floor(Math.random() * 15) + 5; // Dano entre 5 e 20
    vida -= dano;
    forca += 3; // Aumenta a força após uma armadilha
    return `Você caiu em uma armadilha e sofreu ${dano} de dano, mas ganhou força!`;
}

// Iniciar o jogo
startGame();