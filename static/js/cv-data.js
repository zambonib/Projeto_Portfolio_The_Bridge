/* ======================================================= */
/* BASE DE DADOS DO CURRÍCULO DINÂMICO (BILÍNGUE)          */
/* ======================================================= */

const cvData = {
    pt: {
        personal: {
            name: "Bruno Zamboni",
            title: "Desenvolvedor Back-end (Java | Python | Cloud)",
            location: "São Paulo - SP (Tatuapé)",
            email: "bruno@dalzam.com.br",
            linkedin: "linkedin.com/in/brunozamboni",
            linkedinUrl: "https://www.linkedin.com/in/brunozamboni/",
            github: "github.com/zambonib",
            githubUrl: "https://github.com/zambonib",
            instagram: "instagram.com/zambonib",
            instagramUrl: "https://instagram.com/zambonib",
            portfolio: "zambonib.github.io/Projeto_Portfolio_The_Bridge",
            portfolioUrl: "https://zambonib.github.io/Projeto_Portfolio_The_Bridge/",
            contactNotice: "Para contato direto, por favor envie uma mensagem pelo LinkedIn."
        },
        summaryTitle: "Resumo Profissional",
        summaryText: "Profissional de Tecnologia com quase duas décadas de sólida trajetória orquestrando ambientes de infraestrutura de alta criticidade, redes e arquiteturas em nuvem (AWS e Linux). Graduando em Análise e Desenvolvimento de Sistemas pela FIAP com Duplo Selo Ouro de Excelência Acadêmica (média 9.5) e 1º Lugar no Global Solution 2025. Atualmente focado no desenvolvimento de software de alta performance, aplicando padrões modernos de engenharia em Java (Spring Boot / Java 21+), Python, Kotlin (Android Nativo) e ecossistema Google Cloud / Firebase.",
        
        skillsTitle: "Competências & Tecnologias",
        skillsGroups: [
            {
                category: "Linguagens & Back-end",
                items: "Java (Java 21+, Spring Boot, APIs RESTful, HTTP Server nativo), Python (Flask, OpenCV, automação), Kotlin (Android Nativo, Coroutines, StateFlow), JavaScript (ES6+ Modules, DOM API)"
            },
            {
                category: "Bancos de Dados & Persistência",
                items: "SQL (Modelagem relacional DER/MER, queries avançadas, índices), Oracle DB, PostgreSQL, SQLite / Room Database, Google Cloud Firestore (NoSQL em tempo real)"
            },
            {
                category: "Cloud, DevOps & Infraestrutura",
                items: "AWS (EC2, VPC, S3, RDS), Linux (15+ anos: Debian, Ubuntu, RedHat, Nginx, pfSense), Docker, Virtualização Proxmox (PBS, LXC), CI/CD com GitHub Actions, Windows Server (AD DS, GPO, PowerShell)"
            },
            {
                category: "Metodologias & Práticas",
                items: "Clean Architecture, MVVM, Princípios SOLID, Clean Code, Testes Unitários (JUnit, MockK), Green IT, UI/UX Glassmorphism"
            }
        ],

        experienceTitle: "Experiência Profissional",
        experiences: [
            {
                company: "DALZAM",
                role: "Desenvolvedor Fullstack",
                description: "Desenvolvimento e sustentação de soluções digitais corporativas ponta a ponta. Arquitetura de aplicações web responsivas, integração de APIs RESTful, engenharia de software com foco em usabilidade, segurança e alta performance."
            },
            {
                company: "Dalchau Contabilidade",
                role: "Coordenador de TI",
                description: "Coordenação estratégica das operações tecnológicas e governança de dados. Liderança em projetos de segurança da informação, modernização de infraestrutura de servidores e otimização dos fluxos de sistemas contábeis e fiscais."
            },
            {
                company: "KDZRH",
                role: "Coordenador de Infraestrutura / Desenvolvedor Python",
                description: "Gestão do parque tecnológico e orquestração de servidores para operações de Recursos Humanos. Desenvolvimento de microserviços e scripts em Python (OpenCV, Flask, Regex) para automação de processos, conversão de arquivos bancários e integração contínua."
            },
            {
                company: "Grupo Farmamake",
                role: "Coordenador de Infraestrutura",
                description: "Planejamento e liderança de infraestrutura de TI corporativa, redes de alta disponibilidade, políticas de Disaster Recovery, virtualização de servidores e garantia de conformidade de SLA para o setor comercial e logístico."
            },
            {
                company: "Orion Sale",
                role: "Consultor de Tecnologia",
                description: "Consultoria em diagnóstico de ambientes de TI, desenho de soluções técnicas, implantação de melhorias em redes, segurança perimetral e alinhamento de infraestrutura aos objetivos estratégicos dos clientes."
            },
            {
                company: "Westwing Comércio Varejista LTDA",
                role: "Analista de Suporte",
                description: "Atendimento a incidentes críticos em operação de e-commerce e varejo de grande escala, suporte a estações de trabalho corporativas, manutenção de redes e administração de acessos e serviços de rede."
            },
            {
                company: "Zanthus Tecnologia de Resultado",
                role: "Analista de Suporte",
                description: "Suporte técnico a sistemas legados e plataformas de automação comercial e PDV, diagnóstico de banco de dados, comunicação de rede e atendimento focado na disponibilidade operacional dos clientes."
            }
        ],

        projectsTitle: "Projetos de Engenharia em Destaque",
        projects: [
            {
                name: "CineVoto 2.0 (2026)",
                tech: "Java 21, JavaScript ES6+, Firebase Auth, Cloud Firestore",
                description: "Aplicação web de alta performance com votação reativa em tempo real (onSnapshot). Backend nativo em Java ultraleve sem dependências externas pesadas, autenticação Google Sign-In, normalização insensível a duplicatas e histórico permanente."
            },
            {
                name: "ELO ESG (2026)",
                tech: "Kotlin 2.0, Jetpack Compose, Room (SQLite), Gemini AI, Dagger Hilt",
                description: "App Android Nativo desenvolvido sob arquitetura MVVM + Clean Architecture. Integração do Google Gemini LLM para lançamentos financeiros por linguagem natural, persistência offline-first via SQLite/Room e CI/CD automatizado via GitHub Actions."
            },
            {
                name: "NoHall – Connection with Value (2025)",
                tech: "Front-end Interativo, Arquitetura de Dados, Design System",
                description: "Projeto Campeão em 1º Lugar Geral do FIAP Global Solution 2025 entre centenas de equipes. Solução premiada voltada para RH Tech, retenção de talentos e conexão de valor nas organizações."
            },
            {
                name: "Care Plus Family (2025)",
                tech: "JavaScript Modular, UX/UI, Assistentes Virtuais",
                description: "Desafio corporativo FIAP & Care Plus para redução de No-Show em clínicas de saúde. Plataforma integrando gamificação preventiva (Game Plus +) e comandos por assistentes de voz."
            }
        ],

        educationTitle: "Formação Acadêmica & Prêmios",
        educations: [
            {
                institution: "FIAP",
                course: "Tecnologia em Análise e Desenvolvimento de Sistemas",
                details: "Duplo Selo Ouro de Excelência Acadêmica (Média 9.5)."
            },
            {
                institution: "FIAP Global Solution 2025",
                course: "1º Lugar Geral (Campeão Nacional) – Projeto NoHall",
                details: "Maior premiação de inovação e engenharia de software da FIAP."
            }
        ],

        certificationsTitle: "Certificações Relevantes",
        certifications: [
            "Architecting on AWS – Amazon Web Services (AWS)",
            "Segurança de Redes: pfSense & Snort (IDS/IPS) – Especialização em Cybersecurity",
            "Formação Cloud & DevOps – Alura (Docker, CI/CD, Automação)"
        ]
    },

    en: {
        personal: {
            name: "Bruno Zamboni",
            title: "Back-end Developer (Java | Python | Cloud)",
            location: "São Paulo, Brazil (Tatuapé)",
            email: "bruno@dalzam.com.br",
            linkedin: "linkedin.com/in/brunozamboni",
            linkedinUrl: "https://www.linkedin.com/in/brunozamboni/",
            github: "github.com/zambonib",
            githubUrl: "https://github.com/zambonib",
            instagram: "instagram.com/zambonib",
            instagramUrl: "https://instagram.com/zambonib",
            portfolio: "zambonib.github.io/Projeto_Portfolio_The_Bridge",
            portfolioUrl: "https://zambonib.github.io/Projeto_Portfolio_The_Bridge/",
            contactNotice: "For direct contact, please send me a message on LinkedIn."
        },
        summaryTitle: "Professional Summary",
        summaryText: "Senior Technology Professional with nearly two decades of proven experience orchestrating mission-critical infrastructure, enterprise networking, and cloud architectures (AWS & Linux). Systems Analysis & Development undergraduate at FIAP, earning consecutive Double Gold Badges of Academic Excellence (9.5 GPA) and 1st Place Champion at the 2025 FIAP Global Solution. Currently dedicated to high-performance software engineering, leveraging modern industry patterns in Java (Spring Boot / Java 21+), Python, Kotlin (Native Android), and Google Cloud / Firebase.",
        
        skillsTitle: "Core Competencies & Technologies",
        skillsGroups: [
            {
                category: "Languages & Back-end",
                items: "Java (Java 21+, Spring Boot, RESTful APIs, Native HTTP Server), Python (Flask, OpenCV, automation), Kotlin (Native Android, Coroutines, StateFlow), JavaScript (ES6+ Modules, DOM API)"
            },
            {
                category: "Databases & Persistence",
                items: "SQL (ERD modeling, complex joins, indexing, query optimization), Oracle DB, PostgreSQL, SQLite / Room Database, Google Cloud Firestore (Real-time NoSQL)"
            },
            {
                category: "Cloud, DevOps & Infrastructure",
                items: "AWS (EC2, VPC, S3, RDS), Linux (15+ yrs: Debian, Ubuntu, RedHat, Nginx, pfSense), Docker, Proxmox Virtualization (PBS, LXC), CI/CD with GitHub Actions, Windows Server (AD DS, GPO, PowerShell)"
            },
            {
                category: "Methodologies & Architecture",
                items: "Clean Architecture, MVVM, SOLID Principles, Clean Code, Automated Unit Testing (JUnit, MockK), Green IT, Glassmorphism UI/UX"
            }
        ],

        experienceTitle: "Professional Experience",
        experiences: [
            {
                company: "DALZAM",
                role: "Fullstack Developer",
                description: "End-to-end development and maintenance of enterprise digital solutions. Architecture of responsive web applications, RESTful API integrations, and software engineering focused on usability, reliability, and high performance."
            },
            {
                company: "Dalchau Contabilidade",
                role: "IT Coordinator",
                description: "Strategic coordination of IT operations and data governance. Led cybersecurity initiatives, server infrastructure modernization, and optimization of accounting and fiscal ERP workflows."
            },
            {
                company: "KDZRH",
                role: "Infrastructure Coordinator / Python Developer",
                description: "Technology infrastructure management and server orchestration for HR enterprise operations. Engineered Python microservices and scripts (OpenCV, Flask, Regex) for process automation, bank file conversions, and continuous integration."
            },
            {
                company: "Grupo Farmamake",
                role: "Infrastructure Coordinator",
                description: "Planning and technical leadership of corporate IT infrastructure, high-availability networking, Disaster Recovery strategies, server virtualization, and SLA governance for logistics and commerce operations."
            },
            {
                company: "Orion Sale",
                role: "Technology Consultant",
                description: "Consultancy delivering IT assessments, technical solution design, network topology enhancements, edge cybersecurity, and alignment of technology infrastructure with client business goals."
            },
            {
                company: "Westwing Comércio Varejista LTDA",
                role: "Support Analyst",
                description: "Critical incident management in large-scale e-commerce operations, corporate workstation support, network maintenance, and user access/directory services administration."
            },
            {
                company: "Zanthus Tecnologia de Resultado",
                role: "Support Analyst",
                description: "Technical support for legacy POS and commercial automation systems, database diagnostics, network troubleshooting, and customer service focused on high operational uptime."
            }
        ],

        projectsTitle: "Featured Engineering Projects",
        projects: [
            {
                name: "CineVoto 2.0 (2026)",
                tech: "Java 21, JavaScript ES6+, Firebase Auth, Cloud Firestore",
                description: "High-performance web app with real-time reactive voting (onSnapshot). Ultra-lightweight native Java backend with zero heavy third-party framework overhead, Google Sign-In, diacritic-insensitive duplicate prevention, and permanent cloud history."
            },
            {
                name: "ELO ESG (2026)",
                tech: "Kotlin 2.0, Jetpack Compose, Room (SQLite), Gemini AI, Dagger Hilt",
                description: "Native Android app architected with MVVM + Clean Architecture. Features Google Gemini LLM integration for conversational expense tracking, offline-first Room persistence, and GitHub Actions CI/CD pipeline."
            },
            {
                name: "NoHall – Connection with Value (2025)",
                tech: "Interactive Front-end, Data Architecture, Design System",
                description: "Grand Champion (1st Place Overall) at FIAP Global Solution 2025 among hundreds of teams. Award-winning HR Tech platform centered on talent retention and authentic corporate connection."
            },
            {
                name: "Care Plus Family (2025)",
                tech: "Modular JavaScript, UX/UI, Voice Assistant Integration",
                description: "Corporate innovation challenge for FIAP & Care Plus to prevent medical appointment no-shows. Platform featuring preventive healthcare gamification (Game Plus +) and smart voice assistant queries."
            }
        ],

        educationTitle: "Education & Honors",
        educations: [
            {
                institution: "FIAP",
                course: "Associate Degree in Systems Analysis and Development",
                details: "Double Gold Badges of Academic Excellence (9.5 GPA)."
            },
            {
                institution: "FIAP Global Solution 2025",
                course: "1st Place Grand Champion – Project NoHall",
                details: "FIAP's highest competitive software engineering and innovation award."
            }
        ],

        certificationsTitle: "Key Certifications",
        certifications: [
            "Architecting on AWS – Amazon Web Services (AWS)",
            "Network Security: pfSense & Snort (IDS/IPS) – Cybersecurity Specialization",
            "Cloud & DevOps Specialization – Alura (Docker, CI/CD, Automation)"
        ]
    }
};
