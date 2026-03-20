/* ======================================================= */
/* 1. EFEITO DE DIGITAÇÃO E PONTE ASCII                    */
/* ======================================================= */
const linesContainer = document.getElementById('text-lines');
const phrases = [
    "Desenvolvedor Full Stack",
    "Especialista em Infraestrutura",
    "Especialista em IA Generativa",
    "Administrador de Ambientes Cloud",
    "Especialista Hypervisor"
];

let phraseIndex = 0;
let charIndex = 0;

// Nova Função de Digitação (Mantém o histórico)
function type() {
    if (phraseIndex < phrases.length) {
        // Se for o primeiro caractere da frase, cria uma nova linha
        if (charIndex === 0) {
            const lineElement = document.createElement('div');
            lineElement.id = 'line-' + phraseIndex;
            linesContainer.appendChild(lineElement);
        }

        const currentLine = document.getElementById('line-' + phraseIndex);
        currentLine.innerHTML += phrases[phraseIndex].charAt(charIndex);
        charIndex++;

        if (charIndex < phrases[phraseIndex].length) {
            setTimeout(type, 40); // Velocidade das letras
        } else {
            // Palavra terminou. Pula para a próxima após um breve delay
            phraseIndex++;
            charIndex = 0;
            setTimeout(type, 400); 
        }
    }
}

// Lógica da Ponte ASCII
const bridgeElement = document.getElementById('ascii-bridge');
const bridgeArt = " _.-'|¯¯|'-..-'|¯¯|'-._ "; // Desenho da ponte
let bridgeIndex = 0;

function drawBridge() {
    if (bridgeIndex < bridgeArt.length) {
        bridgeElement.innerHTML += bridgeArt.charAt(bridgeIndex);
        bridgeIndex++;
        setTimeout(drawBridge, 300); // Velocidade de construção da ponte
    }
}

// Inicializadores
document.addEventListener('DOMContentLoaded', () => {
    type(); // Inicia as linhas de texto
    setTimeout(drawBridge, 1500); // Começa a desenhar a ponte após 1.5s
    shuffleProjects(); 
    checkResolutionForBeam(); // Caso o farol já exista
});


/* ======================================================= */
/* 2. LÓGICA DO TERMINAL SECRETO                           */
/* ======================================================= */
const terminalOverlay = document.getElementById('secret-terminal');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

// Abrir Terminal
function openTerminal() {
    terminalOverlay.style.display = 'flex';
    terminalInput.focus();
}

// Fechar Terminal
function closeTerminal() {
    terminalOverlay.style.display = 'none';
}

// Fechar ao clicar fora da janela
terminalOverlay.addEventListener('click', (e) => {
    if (e.target === terminalOverlay) closeTerminal();
});

// Escutar o Enter
terminalInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const command = terminalInput.value.toLowerCase().trim();
        processCommand(command);
        terminalInput.value = '';
    }
});

// Processar Comandos
function processCommand(cmd) {
    // Mostra o que foi digitado
    printToTerminal(`admin@zamboni:~$ ${cmd}`, '#fff');

    switch (cmd) {
        case 'help':
            printToTerminal("Comandos disponíveis:");
            printToTerminal("- about: Quem sou eu");
            printToTerminal("- projects: Listar projetos");
            printToTerminal("- contact: Contatos");
            printToTerminal("- clear: Limpar tela");
            printToTerminal("- sudo: Acesso Administrador");
            printToTerminal("- exit: Sair");
            break;

        case 'about':
            printToTerminal("Bruno Zamboni. Especialista em Infraestrutura transformado em Dev.");
            printToTerminal("Foco em resolver problemas reais com código limpo.");
            break;

        case 'projects':
            printToTerminal("Carregando banco de dados...");
            setTimeout(() => {
                printToTerminal("1. [Infra] Migração Cloud AWS");
                printToTerminal("2. [Web] The Bridge Portfolio");
                printToTerminal("3. [App] Fintech 'Meu Bolso'");
            }, 600);
            break;

        case 'contact':
            printToTerminal("Instagram: @zambonib");
            printToTerminal("LinkedIn: /in/brunozamboni");
            break;

        case 'clear':
            terminalOutput.innerHTML = '';
            break;

        case 'exit':
            printToTerminal("Encerrando conexão...");
            setTimeout(closeTerminal, 800);
            break;

        case 'sudo':
            printToTerminal("Acesso negado: Você não tem permissão de root.", "red");
            break;

        case '':
            break;

        default:
            printToTerminal(`Comando não reconhecido: ${cmd}`, "orange");
    }
}

// Função Auxiliar para escrever na tela
function printToTerminal(text, color = '#0f0') {
    const newLine = document.createElement('div');
    newLine.className = 'response-line';
    newLine.style.color = color;
    newLine.innerHTML = text;
    terminalOutput.appendChild(newLine);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}


/* ======================================================= */
/* 3. EASTER EGG: CÓDIGO "DALZAM" (FUNDO DO SITE)          */
/* ======================================================= */

const secretCode = "dalzam";
let inputSequence = "";
let matrixRunning = false;

// OUVINTE DO TECLADO
document.addEventListener('keydown', (e) => {
    inputSequence += e.key.toLowerCase();
    
    // Mantém apenas os últimos caracteres do tamanho do código
    if (inputSequence.length > secretCode.length) {
        inputSequence = inputSequence.slice(-secretCode.length);
    }

    // Se a sequência for "dalzam", ativa!
    if (inputSequence === secretCode && !matrixRunning) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // 1. SEGURANÇA: Tenta pegar o canvas agora
    const matrixCanvas = document.getElementById('easter-egg-matrix');

    // Se não achar o canvas no HTML, para tudo e avisa no console
    if (!matrixCanvas) {
        console.error("ERRO: Canvas 'easter-egg-matrix' não encontrado no HTML!");
        return;
    }

    console.log("ACESSO CONCEDIDO: MODO MATRIX ATIVADO");
    matrixRunning = true;

    // 2. Some com os Orbs
    document.querySelectorAll('.orb').forEach(orb => {
        orb.classList.add('orbs-hidden');
    });

    // 3. Mostra o Canvas
    matrixCanvas.style.display = 'block';

    // 4. Inicia o Matrix
    startMatrixBackground(matrixCanvas);
}

function startMatrixBackground(canvasElement) {
    const mCtx = canvasElement.getContext('2d');

    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;

    // Caracteres: Katakana + Alfabeto + Números + Acentos PT-BR
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%ÇÁÉÍÓÚÃÕ';
    const fontSize = 16;
    const columns = canvasElement.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    const meuNome = "*ZAMBONI";
    const colunaEspecial = Math.floor(columns / 2); // Meio da tela

    function draw() {
        // Fundo preto com transparência (efeito rastro)
        mCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        mCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        
        mCtx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            // Efeito especial na coluna do meio
            if (i === colunaEspecial) {
                mCtx.fillStyle = '#FFF'; // Branco Brilhante
                mCtx.shadowBlur = 15;
                mCtx.shadowColor = "#0F0";
                
                const indexLetra = Math.floor(drops[i]) % meuNome.length;
                mCtx.fillText(meuNome[indexLetra], i * fontSize, drops[i] * fontSize);
                
                mCtx.shadowBlur = 0;
            } else {
                mCtx.fillStyle = '#0F0'; // Verde Matrix Padrão
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                mCtx.fillText(text, i * fontSize, drops[i] * fontSize);
            }

            // Reinicia a gota aleatoriamente
            if (drops[i] * fontSize > canvasElement.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 120); // Velocidade (maior número = mais lento)

    // Ajusta se redimensionar a tela
    window.addEventListener('resize', () => {
        canvasElement.width = window.innerWidth;
        canvasElement.height = window.innerHeight;
    });
}

/* ======================================================= */
/* 4. LÓGICA DOS FLASHCARDS DE HABILIDADES                 */
/* ======================================================= */

// Banco de Dados das Habilidades
// Você pode editar os textos aqui!
const skillData = {
    // HARD SKILLS
    'AWS': "Gerenciamento de EC2, S3, RDS e arquitetura Serverless. Migrei infraestruturas críticas reduzindo custos em 30%.",
    'Docker': "Criação de containers otimizados, multi-stage builds e orquestração para ambientes de desenvolvimento e produção.",
    'Kubernetes': "Administração de clusters EKS, deploy de aplicações escaláveis e configuração de Helm Charts.",
    'Linux': "18 anos de terminal. Shell Scripting avançado, gerenciamento de permissões, redes e hardening de segurança.",
    'Terraform': "Infraestrutura como Código (IaC) para provisionar ambientes inteiros na AWS em minutos, sem erro humano.",
    'JavaScript': "Manipulação de DOM, lógica assíncrona (Async/Await) e criação de interações ricas como este site.",
    'React': "Desenvolvimento de componentes funcionais, Hooks e consumo de APIs RESTful.",
    'Python': "Automação de tarefas repetitivas de infraestrutura e scripts de análise de dados (Pandas/Boto3).",

    // SOFT SKILLS
    'Liderança': "Liderei times técnicos em crises de servidores, mantendo a calma e organizando a recuperação de desastres.",
    'Conflitos': "Medio divergências entre times de Dev e Ops, focando sempre na solução técnica mais viável.",
    'Comunicação': "Traduzo problemas técnicos complexos ('o servidor caiu') para linguagem de negócios ('o checkout volta em 5min').",
    'Mentoria': "Adoro ensinar juniores. Acredito que compartilhar conhecimento fortalece a equipe inteira.",
    'Autodidata': "Aprendi a programar sozinho após anos em infra. Se não sei algo hoje, saberei amanhã."
};

function flipCard(cardId, skillKey) {
    const cardInner = document.getElementById(cardId);
    
    // Identifica se é Hard ou Soft para preencher no lugar certo
    const type = cardId === 'card-hard' ? 'hard' : 'soft';
    const titleEl = document.getElementById(`${type}-title`);
    const descEl = document.getElementById(`${type}-desc`);

    // Preenche o conteúdo
    titleEl.innerText = skillKey;
    // Pega a descrição do banco de dados ou usa uma padrão
    descEl.innerText = skillData[skillKey] || "Experiência sólida e comprovada nesta tecnologia.";

    // Gira o card
    cardInner.classList.add('flipped');
}

function unflipCard(cardId) {
    const cardInner = document.getElementById(cardId);
    // Remove a classe para girar de volta
    cardInner.classList.remove('flipped');
}

/* ======================================================= */
/* 4. INTELIGÊNCIA DO FAROL (RESOLUÇÃO)                    */
/* ======================================================= */

function checkResolutionForBeam() {
    const beam = document.querySelector('.headlight-beam');
    if (!beam) return;

    // Pega a largura atual da janela do navegador
    const width = window.innerWidth;

    // Definimos uma margem de segurança para Full HD
    // 1920px geralmente varia entre 1900 a 1940 por causa da barra de rolagem
    const isFullHD = width >= 1900 && width <= 1940;

    if (isFullHD) {
        // Se for Full HD, deixa o CSS controlar (aparece no hover)
        beam.style.display = ''; 
    } else {
        // Se NÃO for Full HD, força o desaparecimento
        beam.style.display = 'none';
    }
}

// Roda a verificação quando a página carrega
document.addEventListener('DOMContentLoaded', checkResolutionForBeam);

// Roda a verificação toda vez que alguém redimensionar a janela
window.addEventListener('resize', checkResolutionForBeam);

/* ======================================================= */
/* 5. BOTÃO FUGITIVO (EFEITO MAGNÉTICO/REPULSÃO)           */
/* ======================================================= */

const cvButton = document.getElementById('cv-button');
const cvModal = document.getElementById('cv-modal');

let chaseStartTime = null;
let chaseActive = true;

// Variáveis para guardar o quanto o botão já andou
let xOffset = 0;
let yOffset = 0;

if (cvButton) {
    document.addEventListener('mousemove', (e) => {
        if (!chaseActive || cvButton.classList.contains('disabled')) return;

        // 1. Onde está o botão agora?
        const btnRect = cvButton.getBoundingClientRect();
        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;

        // 2. Onde está o mouse?
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // 3. Qual a distância entre eles?
        const distX = mouseX - btnCenterX;
        const distY = mouseY - btnCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        // 4. Raio de perigo (150px). Se chegar perto, foge!
        if (distance < 150) {
            
            // Inicia o cronômetro na primeira vez que o usuário chega perto
            if (!chaseStartTime) chaseStartTime = Date.now();

            // Verifica se já passaram 5 segundos
            if (Date.now() - chaseStartTime > 5000) {
                endChase();
                return;
            }

            // A Mágica: Move na direção oposta ao mouse
            // Quanto mais perto, mais rápido ele foge
            const moveX = -(distX / distance) * 20; 
            const moveY = -(distY / distance) * 20;

            xOffset += moveX;
            yOffset += moveY;

            // Aplica o movimento
            cvButton.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        }
    });
}

function endChase() {
    chaseActive = false;
    
    // Mostra a mensagem
    if (cvModal) cvModal.style.display = 'flex';
}

function closeCvModal() {
    if (cvModal) cvModal.style.display = 'none';
    
    // Reseta o botão para o estado "morto"
    if (cvButton) {
        cvButton.classList.add('disabled');
        cvButton.innerText = "CV_Bruno.Zamboni.pdf (Indisponível)";
        // O CSS cuida de resetar a posição com o transform: none
    }
}

// Fechar Modal
if (cvModal) {
    window.addEventListener('click', (e) => {
        if (e.target === cvModal) closeCvModal();
    });
}

/* ======================================================= */
/* 6. RANDOMIZADOR DE PROJETOS                             */
/* ======================================================= */
function shuffleProjects() {
    // 1. Encontra o container onde estão os projetos
    // (Usamos o ID da seção para garantir que é o grid certo)
    const container = document.querySelector('#retrospectiva .grid-container');
    
    // Se não achar o container (ex: página errada), para a função
    if (!container) return;

    // 2. Transforma os filhos (as tags <a>) em um Array para podermos mexer
    const projects = Array.from(container.children);

    // 3. A Mágica: Embaralha o array aleatoriamente
    projects.sort(() => Math.random() - 0.5);

    // 4. Limpa o container e coloca os itens de volta na nova ordem
    container.innerHTML = '';
    projects.forEach(project => {
        container.appendChild(project);
    });
}

/* ======================================================= */
/* 7. GERADOR DA ÁRVORE DE NATAL 3D                        */
/* ======================================================= */
function buildChristmasTree() {
    const tree = document.getElementById('tree');
    if (!tree) return;

    // Configurações da Árvore
    const count = 100; // Quantidade de luzes
    const height = 300; // Altura em px
    const maxWidth = 150; // Largura da base

    for (let i = 0; i < count; i++) {
        const light = document.createElement('div');
        light.classList.add('tree-light');

        // Matemática da Espiral Cônica
        // 'p' vai de 0 (topo) a 1 (base)
        const p = i / count; 
        
        // Altura Y: vai descendo
        const y = -height / 2 + p * height; 
        
        // Raio: aumenta conforme desce (formato de cone)
        const radius = p * maxWidth; 
        
        // Ângulo: gira várias vezes para formar a espiral
        const angle = i * 0.5; // Ajuste 0.5 para mais ou menos voltas

        // Posição X e Z (Círculo)
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        // Aplica a transformação 3D
        light.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;

        // Adiciona um atraso aleatório na animação para elas não piscarem juntas
        light.style.animationDelay = `${Math.random() * 2}s`;
        
        // (Opcional) Cores aleatórias iniciais
        // light.style.backgroundColor = Math.random() > 0.5 ? '#39ff14' : '#ff0055';

        tree.appendChild(light);
    }
    
    // Adiciona a estrela no topo
    const star = document.createElement('div');
    star.style.cssText = `
        position: absolute; width: 20px; height: 20px; background: gold;
        top: -160px; left: 50%; margin-left: -10px;
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        box-shadow: 0 0 20px gold; animation: puls 1s infinite alternate;
    `;
    tree.appendChild(star);
}

/* ======================================================= */
/* COMPORTAMENTO: Glide.js Carrossel (Center Mode)         */
/* ======================================================= */
function initGlideCarousel() {
    if (document.querySelector('.cert-glide')) {
        new Glide('.cert-glide', {
            type: 'carousel',       
            startAt: 0,
            focusAt: 'center',      
            perView: 2,             // MUDANÇA AQUI: 2 no desktop (1 inteiro no centro, 0.5 em cada borda)
            gap: 40,                // Aumentei um pouco o gap para a imagem central respirar mais
            animationDuration: 600, 
            
            // Responsividade (Mantida intacta para não afetar os outros dispositivos)
            breakpoints: {
                1024: {
                    perView: 2,
                    focusAt: 'center' 
                },
                768: {
                    perView: 1.4,     
                    focusAt: 'center',
                    gap: 15
                }
            }
        }).mount();
    }
}

/* ======================================================= */
/* MODAL DE CERTIFICADOS TELA CHEIA (CORRIGIDO PARA GLIDE) */
/* ======================================================= */
function initCertificateModal() {
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('cert-full-img');

    if (!modal || !modalImg) return;

    // DELEGAÇÃO DE EVENTOS: Escuta cliques no documento inteiro
    document.addEventListener('click', function(e) {
        // Verifica se o elemento clicado tem a classe 'certificate-img'
        if (e.target && e.target.classList.contains('certificate-img')) {
            
            // 🔴 MUDANÇA SÊNIOR: Removemos o bloqueio de Mobile (innerWidth <= 768)
            // Agora o modal abrirá em qualquer resolução.

            // Copia o link da imagem clicada e abre o modal
            modalImg.src = e.target.src;
            modal.style.display = 'flex';
        }
    });

    // Fecha o modal ao clicar na área escura fora da imagem
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeCertModal();
        }
    });
}

// Função para fechar (chamada também pelo botão X no HTML)
function closeCertModal() {
    const modal = document.getElementById('cert-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

/* ======================================================= */
/* INICIALIZADOR GERAL                                     */
/* ======================================================= */
// Certifique-se de que essas chamadas estejam no seu DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    if (typeof type === 'function') type();
    if (typeof drawBridge === 'function') setTimeout(drawBridge, 1500);
    if (typeof shuffleProjects === 'function') shuffleProjects();
    if (typeof checkResolutionForBeam === 'function') checkResolutionForBeam();
    
    initGlideCarousel(); // Chama o Glide
    initCertificateModal(); // Mantém a função do Modal intacta! (Ela continua funcionando com o Glide)
});