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
        image: "../static/assets/Migracao_Servidores/Migracao_Servidores.png",
        video: null,
        animation: "../static/assets/Migracao_Servidores/Migracao_Servidores.mp4", 
        
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
        image: "../static/assets/Migracao/Transformacao_Digital.png",
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
        image: "../static/assets/Restruturacao/seguranca.png",
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
        image: "../static/assets/NoHall/Nohall.png",
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
                
                <img src="../static/assets/NoHall/Nohall_Arena.png" class="img-float-right" alt="Arena Softskills">
                
                <p><strong>Recrutamento Consciente & "O Não Educativo":</strong> Diferente de plataformas tradicionais, o Nohall bloqueia vagas com requisitos abusivos (ex: exigir sênior para vaga júnior) e fornece feedback automático de desenvolvimento para candidatos rejeitados, combatendo a falta de transparência.</p>
                <p><strong>Arena de Soft Skills (Gamificação & IA):</strong> Projetamos um ambiente imersivo (VR/AR) onde a IA analisa microexpressões, tom de voz e argumentação em cenários simulados (ex: entrevistas, negociações) para validar e treinar soft skills de forma objetiva.</p>
                <p><strong>Portfólio Unificado:</strong> Centralização de códigos (GitHub), currículo e portfólio em um "Perfil Vivo", facilitando a visualização holística do candidato.</p>
                <p><strong>Ferramentas e Tecnologias Aplicadas:</strong></p>
                <p><strong>Design & Prototipagem (Figma):</strong> Criação de interfaces de alta fidelidade, focadas na Jornada do Usuário (UX/UI), desde o Onboarding até os Dashboards de gestão de vagas e a interface imersiva da Arena.</p>
                
                <img src="../static/assets/NoHall/Nohall_BancoDados.png" class="img-float-left" alt="Banco de Dados">
                
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
                
                <img src="../static/assets/NoHall/Nohall_Arena.png" class="img-float-right" alt="Softskills Arena">
                
                <p><strong>Conscious Recruiting & "The Educational No":</strong> Unlike traditional platforms, Nohall blocks jobs with abusive requirements (e.g., demanding senior skills for a junior role) and provides automatic development feedback for rejected candidates, combating the lack of transparency.</p>
                <p><strong>Soft Skills Arena (Gamification & AI):</strong> We designed an immersive environment (VR/AR) where AI analyzes micro-expressions, tone of voice, and argumentation in simulated scenarios (e.g., interviews, negotiations) to objectively validate and train soft skills.</p>
                <p><strong>Unified Portfolio:</strong> Centralization of codes (GitHub), resume, and portfolio in a "Living Profile", facilitating holistic candidate visualization.</p>
                <p><strong>Applied Tools and Technologies:</strong></p>
                <p><strong>Design & Prototyping (Figma):</strong> Creation of high-fidelity interfaces, focused on the User Journey (UX/UI), from Onboarding to job management Dashboards and the Arena's immersive interface.</p>
                
                <img src="../static/assets/NoHall/Nohall_BancoDados.png" class="img-float-left" alt="Database">
                
                <p><strong>Data Architecture (Oracle Data Modeler):</strong> Complete Database modeling (Logical and Relational Models), structuring complex entities such as Users, Companies, Jobs, Skills, and "Match" relations.</p>
                <p><strong>Artificial Intelligence (Gemini):</strong> Used for market research, structuring test scenarios for the Arena, and validating Industry 5.0 concepts.</p>
                <p><strong>Visual Presentation (Canva):</strong> Development of the product's visual identity and sales pitch.</p>
                <p><strong>Key Learnings and Achievements:</strong></p>
                <p>Complete Development Cycle: Practical experience from ideation (Design Thinking) to technical architecture and functional prototyping.</p>
                <p>Teamwork: With much dedication and effort to deliver a complex MVP within an aggressive timeframe (1 week).</p>
                <p>Academic Recognition: The award validates the ability to transform complex theoretical problems into practical, viable, and technically well-founded solutions.</p>
            `
        }
    },

    'portfolio': {
        image: "../static/assets/The_Bridge/The_Bridge_Portfolio.png", // Sugestão: Tire um print bonito da página principal e salve com esse nome!
        video: null,
        animation: null,

        pt: {
            title: "The Bridge: Portfólio Interativo & Experiência Digital",
            subtitle: "Desenvolvimento Front-end Avançado & UX/UI",
            technologies: "HTML5, CSS3 (Glassmorphism), Vanilla JS, Glide.js, Prompt Engineering",
            year: "2026",
            description: `
                <p><strong>Resumo da Atuação:</strong> Idealização, design e desenvolvimento de um portfólio interativo (The Bridge) para unificar 18 anos de experiência em infraestrutura com as minhas novas habilidades em desenvolvimento Full Stack. O projeto foi construído do zero, focando em performance e em uma experiência de usuário (UX) imersiva.</p>
                <p><strong>Principais Entregas e Impactos:</strong></p>
                <p><strong>Engenharia de Prompt e Pair Programming com IA:</strong> Utilização avançada de Inteligência Artificial como co-piloto de desenvolvimento, iterando códigos complexos, refatorando lógicas de JavaScript e garantindo as melhores práticas de Clean Code.</p>
                <p><strong>Design Imersivo (Glassmorphism & Terminal):</strong> Criação de uma interface moderna mesclando o conceito visual de "Glassmorphism" com a estética de terminal, prestando uma homenagem ao meu sólido background em infraestrutura e Linux.</p>
                <p><strong>Internacionalização (i18n) Dinâmica:</strong> Implementação de um motor de tradução nativo em Vanilla JavaScript, permitindo a troca instantânea entre Português e Inglês sem recarregar a página, retendo a preferência do usuário via LocalStorage.</p>
                <p><strong>Componentes Interativos & Responsividade:</strong> Desenvolvimento de Flashcards 3D, integração avançada do Glide.js com efeito "Center Mode" e responsividade fluida (Mobile-First adaptado), garantindo usabilidade impecável em qualquer dispositivo.</p>
                <p><strong>Easter Eggs e Microinterações:</strong> Programação de um terminal secreto interativo e do efeito "Matrix" oculto, demonstrando domínio em manipulação do DOM e Canvas API, além de criar uma experiência lúdica e engajadora para os recrutadores.</p>
            `
        },
        en: {
            title: "The Bridge: Interactive Portfolio & Digital Experience",
            subtitle: "Advanced Front-end Development & UX/UI",
            technologies: "HTML5, CSS3 (Glassmorphism), Vanilla JS, Glide.js, Prompt Engineering",
            year: "2026",
            description: `
                <p><strong>Role Summary:</strong> Ideation, design, and development of an interactive portfolio (The Bridge) to unify 18 years of infrastructure experience with my new Full Stack development skills. The project was built from scratch, focusing on performance and an immersive user experience (UX).</p>
                <p><strong>Key Deliverables and Impacts:</strong></p>
                <p><strong>Prompt Engineering and AI Pair Programming:</strong> Advanced use of Artificial Intelligence as a development co-pilot, iterating complex code, refactoring JavaScript logic, and ensuring Clean Code best practices.</p>
                <p><strong>Immersive Design (Glassmorphism & Terminal):</strong> Creation of a modern interface blending the visual concept of "Glassmorphism" with a terminal aesthetic, paying homage to my solid background in infrastructure and Linux.</p>
                <p><strong>Dynamic Internationalization (i18n):</strong> Implementation of a native translation engine in Vanilla JavaScript, allowing instant switching between Portuguese and English without reloading the page, retaining user preference via LocalStorage.</p>
                <p><strong>Interactive Components & Responsiveness:</strong> Development of 3D Flashcards, advanced integration of Glide.js with a "Center Mode" effect, and fluid responsiveness, ensuring flawless usability on any device.</p>
                <p><strong>Easter Eggs and Micro-interactions:</strong> Programming of a secret interactive terminal and a hidden "Matrix" effect, demonstrating mastery of DOM manipulation and the Canvas API, while creating a playful and engaging experience for recruiters.</p>
            `
        }
    },

    'careplus': {
        image: "../static/assets/CarPlusFamily/CarPlusFamily Homepage.png",
        video: null,
        animation: null,

        pt: {
            title: "Care Plus Family – Ecossistema de Saúde Gamificada & Engajamento Familiar",
            subtitle: "🏥 Desafio Corporativo & Acadêmico FIAP + Care Plus",
            technologies: "HTML5, CSS3, JavaScript (ES6 Modules), Bootstrap 5, WhatsApp API, Oracle SQL / MER, UX/UI Design",
            year: "2026",
            description: `
                <p><strong>Resumo da Atuação:</strong> Desenvolvimento de uma solução inovadora para o ecossistema da <strong>Care Plus</strong> (operadora de saúde corporativa premium), idealizada durante o Challenge universitário na FIAP. O projeto foca em transformar a relação das famílias com a medicina preventiva, combatendo a abstenção de consultas e incentivando hábitos saudáveis contínuos por meio de tecnologia e gamificação.</p>
                
                <p><strong>O Desafio (Problem Statement):</strong> O setor de saúde suplementar enfrenta custos crescentes e desperdício operacional provocados por dois fatores centrais: a cultura reativa da população (buscar o médico apenas na doença) e as altas taxas de <em>No-Show</em> (pacientes que agendam consultas e exames, mas não comparecem, gerando ociosidade na rede credenciada).</p>

                <img src="../static/assets/CarPlusFamily/CarPlusFamily Engajamento familiar combate NOSHOW.png" class="img-float-right" alt="Engajamento Familiar e Combate ao No-Show">

                <p><strong>Engajamento Familiar & Combate ao No-Show:</strong> Estruturamos um mecanismo integrado de confirmações ativas e incentivo mútuo entre os membros da família. Ao conectar dependentes e titulares na mesma plataforma, o sistema cria um ciclo de cuidado compartilhado, com lembretes inteligentes e recompensas que reduzem diretamente a abstenção nas consultas agendadas.</p>

                <img src="../static/assets/CarPlusFamily/CarPlusFamily Gamificação.png" class="img-float-left" alt="Game Plus - Gamificação em Saúde">

                <p><strong>Game Plus + (A Saúde Gamificada):</strong> Projetamos um módulo interativo onde manter a saúde em dia gera benefícios tangíveis. O cumprimento de metas preventivas (como check-ups periódicos, vacinação, hidratação e atividades físicas) gera pontos no ecossistema familiar. Esses pontos podem ser convertidos em vantagens exclusivas na rede de parceiros Care Plus.</p>

                <img src="../static/assets/CarPlusFamily/CarPlusFamily Avatar.png" class="img-float-right" alt="Personalização de Avatares">

                <p><strong>Personalização de Avatares & Psicologia Comportamental:</strong> Para aproximar o público jovem e tornar a jornada engajadora, criamos uma interface lúdica com avatares customizáveis. Cada membro da família desbloqueia novos itens e personalizações conforme mantém sua constância nos cuidados de saúde, aplicando princípios modernos de <em>Behavioral Design</em>.</p>

                <img src="../static/assets/CarPlusFamily/CarPlusFamily Agendamentos.png" class="img-float-left" alt="Agendamento Inteligente">

                <p><strong>Jornada de Agendamento Fluida & Telemedicina:</strong> Otimização da experiência do usuário (UX) no fluxo de busca e agendamento de consultas médicas e odontológicas. O módulo centraliza a agenda de toda a família, oferecendo acesso rápido à Telemedicina 24 horas e localização inteligente de prestadores credenciados.</p>

                <img src="../static/assets/CarPlusFamily/CarPlusFamily Integração com whatsapp por API.png" class="img-float-right" alt="Integração WhatsApp API">

                <p><strong>Automação Conversacional & WhatsApp Business API:</strong> Integração estratégica com a API do WhatsApp para notificações em tempo real. O paciente recebe lembretes automatizados com confirmação/cancelamento em 1 clique, orientações pré-exame e integração com assistentes virtuais de voz, garantindo acessibilidade e conveniência no canal mais utilizado do Brasil.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <img src="../static/assets/CarPlusFamily/CarPlusFamily Modelagem de  dados MER.png" class="img-float-left" alt="Modelagem de Dados MER">

                <p><strong>Arquitetura e Modelagem de Dados Relacional (MER):</strong> Desenvolvimento da modelagem conceitual e lógica do banco de dados (MER/DER) utilizando Oracle Data Modeler. A estrutura foi projetada para suportar alta cardinalidade, relacionando titulares, dependentes, histórico clínico, transações de pontos da gamificação e logs de notificações.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <p><strong>Entregas e Competências Desenvolvidas:</strong></p>
                <p>• <strong>Visão de Produto & Negócio:</strong> Aplicação prática de tecnologia para endereçar dores reais de uma grande operadora de saúde (redução de custos com sinistralidade e No-Show).</p>
                <p>• <strong>Arquitetura Front-end Modular:</strong> Código estruturado em JavaScript moderno (ES6 Modules), interface responsiva com Bootstrap 5 e componentização limpa.</p>
                <p>• <strong>Engenharia de Dados:</strong> Modelagem relacional robusta e normalizada, garantindo integridade e consistência dos dados familiares e clínicos.</p>
            `
        },
        en: {
            title: "Care Plus Family – Gamified Health Ecosystem & Family Engagement",
            subtitle: "🏥 FIAP + Care Plus Corporate & Academic Challenge",
            technologies: "HTML5, CSS3, JavaScript (ES6 Modules), Bootstrap 5, WhatsApp API, Oracle SQL / ERD, UX/UI Design",
            year: "2025",
            description: `
                <p><strong>Role Summary:</strong> Engineering an innovative digital solution for the <strong>Care Plus</strong> ecosystem (a leading premium corporate healthcare provider in Brazil), conceived during the FIAP academic challenge. The project aims to reshape how families engage with preventive medicine, drastically mitigating appointment no-shows and encouraging persistent healthy habits through technology and gamification.</p>
                
                <p><strong>The Challenge (Problem Statement):</strong> The private healthcare industry faces escalating costs and substantial operational waste driven by two core factors: a reactive care culture (seeking healthcare only when illness strikes) and high <em>No-Show</em> rates (patients booking appointments and diagnostic exams but failing to attend, resulting in idle clinical capacity).</p>

                <img src="../static/assets/CarPlusFamily/CarPlusFamily Engajamento familiar combate NOSHOW.png" class="img-float-right" alt="Family Engagement and No-Show Prevention">

                <p><strong>Family Engagement & No-Show Prevention:</strong> We built an integrated mechanism combining active confirmations and mutual family incentives. By connecting planholders and dependents on a unified platform, the system establishes a shared cycle of care, delivering intelligent reminders and rewards that directly drive down absenteeism in scheduled appointments.</p>

                <img src="../static/assets/CarPlusFamily/CarPlusFamily Gamificação.png" class="img-float-left" alt="Game Plus - Gamified Health">

                <p><strong>Game Plus + (Gamified Healthcare):</strong> We designed an interactive module where staying healthy yields tangible rewards. Completing preventive milestones (such as routine check-ups, vaccinations, hydration goals, and physical activity) awards points within the family ecosystem. These points can be redeemed for exclusive benefits across Care Plus partner networks.</p>

                <img src="../static/assets/CarPlusFamily/CarPlusFamily Avatar.png" class="img-float-right" alt="Avatar Customization">

                <p><strong>Avatar Customization & Behavioral Psychology:</strong> To appeal to younger audiences and ensure high user retention, we crafted a playful interface featuring customizable avatars. Each family member unlocks new accessories and customization tiers as they sustain consistent health habits, applying modern <em>Behavioral Design</em> principles.</p>

                <img src="../static/assets/CarPlusFamily/CarPlusFamily Agendamentos.png" class="img-float-left" alt="Smart Scheduling">

                <p><strong>Frictionless Scheduling Journey & Telemedicine:</strong> Optimized user experience (UX) across the discovery and scheduling flows for medical and dental consultations. The platform consolidates the entire family's calendar, delivering 1-click access to 24/7 Telemedicine and smart geolocated search for accredited providers.</p>

                <img src="../static/assets/CarPlusFamily/CarPlusFamily Integração com whatsapp por API.png" class="img-float-right" alt="WhatsApp Business API Integration">

                <p><strong>Conversational Automation & WhatsApp Business API:</strong> Strategic integration with the WhatsApp API for real-time engagement. Patients receive automated alerts with 1-tap confirmation/rescheduling, pre-exam guidelines, and voice assistant connectivity, ensuring seamless convenience on the country's most ubiquitous messaging channel.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <img src="../static/assets/CarPlusFamily/CarPlusFamily Modelagem de  dados MER.png" class="img-float-left" alt="Data Architecture and ERD">

                <p><strong>Relational Data Architecture & ERD Modeling:</strong> Designed the conceptual and logical database architecture (ERD/DER) using Oracle Data Modeler. The data structure was built to handle high cardinality, efficiently relating primary holders, dependents, clinical records, gamification reward ledgers, and notification logs.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <p><strong>Key Deliverables & Core Competencies:</strong></p>
                <p>• <strong>Product & Business Acumen:</strong> Practical application of technology addressing critical pain points for an enterprise healthcare provider (reducing claims loss ratios and no-show overhead).</p>
                <p>• <strong>Modular Front-end Architecture:</strong> Codebase structured with modern JavaScript (ES6 Modules), responsive layout powered by Bootstrap 5, and clean UI componentization.</p>
                <p>• <strong>Data Engineering:</strong> Robust, normalized relational modeling guaranteeing data integrity and consistency across family profiles and clinical interactions.</p>
            `
        }
    },

    'elo': {
        image: "../static/assets/ELO_ESG/HomePage.png",
        video: null,
        animation: null,

        pt: {
            title: "ELO — Aplicativo Mobile Nativo de Educação Financeira & Sustentabilidade ESG",
            subtitle: "🌿 Kotlin 2.0 • Jetpack Compose • Google Gemini AI • Room SQLite • Firebase Auth",
            technologies: "Android Nativo (Kotlin 2.0), Jetpack Compose (M3), Google Gemini LLM, Firebase Auth, Room / SQLite, Dagger Hilt 2.51, Retrofit 2, Coroutines, CI/CD GitHub Actions",
            year: "2026",
            description: `
                <p><strong>Resumo da Atuação:</strong> Concepção e desenvolvimento de um aplicativo mobile nativo construído com o que há de mais moderno no ecossistema Android (Kotlin 2.0 e Jetpack Compose). O <strong>ELO</strong> une inteligência artificial generativa à teoria dos três pilares <strong>ESG (Environmental, Social and Governance)</strong>, democratizando a educação financeira familiar e a consciência socioambiental.</p>
                
                <p><strong>Autenticação Segura na Nuvem (Firebase Auth):</strong> O onboarding e controle de acesso foram arquitetados utilizando o <strong>Firebase Authentication Android SDK</strong>, integrando validação reativa de força de senha em tempo real, proteção de dados e perfis criptografados na nuvem.</p>

                <img src="../static/assets/ELO_ESG/Dashboard.png" class="img-float-right" alt="Dashboard Financeiro ELO">

                <p><strong>Dashboard & Gestão Orçamentária em Tempo Real:</strong> Uma interface reativa construída com <em>Jetpack Compose Material 3</em> e arquitetura <strong>MVVM + Clean Architecture</strong>. Permite visualização imediata do saldo mensal, gráfico dinâmico de despesas vs receitas, busca de transações e acesso ao assistente de IA através de Floating Action Button (FAB).</p>

                <img src="../static/assets/ELO_ESG/Lançamentos.png" class="img-float-left" alt="Registro com Inteligência Artificial Gemini">

                <p><strong>Registro com IA Generativa (Google Gemini LLM):</strong> Implementação de processamento de linguagem natural (NLP) consumindo a API do <strong>Google Gemini</strong> (modelo <em>gemini-flash-lite</em>). O usuário registra transações de forma conversacional (ex: <em>"Gastei 35 reais no almoço hoje"</em>), e a IA extrai automaticamente valor, tipo de despesa, categoria e data com alta precisão.</p>

                <img src="../static/assets/ELO_ESG/Educação Financeira.png" class="img-float-right" alt="Educação Financeira e Flashcards">

                <p><strong>Educação Financeira Imersiva:</strong> Trilha pedagógica dividida em 5 módulos com microaulas interativas sobre juros, reserva de emergência e orçamento familiar. Inclui sistema de <strong>Flashcards 3D interativos</strong> com virada de card e <strong>Quizzes pontuados</strong> com feedback instantâneo de retenção.</p>

                <img src="../static/assets/ELO_ESG/Finanças.png" class="img-float-left" alt="Metas e Limites Orçamentários">

                <p><strong>Metas, Tetos Orçamentários e Score de Saúde:</strong> Visualização analítica dos gastos com gráficos de distribuição por categorias, histórico de evolução financeira semestral, alertas de limite de gastos por categoria e algoritmo proprietário para cálculo do <em>Score de Saúde Financeira</em>.</p>

                <img src="../static/assets/ELO_ESG/Conquistas.png" class="img-float-right" alt="Gamificação e Conquistas">

                <p><strong>Gamificação e Psicologia de Engajamento:</strong> Sistema motivacional com níveis progressivos de evolução financeira (ex: <em>"Guardião Financeiro"</em>), acúmulo de pontos de experiência (XP) e medalhas exclusivas desbloqueadas conforme o cumprimento de metas de economia e aprendizado.</p>

                <img src="../static/assets/ELO_ESG/Economize.png" class="img-float-left" alt="Pilar Ambiental ESG">

                <p><strong>Pilar Ambiental (E - Environmental) & Green IT:</strong> Guias práticos expansíveis para redução de consumo de água e energia elétrica nas residências. Incorpora princípios inovadores de <strong>Green IT</strong>, orientando sobre uso consciente de inteligência artificial e otimização de processamento para economia energética em Data Centers.</p>

                <img src="../static/assets/ELO_ESG/Social.png" class="img-float-right" alt="Pilar Social e Localizador CRAS">

                <p><strong>Pilar Social (S - Social) & Integração ViaCEP:</strong> Hub de assistência com orientações sobre programas sociais (Bolsa Família, BPC, Tarifa Social) e ferramenta de <strong>Localização Inteligente de postos CRAS</strong> via consulta de CEP consumindo a API pública do <em>ViaCEP</em> com tratamento assíncrono via Retrofit.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <img src="../static/assets/ELO_ESG/SQLite Banco de dados..png" class="img-float-left" alt="Persistência Local Room e SQLite">

                <p><strong>Persistência Local Offline-First (Room / SQLite):</strong> Arquitetura de dados local utilizando <strong>Room Database (SQLite)</strong> com DAOs otimizados (<em>TransacaoDao</em>, <em>OrcamentoDao</em>) e suporte a <em>Migrations</em> estruturadas. Garantia de operação 100% fluida mesmo sem conectividade, validada em tempo de execução através do <em>Database Inspector</em> no Android Studio.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <p><strong>Excelência de Engenharia, Qualidade e DevOps:</strong></p>
                <p>• <strong>Injeção de Dependências:</strong> <strong>Dagger Hilt 2.51</strong> desacoplando ViewModels, Repositories e Serviços de Rede com ciclo de vida unificado.</p>
                <p>• <strong>Assincronismo Reativo:</strong> Kotlin Coroutines e StateFlow para fluxos de dados unidirecionais seguros contra vazamento de memória.</p>
                <p>• <strong>Testes Automatizados:</strong> Testes unitários com <strong>MockK / JUnit 4</strong> para lógica de negócio e testes instrumentados de banco de dados com Room In-Memory.</p>
                <p>• <strong>CI/CD & Otimização:</strong> Pipeline automatizada no <strong>GitHub Actions</strong> para build e testes, com minificação avançada via <strong>R8/ProGuard</strong> gerando um APK ultra-leve de apenas ~7.9 MB.</p>
                <p>• <strong>Repositório no GitHub:</strong> <a href="https://github.com/zambonib/ELO_ESG" target="_blank" style="color: #39ff14; text-decoration: underline; font-weight: 600;">github.com/zambonib/ELO_ESG</a></p>
            `
        },
        en: {
            title: "ELO — Native ESG Mobile App for Financial Education & Sustainability",
            subtitle: "🌿 Kotlin 2.0 • Jetpack Compose • Google Gemini AI • Room SQLite • Firebase Auth",
            technologies: "Native Android (Kotlin 2.0), Jetpack Compose (M3), Google Gemini LLM, Firebase Auth, Room / SQLite, Dagger Hilt 2.51, Retrofit 2, Coroutines, GitHub Actions CI/CD",
            year: "2026",
            description: `
                <p><strong>Role Summary:</strong> Design and development of a native mobile application built on the modern Android ecosystem (Kotlin 2.0 and Jetpack Compose). <strong>ELO</strong> merges generative artificial intelligence with the three pillars of <strong>ESG (Environmental, Social, and Governance)</strong>, democratizing family financial education and socio-environmental awareness.</p>
                
                <p><strong>Secure Cloud Authentication (Firebase Auth):</strong> Onboarding and user identity are architected using the <strong>Firebase Authentication Android SDK</strong>, delivering real-time password strength validation, secure data access, and cloud-encrypted profiles.</p>

                <img src="../static/assets/ELO_ESG/Dashboard.png" class="img-float-right" alt="ELO Financial Dashboard">

                <p><strong>Real-time Financial Dashboard:</strong> A reactive interface built with <em>Jetpack Compose Material 3</em> following <strong>MVVM + Clean Architecture</strong> principles. Delivers instant visibility into monthly balances, dynamic income vs. expenses tracking, transaction lookup, and AI quick-access via Floating Action Button (FAB).</p>

                <img src="../static/assets/ELO_ESG/Lançamentos.png" class="img-float-left" alt="Gemini Generative AI Logging">

                <p><strong>Generative AI Transaction Logging (Google Gemini LLM):</strong> Natural language parsing (NLP) powered by the <strong>Google Gemini API</strong> (<em>gemini-flash-lite</em>). Users log transactions conversationally (e.g., <em>"I spent 35 dollars on lunch today"</em>), and the LLM accurately extracts amounts, expense types, categories, and timestamps in real time.</p>

                <img src="../static/assets/ELO_ESG/Educação Financeira.png" class="img-float-right" alt="Financial Literacy & Flashcards">

                <p><strong>Immersive Financial Literacy:</strong> A structured 5-module curriculum with micro-lessons on compound interest, emergency reserves, and budgeting. Features <strong>interactive 3D Flashcards</strong> and <strong>scored quizzes</strong> with instant retention feedback.</p>

                <img src="../static/assets/ELO_ESG/Finanças.png" class="img-float-left" alt="Budget Limits & Health Score">

                <p><strong>Budget Ceilings & Financial Health Score:</strong> Category breakdown charts, 6-month financial evolution metrics, proactive spending limit alerts, and a proprietary algorithm calculating a composite <em>Financial Health Score</em>.</p>

                <img src="../static/assets/ELO_ESG/Conquistas.png" class="img-float-right" alt="Gamification & Achievements">

                <p><strong>Gamification & Retention:</strong> Tiered progression system (e.g., <em>"Financial Guardian"</em>), XP accumulation bars, and unlockable achievement badges rewarding savings milestones and curriculum completion.</p>

                <img src="../static/assets/ELO_ESG/Economize.png" class="img-float-left" alt="Environmental Pillar ESG">

                <p><strong>Environmental Pillar (E) & Green IT:</strong> Actionable expandable guides for water and electricity reduction. Integrates cutting-edge <strong>Green IT</strong> practices, coaching users on efficient AI prompting and compute conservation to lower cloud data center carbon footprints.</p>

                <img src="../static/assets/ELO_ESG/Social.png" class="img-float-right" alt="Social Pillar & CRAS Locator">

                <p><strong>Social Pillar (S) & ViaCEP Integration:</strong> Social assistance hub providing eligibility criteria for public benefits, paired with a <strong>Smart Social Services (CRAS) Locator</strong> querying postal codes via the <em>ViaCEP API</em> through asynchronous Retrofit calls.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <img src="../static/assets/ELO_ESG/SQLite Banco de dados..png" class="img-float-left" alt="Room SQLite Local Persistence">

                <p><strong>Offline-First Local Persistence (Room / SQLite):</strong> Robust local persistence layer utilizing <strong>Room Database (SQLite)</strong> with optimized DAOs (<em>TransacaoDao</em>, <em>OrcamentoDao</em>) and schema migrations. Ensures full offline functionality, inspected live via Android Studio's <em>Database Inspector</em>.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <p><strong>Engineering Quality, Architecture & DevOps:</strong></p>
                <p>• <strong>Dependency Injection:</strong> <strong>Dagger Hilt 2.51</strong> decoupling ViewModels, Repositories, and Network Services with unified lifecycle scoping.</p>
                <p>• <strong>Reactive Concurrency:</strong> Kotlin Coroutines and StateFlow enabling memory-safe unidirectional data flow (UDF).</p>
                <p>• <strong>Automated Testing:</strong> Unit testing with <strong>MockK / JUnit 4</strong> for business logic and Room In-Memory instrumented database tests.</p>
                <p>• <strong>CI/CD & Production Hardening:</strong> Automated <strong>GitHub Actions</strong> pipeline running builds and test suites on every push/PR, paired with <strong>R8/ProGuard</strong> minification yielding an ultra-optimized ~7.9 MB APK.</p>
                <p>• <strong>GitHub Repository:</strong> <a href="https://github.com/zambonib/ELO_ESG" target="_blank" style="color: #39ff14; text-decoration: underline; font-weight: 600;">github.com/zambonib/ELO_ESG</a></p>
            `
        }
    },

    'cinevoto': {
        image: "../static/assets/CineVoto/HomePage.png",
        video: null,
        animation: null,

        pt: {
            title: "CineVoto 2.0 – Sistema de Votação em Tempo Real",
            subtitle: "Web Application • Full Stack & Cloud Real-Time",
            technologies: "Java 21, JavaScript (ES6+ Modules), Firebase Auth, Cloud Firestore, HTML5, CSS3",
            year: "2026",
            description: `
                <p><strong>Resumo do Projeto:</strong> O <strong>CineVoto 2.0</strong> é uma aplicação web moderna de alta performance projetada para resolver de forma democrática e em tempo real a escolha de filmes em sessões de cinema com amigos ou família. Na versão 2.0, o projeto passou por uma evolução arquitetural completa: superou a persistência local em arquivos de texto para integrar a infraestrutura em nuvem do <strong>Google Firebase</strong> (Authentication e Cloud Firestore) aliada a um servidor backend ultraleve em <strong>Java 21 puro</strong>.</p>

                <p><strong>Principais Funcionalidades & Arquitetura Técnica:</strong></p>

                <img src="../static/assets/CineVoto/Login.png" class="img-float-right" alt="Tela de Autenticação com Google Sign-In">

                <p><strong>Autenticação Federada com Google (Firebase Auth):</strong> Login seguro em um único clique utilizando a conta Google. Cada participante é imediatamente identificado com seu nome oficial, e-mail e avatar fotográfico, garantindo rastreabilidade e integridade para cada voto emitido na sessão.</p>

                <img src="../static/assets/CineVoto/HomePage.png" class="img-float-left" alt="Painel Inicial e Criação de Salas">

                <p><strong>Gestão Dinâmica de Salas & Papéis (Admin vs Votantes):</strong> O sistema implementa separação clara de responsabilidades. O <strong>Criador da Sala (Admin)</strong> gera um código de acesso exclusivo de 6 caracteres, cadastra e gerencia o catálogo de filmes da rodada. Os <strong>Participantes</strong> acessam instantaneamente via link direto (<code>?sala=CODIGO</code>) ou inserção manual do código.</p>

                <img src="../static/assets/CineVoto/TelaAdministradorSala.png" class="img-float-right" alt="Painel do Administrador da Sala com Apuração ao Vivo">

                <p><strong>Painel do Administrador & Apuração ao Vivo:</strong> O painel administrativo exibe em tempo real o status de cada votante conectado (com avatares visuais), contagem de votos auditável e controle total de encerramento da rodada com declaração automática do filme vencedor.</p>

                <img src="../static/assets/CineVoto/TelaVotacao.png" class="img-float-left" alt="Interface de Votação Interativa">

                <p><strong>Interface de Votação Interativa & Responsiva:</strong> Interface cinematográfica inspirada em salas de cinema (Dark Cinema com acentos neon), permitindo que os votantes escolham seus títulos favoritos com feedback tátil e visual instantâneo em qualquer dispositivo móvel ou desktop.</p>

                <img src="../static/assets/CineVoto/ConvidadoVotando.png" class="img-float-right" alt="Experiência do Convidado em Tempo Real">

                <p><strong>Sincronização em Tempo Real (Cloud Firestore):</strong> Utilizando ouvintes reativos de snapshots (<code>onSnapshot</code>), todos os votos, entradas de participantes e atualizações de catálogo refletem instantaneamente na tela de todos os envolvidos sem necessidade de recarregar a página (F5) ou de técnicas dispendiosas de polling.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <img src="../static/assets/CineVoto/Banco de dados Firestore.png" class="img-float-left" alt="Console do Banco de Dados Cloud Firestore">

                <p><strong>Persistência NoSQL & Histórico Permanente:</strong> Modelagem de dados distribuída no <strong>Cloud Firestore</strong>. Os filmes vencedores são consolidados permanentemente no perfil individual do usuário (<code>usuarios/{uid}.filmesAssistidos</code>), preservando o histórico pessoal de sessões passadas mesmo após o encerramento da sala.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <p><strong>Engenharia de Software, Backend Java & Segurança:</strong></p>
                <p>• <strong>Backend Ultraleve em Java 21:</strong> Servidor HTTP de alta velocidade implementado com as APIs nativas do JDK (<code>com.sun.net.httpserver</code>). Inicialização praticamente instantânea, zero dependências externas pesadas (sem frameworks volumosos) e baixíssimo consumo de memória.</p>
                <p>• <strong>Bloqueio Inteligente de Duplicatas:</strong> Algoritmo de normalização insensível a maiúsculas, minúsculas, espaços e acentuação gráfica (ex: <em>"A Origem"</em>, <em>"a origem"</em> e <em>"À Origem"</em> são unificados), impedindo cadastros repetidos e títulos já assistidos em sessões anteriores.</p>
                <p>• <strong>Regras de Segurança & Isolamento de Credenciais:</strong> Políticas de segurança declarativas no Firestore (<code>firestore.rules</code>) assegurando que apenas usuários autenticados gravem dados, com chaves de API isoladas do versionamento através de boas práticas com <code>.gitignore</code> e template <code>firebase-config.example.js</code>.</p>
                <p>• <strong>Repositório no GitHub:</strong> <a href="https://github.com/zambonib/cinevoto" target="_blank" style="color: #39ff14; text-decoration: underline; font-weight: 600;">github.com/zambonib/cinevoto</a></p>
            `
        },
        en: {
            title: "CineVoto 2.0 – Real-Time Voting System",
            subtitle: "Web Application • Full Stack & Cloud Real-Time",
            technologies: "Java 21, JavaScript (ES6+ Modules), Firebase Auth, Cloud Firestore, HTML5, CSS3",
            year: "2026",
            description: `
                <p><strong>Project Overview:</strong> <strong>CineVoto 2.0</strong> is a high-performance, modern web application engineered to democratically streamline movie selection for group and family movie nights in real time. In version 2.0, the system underwent a major architectural overhaul: replacing local text-file persistence with the cloud infrastructure of <strong>Google Firebase</strong> (Authentication and Cloud Firestore), coupled with an ultra-lightweight native <strong>Java 21</strong> backend server.</p>

                <p><strong>Core Features & Technical Architecture:</strong></p>

                <img src="../static/assets/CineVoto/Login.png" class="img-float-right" alt="Google Sign-In Authentication Screen">

                <p><strong>Federated Authentication with Google (Firebase Auth):</strong> Secure one-click login powered by Google Identity. Each voter is instantly authenticated with their verified display name, email, and photo avatar, guaranteeing accountability and vote integrity across the session.</p>

                <img src="../static/assets/CineVoto/HomePage.png" class="img-float-left" alt="Home Dashboard and Room Creation">

                <p><strong>Dynamic Rooms & Role Segregation (Admin vs Voters):</strong> Strict separation of responsibilities. The <strong>Room Creator (Admin)</strong> provisions a 6-character access room code and manages the round movie catalog. <strong>Voters</strong> join instantaneously through direct shared links (<code>?sala=CODE</code>) or manual code entry.</p>

                <img src="../static/assets/CineVoto/TelaAdministradorSala.png" class="img-float-right" alt="Admin Control Center with Live Tallying">

                <p><strong>Admin Control Center & Live Tallying:</strong> The administration dashboard monitors connected voters in real time (displaying visual avatars), delivers an auditable live vote count, and manages round termination with automatic winning title declaration.</p>

                <img src="../static/assets/CineVoto/TelaVotacao.png" class="img-float-left" alt="Interactive Voting Interface">

                <p><strong>Interactive & Responsive Voting UI:</strong> Dark Cinema aesthetic with vibrant neon highlights, providing intuitive voting gestures with immediate visual feedback across mobile and desktop environments.</p>

                <img src="../static/assets/CineVoto/ConvidadoVotando.png" class="img-float-right" alt="Real-Time Guest Experience">

                <p><strong>Real-Time Synchronization (Cloud Firestore):</strong> Utilizing reactive <code>onSnapshot</code> listeners, vote submissions, participant joins, and catalog changes propagate instantly across all active screens with zero page reloads or polling overhead.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <img src="../static/assets/CineVoto/Banco de dados Firestore.png" class="img-float-left" alt="Cloud Firestore NoSQL Database Console">

                <p><strong>NoSQL Cloud Persistence & Permanent History:</strong> Distributed data modeling in <strong>Cloud Firestore</strong>. Winning movies are permanently appended to the user profile (<code>usuarios/{uid}.filmesAssistidos</code>), preserving individual movie night histories across session resets.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <p><strong>Software Engineering, Java Backend & Security:</strong></p>
                <p>• <strong>Ultra-Lightweight Java 21 Backend:</strong> High-throughput HTTP server leveraging standard JDK networking APIs (<code>com.sun.net.httpserver</code>). Sub-second boot times, zero heavy external frameworks, and minimal RAM footprint.</p>
                <p>• <strong>Intelligent Duplicate Prevention:</strong> Case-insensitive, diacritic-insensitive normalization algorithm (e.g., <em>"A Origem"</em>, <em>"a origem"</em>, and <em>"À Origem"</em> resolve identically), preventing duplicate movie entries and re-nominating already watched titles.</p>
                <p>• <strong>Security Rules & Credential Isolation:</strong> Declarative Cloud Firestore Security Rules (<code>firestore.rules</code>) restricting write access to authenticated users, with API credentials completely isolated via <code>.gitignore</code> and clean <code>firebase-config.example.js</code> templates.</p>
                <p>• <strong>GitHub Repository:</strong> <a href="https://github.com/zambonib/cinevoto" target="_blank" style="color: #39ff14; text-decoration: underline; font-weight: 600;">github.com/zambonib/cinevoto</a></p>
            `
        }
    },

    'meubolso': {
        image: "../static/assets/MeuBolso/MeuBolso_Dashboard.png",
        video: null,
        animation: "../static/assets/MeuBolso/MeuBolso_3.mp4",

        pt: {
            title: "Meu Bolso — Plataforma SaaS de Gestão Financeira Inteligente & FinOps Pessoal",
            subtitle: "💳 Java 21 • Spring Boot 3 • React • Spring Security JWT • Multi-tenancy • WhatsApp API • Oracle DB",
            technologies: "Java 21, Spring Boot 3, Spring Security, JWT, Spring Data JPA, React (Vite), WhatsApp Business API, Oracle DB, MySQL, RESTful APIs, Docker, CI/CD",
            year: "2026",
            description: `
                <p><strong>Resumo do Projeto:</strong> O <strong>Meu Bolso</strong> é uma plataforma SaaS completa de inteligência financeira pessoal e corporativa desenvolvida para entregar controle patrimonial absoluto, previsibilidade orçamentária e automação operacional. Construído com padrões corporativos rigorosos de engenharia de software, o sistema combina um backend de alta performance em <strong>Java 21 com Spring Boot 3</strong>, um frontend moderno e reativo em <strong>React (Vite)</strong> e integração nativa com o <strong>WhatsApp</strong>, permitindo aos usuários acompanhar e registrar transações em tempo real diretamente pelo aplicativo de mensagens mais utilizado do Brasil.</p>

                <p><strong>URL de Produção:</strong> <a href="https://dalzam.com.br/meubolso/" target="_blank" style="color: #38bdf8; text-decoration: underline; font-weight: 700;">dalzam.com.br/meubolso</a></p>

                <p><strong>Principais Funcionalidades & Arquitetura Técnica:</strong></p>

                <video src="../static/assets/MeuBolso/MeuBolso_1.mp4" class="video-float-right" autoplay loop muted playsinline controls></video>

                <p><strong>Backend Corporativo em Java 21 & Spring Boot 3:</strong> Arquitetura orientada a serviços RESTful estruturada sob os princípios <strong>SOLID</strong> e <strong>Clean Architecture</strong>. O backend gerencia o ciclo completo de entidades financeiras (Contas Correntes, Cartões de Crédito, Categorias, Lançamentos e Metas) com DTOs desacoplados, validações reativas e auditoria de transações.</p>

                <p><strong>Segurança & Isolamento Multi-tenant (Spring Security + JWT):</strong> Para garantir privacidade e segurança em um ambiente SaaS compartilhado, implementamos isolamento multi-tenant estrito por usuário. Todas as requisições exigem autenticação via Bearer Token JWT e o <code>SecurityContext</code> injeta o <code>UserPrincipal</code>, garantindo que cada query no banco de dados filtre rigorosamente pelo tenant do usuário logado, com proteção total contra ataques e acesso cruzado.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <video src="../static/assets/MeuBolso/MeuBolso_2.mp4" class="video-float-left" autoplay loop muted playsinline controls></video>

                <p><strong>Gestão Avançada de Cartões de Crédito & Faturas:</strong> Motor inteligente com regras financeiras avançadas: cálculo de limites comprometidos vs disponíveis, datas de corte/fechamento e geração de faturas consolidadas. O sistema projeta faturas futuras com precisão e alerta automaticamente sobre despesas recorrentes.</p>

                <p><strong>Modelagem de Dados Relacional (Oracle DB & MySQL):</strong> Estrutura de dados corporativa normalizada, modelada para alta consistência e integridade referencial. Utiliza o <strong>Spring Data JPA</strong> com consultas analíticas otimizadas, índices balanceados e suporte a múltiplos bancos relacionais corporativos.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <img src="../static/assets/MeuBolso/MeuBolso_WhatsApp.jpeg" class="img-float-right" alt="Integração WhatsApp API">

                <p><strong>Integração com WhatsApp (Automação Conversacional):</strong> Um dos grandes diferenciais operacionais do Meu Bolso é a sua integração com a <strong>WhatsApp Business API</strong> via webhooks no backend Java:</p>
                <p>• <strong>Lançamentos Instantâneos:</strong> O usuário registra receitas ou despesas diretamente por mensagens de texto ou áudio no WhatsApp (ex: <em>"Almoço 45 reais no cartão de crédito"</em>), e o sistema processa, categoriza e consolida a transação no banco de dados em segundos.</p>
                <p>• <strong>Notificações Proativas:</strong> Alertas automatizados de vencimento de faturas, avisos de aproximação de limite orçamentário por categoria e relatórios periódicos de saldo consolidado.</p>
                <p>• <strong>Consulta Rápida de Extrato:</strong> Consulta de saldo e lançamentos do dia diretamente pelo chat, sem necessidade de login manual no navegador.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <img src="../static/assets/MeuBolso/MeuBolso_Dashboard.png" class="img-float-left" alt="Dashboard do Meu Bolso">

                <p><strong>Frontend Moderno em React (Vite) & UX Reativa:</strong> Interface fluida desenvolvida com <strong>React + Vite</strong>, estruturada com componentização limpa e Context API para gerenciar estados globais e alternância de temas Dark/Light. O Dashboard entrega visualização em tempo real de:</p>
                <p>• <strong>Fluxo de Caixa Analítico (12 Meses):</strong> Gráficos dinâmicos de entradas vs saídas com curva de tendência.</p>
                <p>• <strong>Metas Financeiras Inteligentes:</strong> Cálculo de projeção de juros e contagem regressiva de dias para a realização de cada objetivo financeiro.</p>
                <p>• <strong>Importador de Extratos (OFX e Excel):</strong> Módulo no Java para injeção e reconciliação em lote de extratos bancários brutos, eliminando trabalho manual de digitação.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <p><strong>Excelência de Engenharia, Qualidade e DevOps:</strong></p>
                <p>• <strong>Repositório no GitHub:</strong> <a href="https://github.com/zambonib/MeuBolsoEnterprise" target="_blank" style="color: #39ff14; text-decoration: underline; font-weight: 600;">github.com/zambonib/MeuBolsoEnterprise</a></p>
                <p>• <strong>Aplicação em Produção:</strong> <a href="https://dalzam.com.br/meubolso/" target="_blank" style="color: #38bdf8; text-decoration: underline; font-weight: 600;">dalzam.com.br/meubolso</a></p>
            `
        },
        en: {
            title: "Meu Bolso — Smart Financial SaaS & Personal FinOps Platform",
            subtitle: "💳 Java 21 • Spring Boot 3 • React • Spring Security JWT • Multi-tenancy • WhatsApp API • Oracle DB",
            technologies: "Java 21, Spring Boot 3, Spring Security, JWT, Spring Data JPA, React (Vite), WhatsApp Business API, Oracle DB, MySQL, RESTful APIs, Docker, CI/CD",
            year: "2026",
            description: `
                <p><strong>Project Overview:</strong> <strong>Meu Bolso</strong> is a full-fledged financial SaaS platform engineered for absolute wealth visibility, budget predictability, and automated expense operations. Built with enterprise software engineering standards, the system pairs a high-throughput <strong>Java 21 and Spring Boot 3</strong> backend, a reactive <strong>React (Vite)</strong> frontend, and native integration with <strong>WhatsApp</strong>, allowing users to track and log expenses in real time directly from Brazil's most popular messaging channel.</p>

                <p><strong>Production URL:</strong> <a href="https://dalzam.com.br/meubolso/" target="_blank" style="color: #38bdf8; text-decoration: underline; font-weight: 700;">dalzam.com.br/meubolso</a></p>

                <p><strong>Core Capabilities & Technical Architecture:</strong></p>

                <video src="../static/assets/MeuBolso/MeuBolso_1.mp4" class="video-float-right" autoplay loop muted playsinline controls></video>

                <p><strong>Enterprise Backend in Java 21 & Spring Boot 3:</strong> RESTful microservice-ready architecture grounded in <strong>SOLID</strong> and <strong>Clean Architecture</strong> principles. The backend handles the complete lifecycle of financial entities (Bank Accounts, Credit Cards, Categories, Transactions, and Savings Goals) with decoupled DTOs, reactive validation, and auditable event tracking.</p>

                <p><strong>Security & Multi-Tenant Isolation (Spring Security + JWT):</strong> To guarantee privacy and multi-user data segregation across the SaaS ecosystem, we enforced strict multi-tenancy. Every REST endpoint requires Bearer Token JWT authentication, with <code>SecurityContext</code> injecting the authenticated <code>UserPrincipal</code>. Every database query strictly filters by the user tenant, preventing horizontal privilege escalation.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <video src="../static/assets/MeuBolso/MeuBolso_2.mp4" class="video-float-left" autoplay loop muted playsinline controls></video>

                <p><strong>Advanced Credit Card & Invoice Management:</strong> Sophisticated credit engine computing committed vs. available limits, closing statement dates, and consolidated billing cycles. Accurately anticipates future credit obligations with automated recurring expense alerts.</p>

                <p><strong>Relational Data Architecture (Oracle DB & MySQL):</strong> Normalized enterprise schema modeled for high transaction consistency. Leverages <strong>Spring Data JPA</strong> with optimized analytic queries, balanced indexes, and multi-database compatibility across Oracle and MySQL.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <img src="../static/assets/MeuBolso/MeuBolso_WhatsApp.jpeg" class="img-float-right" alt="WhatsApp API Integration">

                <p><strong>Strategic WhatsApp Integration (Conversational Automation):</strong> A standout operational innovation of Meu Bolso is its conversational layer powered by the <strong>WhatsApp Business API</strong> and asynchronous backend webhooks:</p>
                <p>• <strong>Frictionless Transaction Logging:</strong> Users submit expenses or revenue conversationally via text or voice notes on WhatsApp (e.g., <em>"Lunch 45 dollars on credit card"</em>). The backend parses, tags, and records the entry in seconds.</p>
                <p>• <strong>Proactive Alerts & Notifications:</strong> Automated statement closing reminders, payment due alerts, category budget warnings, and scheduled financial digests.</p>
                <p>• <strong>Quick Balance Inquiries:</strong> Instant real-time checks on consolidated cash flow and daily transactions directly in the WhatsApp chat without logging into a browser.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <img src="../static/assets/MeuBolso/MeuBolso_Dashboard.png" class="img-float-left" alt="Meu Bolso Dashboard">

                <p><strong>Modern Frontend in React (Vite) & Reactive UX:</strong> Seamless Single Page Application (SPA) built with <strong>React + Vite</strong>, structured with modular components and Context API for authentication state and Dark/Light Mode. The dashboard delivers real-time visibility into:</p>
                <p>• <strong>12-Month Projected Cash Flow:</strong> Interactive income vs. expense charts with trend trajectory curves.</p>
                <p>• <strong>Smart Savings Goals:</strong> Compound growth projection and countdown days toward milestone completion.</p>
                <p>• <strong>Bank Statement Importer (OFX & Excel):</strong> Automated Java batch processor parsing raw statement files (.ofx, .csv) and reconciling balances with zero manual input.</p>

                <div class="clear" style="margin-bottom: 15px;"></div>

                <p><strong>Software Engineering, Quality & DevOps:</strong></p>
                <p>• <strong>GitHub Repository:</strong> <a href="https://github.com/zambonib/MeuBolsoEnterprise" target="_blank" style="color: #39ff14; text-decoration: underline; font-weight: 600;">github.com/zambonib/MeuBolsoEnterprise</a></p>
                <p>• <strong>Production URL:</strong> <a href="https://dalzam.com.br/meubolso/" target="_blank" style="color: #38bdf8; text-decoration: underline; font-weight: 600;">dalzam.com.br/meubolso</a></p>
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