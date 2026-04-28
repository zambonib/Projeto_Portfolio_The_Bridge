/* ======================================================= */
/* 1. DICIONÁRIO DE TRADUÇÃO (i18n) E MOTOR GLOBAL         */
/* ======================================================= */
const translations = {
    pt: {
        "infra": "● Infraestrutura", "dev": ">_ Desenvolvimento",
        "hero_greeting": "Bruno Zamboni | Full Stack Developer.",
        "hero_desc": "Criei meu portfólio para mostrar minhas Habilidades e Projetos.",
        "hero_exp": "Quase duas décadas orquestrando ambientes complexos e resolvendo problemas críticos. Hoje, aplico essa bagagem sênior para codar soluções inteligentes em Java e Python. Não apenas escrevo software; eu projeto sistemas que nascem para performar.",
        "btn_contact": "FALE COMIGO NO LINKEDIN",
        "uptime_lbl": "Uptime:", "system_lbl": "Sistema:", "system_status": "Online",
        "skills_title": "# Minhas habilidades e posturas profissional",
        "click_details": "Tecnologias que domino. Clique para detalhes.",
        "instruction_flip": "Clique em uma habilidade para virar o card", "btn_back": "Voltar",
        "soft_desc": "Minha postura profissional.",
        "tag_leadership": "Liderança Técnica", "tag_conflict": "Resolução de Conflitos",
        "tag_comm": "Comunicação Clara", "tag_mentor": "Mentoria", "tag_auto": "Autodidata",
        "certs_title": "# Certificados conquistados",
        "cert_1_title": "Global Solution FIAP 2025", "cert_1_meta": "FIAP - 2025", "cert_1_desc": '"Certificado do Desafio Global Solution da FIAP de 2025, aonde criamos e apresentamos o projeto NoHall, que foi o grande Campeão do Desafio."',
        "cert_2_title": "Análise e Desenvolvimento de Sistemas", "cert_2_meta": "FIAP - 1º Semestre", "cert_2_desc": '"Conclusão com excelência dos módulos fundamentais de engenharia de software, modelagem de dados e design thinking."',
        "cert_3_title": "Formação Cloud & DevOps", "cert_3_desc": '"Domínio em práticas ágeis, CI/CD, automação de infraestrutura e orquestração de containers."',
        "cert_4_desc": '"Capacitação avançada em desenho e implantação de arquiteturas altamente escaláveis, seguras e resilientes na nuvem AWS."',
        "cert_5_title": "Segurança de Redes: pfSense & Snort", "cert_5_meta": "Especialização em Cybersecurity", "cert_5_desc": '"Especialização em implementação de firewalls avançados e sistemas de detecção/prevenção de intrusão (IDS/IPS)."',
        "projects_title": "# Retrospectiva dos Projetos realizados até aqui!",
        "proj_1_tag": "Alta Disponibilidade em Cloud", "proj_1_title": "Modernização da Infraestrutura 🚀",
        "proj_2_tag": '"Ecosistema Microsoft"', "proj_2_title": "Migração do Ecosistema Google Workspace para o Microsoft 365",
        "proj_3_tag": "Restruturação de Segurança", "proj_3_title": "Implementação de Segurança Avançada (EDR CrowdStrike) e Otimização de Infraestrutura",
        "proj_4_tag": "Vencedor do FIAP Global Solution 2025 (1º Lugar)", "proj_4_title": "Projeto Premiado: Nohall – Connection with Value",
        "proj_5_tag": "Front-end & UX/UI", "proj_5_title": "The Bridge: Portfólio Interativo com JavaScript",
        "footer_dev": "Desenvolvido por Bruno Zamboni", "footer_motto": "Desenvolvemos muito além do software", "footer_rights": "Todos os direitos reservados a Dalzam 2026",
        "egg_1": "Parabéns, você encontrou um dos códigos escondidos neste portfólio!", "egg_2": 'Digite no seu teclado a qualquer momento o nome da empresa desenvolvedora <strong style="color: #39ff14;">dalzam</strong> e veja o que acontece.', "egg_3": 'Atenciosamente "O Arquiteto".',
        "terminal_welcome": "The Bridge System [Version 1.0.5]<br>Bem-vindo ao modo desenvolvedor.<br>Digite <span class='cmd-highlight'>'help'</span> para ver os comandos.<br><br>"
    },
    en: {
        "infra": "● Infrastructure", "dev": ">_ Development",
        "hero_greeting": "Bruno Zamboni | Full Stack Developer",
        "hero_desc": "I created my portfolio to showcase my Skills and Projects.",
        "hero_exp": "18 years of experience in the IT field. <br> Now it's time to create experiences.",
        "btn_contact": "TALK TO ME ON LINKEDIN",
        "uptime_lbl": "Uptime:", "system_lbl": "System:", "system_status": "Online",
        "skills_title": "# My Skills and Professional Stance",
        "click_details": "Technologies I master. Click for details.",
        "instruction_flip": "Click on a skill to flip the card", "btn_back": "Go Back",
        "soft_desc": "My professional behavior.",
        "tag_leadership": "Tech Leadership", "tag_conflict": "Conflict Resolution",
        "tag_comm": "Clear Communication", "tag_mentor": "Mentorship", "tag_auto": "Self-taught",
        "certs_title": "# Earned Certificates",
        "cert_1_title": "Global Solution FIAP 2025", "cert_1_meta": "FIAP - 2025", "cert_1_desc": '"Certificate from the 2025 FIAP Global Solution Challenge, where we created the NoHall project, the grand Champion of the Challenge."',
        "cert_2_title": "Systems Analysis and Development", "cert_2_meta": "FIAP - 1st Semester", "cert_2_desc": '"Excellence in completion of core software engineering, data modeling, and design thinking modules."',
        "cert_3_title": "Cloud & DevOps Formation", "cert_3_desc": '"Mastery in agile practices, CI/CD, infrastructure automation, and container orchestration."',
        "cert_4_desc": '"Advanced training in designing and deploying highly scalable, secure, and resilient architectures on AWS cloud."',
        "cert_5_title": "Network Security: pfSense & Snort", "cert_5_meta": "Cybersecurity Specialization", "cert_5_desc": '"Specialization in implementing advanced firewalls and intrusion detection/prevention systems (IDS/IPS)."',
        "projects_title": "# Retrospective of Projects accomplished so far!",
        "proj_1_tag": "High Availability in Cloud", "proj_1_title": "Infrastructure Modernization 🚀",
        "proj_2_tag": '"Microsoft Ecosystem"', "proj_2_title": "Migration from Google Workspace Ecosystem to Microsoft 365",
        "proj_3_tag": "Security Restructuring", "proj_3_title": "Advanced Security Implementation (EDR CrowdStrike) and Infrastructure Optimization",
        "proj_4_tag": "Winner of FIAP Global Solution 2025 (1st Place)", "proj_4_title": "Award-winning Project: Nohall – Connection with Value",
        "proj_5_tag": "Front-end & UX/UI", "proj_5_title": "The Bridge: Interactive Portfolio with JavaScript",
        "footer_dev": "Developed by Bruno Zamboni", "footer_motto": "We develop much more than software", "footer_rights": "All rights reserved to Dalzam 2026",
        "egg_1": "Congratulations, you found one of the hidden codes in this portfolio!", "egg_2": 'Type the name of the development company <strong style="color: #39ff14;">dalzam</strong> on your keyboard at any time and see what happens.', "egg_3": 'Sincerely "The Architect".',
        "terminal_welcome": "The Bridge System [Version 1.0.5]<br>Welcome to developer mode.<br>Type <span class='cmd-highlight'>'help'</span> to see commands.<br><br>"
    },
};

function changeLanguage(lang) {
    // 1. Atualiza visual das bandeiras
    const flags = document.querySelectorAll('.flag-btn');
    flags.forEach(flag => {
        flag.classList.remove('active-lang');
        if (flag.id === `flag-${lang}`) {
            flag.classList.add('active-lang');
        }
    });

    // 2. Traduz HTML estático
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // 3. Salva preferência e reinicia animações dependentes de idioma
    localStorage.setItem('preferredLanguage', lang);
    restartTypewriter(lang);
    unflipAllCards(); // Desvira os cards para o usuário não ver o idioma antigo no verso
}

/* ======================================================= */
/* 2. EFEITO DE DIGITAÇÃO (Multi-idioma)                   */
/* ======================================================= */
const linesContainer = document.getElementById('text-lines');
const typewriterPhrases = {
    pt: [
        "Desenvolvedor Full Stack (Java | Python)", 
        "Engenheiro de Software & DevOps", 
        "Especialista em Cloud & Virtualização", 
        "Soluções com IA Generativa"
    ],
    en: [
        "Full Stack Developer (Java | Python)", 
        "Software & DevOps Engineer", 
        "Cloud & Virtualization Specialist", 
        "Generative AI Solutions"
    ],
};

let currentPhrases = [];
let phraseIndex = 0;
let charIndex = 0;
let typeTimeout;

function restartTypewriter(lang) {
    clearTimeout(typeTimeout);
    linesContainer.innerHTML = '';
    currentPhrases = typewriterPhrases[lang] || typewriterPhrases['pt'];
    phraseIndex = 0;
    charIndex = 0;
    type();
}

function type() {
    if (phraseIndex < currentPhrases.length) {
        if (charIndex === 0) {
            const lineElement = document.createElement('div');
            lineElement.id = 'line-' + phraseIndex;
            linesContainer.appendChild(lineElement);
        }
        const currentLine = document.getElementById('line-' + phraseIndex);
        currentLine.innerHTML += currentPhrases[phraseIndex].charAt(charIndex);
        charIndex++;

        if (charIndex < currentPhrases[phraseIndex].length) {
            typeTimeout = setTimeout(type, 100); 
        } else {
            phraseIndex++;
            charIndex = 0;
            typeTimeout = setTimeout(type, 400); 
        }
    }
}

/* ======================================================= */
/* 3. LÓGICA DO TERMINAL SECRETO                           */
/* ======================================================= */
const terminalOverlay = document.getElementById('secret-terminal');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

function openTerminal() { terminalOverlay.style.display = 'flex'; terminalInput.focus(); }
function closeTerminal() { terminalOverlay.style.display = 'none'; }
terminalOverlay.addEventListener('click', (e) => { if (e.target === terminalOverlay) closeTerminal(); });

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
        case 'help': printToTerminal("- about | - projects | - contact | - clear | - exit"); break;
        case 'about': printToTerminal("Bruno Zamboni. Infra -> Dev."); break;
        case 'projects': printToTerminal("1. AWS | 2. The Bridge | 3. Meu Bolso"); break;
        case 'contact': printToTerminal("LinkedIn: /in/brunozamboni"); break;
        case 'clear': terminalOutput.innerHTML = ''; break;
        case 'exit': setTimeout(closeTerminal, 800); break;
        case 'sudo': printToTerminal("Acesso negado / Access denied.", "red"); break;
        case '': break;
        default: printToTerminal(`Comando não reconhecido: ${cmd}`, "orange");
    }
}

function printToTerminal(text, color = '#0f0') {
    const newLine = document.createElement('div');
    newLine.style.color = color;
    newLine.innerHTML = text;
    terminalOutput.appendChild(newLine);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

/* ======================================================= */
/* 4. EASTER EGG MATRIX                                    */
/* ======================================================= */
const secretCode = "dalzam";
let inputSequence = "";
let matrixRunning = false;

document.addEventListener('keydown', (e) => {
    inputSequence += e.key.toLowerCase();
    if (inputSequence.length > secretCode.length) inputSequence = inputSequence.slice(-secretCode.length);
    if (inputSequence === secretCode && !matrixRunning) activateEasterEgg();
});

function activateEasterEgg() {
    const matrixCanvas = document.getElementById('easter-egg-matrix');
    if (!matrixCanvas) return;
    matrixRunning = true;
    matrixCanvas.style.display = 'block';
    startMatrixBackground(matrixCanvas);
}

function startMatrixBackground(canvasElement) {
    const mCtx = canvasElement.getContext('2d');
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*ÇÁÉÍÓÚ';
    const fontSize = 16;
    const columns = canvasElement.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    const meuNome = "*ZAMBONI";
    const colunaEspecial = Math.floor(columns / 2);

    setInterval(() => {
        mCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        mCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        mCtx.font = fontSize + 'px monospace';
        for (let i = 0; i < drops.length; i++) {
            if (i === colunaEspecial) {
                mCtx.fillStyle = '#FFF';
                const indexLetra = Math.floor(drops[i]) % meuNome.length;
                mCtx.fillText(meuNome[indexLetra], i * fontSize, drops[i] * fontSize);
            } else {
                mCtx.fillStyle = '#0F0';
                mCtx.fillText(letters.charAt(Math.floor(Math.random() * letters.length)), i * fontSize, drops[i] * fontSize);
            }
            if (drops[i] * fontSize > canvasElement.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }, 120);
}

/* ======================================================= */
/* 5. FLASHCARDS DE HABILIDADES (Multi-idioma)             */
/* ======================================================= */
const skillsDB = {
    'Proxmox': { 
        pt: { t: 'Proxmox', d: 'Implantação do Hypervisor, Gerenciamento de maquinas virtuais,  Cluster e Containers LXC. Rotinas de backup com Proxmox Backup Server.' }, 
        en: { t: 'Proxmox', d: 'Hypervisor deployment and management of Virtual Machines (VMs), Clusters, and LXC Containers. Expertise in establishing backup routines using Proxmox Backup Server (PBS).' } },
    'AWS': { 
        pt: { t: 'AWS', d: 'Provisionamento (EC2) e redes seguras (VPC). Especialista em FinOps e arquiteturas resilientes, reduzindo o TCO através de políticas de backup no S3' }, 
        en: { t: 'AWS', d: 'EC2 provisioning and secure networking (VPC). FinOps and resilient architecture specialist, reducing TCO through S3 backup policies.' } },
    'Windows_Server': { 
        pt: { t: 'Windows_Server', d: 'Administração de ponta a ponta de Windows Server. Domínio em serviços essenciais (AD DS, DNS, GPOs), virtualização com Hyper-V e automação de tarefas via PowerShell.' }, 
        en: { t: 'Windows_Server', d: 'End-to-end Windows Server administration. Expertise in core services (AD DS, DNS, GPOs), Hyper-V virtualization, and task automation via PowerShell.' } },
    'Linux': { 
        pt: { t: 'Linux', d: 'Trabalho com linux a mais de 15+ anos sempre voltado para infraestrutura, Implantando ambientes como PFSense, TailScale(VPN), Zabbix, Grafana, Proxmox, Prometheus, Immich, NextCloud, SFTP, NGiNX e Apache.' }, 
        en: { t: 'Linux', d: 'Over 15 years of experience in Linux infrastructure, specializing in the deployment and optimization of robust environments. Proficient in implementing high-availability solutions including pfSense, Tailscale (VPN), Zabbix, Grafana, Proxmox, Immich, Nextcloud, Nginx.' } },
    'JavaScript': { 
        pt: { t: 'JavaScript', d: 'Manipulação avançada do DOM, Delegação de Eventos, integração de bibliotecas (Glide.js), animações com Canvas API e gestão de estado global (i18n) usando LocalStorage.' }, 
        en: { t: 'JavaScript', d: 'Advanced DOM manipulation, Event Delegation, library integration (Glide.js), Canvas API animations, and global state management (i18n) using LocalStorage.' } },
    'HTML': { 
        pt: { t: 'HTML', d: 'Estruturação semântica avançada, integração de atributos de dados (data-i18n) para controle de estado, acessibilidade (ARIA) e otimização para Web Apps.' }, 
        en: { t: 'HTML', d: 'Advanced semantic structuring, integration of data attributes (data-i18n) for state control, accessibility (ARIA), and Web App optimization.' } },
    'CSS': { 
        pt: { t: 'CSS', d: 'Criação de UI imersiva com Glassmorphism, layouts fluidos (Grid/Flexbox), microinterações com Keyframes/Transitions e arquitetura 100% responsiva.' }, 
        en: { t: 'CSS', d: 'Creation of immersive UI with Glassmorphism, fluid layouts (Grid/Flexbox), micro-interactions with Keyframes/Transitions, and 100% responsive architecture.' } },
    'python': { 
        pt: { t: 'Python', d: 'Microserviço web (Flask) que aplica Visão Computacional (OpenCV, Tesseract OCR) e Regex para converter imagens de extratos bancários em dados estruturados (OFX)' }, 
        en: { t: 'Python', d: 'Web microservice (Flask) applying Computer Vision (OpenCV, Tesseract OCR) and Regex to convert bank statement images into structured data (OFX)' } },
    'leadership': { 
        pt: { t: 'Liderança', d: 'Liderei times em crises, mantendo a calma.' }, 
        en: { t: 'Leadership', d: 'Led teams in crises, maintaining calm.' } },
    'conflict': { 
        pt: { t: 'Conflitos', d: 'Medio divergências focando na solução viável.' }, 
        en: { t: 'Conflicts', d: 'Mediate divergences focusing on viable solutions.' } },
    'communication': { 
        pt: { t: 'Comunicação', d: 'Traduzo problemas técnicos para linguagem de negócios.' }, 
        en: { t: 'Communication', d: 'Translate technical problems into business language.' } },
    'mentoring': { 
        pt: { t: 'Mentoria', d: 'Tenho prazer em ensinar e compartilhar conhecimento.' }, 
        en: { t: 'Mentoring', d: 'I am passionate about mentoring and sharing knowledge.' } },
    'autodidact': { 
        pt: { t: 'Autodidata', d: 'Aprendi a programar sozinho após anos em infra.' }, 
        en: { t: 'Self-taught', d: 'Taught myself to program after years in infra.' } }
};

function flipCard(cardId, skillKey) {
    const cardInner = document.getElementById(cardId);
    const type = cardId === 'card-hard' ? 'hard' : 'soft';
    const currentLang = localStorage.getItem('preferredLanguage') || 'pt';
    
    document.getElementById(`${type}-title`).innerText = skillsDB[skillKey][currentLang].t;
    document.getElementById(`${type}-desc`).innerText = skillsDB[skillKey][currentLang].d;
    cardInner.classList.add('flipped');
}

function unflipCard(cardId) { document.getElementById(cardId).classList.remove('flipped'); }
function unflipAllCards() {
    const cards = document.querySelectorAll('.skill-flip-inner.flipped');
    cards.forEach(card => card.classList.remove('flipped'));
}

/* ======================================================= */
/* 6. FAROL E CONTATO DIRETO                               */
/* ======================================================= */
function checkResolutionForBeam() {
    const beam = document.querySelector('.headlight-beam');
    if (beam) beam.style.display = (window.innerWidth >= 1900 && window.innerWidth <= 1940) ? '' : 'none';
}
window.addEventListener('resize', checkResolutionForBeam);

const contactButton = document.getElementById('cv-button'); // Mantendo o ID original para não quebrar o CSS

if (contactButton) {
    contactButton.addEventListener('click', () => {
        // Redireciona diretamente para o seu perfil ou sistema de mensagens
        window.open('https://www.linkedin.com/in/brunozamboni/', '_blank');
    });
}

/* ======================================================= */
/* 7. RANDOMIZADOR E GLIDE CAROUSEL                        */
/* ======================================================= */
function shuffleProjects() {
    const container = document.querySelector('#retrospectiva .grid-container');
    if (!container) return;
    const projects = Array.from(container.children);
    projects.sort(() => Math.random() - 0.5);
    container.innerHTML = '';
    projects.forEach(p => container.appendChild(p));
}

function initGlideCarousel() {
    if (document.querySelector('.cert-glide')) {
        new Glide('.cert-glide', {
            type: 'carousel', startAt: 0, focusAt: 'center', perView: 2, gap: 40, animationDuration: 600,
            breakpoints: { 1024: { perView: 2, focusAt: 'center' }, 768: { perView: 1.4, focusAt: 'center', gap: 15 } }
        }).mount();
    }
}

function initCertificateModal() {
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('cert-full-img');
    if (!modal || !modalImg) return;
    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('certificate-img')) {
            modalImg.src = e.target.src; modal.style.display = 'flex';
        }
    });
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
}
function closeCertModal() { const modal = document.getElementById('cert-modal'); if (modal) modal.style.display = 'none'; }

/* ======================================================= */
/* INICIALIZADOR GERAL                                     */
/* ======================================================= */
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
    changeLanguage(savedLang); 
    if (typeof shuffleProjects === 'function') shuffleProjects();
    if (typeof checkResolutionForBeam === 'function') checkResolutionForBeam();
    const contactButton = document.getElementById('cv-button');
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            window.open('https://www.linkedin.com/in/brunozamboni/', '_blank');
        });
    }
    initGlideCarousel(); 
    initCertificateModal(); 
});