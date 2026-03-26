# Arquitetura e Infraestrutura — Coliseu

## Visão Geral do Ecossistema

> [!IMPORTANT]
> O ecossistema Coliseu é composto por **3 projetos independentes**, cada um com seu próprio repositório, hospedagem e propósito. Todos compartilham o mesmo banco de dados Supabase (ColiseuFit).

| Projeto | Propósito | Domínio | Hospedagem | Repositório | Stack |
|---------|-----------|---------|------------|-------------|-------|
| **CloseFit** | Site institucional CloseFit | `app.closefit.com.br` | Coolify | `CloseFit/closefit-site` | HTML/CSS/JS |
| **ColiseuFit Site** | Funis de captação e admin | `pesquisa.coliseufit.com` | Vercel | `CloseFit/site-coliseu` | HTML/CSS/JS |
| **ColiseuFit App** | Plataforma do Clube (MVP) | `app-coliseu.vercel.app` | Vercel | `CloseFit/site-coliseu` (pasta `/app-coliseu`) | Next.js + Tailwind |

---

## 🌐 ColiseuFit Site (Captação e Gestão)

**Repositório:** `https://github.com/CloseFit/site-coliseu`
**Hospedagem:** Vercel (deploy automático no push para `main`)
**Propósito:** Funis de conversão (pesquisa de grade, agendamento de avaliação física) e painel admin.

### Estrutura de Pastas

```
site-coliseu/
├── vercel.json          ← Configura roteamento das URLs
├── research-page/       ← Fase 1: Pesquisa de Grade
│   ├── index.html
│   ├── style.css
│   ├── main.js
│   ├── logo-coliseu.svg
│   └── favicon.svg
├── av-fisica/           ← Fase 2: Agendamento & Anamnese
│   ├── index.html
│   ├── style.css
│   ├── main.js
│   ├── logo-coliseu.svg
│   └── favicon.svg
├── admin/               ← Dashboard Interno (Painel de Gestão)
│   ├── index.html
│   ├── style.css
│   └── main.js
└── app-coliseu/         ← ⚡ Plataforma do Clube (Projeto Next.js separado)
    └── (ver seção abaixo)
```

### Roteamento de URLs (`vercel.json`)

| URL Acessada | Pasta Servida |
|---|---|
| `pesquisa.coliseufit.com/` | `research-page/` |
| `pesquisa.coliseufit.com/av-fisica/` | `av-fisica/` |
| `pesquisa.coliseufit.com/admin/` | `admin/` |

> [!NOTE]
> Cada pasta do Site é **independente** — tem seu próprio `style.css`, `main.js` e assets. Não compartilham arquivos entre si.

---

## 📱 ColiseuFit App — Plataforma do Clube (MVP)

**Pasta local:** `app-coliseu/`
**Stack:** Next.js (App Router) + TypeScript + Tailwind CSS + Supabase
**Propósito:** Aplicativo do membro do Coliseu Clube (Perfil, Gamificação, Comunidade).

### Estrutura de Pastas

```
app-coliseu/
├── .env.local                  ← Credenciais Supabase (não versionado)
├── src/
│   ├── app/
│   │   ├── (auth)/             ← Rotas públicas (Login)
│   │   ├── (student)/          ← Área do aluno (Perfil, Dashboard)
│   │   └── (admin)/            ← Cockpit do Balcão (Gestão de alunos)
│   ├── components/             ← Componentes reutilizáveis
│   ├── lib/supabase/           ← Helpers de conexão (client, server, middleware)
│   └── middleware.ts           ← Proteção de rotas autenticadas
```

### Autenticação
- **Método:** E-mail e Senha (via Supabase Auth nativo)
- **Proteção:** Middleware e `layout.tsx` no Server interceptam rotas privadas (`/admin`, `/app`) e exigem sessão/Roles.
- **Login Administrativo:** Sem senha para alunos criados via recepção; recepção cria a Identidade Inicial contornando RLS (via Auth Admin API).

### Tabelas Exclusivas do App

- **`profiles`** — Perfil do aluno (nome, avatar, bio, nível, member_number sequencial #01, #02...)
- **`user_roles`** — Permissões (admin, coach, reception, student)
- **`health_alerts`** — Cartão de alerta de saúde/lesões (visível para coaches)
- **Storage `avatars`** — Bucket público p/ fotos de perfil (max 5MB, JPEG/PNG/WebP)

> [!WARNING]
> Todas as tabelas do App possuem **RLS (Row Level Security)** ativo. Alunos só editam seus próprios dados. Apenas admin/coach/reception podem gerenciar perfis de terceiros.

---

## 🗄️ Banco de Dados — Supabase

| Projeto Supabase | ID | Região | Usado por |
|---------|-------------|--------|-----------|
| **CloseFit** | `awxdtanycigjxpeoxixr` | sa-east-1 (Brasil) | Site CloseFit |
| **ColiseuFit** | `gzvflbsjksmriqfaiizr` | us-west-2 | Site Coliseu + App Coliseu |

### Tabelas do Site (Captação)

- **`crossfit_schedule_research`** — Respostas da Fase 1 (Pesquisa de Grade)
  - `INSERT` público via RLS | `SELECT` liberado para `anon`

- **`clube_coliseu_bookings`** — Agendamentos e Anamnese da Fase 2
  - `INSERT` público via RLS | `SELECT` liberado para `anon`
  - Restrição `unique_booking_slot`: impede conflito de horários

### Tabelas do App (Clube)

- **`profiles`** — Identidade Digital dos membros
- **`user_roles`** — Hierarquia de acesso (enum: admin/coach/reception/student)
- **`health_alerts`** — Alertas de saúde com severidade (low/medium/high/critical)

- **Supabase Storage** — `avatars` (fotos de perfil) + vídeos de captação

---

## 🎨 Design System (Compartilhado)

Ambos os projetos (Site e App) seguem o mesmo DNA visual:

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg` | `#050505` | Fundo principal |
| `--surface` | `rgba(14, 14, 14, 0.9)` | Cards e containers (glassmorphism) |
| `--red` | `#E31B23` | Cor de destaque/ação primária |
| `--border` | `rgba(255, 255, 255, 0.07)` | Bordas sutis |
| `--text` | `#ffffff` | Texto principal |
| `--text-2` | `#aaaaaa` | Texto secundário |
| `--radius` | `16px` | Arredondamento padrão |
| Fonte Principal | `Inter` | Corpo de texto |
| Fonte Display | `Outfit` | Títulos e números grandes |

---

## Dashboard Administrativo do Site (`/admin`)

Protegido por **Autenticação JWT via Supabase Auth** (Email e Senha). Design Glassmorphism com tema escuro.

### Aba 1: Pesquisa de Horários
- Mapa de Calor (Heatmap) por dia e faixa de horário
- Tabela completa dos respondentes da Fase 1 com filtro de busca

### Aba 2: Avaliações Físicas
- Tabela de agendamentos com dados de Anamnese
- Riscos de saúde destacados em vermelho automaticamente

---

## Integrações e CRM (Recepção)

**Webhook:** Google Apps Script Web App
**URL:** `https://script.google.com/macros/s/AKfycbxc_.../exec`

```
Formulário do Site → Supabase (banco) + Webhook → Google Sheets (CRM)
```

| Origem (`formSource`) | Aba na Planilha |
|---|---|
| `research-page` | `Fase 1: Pesquisa` |
| `av-fisica` | `Fase 2: Avaliações` |

### Fluxo de Trabalho da Recepção

1. **Fase 1 (Lead):** Aluno responde pesquisa → aba "Fase 1" com status `🟡 Pendente de Contato`
2. **Contato:** Recepcionista envia link `pesquisa.coliseufit.com/av-fisica` via WhatsApp
3. **Fase 2 (Agendamento):** Aluno agenda Avaliação → aba "Fase 2" com status `🟡 Novo Agendamento`
4. **Atualização:** Status atualizado manualmente na planilha

> [!TIP]
> A recepção pode adicionar colunas, filtros e formatações à planilha livremente.

---

## Fluxo de Deploy

| Projeto | Comando | Destino |
|---------|---------|---------|
| **Site Coliseu** | `git push origin main` | Vercel (General) |
| **App Coliseu** | `git push origin main` | Vercel (Root Directory: `app-coliseu`) |

Repositório local:
```
C:\Users\lucri\OneDrive\Agência Orkstra\CLIENTES\Site Coliseu\
```

---

## Funis de Conversão (Site)

| Fase | URL | Mecanismo de Saída |
|------|-----|---------------------|
| Pesquisa de Grade | `/` | Confetes + Mensagem de Sucesso |
| Agendamento & Anamnese | `/av-fisica/` | Redirecionamento Automático para WhatsApp |

### Regras de Engajamento (Video Lock)
Botão "Continuar" **bloqueado por 30 segundos** após o play do vídeo.
- Mensagem: *"🔒 Assista ao vídeo para liberar o acesso"*
- Implementado via CSS `.locked-delayed` e JS `setTimeout`
