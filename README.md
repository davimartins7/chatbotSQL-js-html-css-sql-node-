Chatbot MEI – MVP (Minimum Viable Product) para Assistência a Microempreendedores Individuais

Este projeto é um MVP (Produto Mínimo Viável) desenvolvido para a disciplina de Desenvolvimento Web, com o objetivo de demonstrar, de forma funcional e simples, como um chatbot pode auxiliar Microempreendedores Individuais (MEIs) a obter informações gerais sobre atividades, obrigações e dúvidas comuns do dia a dia.

O foco deste MVP é validar a ideia, apresentar o funcionamento básico e garantir que o sistema possa ser expandido futuramente.

✅ Tecnologias Utilizadas
Tecnologia	Utilização
HTML5	Estrutura das páginas e componentes do sistema
CSS3	Estilização, layout e responsividade
JavaScript (ES6+)	Lógica do chatbot no frontend, manipulação de interface e interatividade
Node.js	Backend utilizado para processamento de requisições e gerenciamento dos dados de cadastro dos usuários
SQL (MySQL / MariaDB / SQLite)	Armazenamento estruturado das informações de usuários e registros essenciais do sistema

📌 Funcionalidades do MVP

Por ser um MVP, o sistema inclui apenas o necessário para demonstrar o funcionamento da ideia:

✅ Chatbot funcional com respostas pré-definidas

✅ Interface simples e responsiva

✅ Sistema de cadastro e autenticação de usuários

✅ Node.js + SQL para gerenciamento e armazenamento desses cadastros

✅ Separação clara entre frontend (chatbot) e backend (cadastro)

✅ Estrutura preparada para receber melhorias futuras (respostas dinâmicas, IA, painel administrativo etc.)

📁 Estrutura do Projeto
📦 chatbot-mei
├── 📁 public
│   ├── index.html
│   ├── login.html
│   ├── style.css
│   └── chatbot.js
├── 📁 backend
│   ├── server.js          (Node.js para gerenciar cadastros)
│   ├── routes.js
│   └── database
│       ├── connection.sql
│       └── users.sql
├── package.json
└── README.md

▶️ Como Executar o MVP
1. Clone o repositório
git clone https://github.com/SEU_USUARIO/chatbot-mei.git

2. Instale as dependências
npm install

3. Configure o Banco de Dados SQL

Execute o arquivo connection.sql para criar o banco

Importe users.sql para criar a tabela de usuários

4. Inicie o backend (cadastros e autenticação)
node backend/server.js

5. Acesse pelo navegador
http://localhost:3000/login

🗂️ Banco de Dados

O banco SQL é usado neste MVP para armazenar:

Dados cadastrais básicos dos usuários

Informações de acesso

Estrutura inicial para expansões futuras

Exemplo de tabela:

CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255),
  email VARCHAR(255),
  senha VARCHAR(255)
);

💡 Objetivo Educacional e Proposta do MVP

Este MVP foi criado para:

Demonstrar a viabilidade de um chatbot voltado para MEIs

Aplicar conceitos práticos de Desenvolvimento Web

Integrar frontend, backend e banco de dados de forma funcional

Entregar uma versão mínima, porém plenamente utilizável

Construir base para futuras evoluções (IA, NLP, dashboards etc.)

👨‍💻 Autores

- Davi Martins 
- Davi Alencar 


📜 Licença

Este é um projeto acadêmico e seu uso é destinado exclusivamente para fins educacionais.
