# Plataforma Coliseu Clube (APP MVP)

A "Identidade Digital" exclusiva da Academia Coliseu.  
Este projeto fornece duas interfaces fundamentais para o negócio: a **Recepção** (que gera matrículas blindadas contra acessos indevidos) e o **Painel do Aluno**.

> [!IMPORTANT]
> **Documentação Centralizada:** Para arquitetura do sistema e playbooks operacionais, consulte o [**README Principal do Projeto**](../README.md).

## 🌍 Produção (Ao Vivo)
- **URL Oficial:** [https://app-coliseu.vercel.app](https://app-coliseu.vercel.app)
  *(também configurável para `clube.coliseufit.com` via DNS)*
- **Status:** CI/CD habilitado via GitHub + Vercel. Qualquer `git push` na branch `main` executa um novo deploy em Produção em segundos.

---

## 🛠️ Stack Tecnológico
- **Frontend & App Router:** [Next.js v15](https://nextjs.org/) (React 19)
- **Design System:** Inline Styles e CSS Nativo (Custom Glassmorphism e Cores Oficiais `#050505` e `#E31B23`)
- **Backend & Auth:** [Supabase](https://supabase.com/)
- **Armazenamento de Mídia:** Supabase Storage (Bucket Público `avatars` com RLS Security)
- **Infraestrutura/Hospedagem:** [Vercel](https://vercel.com) (Serverless & Edge Networks)

---

## 🔑 Variáveis de Ambiente Necessárias (`.env.local`)
Para rodar este projeto em sua máquina ou realizar o build na Vercel, você deve configurar obrigatoriamente as três chaves no ambiente:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seuid.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-publica
SUPABASE_SERVICE_ROLE_KEY=sua-chave-service-role-secreta
```

*(A chave `SERVICE_ROLE` é estritamente necessária no lado do Servidor/Vercel para o Server Action que contorna o RLS durante a Matrícula do Aluno pela Recepção)*

---

## 🏗️ Como Rodar Localmente (Desenvolvimento)
1. Clone o repositório.
2. Certifique-se de estar na pasta `app-coliseu`.
3. Crie o arquivo `.env.local` com as chaves citadas acima.
4. Instale as dependências e rode o servidor local:

```bash
npm install
npm run dev
```

Abra o [http://localhost:3000](http://localhost:3000) no seu navegador. O primeiro checkpoint joga você diretamente para a tela de Login ou Dashboard (caso você tenha sessão autênticada).

---

## 🛡️ Segurança (Supabase RLS & Roles)
Todo acesso interno é regulado pela tabela `user_roles`. 
Apenas usuários marcados como `'admin'` ou `'reception'` no Banco de Dados conseguem carregar ou processar as rotas dações em `/admin`. Tentar acessar o root em `/admin` sem a Tag correspondente resulta em um Auto-Redirect para a página do aluno `/app`. 

## 📌 Rotas Públicas do MVP
* `/login` - Tela unificada de Auth.
* `/app` - Seu "Cartão de Identidade" e XP.
* `/profile` - Central de customização (Seu "Apelido" e a sua "Foto").
* `/admin` - Painel Master (Restrito).
