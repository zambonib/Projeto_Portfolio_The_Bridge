/* ======================================================= */
/* 1. DICIONÁRIO DE TRADUÇÃO (i18n) E MOTOR GLOBAL         */
/* ======================================================= */
const translations = {
    pt: {
        "infra": "● Infraestrutura", "dev": ">_ Desenvolvimento",
        "hero_greeting": "Olá, Sou o Bruno Zamboni Desenvolvedor Full Stack.",
        "hero_desc": "Criei meu portfólio para mostrar minhas Habilidades e Projetos.",
        "hero_exp": "São 18 anos de experiência dentro da área de TI. <br> Agora chegou a hora de criarmos experiências.",
        "btn_cv": "DOWNLOAD: CV_BRUNO.ZAMBONI.PDF", "btn_projects": "Explorar Projetos",
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
        "footer_dev": "Desenvolvido por Bruno Zamboni", "footer_motto": "Desenvolvemos muito além do software", "footer_rights": "Todos os direitos reservados a Dalzam 2026",
        "cv_modal_title": "Cansado de ver Currículo no formato tradicional?", "cv_modal_desc": "A verdade é que minha jornada não cabe em uma folha A4. O PDF é estático, mas minha carreira é dinâmica.<br><br>Convido você a navegar por este site incrível cheio de funcionalidades e ver na prática o que posso fazer, em vez de apenas ler sobre isso.",
        "egg_1": "Parabéns, você encontrou um dos códigos escondidos neste portfólio!", "egg_2": 'Digite no seu teclado a qualquer momento o nome da empresa desenvolvedora <strong style="color: #39ff14;">dalzam</strong> e veja o que acontece.', "egg_3": 'Atenciosamente "O Arquiteto".',
        "terminal_welcome": "The Bridge System [Version 1.0.5]<br>Bem-vindo ao modo desenvolvedor.<br>Digite <span class='cmd-highlight'>'help'</span> para ver os comandos.<br><br>"
    },
    en: {
        "infra": "● Infrastructure", "dev": ">_ Development",
        "hero_greeting": "Hello, I'm Bruno Zamboni Full Stack Developer.",
        "hero_desc": "I created my portfolio to showcase my Skills and Projects.",
        "hero_exp": "18 years of experience in the IT field. <br> Now it's time to create experiences.",
        "btn_cv": "DOWNLOAD: RESUME_BRUNO.ZAMBONI.PDF", "btn_projects": "Explore Projects",
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
        "footer_dev": "Developed by Bruno Zamboni", "footer_motto": "We develop much more than software", "footer_rights": "All rights reserved to Dalzam 2026",
        "cv_modal_title": "Tired of seeing Resumes in the traditional format?", "cv_modal_desc": "The truth is my journey doesn't fit on an A4 sheet. PDFs are static, but my career is dynamic.<br><br>I invite you to navigate this incredible feature-rich site and see practically what I can do, instead of just reading about it.",
        "egg_1": "Congratulations, you found one of the hidden codes in this portfolio!", "egg_2": 'Type the name of the development company <strong style="color: #39ff14;">dalzam</strong> on your keyboard at any time and see what happens.', "egg_3": 'Sincerely "The Architect".',
        "terminal_welcome": "The Bridge System [Version 1.0.5]<br>Welcome to developer mode.<br>Type <span class='cmd-highlight'>'help'</span> to see commands.<br><br>"
    },
    es: {
        "infra": "● Infraestructura", "dev": ">_ Desarrollo",
        "hero_greeting": "Hola, Soy Bruno Zamboni Desarrollador Full Stack.",
        "hero_desc": "Creé mi portafolio para mostrar mis Habilidades y Proyectos.",
        "hero_exp": "18 años de experiencia en el área de TI. <br> Ahora es el momento de crear experiencias.",
        "btn_cv": "DESCARGAR: CV_BRUNO.ZAMBONI.PDF", "btn_projects": "Explorar Proyectos",
        "uptime_lbl": "Tiempo act:", "system_lbl": "Sistema:", "system_status": "En línea",
        "skills_title": "# Mis habilidades y postura profesional",
        "click_details": "Tecnologías que domino. Clic para detalles.",
        "instruction_flip": "Haz clic en una habilidad para girar la tarjeta", "btn_back": "Volver",
        "soft_desc": "Mi comportamiento profesional.",
        "tag_leadership": "Liderazgo Técnico", "tag_conflict": "Resolución de Conflictos",
        "tag_comm": "Comunicación Clara", "tag_mentor": "Mentoría", "tag_auto": "Autodidacta",
        "certs_title": "# Certificados obtenidos",
        "cert_1_title": "Global Solution FIAP 2025", "cert_1_meta": "FIAP - 2025", "cert_1_desc": '"Certificado del Desafío Global Solution de FIAP 2025, donde creamos el proyecto NoHall, el gran Campeón del Desafío."',
        "cert_2_title": "Análisis y Desarrollo de Sistemas", "cert_2_meta": "FIAP - 1º Semestre", "cert_2_desc": '"Finalización con excelencia de módulos fundamentales de ingeniería de software, modelado de datos y design thinking."',
        "cert_3_title": "Formación Cloud y DevOps", "cert_3_desc": '"Dominio en prácticas ágiles, CI/CD, automatización de infraestructura y orquestación de contenedores."',
        "cert_4_desc": '"Capacitación avanzada en diseño e implementación de arquitecturas altamente escalables, seguras y resilientes en la nube AWS."',
        "cert_5_title": "Seguridad de Redes: pfSense y Snort", "cert_5_meta": "Especialización en Ciberseguridad", "cert_5_desc": '"Especialización en implementación de firewalls avanzados y sistemas de detección/prevención de intrusos (IDS/IPS)."',
        "projects_title": "# ¡Retrospectiva de Proyectos realizados hasta ahora!",
        "proj_1_tag": "Alta Disponibilidad en la Nube", "proj_1_title": "Modernización de la Infraestructura 🚀",
        "proj_2_tag": '"Ecosistema Microsoft"', "proj_2_title": "Migración del Ecosistema Google Workspace a Microsoft 365",
        "proj_3_tag": "Reestructuración de Seguridad", "proj_3_title": "Implementación de Seguridad Avanzada (EDR CrowdStrike) y Optimización de Infraestructura",
        "proj_4_tag": "Ganador de FIAP Global Solution 2025 (1º Lugar)", "proj_4_title": "Proyecto Premiado: Nohall – Connection with Value",
        "footer_dev": "Desarrollado por Bruno Zamboni", "footer_motto": "Desarrollamos mucho más que software", "footer_rights": "Todos los derechos reservados a Dalzam 2026",
        "cv_modal_title": "¿Cansado de ver Currículums en formato tradicional?", "cv_modal_desc": "La verdad es que mi viaje no cabe en una hoja A4. Los PDF son estáticos, pero mi carrera es dinámica.<br><br>Te invito a navegar por este increíble sitio y ver en la práctica lo que puedo hacer, en lugar de solo leer sobre ello.",
        "egg_1": "¡Felicidades, encontraste uno de los códigos ocultos en este portafolio!", "egg_2": 'Escribe en tu teclado en cualquier momento el nombre de la empresa desarrolladora <strong style="color: #39ff14;">dalzam</strong> y mira lo que sucede.', "egg_3": 'Atentamente "El Arquitecto".',
        "terminal_welcome": "The Bridge System [Version 1.0.5]<br>Bienvenido al modo desarrollador.<br>Escribe <span class='cmd-highlight'>'help'</span> para ver los comandos.<br><br>"
    }
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
    pt: ["Desenvolvedor Full Stack", "Especialista em Infraestrutura", "Especialista em IA Generativa", "Administrador de Ambientes Cloud", "Especialista Hypervisor"],
    en: ["Full Stack Developer", "Infrastructure Specialist", "Generative AI Specialist", "Cloud Environments Administrator", "Hypervisor Specialist"],
    es: ["Desarrollador Full Stack", "Especialista en Infraestructura", "Especialista en IA Generativa", "Administrador de Entornos Cloud", "Especialista en Hipervisores"]
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
    'aws': { pt: { t: 'AWS', d: 'Gerenciamento de EC2, S3, RDS e arquitetura Serverless. Redução de custos em 30%.' }, en: { t: 'AWS', d: 'Management of EC2, S3, RDS, and Serverless architecture. Reduced costs by 30%.' }, es: { t: 'AWS', d: 'Gestión de EC2, S3, RDS y arquitectura Serverless. Reducción de costos en un 30%.' } },
    'docker': { pt: { t: 'Docker', d: 'Criação de containers otimizados e orquestração.' }, en: { t: 'Docker', d: 'Creation of optimized containers and orchestration.' }, es: { t: 'Docker', d: 'Creación de contenedores optimizados y orquestación.' } },
    'kubernetes': { pt: { t: 'Kubernetes', d: 'Administração de clusters EKS e configuração de Helm.' }, en: { t: 'Kubernetes', d: 'EKS cluster administration and Helm configuration.' }, es: { t: 'Kubernetes', d: 'Administración de clústeres EKS y configuración de Helm.' } },
    'linux': { pt: { t: 'Linux', d: '18 anos de terminal. Shell Scripting e hardening.' }, en: { t: 'Linux', d: '18 years of terminal. Shell Scripting and hardening.' }, es: { t: 'Linux', d: '18 años de terminal. Shell Scripting y hardening.' } },
    'terraform': { pt: { t: 'Terraform', d: 'Infraestrutura como Código (IaC) para provisionar ambientes.' }, en: { t: 'Terraform', d: 'Infrastructure as Code (IaC) to provision environments.' }, es: { t: 'Terraform', d: 'Infraestructura como Código (IaC) para aprovisionar entornos.' } },
    'js': { pt: { t: 'JavaScript', d: 'Manipulação de DOM e lógica assíncrona.' }, en: { t: 'JavaScript', d: 'DOM manipulation and asynchronous logic.' }, es: { t: 'JavaScript', d: 'Manipulación del DOM y lógica asíncrona.' } },
    'react': { pt: { t: 'React', d: 'Desenvolvimento de componentes funcionais e Hooks.' }, en: { t: 'React', d: 'Development of functional components and Hooks.' }, es: { t: 'React', d: 'Desarrollo de componentes funcionales y Hooks.' } },
    'python': { pt: { t: 'Python', d: 'Automação de tarefas e scripts de dados.' }, en: { t: 'Python', d: 'Task automation and data scripts.' }, es: { t: 'Python', d: 'Automatización de tareas y scripts de datos.' } },
    'leadership': { pt: { t: 'Liderança', d: 'Liderei times em crises, mantendo a calma.' }, en: { t: 'Leadership', d: 'Led teams in crises, maintaining calm.' }, es: { t: 'Liderazgo', d: 'Lideré equipos en crisis, manteniendo la calma.' } },
    'conflict': { pt: { t: 'Conflitos', d: 'Medio divergências focando na solução viável.' }, en: { t: 'Conflicts', d: 'Mediate divergences focusing on viable solutions.' }, es: { t: 'Conflictos', d: 'Medio divergencias enfocándome en soluciones viables.' } },
    'communication': { pt: { t: 'Comunicação', d: 'Traduzo problemas técnicos para linguagem de negócios.' }, en: { t: 'Communication', d: 'Translate technical problems into business language.' }, es: { t: 'Comunicación', d: 'Traduzco problemas técnicos al lenguaje de negocios.' } },
    'mentoring': { pt: { t: 'Mentoria', d: 'Adoro ensinar juniores e compartilhar conhecimento.' }, en: { t: 'Mentoring', d: 'Love teaching juniors and sharing knowledge.' }, es: { t: 'Mentoría', d: 'Me encanta enseñar a juniors y compartir conocimientos.' } },
    'autodidact': { pt: { t: 'Autodidata', d: 'Aprendi a programar sozinho após anos em infra.' }, en: { t: 'Self-taught', d: 'Taught myself to program after years in infra.' }, es: { t: 'Autodidacta', d: 'Aprendí a programar solo tras años en infra.' } }
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
/* 6. FAROL E BOTÃO FUGITIVO                               */
/* ======================================================= */
function checkResolutionForBeam() {
    const beam = document.querySelector('.headlight-beam');
    if (beam) beam.style.display = (window.innerWidth >= 1900 && window.innerWidth <= 1940) ? '' : 'none';
}
window.addEventListener('resize', checkResolutionForBeam);

const cvButton = document.getElementById('cv-button');
const cvModal = document.getElementById('cv-modal');
let chaseActive = true, chaseStartTime = null, xOffset = 0, yOffset = 0;

if (cvButton) {
    document.addEventListener('mousemove', (e) => {
        if (!chaseActive || cvButton.classList.contains('disabled')) return;
        const btnRect = cvButton.getBoundingClientRect();
        const distX = e.clientX - (btnRect.left + btnRect.width / 2);
        const distY = e.clientY - (btnRect.top + btnRect.height / 2);
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < 150) {
            if (!chaseStartTime) chaseStartTime = Date.now();
            if (Date.now() - chaseStartTime > 5000) { chaseActive = false; if (cvModal) cvModal.style.display = 'flex'; return; }
            xOffset += -(distX / distance) * 20; yOffset += -(distY / distance) * 20;
            cvButton.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        }
    });
}
function closeCvModal() {
    if (cvModal) cvModal.style.display = 'none';
    if (cvButton) { cvButton.classList.add('disabled'); cvButton.innerText = "CV (Indisponível)"; }
}
if (cvModal) window.addEventListener('click', (e) => { if (e.target === cvModal) closeCvModal(); });

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
    initGlideCarousel(); 
    initCertificateModal(); 
});