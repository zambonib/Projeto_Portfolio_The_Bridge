<div align="center">

# 🌉 The Bridge • Portfólio Profissional

### **Bruno Zamboni** | Engenharia de Software & Arquitetura de Sistemas
**Java • Python • Cloud • Linux • Android Nativo**

[![GitHub](https://img.shields.io/badge/GitHub-zambonib-181717?style=for-the-badge&logo=github)](https://github.com/zambonib)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Bruno%20Zamboni-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/brunozamboni/)
[![Portfolio](https://img.shields.io/badge/Acessar-The%20Bridge-0ea5e9?style=for-the-badge&logo=googlechrome&logoColor=white)](https://zambonib.github.io/Projeto_Portfolio_The_Bridge/)

<br />

> *"A ponte entre quase duas décadas de maestria em infraestrutura crítica e a moderna engenharia de software de alta performance."*

</div>

---

## 📌 Sobre o Projeto

**The Bridge** não é apenas uma vitrine de projetos, mas uma plataforma completa de apresentação técnica concebida, desenhada e desenvolvida do zero para refletir excelência em engenharia de software, design de interfaces e arquitetura de sistemas.

O projeto materializa a transição e convergência de quase duas décadas de experiência em servidores corporativos, redes de alta disponibilidade e computação em nuvem (AWS e Linux) com a formação acadêmica de ponta em Análise e Desenvolvimento de Sistemas pela **FIAP** (Média 9.5 com Duplo Selo Ouro de Excelência e 1º Lugar Geral no Global Solution).

Cada detalhe da página — desde a hierarquia visual até a otimização de renderização e scripts em tempo real — foi meticulosamente arquitetado para oferecer aos recrutadores, líderes técnicos e à comunidade uma experiência fluida, veloz e envolvente.

---

## ⚙️ Arquitetura e Funcionalidades

### 📄 Currículo Profissional Interativo & Gerador de PDF A4 (ATS-Friendly)
- **Visualização Imersiva em Modal:** Estrutura concebida para exibir o currículo em folha A4 com layout corporativo limpo, tipografia otimizada e alto contraste.
- **Alternância Dinâmica de Idiomas (PT / EN):** Motor reativo bilíngue que traduz instantaneamente todo o conteúdo do currículo (resumo profissional, competências agrupadas, histórico cronológico de 7 empresas, projetos premiados, formação acadêmica e certificações).
- **Motor de Exportação de PDF de Alta Precisão:**
  - Integração das bibliotecas `html2canvas` e `jsPDF`.
  - Captura isolada página a página com resolução retina (escala 2x) mapeada com precisão milimétrica nas dimensões do papel A4 (210mm × 297mm).
  - Garantia de documento com **exatamente 2 páginas**, eliminando quebras indesejadas, páginas em branco e rodapés deslocados.
  - Cabeçalho contínuo na segunda página no padrão corporativo (estilo Microsoft Word).
  - Rodapé com dados de contato, redes sociais, endereço completo do portfólio para leitura em versões impressas e paginação oficial.
  - Compatibilidade com impressão nativa do navegador (`@media print`) com quebras de página controladas.

### 📊 Contador de Visitantes & Métricas em Tempo Real
- **Firebase Cloud Firestore:** Persistência serverless em nuvem para contagem atômica de visitantes únicos por meio de transações Firestore (`FieldValue.increment(1)`), garantindo consistência mesmo sob múltiplos acessos simultâneos.
- **Google Analytics 4 (GA4):** Rastreamento de audiência, engajamento e métricas de navegação com carregamento assíncrono não bloqueante.

### 🌐 Internacionalização Dinâmica (I18n)
- Suporte nativo completo a Português (PT-BR) e Inglês (EN-US) em todo o ecossistema da aplicação: menus, seções, descrições de projetos, botões, modais e mensagens do sistema.
- Persistência das preferências de idioma do usuário no `localStorage` do navegador para manter a experiência em futuras visitas.

### 🚀 Vitrine Interativa de Projetos em Destaque
- Carrossel interativo e responsivo construído com **Glide.js**, permitindo navegação fluida por arrasto (touch/mouse) e paginação.
- Algoritmo inteligente de embaralhamento (`shuffle`) que garante dinamismo a cada carregamento, mantendo o portfólio e projetos estratégicos sempre em destaque.
- Cards detalhados com badges de stack tecnológica, descrição arquitetural e links diretos para repositórios no GitHub e aplicações em produção:
  - **Meu Bolso:** Plataforma SaaS de gestão financeira inteligente e FinOps pessoal desenvolvida com backend robusto em Java 21 com Spring Boot 3 (Spring Security, JWT, isolamento Multi-tenant, Oracle DB e MySQL), frontend moderno e reativo em React (Vite) e integração nativa com a API do WhatsApp para lançamentos conversacionais e alertas em tempo real ([dalzam.com.br/meubolso](https://dalzam.com.br/meubolso/) • [GitHub](https://github.com/zambonib/MeuBolsoEnterprise)).
  - **CineVoto 2.0:** Aplicação web de votação reativa em tempo real com backend em Java 21, Cloud Firestore e autenticação Google.
  - **ELO ESG:** Aplicativo Android Nativo em Kotlin (MVVM, Clean Architecture, Jetpack Compose, Room SQLite) com integração à IA Google Gemini para lançamentos por linguagem natural.
  - **NoHall – Connection with Value:** Projeto campeão em 1º Lugar Geral no Global Solution FIAP 2025 focado em RH Tech e retenção de talentos.
  - **Care Plus Family:** Plataforma corporativa para combate ao absenteísmo em clínicas de saúde (No-Show) com gamificação e integração via API do WhatsApp.
  - **The Bridge:** O próprio código-fonte e arquitetura desta aplicação.
  - **Projetos de Infraestrutura & Nuvem:** Casos reais de migração de servidores físicos para Proxmox/Linux, transformação digital corporativa e implementação de segurança perimetral com pfSense e Snort.

### 📜 Galeria de Certificações & Credenciais
- Modal interativo para visualização de certificados e diplomas em alta definição com zoom e fechamento intuitivo (clique externo ou tecla `Esc`).
- Credenciais expostas:
  - AWS Certified Solutions Architect (Preparatório / Alura)
  - Especialização em Segurança de Redes (pfSense & Snort)
  - Formação em Cloud Computing & DevOps
  - Duplo Selo Ouro de Excelência Acadêmica FIAP (Média Geral 9.5)

### 🎨 Design System, Identidade Visual & UX
- **Estética Glassmorphism & Cyber:** Interface escura com profundidade visual criada através de efeitos de desfoque translúcido (`backdrop-filter: blur`), gradientes luminescentes azuis e bordas em tons de ciano.
- **Efeito de Digitação Dinâmica (Typewriter):** Apresentação interativa de especialidades técnicas no Hero.
- **Feixe de Luz Animado:** Efeito de iluminação interativo no topo da página, condicionado dinamicamente à resolução da tela para máxima performance gráfica.
- **Design 100% Responsivo:** Adaptabilidade fluida para smartphones, tablets, laptops e monitores ultrawide com CSS Grid e Flexbox.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

| Camada | Tecnologias |
| :--- | :--- |
| **Front-end Core** | HTML5 Semântico, CSS3 Moderno (Custom Properties, Flexbox, Grid), JavaScript Vanilla (ES6+ Modules) |
| **Cloud & Backend Services** | Google Firebase (Cloud Firestore NoSQL, Firebase Analytics / GA4) |
| **Geração de Documentos** | jsPDF (v2.5.1), html2canvas (v1.4.1) |
| **Bibliotecas & UI Components** | Glide.js (Carrossel Touch/Mobile), FontAwesome Icons (v6), Google Fonts (Inter, Fira Code) |
| **Padrões de Engenharia** | Clean Code, I18n Architecture, Glassmorphism UI, Responsive Design, ATS Compatibility |
| **Versionamento & Deploy** | Git, GitHub Pages, CI/CD |

---

## 📂 Estrutura do Repositório

```plaintext
Projeto_Portfolio_The_Bridge/
├── index.html                  # Estrutura principal da página, modais e marcação semântica
├── static/
│   ├── css/
│   │   ├── style.css           # Estilos globais, Glassmorphism, temas e responsividade
│   │   ├── projetos.css        # Estilos dedicados aos cards de projetos e carrossel
│   │   └── cv.css              # Regras visuais, proporções A4 e isolamento de impressão do CV
│   ├── js/
│   │   ├── cv-data.js          # Base de dados centralizada e bilíngue (PT/EN) do currículo
│   │   ├── projetos.js         # Dados dos projetos, ordenação dinâmica e renderização de cards
│   │   └── script.js           # Orquestração do DOM, I18n, modal de CV, motor PDF e Firebase
│   ├── image/                  # Imagens de certificados, selos e diplomas
│   └── assets/                 # Screenshots, diagramas DER/MER e vídeos demonstrativos dos projetos
└── README.md                   # Documentação técnica e visão geral do projeto
```

---

## 💻 Executando Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/zambonib/Projeto_Portfolio_The_Bridge.git
   ```

2. **Navegue até o diretório:**
   ```bash
   cd Projeto_Portfolio_The_Bridge
   ```

3. **Execute através de um servidor local (ex: Live Server do VS Code ou Python):**
   ```bash
   # Com Python 3
   python -m http.server 8000
   ```
   Abra seu navegador em `http://localhost:8000`.

---

## 👨‍💻 Autor

**Bruno Zamboni**  
Desenvolvedor Back-end (Java | Python | Cloud)  
📍 São Paulo - SP, Brasil  
📧 [bruno@dalzam.com.br](mailto:bruno@dalzam.com.br)  
🔗 [LinkedIn](https://www.linkedin.com/in/brunozamboni/) • [GitHub](https://github.com/zambonib) • [Portfólio The Bridge](https://zambonib.github.io/Projeto_Portfolio_The_Bridge/)
