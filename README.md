# By Ivi — protótipo de orçamentos

MVP mobile-first para pedidos de customização de bonecas Blythe/BJD.

## Stack

- Next.js
- Material UI
- Supabase preparado em `lib/supabase` (sem backend real neste protótipo)
- Dados mockados para o painel da artista

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Use o botão **Área da artista** no cabeçalho para alternar entre a jornada da cliente e o painel interno.

## Incluído

- Fluxo guiado em etapas com validações e perguntas condicionais
- Referências somente por links do Instagram
- Upload simulado apenas para fotos da própria boneca
- Revisão e confirmação do pedido
- Dashboard/Kanban responsivo com pedidos mockados
- Detalhe do pedido, editor de orçamento e mensagem para WhatsApp
