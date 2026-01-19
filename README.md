# API de gerenciamento de tempo
Este projeto consiste em criar uma API de clima que consulta dados em um provedor terceirizado, aplica cache e retorna as informacoes ao cliente.

Objetivo: praticar consumo de APIs externas, uso de variaveis de ambiente, cache com expiracao e tratamento de erros.

Estou usando principios de arquitetura e de camadas para organizar o codigo e separar responsabilidades.

## Requisitos
- Node.js 18+
- Redis

## Variaveis de ambiente
- `BASE_URL`: URL base do provedor de clima
- `API_KEY`: chave do provedor de clima
- `REDIS_URL`: conexao do Redis (ex: `redis://localhost:6379`)
- `AUTH_USERNAME`: usuario para login
- `AUTH_PASSWORD`: senha para login
- `JWT_SECRET`: segredo para assinar o JWT
- `JWT_TTL_SECONDS`: tempo de vida do JWT em segundos (default 3600)

## Redis
O login gera um JWT e salva o token no Redis com TTL. A chave segue o padrao `auth:token:<token>`.

## Rotas
- `GET /` retorna clima
- `POST /auth/login` gera JWT e salva no Redis
