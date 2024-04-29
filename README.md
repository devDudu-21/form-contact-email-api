# Backend API - Form Data

API desenvolvida como parte complementar do projeto para a matéria de Desenvolvimento de Aplicações Web na UVA. Esta API é responsável por receber dados de um formulário de contato e enviar esses dados por e-mail.

## 🚀 Tecnologias Utilizadas

### Desenvolvimento

- **TypeScript**
- **Node.js**

### Dependências

- **Express.js** (para roteamento e middleware)
- **Nodemailer** (para envio de e-mails)
- **Body-parser** (para análise de corpos de requisição HTTP)
- **Dotenv** (para carregar variáveis de ambiente)
- **Express-validator** (para validação de dados na API)

## 📂 Estrutura de arquivos

```text
.
├── src/
│ ├── controllers/
│ │ └── receiveDataController.ts
│ ├── routes/
│ │ └── receiveDataRoute.ts
│ ├── utils/
│ │ └── sendMail.ts
│ └── index.ts
├── .env
├── package-lock.json
├── package.json
└── tsconfig.json
```

## 📡 Funcionamento da API
A API possui um endpoint que recebe os dados do formulário de contato por meio de uma requisição HTTP POST. Os dados são processados e enviados por e-mail usando o serviço Nodemailer.

## 🎯 Funcionalidades
Recebimento de dados de formulário de contato via requisições HTTP POST.
Validação dos dados recebidos antes do envio por e-mail.
Envio seguro de e-mails contendo as informações do formulário para o endereço de e-mail especificado pelo autor do projeto.

## 🔧 Personalização
O código da API pode ser personalizado para adicionar lógica adicional, implementar validações customizadas e integrar com serviços de e-mail específicos.

## 📄 Direitos Autorais e Licença
Este projeto é protegido por direitos autorais de Eduardo Fernandes. Você tem permissão para visualizar e modificar o código para fins de aprendizado e uso pessoal. Para qualquer outro uso, entre em contato com o autor.

Este projeto é distribuído sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

## 🎓 Direitos Acadêmicos
Este projeto também está disponível para uso em contextos acadêmicos, como estudos, pesquisas e trabalhos acadêmicos. Você tem permissão para referenciar e utilizar partes do código-fonte para esses fins, desde que os devidos créditos sejam atribuídos ao autor do projeto, Eduardo Fernandes.

Para referenciar este projeto em trabalhos acadêmicos usando o estilo APA, você pode seguir o modelo abaixo:

Fernandes, E. (Ano). Título do Projeto. [Nome do repositório no GitHub]. URL

Por exemplo:

Fernandes, E. (2024). Avaliação 1 UVA - Backend API. GitHub. https://github.com/devDudu-21/fom-contact-email-api

Se precisar de mais informações ou tiver dúvidas sobre o uso acadêmico deste projeto, entre em contato com o autor.
