// ===============================
// ELEMENTOS DO HTML
// ===============================

const perguntaElemento = document.querySelector("#pergunta");

const alternativasElemento =
    document.querySelector("#alternativas");

const resultadoElemento =
    document.querySelector("#resultado");

const textoResultado =
    document.querySelector("#texto-resultado");

const botaoNovamente =
    document.querySelector("#novamente-btn");

const barraProgresso =
    document.querySelector("#barra-progresso");


// ===============================
// VARIÁVEIS
// ===============================

let perguntaAtual = 0;

let historiaFinal = "";


// ===============================
// PERGUNTAS DO JOGO
// ===============================

const perguntas = [

    {
        enunciado:
            "Você acabou de sair da escola e encontra uma nova Inteligência Artificial capaz de responder perguntas, criar imagens e produzir músicas. Qual é sua primeira reação?",

        alternativas: [

            {
                texto: "🤔 Quero descobrir como ela funciona.",
                historia:
                    "Você decide pesquisar sobre Inteligência Artificial. Descobre que essas tecnologias conseguem identificar padrões em grandes quantidades de dados."
            },

            {
                texto: "😨 Isso é assustador!",
                historia:
                    "Você fica preocupado com a velocidade do avanço da tecnologia. Começa a pesquisar sobre os riscos, a privacidade e a segurança da Inteligência Artificial."
            },

            {
                texto: "🚀 Isso é incrível! Quero usar agora.",
                historia:
                    "Você fica empolgado com as possibilidades. Começa a imaginar como a IA pode ajudar nos estudos, no trabalho e na criatividade."
            }

        ]
    },


    {
        enunciado:
            "Na escola, seu professor permite que os alunos utilizem IA para estudar. O que você decide fazer?",

        alternativas: [

            {
                texto: "📚 Usar a IA para aprender melhor.",
                historia:
                    "Você utiliza a IA para receber explicações, exemplos e ajuda para estudar. Percebe que a tecnologia pode ser uma ótima ferramenta quando usada com responsabilidade."
            },

            {
                texto: "🤖 Deixar a IA fazer todas as atividades.",
                historia:
                    "Você começa a deixar a IA fazer suas tarefas. Depois percebe que está aprendendo menos e entende que a tecnologia deve ajudar, e não substituir completamente seu esforço."
            },

            {
                texto: "🔎 Testar se a IA pode cometer erros.",
                historia:
                    "Você começa a fazer perguntas difíceis para a IA. Descobre que ela também pode errar e aprende que é importante verificar as informações."
            }

        ]
    },


    {
        enunciado:
            "Uma empresa começa a usar Inteligência Artificial para selecionar candidatos para empregos. Qual é sua opinião?",

        alternativas: [

            {
                texto: "👍 A IA pode ajudar a tornar o processo mais rápido.",
                historia:
                    "Você acredita que a IA pode ajudar em tarefas repetitivas, mas entende que pessoas devem supervisionar decisões importantes."
            },

            {
                texto: "⚠️ É necessário ter supervisão humana.",
                historia:
                    "Você percebe que uma IA pode reproduzir preconceitos existentes nos dados. Por isso, defende que decisões importantes tenham participação humana."
            },

            {
                texto: "🤖 A IA deveria tomar todas as decisões.",
                historia:
                    "Você acredita que computadores podem analisar informações mais rapidamente que seres humanos. Ao mesmo tempo, começa a refletir sobre os limites que deveriam existir."
            }

        ]
    },


    {
        enunciado:
            "Em uma aula, sua professora pergunta qual é um dos maiores desafios da Inteligência Artificial. O que você responde?",

        alternativas: [

            {
                texto: "🔐 Privacidade e segurança.",
                historia:
                    "Você passa a valorizar tecnologias que protejam informações pessoais e respeitem a privacidade dos usuários."
            },

            {
                texto: "⚖️ Ética e responsabilidade.",
                historia:
                    "Você entende que desenvolver uma tecnologia poderosa também significa pensar nas consequências de seu uso."
            },

            {
                texto: "💡 Criatividade e inovação.",
                historia:
                    "Você acredita que a IA pode ampliar a criatividade humana e ajudar pessoas a desenvolver novas ideias."
            }

        ]
    },


    {
        enunciado:
            "O ano é 2049. A Inteligência Artificial está presente em praticamente todos os lugares. Qual será sua escolha para o futuro?",

        alternativas: [

            {
                texto: "💻 Quero trabalhar criando novas IAs.",
                historia:
                    "Em 2049, você decide trabalhar com programação e Inteligência Artificial. Seu objetivo é criar tecnologias úteis para a sociedade."
            },

            {
                texto: "🛡️ Quero trabalhar com segurança de IA.",
                historia:
                    "Em 2049, você se torna especialista em segurança e ética de Inteligência Artificial. Seu trabalho é ajudar a tornar as novas tecnologias mais seguras."
            },

            {
                texto: "🎨 Quero usar IA para criar coisas novas.",
                historia:
                    "Em 2049, você utiliza Inteligência Artificial para criar jogos, histórias, imagens e projetos inovadores, usando a tecnologia como parceira da criatividade humana."
            }

        ]
    }

];


// ===============================
// MOSTRAR PERGUNTA
// ===============================

function mostraPergunta() {

    // Verifica se todas as perguntas acabaram

    if (perguntaAtual >= perguntas.length) {

        mostraResultado();

        return;
    }


    // Pega a pergunta atual

    const pergunta = perguntas[perguntaAtual];


    // Coloca o texto da pergunta na tela

    perguntaElemento.textContent =
        pergunta.enunciado;


    // Limpa as alternativas anteriores

    alternativasElemento.innerHTML = "";


    // Atualiza a barra de progresso

    const progresso =
        (perguntaAtual / perguntas.length) * 100;

    barraProgresso.style.width =
        progresso + "%";


    // Cria os botões

    pergunta.alternativas.forEach(
        function (alternativa) {

            const botao =
                document.createElement("button");


            botao.classList.add("alternativa");


            botao.textContent =
                alternativa.texto;


            // Quando clicar na alternativa

            botao.addEventListener(
                "click",
                function () {

                    respostaSelecionada(
                        alternativa
                    );

                }
            );


            alternativasElemento.appendChild(
                botao
            );

        }
    );
}


// ===============================
// RESPOSTA ESCOLHIDA
// ===============================

function respostaSelecionada(alternativa) {

    // Adiciona a história daquela escolha

    historiaFinal +=
        alternativa.historia + "\n\n";


    // Vai para a próxima pergunta

    perguntaAtual++;


    // Mostra a próxima pergunta

    mostraPergunta();
}


// ===============================
// MOSTRAR RESULTADO
// ===============================

function mostraResultado() {

    // Barra chega ao final

    barraProgresso.style.width = "100%";


    // Esconde pergunta

    perguntaElemento.parentElement.style.display =
        "none";


    // Esconde alternativas

    alternativasElemento.style.display =
        "none";


    // Mostra resultado

    resultadoElemento.classList.add("mostrar");


    // Mostra a história criada pelas escolhas

    textoResultado.textContent =
        historiaFinal;
}


// ===============================
// JOGAR NOVAMENTE
// ===============================

function jogaNovamente() {

    // Volta para a primeira pergunta

    perguntaAtual = 0;


    // Apaga a história anterior

    historiaFinal = "";


    // Mostra novamente a pergunta

    perguntaElemento.parentElement.style.display =
        "block";


    // Mostra novamente as alternativas

    alternativasElemento.style.display =
        "flex";


    // Esconde o resultado

    resultadoElemento.classList.remove(
        "mostrar"
    );


    // Começa o jogo novamente

    mostraPergunta();
}


// ===============================
// BOTÃO JOGAR NOVAMENTE
// ===============================

botaoNovamente.addEventListener(
    "click",
    jogaNovamente
);


// ===============================
// INICIAR JOGO
// ===============================

mostraPergunta();