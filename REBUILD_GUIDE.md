# Projeto: Coliseu Clube - Rebuild (V2)

Este repositório foi criado em **26/03/2026** como uma cópia do projeto original `site-coliseu` para servir como base para uma reconstrução completa (V2).

## Contexto Atual

A estrutura atual consiste em:
- **Root:** Configuração base para o Vercel e scripts de orquestração.
- **app-coliseu/**: O aplicativo Next.js principal.
  - Framework: Next.js 15/16 + React 19.
  - Estilo: Tailwind CSS 4.
  - Backend: Supabase (`@supabase/ssr` e `@supabase/supabase-js`).
  - Rotas: Organizadas por grupos: `(admin)`, `(auth)`, `(student)`.

## Próximos Passos (Rebuild)

1.  **Conectar ao GitHub:**
    - Criar um novo repositório vazio no seu GitHub.
    - Rodar no terminal:
      ```bash
      git remote add origin https://github.com/[SEU-USUARIO]/novo-repo.git
      git push -u origin main
      ```
2.  **Definir as Alterações Prioritárias:**
    - O que será alterado primeiro? Design, autenticação, dashboard de alunos?
3.  **Refatoração:**
    - Começar as modificações mantendo a consistência do design system em `src/app/globals.css`.

---

*Nota para o IA Developer*: Este projeto é um clone para "rebuild". As dependências foram instaladas e os arquivos iniciais foram commitados. O seu objetivo é renovar a experiência de acordo com as instruções do usuário.
