let contador = 0;
let imagemUser1 = "";
let imagemUser2 = "";

const listaImagensPerfil = ["frieren.jpg", "hoshimi.png", "kurumi_kurusu.jpg"];
const listaBackground = ["2b.jpg", "frieren.jpg"];

document.addEventListener('DOMContentLoaded', async () => {
    ObterImagensConversaGrupo();
    await conversaSimulada();
});

function ObterImagensConversaGrupo() {

    let listVolatil = listaImagensPerfil;

    let imagem1 = listVolatil[Math.floor(Math.random() * listVolatil.length)];
    const img_container = document.getElementById("imagem_conversa_grupo");
    img_container.src = `./imagem/${imagem1}`;

    listVolatil = listVolatil.filter(item => item !== imagem1);
    imagemUser1 = listVolatil[Math.floor(Math.random() * listVolatil.length)];

    listVolatil = listVolatil.filter(item => item !== imagemUser1);
    imagemUser2 = listVolatil[Math.floor(Math.random() * listVolatil.length)];

    const pai_container = document.getElementById("principal");
    let backgroundConversaGrupo = listaBackground[Math.floor(Math.random() * listaBackground.length)];
    pai_container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(./background/${backgroundConversaGrupo})`;
}

async function conversaSimulada() {
    const lista = [
        "Oi, tudo bem?",
        "Como você está?",
        "Tudo certo?",
        "Bom dia!",
        "Boa tarde!",
        "Boa noite!",
        "Oi, sumido!",
        "O que você faz?",
        "Onde você está?",
        "Está ocupado?",
        "Posso falar com você?",
        "Me chama depois",
        "Me manda mensagem",
        "Tudo bem por aí?",
        "Como foi seu dia?",
        "O que aconteceu?",
        "Me conta",
        "Sério?",
        "Não acredito",
        "Que legal",
        "Que chato",
        "Entendi",
        "Não entendi",
        "Pode repetir?",
        "Explica melhor",
        "Beleza",
        "Tá bom",
        "Certo",
        "Vamos lá",
        "Bora",
        "Tô chegando",
        "Já vou",
        "Espera um pouco",
        "Um minuto",
        "Já volto",
        "Voltei",
        "Desculpa",
        "Sem problemas",
        "Obrigado",
        "De nada",
        "Por favor",
        "Com licença",
        "Prazer em te conhecer",
        "Muito prazer",
        "Como você se chama?",
        "Qual seu nome?",
        "Quantos anos você tem?",
        "Onde você mora?",
        "O que você faz da vida?",
        "Você trabalha ou estuda?",
        "Estou cansado",
        "Estou ocupado",
        "Estou livre",
        "Tô de boa",
        "Tô de boa sim",
        "Tudo certo aqui",
        "Mais ou menos",
        "Nem sei",
        "Sei lá",
        "Pode ser",
        "Talvez",
        "Acho que sim",
        "Acho que não",
        "Com certeza",
        "Claro",
        "Nunca",
        "Jamais",
        "Sempre",
        "Às vezes",
        "Agora não",
        "Depois",
        "Amanhã",
        "Hoje",
        "Ontem",
        "Essa semana",
        "Tudo bem",
        "Tudo ótimo",
        "Tudo tranquilo",
        "Sem problemas",
        "Relaxa",
        "Fica tranquilo",
        "Pode deixar",
        "Entendido",
        "Beleza então",
        "Fechado",
        "Combinado",
        "Vamos marcar",
        "Quando?",
        "Onde?",
        "Que horas?",
        "Me avisa",
        "Me chama",
        "Estou a caminho",
        "Cheguei",
        "Tô aqui",
        "Me espera",
        "Tô indo",
        "Já cheguei",
        "Até mais",
        "Tchau"
    ];

    let tempo_padrao = 500;
    let numero_mensagens = Math.floor(Math.random() * 20) + 10;
    let mensagem_atual = 0;

    while (mensagem_atual <= numero_mensagens) {
        let texto_mensagem = lista[Math.floor(Math.random() * lista.length)];
        let userSendSimulado = Math.floor(Math.random() * 10) + 1;
        if (userSendSimulado % 2 === 0) {
            adicionarDivUser1(texto_mensagem);
        } else {
            adicionarDivUser2(texto_mensagem);
        }
        await sleep(tempo_padrao);
        mensagem_atual++;
    }
}

function adicionarDivUser1(texto) {

    contador++;
    const pai_container = document.getElementById("principal");

    const nova_div_container = document.createElement("div");
    nova_div_container.className = contador == 1 ? "div_class_container_text margin_inicial" : "div_class_container_text";
    nova_div_container.id = `nova_div_container_text_${contador}`;
    pai_container.appendChild(nova_div_container);

    const pai_container_text = document.getElementById(`nova_div_container_text_${contador}`);

    const nova_div_imagem = document.createElement("div");
    nova_div_imagem.id = `div_imagem_user1_${contador}`;
    nova_div_imagem.style.display = "flex";
    nova_div_imagem.style.justifyContent = "center";
    pai_container_text.appendChild(nova_div_imagem);

    const img_user1_container = document.getElementById(`div_imagem_user1_${contador}`);
    const img_user1 = document.createElement("img");
    img_user1.src = `./imagem/${imagemUser1}`;
    img_user1.style.objectFit = "cover";
    img_user1.style.height = "40px";
    img_user1.style.borderRadius = "50%";
    img_user1_container.appendChild(img_user1);

    const nova_div_text = document.createElement("div");

    // const valor_input = document.getElementById("input_user1").value;
    const valor_input = "";
    // nova_div_text.textContent = valor_input != '' ? `${valor_input}` : "olá, bom dia";
    nova_div_text.textContent = texto;

    nova_div_text.style.padding = "10px";
    nova_div_text.style.margin = "5px";
    nova_div_text.style.width = "35%";
    nova_div_text.style.borderRadius = "0.3rem";
    nova_div_text.style.fontSize = "12px";

    nova_div_text.className = "usuario1"

    pai_container_text.appendChild(nova_div_text);
    pai_container.scrollTop = pai_container.scrollHeight;
}

function adicionarDivUser2(texto) {

    contador++;
    const pai_container = document.getElementById("principal");

    const nova_div_container = document.createElement("div");
    nova_div_container.className = contador == 1 ? "div_class_container_text nova_div_container_text_user2 margin_inicial" : "div_class_container_text nova_div_container_text_user2";

    nova_div_container.id = `nova_div_container_text_${contador}`;
    pai_container.appendChild(nova_div_container);

    const pai_container_text = document.getElementById(`nova_div_container_text_${contador}`);

    const nova_div_imagem = document.createElement("div");
    nova_div_imagem.id = `div_imagem_user1_${contador}`;
    nova_div_imagem.style.display = "flex";
    nova_div_imagem.style.justifyContent = "center";
    pai_container_text.appendChild(nova_div_imagem);

    const img_user1_container = document.getElementById(`div_imagem_user1_${contador}`);
    const img_user1 = document.createElement("img");
    img_user1.src = `./imagem/${imagemUser2}`;
    img_user1.style.objectFit = "cover";
    img_user1.style.height = "40px";
    img_user1.style.borderRadius = "50%";
    img_user1_container.appendChild(img_user1);

    const nova_div_text = document.createElement("div");

    // const valor_input = document.getElementById("input_user2").value;
    const valor_input = "";
    // nova_div_text.textContent = valor_input != '' ? `${valor_input}` : "olá, bom dia";
    nova_div_text.textContent = texto;

    nova_div_text.style.padding = "10px";
    nova_div_text.style.margin = "5px";
    nova_div_text.style.width = "35%";
    nova_div_text.style.borderRadius = "0.3rem";
    nova_div_text.style.fontSize = "12px";

    nova_div_text.className = "usuario2"

    pai_container_text.appendChild(nova_div_text);
    pai_container.scrollTop = pai_container.scrollHeight;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
