# Allan de Melo Correa — Portfólio

Portfólio pessoal com projetos de desenvolvimento web, aplicações e trabalhos para clientes.

## Desenvolvimento

Requer Node.js 20.19+ ou 22.12+.

```sh
npm ci
npm run dev
```

## Produção

```sh
npm run build
npm run preview
```

A Vercel utiliza `npm run build` e publica a pasta `dist`, conforme `vercel.json`.

## Conteúdo

- `src/projects.ts`: projetos, descrições, tecnologias e links.
- `src/App.tsx`: apresentação, navegação e seções.
- `src/styles.css`: identidade visual e regras responsivas.
- `src/components/ui/`: componentes no padrão shadcn/ui com Radix e CVA.
- `public/previews/`: capturas dos sites utilizadas nos cards.

Os cards exibem até três linhas de descrição. O conteúdo completo pode ser consultado na janela de detalhes. Projetos sem prévia utilizam o logo do GitHub. O portfólio utiliza tema escuro fixo, com destaques em cinza e detalhes verdes.

## Tecnologias

React, TypeScript, Vite, Tailwind CSS, Radix UI, Lucide e class-variance-authority.
