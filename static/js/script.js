/* ======================================================= */
/* DICIONÁRIO DE TRADUÇÃO (i18n) - INICIAL                 */
/* ======================================================= */
const translations = {
    pt: {
        "infra": "● Infraestrutura",
        "dev": ">_ Desenvolvimento",
        "hero_greeting": "Olá, Sou o Bruno Zamboni Desenvolvedor Full Stack.",
        "hero_desc": "Criei meu portfólio para mostrar minhas Habilidades e Projetos.",
        "hero_exp": "São 18 anos de experiência dentro da área de TI. <br> Agora chegou a hora de criarmos experiências.",
        "btn_cv": "DOWNLOAD: CV_BRUNO.ZAMBONI.PDF",
        "btn_projects": "Explorar Projetos"
    },
    en: {
        "infra": "● Infrastructure",
        "dev": ">_ Development",
        "hero_greeting": "Hello, I'm Bruno Zamboni Full Stack Developer.",
        "hero_desc": "I created my portfolio to showcase my Skills and Projects.",
        "hero_exp": "18 years of experience in the IT field. <br> Now it's time to create experiences.",
        "btn_cv": "DOWNLOAD: CV_BRUNO.ZAMBONI.PDF",
        "btn_projects": "Explore Projects"
    }
};

function changeLanguage(lang) {
    // 1. Atualiza o visual das bandeiras
    const flags = document.querySelectorAll('.flag-icon');
    flags.forEach(flag => {
        flag.classList.remove('active-lang');
        if (flag.getAttribute('onclick').includes(lang)) {
            flag.classList.add('active-lang');
        }
    });

    // 2. Traduz os textos na tela
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // 3. Salva a preferência
    localStorage.setItem('preferredLanguage', lang);
}

/* ======================================================= */
/* 1. EFEITO DE DIGITAÇÃO                                  */
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

function type() {
    if (phraseIndex < phrases.length) {
        if (charIndex === 0) {
            const lineElement = document.createElement('div');
            lineElement.id = 'line-' + phraseIndex;
            linesContainer.appendChild(lineElement);
        }

        const currentLine = document.getElementById('line-' + phraseIndex);
        currentLine.innerHTML += phrases[phraseIndex].charAt(charIndex);
        charIndex++;

        if (charIndex < phrases[phraseIndex].length) {
            setTimeout(type, 100); 
        } else {
            phraseIndex++;
            charIndex = 0;
            setTimeout(type, 400); 
        }
    }
}

/* ======================================================= */
/* 2. LÓGICA DO TERMINAL SECRETO                           */
/* ======================================================= */
const terminalOverlay = document.getElementById('secret-terminal');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

function openTerminal() {
    terminalOverlay.style.display = 'flex';
    terminalInput.focus();
}

function closeTerminal() {
    terminalOverlay.style.display = 'none';
}

terminalOverlay.addEventListener('click', (e) => {
    if (e.target === terminalOverlay) closeTerminal();
});

terminalInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const command = terminalInput.value.toLowerCase().trim();
        processCommand(command);
        terminalInput.value = '';
    }
});

function processCommand(cmd) {
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

document.addEventListener('keydown', (e) => {
    inputSequence += e.key.toLowerCase();
    
    if (inputSequence.length > secretCode.length) {
        inputSequence = inputSequence.slice(-secretCode.length);
    }

    if (inputSequence === secretCode && !matrixRunning) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    const matrixCanvas = document.getElementById('easter-egg-matrix');

    if (!matrixCanvas) {
        console.error("ERRO: Canvas 'easter-egg-matrix' não encontrado no HTML!");
        return;
    }

    console.log("ACESSO CONCEDIDO: MODO MATRIX ATIVADO");
    matrixRunning = true;

    document.querySelectorAll('.orb').forEach(orb => {
        orb.classList.add('orbs-hidden');
    });

    matrixCanvas.style.display = 'block';
    startMatrixBackground(matrixCanvas);
}

function startMatrixBackground(canvasElement) {
    const mCtx = canvasElement.getContext('2d');
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%ÇÁÉÍÓÚÃÕ';
    const fontSize = 16;
    const columns = canvasElement.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    const meuNome = "*ZAMBONI";
    const colunaEspecial = Math.floor(columns / 2);

    function draw() {
        mCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        mCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        
        mCtx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            if (i === colunaEspecial) {
                mCtx.fillStyle = '#FFF';
                mCtx.shadowBlur = 15;
                mCtx.shadowColor = "#0F0";
                
                const indexLetra = Math.floor(drops[i]) % meuNome.length;
                mCtx.fillText(meuNome[indexLetra], i * fontSize, drops[i] * fontSize);
                
                mCtx.shadowBlur = 0;
            } else {
                mCtx.fillStyle = '#0F0';
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                mCtx.fillText(text, i * fontSize, drops[i] * fontSize);
            }

            if (drops[i] * fontSize > canvasElement.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 120);

    window.addEventListener('resize', () => {
        canvasElement.width = window.innerWidth;
        canvasElement.height = window.innerHeight;
    });
}

/* ======================================================= */
/* 4. LÓGICA DOS FLASHCARDS DE HABILIDADES                 */
/* ======================================================= */
const skillData = {
    'AWS': "Gerenciamento de EC2, S3, RDS e arquitetura Serverless. Migrei infraestruturas críticas reduzindo custos em 30%.",
    'Docker': "Criação de containers otimizados, multi-stage builds e orquestração para ambientes de desenvolvimento e produção.",
    'Kubernetes': "Administração de clusters EKS, deploy de aplicações escaláveis e configuração de Helm Charts.",
    'Linux': "18 anos de terminal. Shell Scripting avançado, gerenciamento de permissões, redes e hardening de segurança.",
    'Terraform': "Infraestrutura como Código (IaC) para provisionar ambientes inteiros na AWS em minutos, sem erro humano.",
    'JavaScript': "Manipulação de DOM, lógica assíncrona (Async/Await) e criação de interações ricas como este site.",
    'React': "Desenvolvimento de componentes funcionais, Hooks e consumo de APIs RESTful.",
    'Python': "Automação de tarefas repetitivas de infraestrutura e scripts de análise de dados (Pandas/Boto3).",
    'Liderança': "Liderei times técnicos em crises de servidores, mantendo a calma e organizando a recuperação de desastres.",
    'Conflitos': "Medio divergências entre times de Dev e Ops, focando sempre na solução técnica mais viável.",
    'Comunicação': "Traduzo problemas técnicos complexos ('o servidor caiu') para linguagem de negócios ('o checkout volta em 5min').",
    'Mentoria': "Adoro ensinar juniores. Acredito que compartilhar conhecimento fortalece a equipe inteira.",
    'Autodidata': "Aprendi a programar sozinho após anos em infra. Se não sei algo hoje, saberei amanhã."
};

function flipCard(cardId, skillKey) {
    const cardInner = document.getElementById(cardId);
    const type = cardId === 'card-hard' ? 'hard' : 'soft';
    const titleEl = document.getElementById(`${type}-title`);
    const descEl = document.getElementById(`${type}-desc`);

    titleEl.innerText = skillKey;
    descEl.innerText = skillData[skillKey] || "Experiência sólida e comprovada nesta tecnologia.";
    cardInner.classList.add('flipped');
}

function unflipCard(cardId) {
    const cardInner = document.getElementById(cardId);
    cardInner.classList.remove('flipped');
}

/* ======================================================= */
/* 5. INTELIGÊNCIA DO FAROL (RESOLUÇÃO)                    */
/* ======================================================= */
function checkResolutionForBeam() {
    const beam = document.querySelector('.headlight-beam');
    if (!beam) return;

    const width = window.innerWidth;
    const isFullHD = width >= 1900 && width <= 1940;

    if (isFullHD) {
        beam.style.display = ''; 
    } else {
        beam.style.display = 'none';
    }
}

window.addEventListener('resize', checkResolutionForBeam);

/* ======================================================= */
/* 6. BOTÃO FUGITIVO (EFEITO MAGNÉTICO/REPULSÃO)           */
/* ======================================================= */
const cvButton = document.getElementById('cv-button');
const cvModal = document.getElementById('cv-modal');
let chaseStartTime = null;
let chaseActive = true;
let xOffset = 0;
let yOffset = 0;

if (cvButton) {
    document.addEventListener('mousemove', (e) => {
        if (!chaseActive || cvButton.classList.contains('disabled')) return;

        const btnRect = cvButton.getBoundingClientRect();
        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const distX = mouseX - btnCenterX;
        const distY = mouseY - btnCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < 150) {
            if (!chaseStartTime) chaseStartTime = Date.now();

            if (Date.now() - chaseStartTime > 5000) {
                endChase();
                return;
            }

            const moveX = -(distX / distance) * 20; 
            const moveY = -(distY / distance) * 20;

            xOffset += moveX;
            yOffset += moveY;

            cvButton.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        }
    });
}

function endChase() {
    chaseActive = false;
    if (cvModal) cvModal.style.display = 'flex';
}

function closeCvModal() {
    if (cvModal) cvModal.style.display = 'none';
    if (cvButton) {
        cvButton.classList.add('disabled');
        cvButton.innerText = "CV_Bruno.Zamboni.pdf (Indisponível)";
    }
}

if (cvModal) {
    window.addEventListener('click', (e) => {
        if (e.target === cvModal) closeCvModal();
    });
}

/* ======================================================= */
/* 7. RANDOMIZADOR DE PROJETOS                             */
/* ======================================================= */
function shuffleProjects() {
    const container = document.querySelector('#retrospectiva .grid-container');
    if (!container) return;

    const projects = Array.from(container.children);
    projects.sort(() => Math.random() - 0.5);

    container.innerHTML = '';
    projects.forEach(project => {
        container.appendChild(project);
    });
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
            perView: 2,             
            gap: 40,                
            animationDuration: 600, 
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

    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('certificate-img')) {
            modalImg.src = e.target.src;
            modal.style.display = 'flex';
        }
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeCertModal();
        }
    });
}

function closeCertModal() {
    const modal = document.getElementById('cert-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

/* ======================================================= */
/* INICIALIZADOR GERAL                                     */
/* ======================================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa a tradução se tiver uma guardada
    const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
    changeLanguage(savedLang);

    if (typeof type === 'function') type();
    if (typeof shuffleProjects === 'function') shuffleProjects();
    if (typeof checkResolutionForBeam === 'function') checkResolutionForBeam();
    
    initGlideCarousel(); 
    initCertificateModal(); 
});