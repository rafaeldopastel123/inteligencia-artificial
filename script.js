const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um dispositivo que consegue mapear qualquer lugar do mundo em 3D com detalhes incríveis, ele também simula condições climáticas e eventos geológicos. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode revelar sobre o planeta. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar essa ferramenta para explorar lugares remotos. "
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia de mapeamento avançado, uma professora de geografia da escola decidiu fazer uma sequência de aulas sobre esta ferramenta. No fim de uma aula ela pede que você escreva um trabalho sobre o impacto dessa tecnologia no estudo da geografia. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza a ferramenta de mapeamento para gerar dados e visualizações que ajudem a ilustrar seu trabalho e explique suas descobertas de forma clara.",
                afirmacao: "Conseguiu utilizar a tecnologia para buscar informações geográficas úteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como o mapeamento avançado impacta o trabalho do geógrafo do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que essa tecnologia pode criar novas oportunidades de emprego para geógrafos e melhorar a precisão das análises geográficas.",
                afirmacao: "Vem impulsionando a inovação na área de geotecnologias e luta para abrir novos caminhos profissionais com o mapeamento avançado."
            },
            {
                texto: "Me preocupo com os geógrafos que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre geógrafos para discutir meios de utilização de tecnologias de mapeamento de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar um mapa digital que representasse o que pensa sobre o mapeamento avançado. E agora?",
        alternativas: [
            {
                texto: "Criar um mapa utilizando uma plataforma de design tradicional, como um software de edição de imagens.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de cartografia utilizando softwares de mapeamento digital para iniciantes."
            },
            {
                texto: "Criar um mapa utilizando um gerador de mapas automatizado com base nos dados que você coletou.",
                afirmacao: "Acelerou o processo de criação de mapas utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar mapas manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de geografia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu usar um software de mapeamento para gerar todas as análises. O problema é que o trabalho está totalmente igual aos exemplos do software. O que você faz? ",
        alternativas: [
            {
                texto: "Usar softwares de mapeamento é uma forma de contribuir com o trabalho, por isso não é um problema utilizar as análises geradas diretamente.",
                afirmacao: "Infelizmente passou a utilizar softwares de mapeamento para fazer todas suas tarefas e agora se sente dependente da tecnologia para tudo."
            },
            {
                texto: "O software pode ser uma ferramenta muito avançada, mas é preciso manter a atenção, pois toda máquina erra. Por isso, revisar o trabalho e contribuir com as perspectivas pessoais e análises críticas é essencial.",
                afirmacao: "Percebeu que toda ferramenta de mapeamento reproduz orientações baseadas em seus algoritmos, e muito do que o software gerava não refletia o que pensava. Por isso, sabe que os mapas e análises gerados por softwares devem servir como auxílio e não como resultado final."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
