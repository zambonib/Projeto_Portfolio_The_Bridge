/* ======================================================= */
/* TRADUÇÕES ESTÁTICAS DA PÁGINA                           */
/* ======================================================= */
const staticTranslations = {
    pt: {
        "btn_back_home": "← Voltar para Home",
        "lbl_tech": "Tecnologias:",
        "lbl_year": "Ano:",
        "lbl_motion": "Motion & Design",
        "footer_dev": "Desenvolvido por Bruno Zamboni",
        "footer_motto": "Desenvolvemos muito além do software",
        "footer_rights": "Todos os direitos reservados a Dalzam 2026",
        "not_found": "Projeto não encontrado",
        "back_start": "Voltar para o Início"
    },
    en: {
        "btn_back_home": "← Back to Home",
        "lbl_tech": "Technologies:",
        "lbl_year": "Year:",
        "lbl_motion": "Motion & Design",
        "footer_dev": "Developed by Bruno Zamboni",
        "footer_motto": "We develop much more than software",
        "footer_rights": "All rights reserved to Dalzam 2026",
        "not_found": "Project not found",
        "back_start": "Back to Start"
    }
};

/* ======================================================= */
/* BANCO DE DADOS DOS PROJETOS (BILÍNGUE)                  */
/* ======================================================= */
const projectsDB = {
    
    'migracao': {
        image: "../static/assets/Migracao_Servidores.png",
        video: null,
        animation: "../static/assets/Migracao_Servidores.mp4", 
        
        pt: {
            title: "Modernização de Infraestrutura Crítica – Cloud Migration (AWS)",
            subtitle: "Infraestrutura e Alta Disponibilidade",
            technologies: "AWS (EC2, RDS, VPC), SQL, PowerShell, VMWare",
            year: "2022",
            description: `
            <p><strong>Resumo da Atuação:</strong> Liderança técnica na migração Lift-and-Improve do sistema corporativo de Folha de Pagamento, transacionando de um ambiente On-Premises legado para uma arquitetura de alta disponibilidade na AWS (Amazon Web Services). O projeto eliminou gargalos de performance e riscos físicos, garantindo escalabilidade e segurança para dados sensíveis de RH.</p>
            <p><strong>Principais Entregas e Impactos:</strong></p>
            <p><strong>Arquitetura Cloud e Performance (EC2):</strong> Dimensionamento e provisionamento de instâncias EC2 otimizadas, resultando em um ganho expressivo de performance no processamento da folha (redução de muitas horas no tempo de fechamento) e resolução definitiva de problemas de latência e instabilidade.</p>
            <p><strong>Continuidade de Negócios e Disaster Recovery (DR):</strong> Implementação de uma estratégia robusta de backup automatizado e plano de Disaster Recovery (DR). Elevamos o SLA de disponibilidade do sistema para 99.90%, garantindo a operação mesmo em cenários críticos, algo inexistente no ambiente legado.</p>
            <p><strong>Segurança e Acesso Remoto:</strong> Configuração de Security Groups, VPCs e VPNs para permitir acesso externo seguro e performático para as equipes de RH e gestão, viabilizando o trabalho remoto sem comprometer a integridade dos dados confidenciais.</p>
            <p><strong>Eficiência Operacional:</strong> Eliminação da dependência de hardware físico depreciado, reduzindo custos de manutenção (OpEx vs CapEx) e permitindo escalabilidade elástica de armazenamento e processamento conforme a demanda mensal.</p>
            `
        },
        en: {
            title: "Critical Infrastructure Modernization – Cloud Migration (AWS)",
            subtitle: "Infrastructure and High Availability",
            technologies: "AWS (EC2, RDS, VPC), SQL, PowerShell, VMWare",
            year: "2022",
            description: `
            <p><strong>Role Summary:</strong> Technical leadership in the Lift-and-Improve migration of the corporate Payroll system, transitioning from a legacy On-Premises environment to a high-availability architecture on AWS (Amazon Web Services). The project eliminated performance bottlenecks and physical risks, ensuring scalability and security for sensitive HR data.</p>
            <p><strong>Key Deliverables and Impacts:</strong></p>
            <p><strong>Cloud Architecture and Performance (EC2):</strong> Sizing and provisioning of optimized EC2 instances, resulting in a significant performance gain in payroll processing (reduction of many hours in closing time) and definitive resolution of latency and instability issues.</p>
            <p><strong>Business Continuity and Disaster Recovery (DR):</strong> Implementation of a robust automated backup strategy and Disaster Recovery (DR) plan. We raised the system availability SLA to 99.90%, ensuring operation even in critical scenarios, something non-existent in the legacy environment.</p>
            <p><strong>Security and Remote Access:</strong> Configuration of Security Groups, VPCs, and VPNs to allow secure and performant external access for HR and management teams, enabling remote work without compromising the integrity of confidential data.</p>
            <p><strong>Operational Efficiency:</strong> Elimination of dependency on depreciated physical hardware, reducing maintenance costs (OpEx vs CapEx) and allowing elastic scalability of storage and processing according to monthly demand.</p>
            `
        }
    },

    'email': {
        image: "../static/assets/Transformacao_Digital.png",
        video: null,
        animation: null,

        pt: {
            title: "Transformação do Digital Workplace e Unificação de Ecossistema",
            subtitle: "Migração do Google Workspace para Microsoft 365",
            technologies: "Microsoft 365, Exchange, SharePoint, Teams",
            year: "2024",
            description: `
            <p><strong>Resumo da Atuação:</strong> Gestão estratégica e técnica da migração Cross-Platform de toda a suíte de colaboração da empresa. O projeto visou a centralização de ferramentas, compliance corporativo e a implementação do Microsoft 365 como hub único de produtividade, comunicação e gestão documental.</p>
            <p><strong>Principais Entregas e Impactos:</strong></p>
            <p><strong>Migração Complexa de Mensageria e Calendário (Exchange Online):</strong> Execução da migração de caixas postais e agendas com integridade total dos dados. Foco crítico na preservação de históricos de e-mail e reuniões recorrentes, garantindo Zero Downtime na comunicação externa e interna durante a virada.</p>
            <p><strong>Implantação de Cultura Colaborativa (Teams & SharePoint):</strong> Liderança na transição do Google Drive para uma arquitetura estruturada no SharePoint e OneDrive. Implementação do Microsoft Teams não apenas como chat, mas como plataforma central de trabalho, integrando arquivos e fluxos, o que aumentou a governança sobre a informação corporativa.</p>
            <p><strong>Gestão de Licenciamento e Custos:</strong> Análise e definição dos perfis de licenciamento (E3, E5, Business Standard) para otimização de custos (OpEx), garantindo que cada colaborador tivesse as ferramentas adequadas à sua função sem desperdício de budget.</p>
            <p><strong>Adoção e Treinamento (Change Management):</strong> Suporte à mudança cultural dos usuários acostumados à interface Google. Criação de guias e estruturas que facilitaram a adoção das novas ferramentas do pacote Office, minimizando o impacto na produtividade diária.</p>
            `
        },
        en: {
            title: "Digital Workplace Transformation and Ecosystem Unification",
            subtitle: "Migration from Google Workspace to Microsoft 365",
            technologies: "Microsoft 365, Exchange, SharePoint, Teams",
            year: "2024",
            description: `
            <p><strong>Role Summary:</strong> Strategic and technical management of the Cross-Platform migration of the company's entire collaboration suite. The project aimed at centralizing tools, corporate compliance, and implementing Microsoft 365 as a single hub for productivity, communication, and document management.</p>
            <p><strong>Key Deliverables and Impacts:</strong></p>
            <p><strong>Complex Messaging and Calendar Migration (Exchange Online):</strong> Execution of the migration of mailboxes and calendars with full data integrity. Critical focus on preserving email histories and recurring meetings, ensuring Zero Downtime in external and internal communication during the cutover.</p>
            <p><strong>Collaborative Culture Implementation (Teams & SharePoint):</strong> Leadership in the transition from Google Drive to a structured architecture in SharePoint and OneDrive. Implementation of Microsoft Teams not just as a chat, but as a central work platform, integrating files and workflows, which increased governance over corporate information.</p>
            <p><strong>Licensing and Cost Management:</strong> Analysis and definition of licensing profiles (E3, E5, Business Standard) for cost optimization (OpEx), ensuring each employee had the right tools for their role without budget waste.</p>
            <p><strong>Adoption and Training (Change Management):</strong> Support for the cultural change of users accustomed to the Google interface. Creation of guides and structures that facilitated the adoption of the new Office suite tools, minimizing the impact on daily productivity.</p>
            `
        }
    },

    'seguranca': {
        image: "../static/assets/seguranca.png",
        video: null,
        animation: null,

        pt: {
            title: "Implementação de Segurança Avançada (EDR CrowdStrike) e Otimização de Infraestrutura",
            subtitle: "Crowdstrike e Otimização de Infraestrutura",
            technologies: "Crowdstrike, Zabbix, PowerShell, Bash",
            year: "2020",
            description: `
                <p><strong>Resumo da Atuação:</strong> Gerenciamento de ponta a ponta (Project Management) da reestruturação da segurança de endpoints e monitoramento da infraestrutura.</p> 
                <p>Liderança de equipe mista (interna e temporária) para elevar a maturidade de cibersegurança e governança de TI em um parque de 330+ ativos (Workstations e Servidores).</p>
                <p><strong>Principais Entregas e Impactos:</strong></p>
                <p><strong>Cybersecurity Hardening com CrowdStrike:</strong> Substituição de antivírus tradicional pela implementação da plataforma CrowdStrike (EDR - Endpoint Detection and Response), elevando a postura de segurança da empresa contra ameaças avançadas e ransomware, cobrindo 100% dos servidores e estações de trabalho.</p>
                <p><strong>Gestão de Equipe e Recursos:</strong> Contratação, onboarding e liderança tática de equipe dedicada, garantindo a entrega do projeto dentro do cronograma (On-Time) e coordenando reportes executivos de progresso para os Stakeholders.</p>
                <p><strong>Saneamento e Compliance:</strong> Realização de varredura completa no ambiente para remoção de softwares não homologados e padronização de hardware legado, garantindo que todas as máquinas estivessem em conformidade com as políticas corporativas antes da blindagem de segurança.</p>
                <p><strong>Observabilidade (Zabbix) e Rede:</strong> Implementação do Zabbix para monitoramento proativo de saúde do ambiente, em paralelo a uma reestruturação física da rede cabeada para suportar melhor distribuição de tráfego.</p>
                <p><strong>Governança de Ativos (ITAM):</strong> Como valor agregado (Value-Add), estruturei o primeiro Controle Unificado de Ativos de TI e Licenciamento (Software Asset Management) da companhia, criando visibilidade total sobre o parque tecnológico e custos associados.</p>
            `
        },
        en: {
            title: "Advanced Security Implementation (EDR CrowdStrike) and Infrastructure Optimization",
            subtitle: "Crowdstrike and Infrastructure Optimization",
            technologies: "Crowdstrike, Zabbix, PowerShell, Bash",
            year: "2020",
            description: `
                <p><strong>Role Summary:</strong> End-to-end management (Project Management) of the endpoint security restructuring and infrastructure monitoring.</p> 
                <p>Leadership of a mixed team (internal and temporary) to raise the cybersecurity maturity and IT governance across a fleet of 330+ assets (Workstations and Servers).</p>
                <p><strong>Key Deliverables and Impacts:</strong></p>
                <p><strong>Cybersecurity Hardening with CrowdStrike:</strong> Replacement of traditional antivirus with the implementation of the CrowdStrike platform (EDR - Endpoint Detection and Response), elevating the company's security posture against advanced threats and ransomware, covering 100% of servers and workstations.</p>
                <p><strong>Team and Resource Management:</strong> Hiring, onboarding, and tactical leadership of a dedicated team, ensuring project delivery on schedule (On-Time) and coordinating executive progress reports for Stakeholders.</p>
                <p><strong>Sanitation and Compliance:</strong> Full environmental scan to remove unapproved software and standardize legacy hardware, ensuring all machines complied with corporate policies before applying the security shield.</p>
                <p><strong>Observability (Zabbix) and Networking:</strong> Implementation of Zabbix for proactive environment health monitoring, alongside a physical restructuring of the wired network to support better traffic distribution.</p>
                <p><strong>Asset Governance (ITAM):</strong> As a Value-Add, I structured the company's first Unified IT Asset and Licensing Control (Software Asset Management), creating total visibility over the technology fleet and associated costs.</p>
            `
        }
    },

    'nohall': {
        image: "../static/assets/Nohall.png",
        video: null,
        animation: null,

        pt: {
            title: "Projeto Premiado: Nohall – Connection with Value",
            subtitle: "🏆 Vencedor do FIAP Global Solution 2025 (1º Lugar)",
            technologies: "Figma, Oracle Data Modeler, Canvas",
            year: "Contínuo",
            description: `
                <p>Desenvolvimento de uma solução disruptiva para o setor de RH (HR Tech) visando mitigar o abismo entre o avanço tecnológico exponencial e a estagnação das competências humanas (Soft Skills) na Indústria 5.0.</p> <p>O projeto foi eleito o Melhor Trabalho do Ano, superando expectativas pela complexidade e maturidade da solução desenvolvida em apenas 6 meses de curso.</p>
                <p><strong>O Desafio (Problem Statement):</strong> Identificamos que o mercado de trabalho atual sofre com a desumanização dos processos seletivos e a ineficiência no "Match" entre candidatos e empresas.</p> 
                <p>Estudos indicam que enquanto a tecnologia avança, a falta de padronização na avaliação de habilidades comportamentais gera desigualdade e ineficiência operacional.</p>
                <p><strong>A Solução – Nohall:</strong> Criamos um ecossistema de qualificação mútua que atua em três frentes principais:</p>
                
                <img src="../static/assets/Nohall_Arena.png" class="img-float-right" alt="Arena Softskills">
                
                <p><strong>Recrutamento Consciente & "O Não Educativo":</strong> Diferente de plataformas tradicionais, o Nohall bloqueia vagas com requisitos abusivos (ex: exigir sênior para vaga júnior) e fornece feedback automático de desenvolvimento para candidatos rejeitados, combatendo a falta de transparência.</p>
                <p><strong>Arena de Soft Skills (Gamificação & IA):</strong> Projetamos um ambiente imersivo (VR/AR) onde a IA analisa microexpressões, tom de voz e argumentação em cenários simulados (ex: entrevistas, negociações) para validar e treinar soft skills de forma objetiva.</p>
                <p><strong>Portfólio Unificado:</strong> Centralização de códigos (GitHub), currículo e portfólio em um "Perfil Vivo", facilitando a visualização holística do candidato.</p>
                <p><strong>Ferramentas e Tecnologias Aplicadas:</strong></p>
                <p><strong>Design & Prototipagem (Figma):</strong> Criação de interfaces de alta fidelidade, focadas na Jornada do Usuário (UX/UI), desde o Onboarding até os Dashboards de gestão de vagas e a interface imersiva da Arena.</p>
                
                <img src="../static/assets/Nohall_BancoDados.png" class="img-float-left" alt="Banco de Dados">
                
                <p><strong>Arquitetura de Dados (Oracle Data Modeler):</strong> Modelagem completa do Banco de Dados (Modelos Lógico e Relacional), estruturando entidades complexas como Usuários, Empresas, Vagas, Skills e as relações de "Match".</p>
                <p><strong>Inteligência Artificial (Gemini):</strong> Utilizada para pesquisa de mercado, estruturação de cenários de teste para a Arena e validação de conceitos da Indústria 5.0.</p>
                <p><strong>Apresentação Visual (Canva):</strong> Desenvolvimento da identidade visual e pitch de venda do produto.</p>
                <p><strong>Principais Aprendizados e Conquistas:</strong></p>
                <p>Ciclo Completo de Desenvolvimento: Experiência prática desde a ideação (Design Thinking) até a arquitetura técnica e prototipagem funcional.</p>
                <p>Trabalho em Equipe: Com muita dedicação e esforços para entregar um MVP complexo dentro de um prazo agressivo (1 semana).</p>
                <p>Reconhecimento Acadêmico: A premiação valida a capacidade de transformar problemas teóricos complexos em soluções práticas, viáveis e tecnicamente bem fundamentadas.</p>
            `
        },
        en: {
            title: "Award-winning Project: Nohall – Connection with Value",
            subtitle: "🏆 Winner of FIAP Global Solution 2025 (1st Place)",
            technologies: "Figma, Oracle Data Modeler, Canvas",
            year: "Continuous",
            description: `
                <p>Development of a disruptive solution for the HR sector (HR Tech) aimed at bridging the gap between exponential technological advancement and the stagnation of human competencies (Soft Skills) in Industry 5.0.</p> <p>The project was voted Best Work of the Year, exceeding expectations due to the complexity and maturity of the solution developed in just 6 months of the course.</p>
                <p><strong>The Challenge (Problem Statement):</strong> We identified that the current job market suffers from the dehumanization of selection processes and inefficiency in the "Match" between candidates and companies.</p> 
                <p>Studies indicate that while technology advances, the lack of standardization in behavioral skills assessment generates inequality and operational inefficiency.</p>
                <p><strong>The Solution – Nohall:</strong> We created a mutual qualification ecosystem acting on three main fronts:</p>
                
                <img src="../static/assets/Nohall_Arena.png" class="img-float-right" alt="Softskills Arena">
                
                <p><strong>Conscious Recruiting & "The Educational No":</strong> Unlike traditional platforms, Nohall blocks jobs with abusive requirements (e.g., demanding senior skills for a junior role) and provides automatic development feedback for rejected candidates, combating the lack of transparency.</p>
                <p><strong>Soft Skills Arena (Gamification & AI):</strong> We designed an immersive environment (VR/AR) where AI analyzes micro-expressions, tone of voice, and argumentation in simulated scenarios (e.g., interviews, negotiations) to objectively validate and train soft skills.</p>
                <p><strong>Unified Portfolio:</strong> Centralization of codes (GitHub), resume, and portfolio in a "Living Profile", facilitating holistic candidate visualization.</p>
                <p><strong>Applied Tools and Technologies:</strong></p>
                <p><strong>Design & Prototyping (Figma):</strong> Creation of high-fidelity interfaces, focused on the User Journey (UX/UI), from Onboarding to job management Dashboards and the Arena's immersive interface.</p>
                
                <img src="../static/assets/Nohall_BancoDados.png" class="img-float-left" alt="Database">
                
                <p><strong>Data Architecture (Oracle Data Modeler):</strong> Complete Database modeling (Logical and Relational Models), structuring complex entities such as Users, Companies, Jobs, Skills, and "Match" relations.</p>
                <p><strong>Artificial Intelligence (Gemini):</strong> Used for market research, structuring test scenarios for the Arena, and validating Industry 5.0 concepts.</p>
                <p><strong>Visual Presentation (Canva):</strong> Development of the product's visual identity and sales pitch.</p>
                <p><strong>Key Learnings and Achievements:</strong></p>
                <p>Complete Development Cycle: Practical experience from ideation (Design Thinking) to technical architecture and functional prototyping.</p>
                <p>Teamwork: With much dedication and effort to deliver a complex MVP within an aggressive timeframe (1 week).</p>
                <p>Academic Recognition: The award validates the ability to transform complex theoretical problems into practical, viable, and technically well-founded solutions.</p>
            `
        }
    }
};

/* ======================================================= */
/* MOTOR DE TRADUÇÃO DA PÁGINA                             */
/* ======================================================= */
function changeLanguage(lang) {
    // 1. Atualiza visual das bandeiras
    const flags = document.querySelectorAll('.flag-btn');
    flags.forEach(flag => {
        flag.classList.remove('active-lang');
        if (flag.id === `flag-${lang}`) {
            flag.classList.add('active-lang');
        }
    });

    // 2. Traduz HTML estático (labels, botões, rodapé)
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (staticTranslations[lang] && staticTranslations[lang][key]) {
            element.innerHTML = staticTranslations[lang][key];
        }
    });

    // 3. Traduz o conteúdo dinâmico do projeto aberto
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    
    if (projectId && projectsDB[projectId]) {
        const projectData = projectsDB[projectId];
        const langData = projectData[lang] || projectData['pt']; // Fallback para PT

        document.getElementById('p-title').innerText = langData.title;
        document.getElementById('p-subtitle').innerText = langData.subtitle;
        document.getElementById('p-desc').innerHTML = langData.description;
        document.getElementById('p-tech').innerText = langData.technologies;
        document.getElementById('p-year').innerText = langData.year;
        document.title = `${langData.title} - Bruno Zamboni`;
    } else {
        // Se a pessoa trocar o idioma estando na tela de "Projeto não encontrado"
        const container = document.getElementById('project-container');
        if (container && container.querySelector('h1')) {
            container.innerHTML = `
                <h1 style="color:red; text-align:center">${staticTranslations[lang]["not_found"]}</h1>
                <div style="text-align:center; margin-top:20px;">
                <a href="../index.html" class="btn-back-link">${staticTranslations[lang]["back_start"]}</a>
                </div>
            `;
        }
    }

    // 4. Salva a preferência
    localStorage.setItem('preferredLanguage', lang);
}


/* ======================================================= */
/* LÓGICA DE CARREGAMENTO INICIAL DA PÁGINA                */
/* ======================================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // Identifica o idioma salvo ou usa PT como padrão
    const savedLang = localStorage.getItem('preferredLanguage') || 'pt';

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const projectData = projectsDB[projectId];

    if (projectData) {
        // Carrega imagens e vídeos (que não dependem do idioma)
        const imgEl = document.getElementById('p-img');
        const videoEl = document.getElementById('p-video');

        if (projectData.video) {
            imgEl.style.display = 'none';
            videoEl.style.display = 'block';
            videoEl.src = projectData.video;
            
            videoEl.muted = true; 
            videoEl.currentTime = 0;
            videoEl.play().catch(e => console.log("Autoplay bloqueado"));
        } else {
            videoEl.style.display = 'none';
            videoEl.pause();
            videoEl.src = "";
            imgEl.style.display = 'block';
            imgEl.src = projectData.image;
        }

        const animSection = document.getElementById('animation-section');
        const animVideo = document.getElementById('p-animation-video');

        if (projectData.animation) {
            animSection.style.display = 'block';
            animVideo.src = projectData.animation;
        } else {
            animSection.style.display = 'none';
            animVideo.pause();
            animVideo.src = "";
        }

    } else {
        // Trata erro de projeto não encontrado no idioma correto
        document.getElementById('project-container').innerHTML = `
            <h1 style="color:red; text-align:center">${staticTranslations[savedLang]["not_found"]}</h1>
            <div style="text-align:center; margin-top:20px;">
            <a href="../index.html" class="btn-back-link">${staticTranslations[savedLang]["back_start"]}</a>
            </div>
        `;
    }

    // Aplica o idioma inicial (Isso preencherá os textos do projeto e o HTML)
    changeLanguage(savedLang);
});