# Loja API

Projeto de estudos construído com [NestJS](https://nestjs.com/). O objetivo é praticar a estrutura de módulos do Nest, validação de dados com `class-validator` e organização em DTOs, entidades e repositórios.

> Projeto apenas para fins de aprendizado. Os dados são mantidos em memória (não há banco de dados), então tudo é perdido ao reiniciar a aplicação.

## Tecnologias

- Node.js
- NestJS 10
- TypeScript
- class-validator / class-transformer (validação e transformação de dados)
- uuid / crypto (geração de identificadores)

## Estrutura

```
src/
├── app.module.ts
├── main.ts
├── usuario/          # Módulo de usuários
│   ├── dto/          # DTOs de criação, atualização e listagem
│   ├── validacao/    # Validador customizado (e-mail único)
│   ├── usuario.entity.ts
│   ├── usuario.controller.ts
│   ├── usuario.repository.ts
│   └── usuario.module.ts
└── produtos/         # Módulo de produtos
    ├── dto/          # DTOs de criação, atualização e listagem
    ├── produto.entity.ts
    ├── produtos.controller.ts
    ├── produtos.repository.ts
    └── produtos.module.ts
```

## Como rodar

Instale as dependências:

```bash
npm install
```

Rode em modo desenvolvimento (com watch):

```bash
npm run start:dev
```

A aplicação sobe por padrão em `http://localhost:3000`.

## Rotas

### Usuários (`/usuarios`)

| Método | Rota             | Descrição                     |
|--------|------------------|-------------------------------|
| POST   | `/usuarios`      | Cria um novo usuário          |
| GET    | `/usuarios`      | Lista os usuários cadastrados |
| PUT    | `/usuarios/:id`  | Atualiza um usuário existente |
| DELETE | `/usuarios/:id`  | Remove um usuário             |

### Produtos (`/produtos`)

| Método | Rota             | Descrição                     |
|--------|------------------|-------------------------------|
| POST   | `/produtos`      | Cria um novo produto          |
| GET    | `/produtos`      | Lista os produtos cadastrados |
| PUT    | `/produtos/:id`  | Atualiza um produto existente |
| DELETE | `/produtos/:id`  | Remove um produto             |

Nas rotas de atualização, o `id` vem pela URL e os campos do corpo são opcionais (atualização parcial). Quando o `id` informado não existe, a API responde `404 Not Found`.

## Validação

As entradas são validadas via `ValidationPipe` global (configurado em `main.ts`) com `whitelist` e `forbidNonWhitelisted` ativos, ou seja, campos fora do DTO são rejeitados. O módulo de usuário também usa um validador customizado para garantir e-mail único.

## Scripts úteis

```bash
npm run build        # Compila o projeto
npm run start        # Inicia a aplicação
npm run start:dev    # Inicia em modo watch
npm run lint         # Executa o ESLint
npm run test         # Executa os testes
```
