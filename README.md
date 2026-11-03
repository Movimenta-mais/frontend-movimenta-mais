# Movimenta Mais (frontend)

Aplicação web do projeto Movimenta Mais. Este repositório contém, por enquanto, apenas a estrutura inicial do frontend: configuração do Next.js com App Router, TypeScript em modo strict, Tailwind CSS e ESLint, além de uma página inicial que confirma que o ambiente está funcionando. Ainda não há funcionalidades de negócio.

## Tecnologias

| Tecnologia   | Versão | Uso                                     |
| ------------ | ------ | --------------------------------------- |
| Next.js      | 16.4   | Framework React com App Router          |
| React        | 19.3   | Biblioteca de interface                 |
| TypeScript   | 5.x    | Tipagem estática (`strict: true`)       |
| Tailwind CSS | 4.x    | Estilização                             |
| ESLint       | 9.x    | Qualidade e padronização do código      |
| Node.js/npm  | 20.9+  | Runtime e gerenciador de pacotes        |

## Estrutura de diretórios

```text
movimenta-mais/
├── public/                 # Arquivos estáticos servidos na raiz (/)
│   ├── images/
│   └── icons/
├── src/
│   ├── app/                # Rotas, layouts e estilos globais (App Router)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── favicon.ico
│   ├── components/
│   │   ├── ui/             # Componentes de interface reutilizáveis
│   │   ├── layout/         # Componentes estruturais (cabeçalho, rodapé etc.)
│   │   ├── landing/        # Seções da landing page
│   │   └── illustrations/  # Ilustrações em SVG
│   ├── hooks/              # Hooks React customizados
│   ├── services/           # Chamadas externas e integrações (APIs)
│   ├── utils/              # Funções auxiliares puras
│   ├── types/              # Tipagens compartilhadas
│   └── constants/          # Constantes da aplicação
├── .env.example            # Modelo de variáveis de ambiente
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

As pastas vazias contêm um arquivo `.gitkeep` para que sejam versionadas. Ele pode ser removido quando a pasta receber o primeiro arquivo.

Os imports a partir de `src/` usam o alias `@/*`:

```ts
import { APP_NAME } from "@/constants/app";
```

## Pré-requisitos

- Node.js 20.9 ou superior (desenvolvido com Node.js 24)
- npm (instalado junto com o Node.js)

## Instalação

```bash
git clone <url-do-repositorio>
cd movimenta-mais
npm install
```

Se o projeto precisar de variáveis de ambiente, copie o modelo e preencha os valores:

```bash
cp .env.example .env.local
```

## Executando localmente

```bash
npm run dev
```

A aplicação fica disponível em [http://localhost:3000](http://localhost:3000).

### Testando o leitor de QR Code no celular

O navegador só libera a câmera em endereços seguros (`https://` ou `localhost`). Pelo IP da rede local com `http://` (ex.: `http://192.168.0.10:3000`) a tela de QR Code avisa que não consegue abrir a câmera. Para testar no celular, suba o servidor com HTTPS informando o IP do computador:

```bash
npm run dev:https -- -H 192.168.0.10
```

Depois abra `https://192.168.0.10:3000/qr-code` no celular. O certificado é gerado só para desenvolvimento, então o navegador mostra um aviso de segurança: toque em "Avançado" e continue para o site.

O QR Code colado em cada aparelho deve conter o link da página dele, por exemplo `https://<endereço-do-site>/equipament/3`. Assim, além do leitor do app, a câmera do próprio celular também abre as instruções. O leitor também aceita só o número do aparelho (`3`).

## Scripts

| Comando             | Descrição                                          |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Inicia o servidor de desenvolvimento               |
| `npm run dev:https` | Inicia o servidor de desenvolvimento com HTTPS     |
| `npm run build`     | Gera o build de produção                           |
| `npm run start`     | Executa o build de produção                        |
| `npm run lint`      | Executa o ESLint                                   |
| `npm run typecheck` | Gera os tipos de rotas do Next.js e executa o `tsc` |
