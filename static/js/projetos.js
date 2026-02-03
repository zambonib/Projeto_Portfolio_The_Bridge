/* ======================================================= */
/* BANCO DE DADOS DOS PROJETOS                             */
/* ======================================================= */
const projectsDB = {
    
    'migracao': {
        title: "Modernização de Infraestrutura Crítica – Cloud Migration (AWS)",
        subtitle: "Infraestrutura e Alta Disponibilidade",
        image: "../static/assets/Migracao_Servidores.png",
        video: null,
        
        // EXEMPLO: Se você tiver uma animação para este projeto, coloque o nome assim:
        // animation: "Minha_Animacao.mp4", 
        animation: "../static/assets/Migracao_Servidores.mp4", 

        technologies: "AWS (EC2, RDS, VPC), SQL, PowerShell, VMWare",
        year: "2022",
        description: `
        <p>Resumo da Atuação: Liderança técnica na migração Lift-and-Improve do sistema corporativo de Folha de Pagamento, transacionando de um ambiente On-Premises legado para uma arquitetura de alta disponibilidade na AWS (Amazon Web Services). O projeto eliminou gargalos de performance e riscos físicos, garantindo escalabilidade e segurança para dados sensíveis de RH.</p>
        <p>Principais Entregas e Impactos:</p>
        <p>Arquitetura Cloud e Performance (EC2): Dimensionamento e provisionamento de instâncias EC2 otimizadas, resultando em um ganho expressivo de performance no processamento da folha (redução de muitas horas no tempo de fechamento) e resolução definitiva de problemas de latência e instabilidade.</p>
        <p>Continuidade de Negócios e Disaster Recovery (DR): Implementação de uma estratégia robusta de backup automatizado e plano de Disaster Recovery (DR). Elevamos o SLA de disponibilidade do sistema para 99.90%, garantindo a operação mesmo em cenários críticos, algo inexistente no ambiente legado.</p>
        <p>Segurança e Acesso Remoto: Configuração de Security Groups, VPCs e VPNs para permitir acesso externo seguro e performático para as equipes de RH e gestão, viabilizando o trabalho remoto sem comprometer a integridade dos dados confidenciais.</p>
        <p>Eficiência Operacional: Eliminação da dependência de hardware físico depreciado, reduzindo custos de manutenção (OpEx vs CapEx) e permitindo escalabilidade elástica de armazenamento e processamento conforme a demanda mensal.</p>

        `
    },

    'email': {
        title: "Transformação do Digital Workplace e Unificação de Ecossistema",
        subtitle: "Migração do Google Workspace para Microsoft 365",
        image: "../static/assets/Transformacao_Digital.png",
        video: null,
        
        // EXEMPLO: Se você tiver uma animação para este projeto, coloque o nome assim:
        // animation: "Minha_Animacao.mp4", 
        animation: null,

        technologies: "Microsoft 365, Exchange, SharePoint, Teams",
        year: "2024",
        description: `
        <p>Resumo da Atuação: Gestão estratégica e técnica da migração Cross-Platform de toda a suíte de colaboração da empresa. O projeto visou a centralização de ferramentas, compliance corporativo e a implementação do Microsoft 365 como hub único de produtividade, comunicação e gestão documental.</p>
        <p>Principais Entregas e Impactos:</p>
        <p>Migração Complexa de Mensageria e Calendário (Exchange Online): Execução da migração de caixas postais e agendas com integridade total dos dados. Foco crítico na preservação de históricos de e-mail e reuniões recorrentes, garantindo Zero Downtime na comunicação externa e interna durante a virada.</p>
        <p>Implantação de Cultura Colaborativa (Teams & SharePoint): Liderança na transição do Google Drive para uma arquitetura estruturada no SharePoint e OneDrive. Implementação do Microsoft Teams não apenas como chat, mas como plataforma central de trabalho, integrando arquivos e fluxos, o que aumentou a governança sobre a informação corporativa.</p>
        <p>Gestão de Licenciamento e Custos: Análise e definição dos perfis de licenciamento (E3, E5, Business Standard) para otimização de custos (OpEx), garantindo que cada colaborador tivesse as ferramentas adequadas à sua função sem desperdício de budget.</p>
        <p>Adoção e Treinamento (Change Management): Suporte à mudança cultural dos usuários acostumados à interface Google. Criação de guias e estruturas que facilitaram a adoção das novas ferramentas do pacote Office, minimizando o impacto na produtividade diária.</p>
        `
    },

    'seguranca': {
        title: "Implementação de Segurança Avançada (EDR CrowdStrike) e Otimização de Infraestrutura",
        subtitle: "Crowdstrike e Otimização de Infraestrutura",
        image: "../static/assets/seguranca.png",
        video: null,
        animation: null,
        technologies: "Crowdstrike, Zabbix, PowerShell, Bash",
        year: "2020",
        description: `
            <p>Resumo da Atuação: Gerenciamento de ponta a ponta (Project Management) da reestruturação da segurança de endpoints e monitoramento da infraestrutura.</p> 
            <p>Liderança de equipe mista (interna e temporária) para elevar a maturidade de cibersegurança e governança de TI em um parque de 330+ ativos (Workstations e Servidores).</p>
            <p>Principais Entregas e Impactos:</p>
            <p>Cybersecurity Hardening com CrowdStrike: Substituição de antivírus tradicional pela implementação da plataforma CrowdStrike (EDR - Endpoint Detection and Response), elevando a postura de segurança da empresa contra ameaças avançadas e ransomware, cobrindo 100% dos servidores e estações de trabalho.</p>
            <p>Gestão de Equipe e Recursos: Contratação, onboarding e liderança tática de equipe dedicada, garantindo a entrega do projeto dentro do cronograma (On-Time) e coordenando reportes executivos de progresso para os Stakeholders.</p>
            <p>Saneamento e Compliance, Realização de varredura completa no ambiente para remoção de softwares não homologados e padronização de hardware legado, garantindo que todas as máquinas estivessem em conformidade com as políticas corporativas antes da blindagem de segurança.</p>
            <p>Observabilidade (Zabbix) e Rede: Implementação do Zabbix para monitoramento proativo de saúde do ambiente, em paralelo a uma reestruturação física da rede cabeada para suportar melhor distribuição de tráfego.</p>
            <p>Governança de Ativos (ITAM): Como valor agregado (Value-Add), estruturei o primeiro Controle Unificado de Ativos de TI e Licenciamento (Software Asset Management) da companhia, criando visibilidade total sobre o parque tecnológico e custos associados.</p>

        `
    },

    'nohall': {
        title: "Projeto Premiado: Nohall – Connection with Value",
        subtitle: "🏆Vencedor do FIAP Global Solution 2025 (1º Lugar)",
        image: "../static/assets/Nohall.png",
        video: null,
        animation: null,
        technologies: "Figma, Oracle Data Modeler, Canvas",
        year: "Contínuo",
        description: `
            <p>Desenvolvimento de uma solução disruptiva para o setor de RH (HR Tech) visando mitigar o abismo entre o avanço tecnológico exponencial e a estagnação das competências humanas (Soft Skills) na Indústria 5.0.</p> <p>O projeto foi eleito o Melhor Trabalho do Ano, superando expectativas pela complexidade e maturidade da solução desenvolvida em apenas 6 meses de curso.</p>
            <p>O Desafio (Problem Statement): Identificamos que o mercado de trabalho atual sofre com a desumanização dos processos seletivos e a ineficiência no "Match" entre candidatos e empresas.</p> 
            <p>Estudos indicam que enquanto a tecnologia avança, a falta de padronização na avaliação de habilidades comportamentais gera desigualdade e ineficiência operacional.</p>
            <p>A Solução – Nohall: Criamos um ecossistema de qualificação mútua que atua em três frentes principais:</p>
            
            <img src="../static/assets/Nohall_Arena.png" class="img-float-right" alt="Arena Softskills">
            
            <p>Recrutamento Consciente & "O Não Educativo": Diferente de plataformas tradicionais, o Nohall bloqueia vagas com requisitos abusivos (ex: exigir sênior para vaga júnior) e fornece feedback automático de desenvolvimento para candidatos rejeitados, combatendo a falta de transparência.</p>
            <p>Arena de Soft Skills (Gamificação & IA): Projetamos um ambiente imersivo (VR/AR) onde a IA analisa microexpressões, tom de voz e argumentação em cenários simulados (ex: entrevistas, negociações) para validar e treinar soft skills de forma objetiva.</p>
            <p>Portfólio Unificado: Centralização de códigos (GitHub), currículo e portfólio em um "Perfil Vivo", facilitando a visualização holística do candidato.</p>
            <p>Ferramentas e Tecnologias Aplicadas:</p>
            <p>Design & Prototipagem (Figma): Criação de interfaces de alta fidelidade, focadas na Jornada do Usuário (UX/UI), desde o Onboarding até os Dashboards de gestão de vagas e a interface imersiva da Arena.</p>
            
            <img src="../static/assets/Nohall_BancoDados.png" class="img-float-left" alt="Banco de Dados">
            
            <p>Arquitetura de Dados (Oracle Data Modeler): Modelagem completa do Banco de Dados (Modelos Lógico e Relacional), estruturando entidades complexas como Usuários, Empresas, Vagas, Skills e as relações de "Match".</p>
            <p>Inteligência Artificial (Gemini): Utilizada para pesquisa de mercado, estruturação de cenários de teste para a Arena e validação de conceitos da Indústria 5.0.</p>
            <p>Apresentação Visual (Canva): Desenvolvimento da identidade visual e pitch de venda do produto.</p>
            <p>Principais Aprendizados e Conquistas:</p>
            <p>Ciclo Completo de Desenvolvimento: Experiência prática desde a ideação (Design Thinking) até a arquitetura técnica e prototipagem funcional.</p>
            <p>Trabalho em Equipe: Com muita dedicação e esforços para entregar um MVP complexo dentro de um prazo agressivo (1 semana).</p>
            <p>Reconhecimento Acadêmico: A premiação valida a capacidade de transformar problemas teóricos complexos em soluções práticas, viáveis e tecnicamente bem fundamentadas.</p>
        `
    }
};


/* ======================================================= */
/* LÓGICA DE CARREGAMENTO DA PÁGINA                        */
/* ======================================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const projectData = projectsDB[projectId];

    if (projectData) {
        // 1. Preenche Textos
        document.getElementById('p-title').innerText = projectData.title;
        document.getElementById('p-subtitle').innerText = projectData.subtitle;
        document.getElementById('p-desc').innerHTML = projectData.description;
        document.getElementById('p-tech').innerText = projectData.technologies;
        document.getElementById('p-year').innerText = projectData.year;
        document.title = `${projectData.title} - Bruno Zamboni`;

        // 2. Lógica de Vídeo Principal vs Imagem (TOPO)
        const imgEl = document.getElementById('p-img');
        const videoEl = document.getElementById('p-video');

        if (projectData.video) {
            imgEl.style.display = 'none';
            videoEl.style.display = 'block';
            videoEl.src = projectData.video;
            
            // Configura play único (sem loop)
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

        // 3. NOVA LÓGICA: Seção de Animação (RODAPÉ)
        const animSection = document.getElementById('animation-section');
        const animVideo = document.getElementById('p-animation-video');

        if (projectData.animation) {
            // Se tiver arquivo de animação, mostra a seção
            animSection.style.display = 'block';
            animVideo.src = projectData.animation;
            
            // Opcional: Se quiser que a animação de baixo já comece rodando
            // animVideo.play().catch(e => {}); 
        } else {
            // Se for null, esconde tudo
            animSection.style.display = 'none';
            animVideo.pause();
            animVideo.src = "";
        }

    } else {
        document.getElementById('project-container').innerHTML = `
            <h1 style="color:red; text-align:center">Projeto não encontrado</h1>
            <div style="text-align:center; margin-top:20px;">
            <a href="index.html" class="btn-back-link">Voltar para o Início</a>
            </div>
        `;
    }
});