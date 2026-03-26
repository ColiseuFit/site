# Brainstorming Estratégico: Plataforma Coliseu

O propósito deste documento vivo é mapear conceitualmente a visão de produto da futura Plataforma Coliseu. O objetivo central é **substituir o Tecnofit 100% no longo prazo**, construindo o ecossistema definitivo para gerir a academia e entregar o "Coliseu Clube".

## 🏗️ Os 4 Pilares do Negócio

1. **O Aluno (Coliseu Clube)**
   - **Propósito:** Materializar o valor de ser membro.
   - **Foco:** Evolução, pertencimento, acesso a bônus e fricção zero no agendamento.
2. **A Comunidade**
   - **Propósito:** Retenção e gamificação.
   - **Foco:** Ranking de WOD diário, murais de Recordes Pessoais (PRs), anúncios importantes do Head Coach.
3. **A Operação (Coaches e Recepção)**
   - **Propósito:** "A graxa da engrenagem".
   - **Foco:** Gestão de check-ins sem lentidão, visão 360 do aluno (lesões/objetivos) para o Coach.
4. **A Gestão (Estratégico / Financeiro)**
   - **Propósito:** Visão Macro e LTV.
   - **Foco:** Pagamentos, saúde de caixa, previsibilidade, retenção.

---

## 🚀 Foco Estratégico V1: A Experiência do Clube

Para competir e transcender os aplicativos tradicionais, a prioridade inicial (V1) foca exclusivamente nos pilares **Aluno e Comunidade**.

### 👤 O Perfil do Aluno

O perfil não é apenas uma página de dados estáticos, é o "painel de controle" da vida do aluno no Coliseu.

**Estrutura do Perfil:**
1.  **Identidade Digital (Estilo Instagram):**
    -   **Foto do Perfil:** Upload de foto real para reconhecimento na Box.
    -   **Nome de Exibição:** Como o aluno deseja ser chamado na comunidade (ex: "Alex Silva").
    -   **Bio:** Pequeno resumo pessoal, objetivos ou frase de motivação.
    -   **Gênero:** Identificação para filtros de ranking e categorias.
    -   **ID Único:** Código identificador único por aluno para gestão interna.
2.  **Dados Cadastrais (Privados):**
    -   **Nome Completo:** Para fins contratuais e seguros.
    -   **CPF:** Necessário para faturamento e gestão financeira.
    -   **Data de Nascimento:** Gatilho para alertas de aniversário no Box.
3.  **Saúde e Evolução:**
    -   **Avaliação Física:** Histórico das avaliações realizadas (Anamnese + Fotos + Dobras).
    -   **Cartão de Alerta (Saúde):** Resumo de lesões/restrições visíveis para o Coach.
4.  **Status e Nível:**
    -   **Nível:** Exibição do nível atual de acordo com a nomenclatura e regras definidas pela gestão.
    -   **Badges/Medalhas:** Ícones de conquistas acumuladas.

---

### Jornada do Aluno (Mapeamento de Experiência)

**O que o aluno vê e sente ao abrir a plataforma hoje de manhã?**

-   **Tela Inicial (O Panorama Diário)**
    -   O treino do dia que ele vai enfrentar mais tarde (Aquecimento, Técnica, WOD).
    -   Seu "Status" de treino atual ou seu próximo horário.
-   **Marcação e Logística**
    -   Calendário limpo com as turmas.
    -   Fluxo estúpido e simples para avisar que vai faltar e repor em outro horário sem burocracia do balcão.
-   **O Cofre (Conteúdo de Valor)**
    -   Área protegida onde só membros têm acesso a conteúdos da "Caixa de Ferramentas" e treinos bônus do F03.
-  **Comunidade (Pós-Treino)**
    -   O ritual diário: Lançar seu tempo do WOD.
    -   Comparar seu resultado com os parceiros de treino na lousa digital (Leaderboard).

---

### 📅 Grade de Horários (O Coração da Logística)

A grade não é apenas uma lista de horários; é onde o fluxo de pessoas na Box é gerenciado sem atrito.

1.  **Visão do Aluno (Reserva e Filtros):**
    -   **Cadeira Cativa (Padrão):** O sistema já deixa reservado o horário padrão do aluno (ex: 19h seg/qua/sex).
    -   **Mapa de Ocupação:** O aluno vê quantas vagas restam em cada turma antes de tentar uma reposição.
    -   **Filtro por Modalidade:** CrossFit, Endurance, Open Box, Personal, etc.
2.  **Visão da Gestão (Configuração):**
    -   **Editor de Grade:** Interface para definir horários, turmas e número de vagas.
    -   **Atribuição de Coaches:** Cada horário vinculado a um Coach para recebimento automático da lista de presença.
    -   **Limites de Vagas:** Bloqueio automático de novos check-ins ao atingir o teto da turma.
3.  **Mecânica de Troca e Regras de Reposição (Fricção Zero):**
    -   **Botão "Liberar Vaga" e Antecedência:** Libera a vaga instantaneamente, mas só gera um "Crédito de Reposição" se cancelado com a antecedência mínima parametrizada pelo Box (ex: 2h antes). Cancelamentos em cima da hora liberam cadeira mas não geram crédito, educando o comportamento.
    -   **Dinâmica do Crédito:** O crédito tem prazo de "queima" curto (ex: expira no último dia da semana corrente), impedindo uma "bola de neve" de devoluções no fim do mês.
    -   **Lista de Espera Inteligente:** Notificação automática e fila limpa se uma vaga abrir num horário visado.

---

### 🏋️ Central do WOD (Onde tudo acontece)

O WOD não é apenas uma informação, é o motor da Box. Ele aparecerá em 3 lugares estratégicos:

1.  **No App (Dashboard do Aluno):**
    -   **Visualização Apenas (Somente Leitura):** O aluno consome a informação do treino e vídeos, sem permissão de edição.
    -   **Card de Destaque:** No topo da tela inicial, mostrando o "WOD de Hoje" assim que o aluno abre o app.
    -   **Preview:** Abre o detalhamento (Aquecimento, Técnica e WOD) com vídeos explicativos dos movimentos (integrado com o "Cofre").
    -   **Botão "Logar Resultado":** Aparece apenas após o check-in ser validado.
2.  **No Wod Tv (O Painel Central do Box):**
    -   **URL Dedicada (Modo Display):** Uma página web otimizada para visualização em grandes telas (`wodtv.coliseufit.com`).
    -   **Tecnologia Realtime:** Utiliza WebSockets (Supabase Realtime) para que, no instante em que o aluno clica em "Check-in" no celular, o nome apareça no Wod Tv sem precisar atualizar a página.
    -   **Conteúdo Dinâmico:** Alternância inteligente entre o WOD do dia, o Cronômetro de alta visibilidade e o Leaderboard atualizado.
    -   **Notificação de Entrada:** Um "Toast" visual elegante no canto da tela: *"Bem-vindo ao Box, [Nome]!"* com a foto do perfil.
        -   **Gestão de Fila em Horário de Pico:** Num horário com "avalanches" de check-in na recepção, a interface inteligente os agrupa e exibe uma apresentação otimizada (ex: *"Bem-vindos: João, Maria, Pedro e +5!"*) para evitar que a tela principal não passe do ciclo de notificações.
    -   **Hardware Simples:** Funciona em qualquer Smart TV com navegador ou via dispositivos tipo Chromecast / Mi Stick conectados ao HDMI.
3.  **No Histórico (Registro de Aulas):**
    -   Uma seção no perfil do aluno para consultar WODs passados e acompanhar a evolução em benchmarks (ex: "Murph", "Fran").

---

*   **Agendamento (A Experiência sem Atrito):**
    *   *O Problema:* Apps comuns são lentos, exigem muitos cliques e "expulsam" o aluno do horário fixo por qualquer erro.
    -   *Conceito Coliseu:* O aluno tem sua "Cadeira Cativa" (Grade Fixa). O app foca na **Exceção**. Se ele não puder ir, ele clica em "Liberar Vaga" com 1 toque e ganha um "Crédito de Reposição" automático para usar em qualquer outro horário da semana, sem precisar falar com ninguém.
*   **Evolução (O Espelho Digital):**
    *   *O Problema:* PDFs de avaliação física são ignorados. O aluno não sente o progresso visual.
    -   *Conceito Coliseu:* Transformar dados em **Status**. Um gráfico de "Engenharia Corporal" que mostra o corpo do aluno mudando (avatar 3D ou silhueta dinâmica). Comparação de "Antes x Depois" lado a lado com as fotos da avaliação direto no dashboard.
*   **Gamificação (O Sistema de Níveis):**
    *   *Ideia:* Transformar a jornada do aluno em uma progressão épica de "Níveis" customizáveis.
    -   *Customização pelo Gestor:*
        -   O Gestor define a **Grade de Níveis** (Nomes, Ordem e Requisitos).
        -   Pode-se mudar nomes, ícones e cores conforme a identidade da fase do Box.
    -   *O Poder da Equipe (Operação e Gestão):*
        -   **Edição Manual:** A equipe tem autoridade total para promover ou demover um aluno diretamente no perfil.
        -   O sistema permite "pular etapas" por mérito (ex: um aluno que se destaca na comunidade pode ser promovido manualmente pelo Head Coach).
    -   *XP como Inteligência de Suporte:*
        -   O sistema monitora a assiduidade e performance (check-ins e PRs) gerando um saldo de XP.
        -   O XP serve como um "Termômetro" para ajudar o gestor a decidir quem merece o próximo nível, mas não é o único critério.
    -   *Recompensa Real:* Cada nível atingido (ou atribuído) pode liberar benefícios automáticos (ex: 5% de desconto na loja, acesso a uma nova área do "Cofre" ou um convite para o evento VIP trimestral).

---
*   **Social (Quadro do Box):**
    *   *Ideia:* O "WOD do Dia" não é apenas texto. Ele é interativo. Ao final da aula, o Coach libera o ranking e o aluno vê sua posição.
    -   *Interação:* Possibilidade de dar um "Punho" (curtir) no resultado do parceiro que bateu um recorde hoje.

---

*   **O Portal do Box (Ferramentas de Operação):**
    -   **Página de Pré-cadastro/Matrícula:**
        -   Interface limpa para a recepção criar novos perfis em segundos.
        -   Campos: Nome Completo, CPF, Nascimento, WhatsApp e seleção de Plano Inicial.
        -   Ação: Botão "Gerar Acesso" que envia o link de ativação via WhatsApp e gera o QR Code na tela.
    -   **Ficha do Aluno (Visão do Coach):**
        -   Ao abrir a turma do horário, o Coach vê o resumo de cada um.
        -   Ícones discretos indicam: ⚠️ Lesão no Ombro, 🆕 Aluno Novo (Fase de Adaptação), 🎂 Aniversariante.
        -   **Badge de Categoria:** RX, Scale ou Fitness (ajuda o Coach a adaptar o treino na hora).
    -   **Sistema de Check-in (1 Toque na Plataforma):** 
        -   **Check-in Simplificado:** O aluno realiza o check-in com apenas um toque no Card do WOD direto no app ao chegar no Box.
        -   **Validação Financeira:** O botão de check-in só fica habilitado se o plano estiver ativo e sem pendências.
        -   **Boas-vindas na Box:** Ao clicar em check-in, o nome do aluno é disparado para a TV do Box ("Bem-vindo, [Nome]!").
        -   **Contingência Manual:** O Coach ou Recepção continuam com a autoridade de validar a presença no Portal do Box para casos excepcionais.
        -   **Botão "Chamar no WhatsApp":** Direto na lista de presença para cobrar alunos recorrentes que faltaram sem avisar.
    -   **Cronômetro Integrado (Conceito):** Possibilidade do app espelhar um cronômetro na TV do box, puxando o WOD do dia automaticamente.
    -   **Gestão do Treino (Editor de WOD):** Interface exclusiva para o Head Coach/Gestor criar e editar o treino (Aquecimento, Técnica e WOD) com suporte a vídeos e tags de movimentos. O Aluno não tem permissão de edição.
*   **Gestão de Conteúdo (O Cofre):**
    *   *O Problema:* Conteúdo educacional em academias costuma ser links soltos de WhatsApp que se perdem.
    -   *Conceito Coliseu (Evolução Ideal):* Uma biblioteca visual estilo "Netflix" com analytics de visualização assistida por aluno.
    -   *Simplificação V1 (Vitrine Bloqueada):* Para focar em agilidade na Primeira Versão, o Cofre atua como um portão: o aluno que logar através de um tier pago do Clube recebe a aba. Nela, o material e playbooks estarão num layout incrivelmente rico e premium com botões diretos de PDF Viewer ou Embedded Videos do Vimeo sem distrações—antes de entrar em lógicas intrincadas de streaming e tracking.

---

*   **A Comunidade (Mecânicas de Grupo):**
    *   *O Problema:* A falta de visibilidade dos resultados alheios diminui a competitividade saudável e o senso de pertencimento.
    -   *O Mural da Comunidade (Feed):*
        -   Um feed social privado onde o evento central é o **WOD do Dia**.
        -   **Alertas de Superação:** Quando alguém bate um PR ou sobe de Nível, o sistema posta automaticamente um card de celebração.
    -   *Interações Sociais (O Punho):*
        -   Substituindo o "Curtir" genérico pelo **"Punho" (High-five)**. É a validação rápida do esforço do parceiro.
        -   Comentários rápidos e focados em encorajamento.
    -   *Ranking Dinâmico (Leaderboard):*
        -   Filtros por Categoria (RX, Scale, Fitness) e por Sexo.
        -   **Visualização de Elite:** Os 3 primeiros do dia ganham um destaque visual (moldura dourada/prata) no feed.
    -   *Desafios Coletivos:* Eventos temporários (ex: "Semana da Assiduidade") onde o box inteiro ganha XP bônus se baterem uma meta coletiva de check-ins.

---
## 💳 Estratégia Financeira (O Motor de Receita)

A plataforma não é um CRM de vendas, mas é o **motor de faturamento** recorrente do Box. O objetivo é automatizar 100% a cobrança para que a recepção foque no atendimento.

### 1. Gateway de Pagamento (O Coração Financeiro)
- **Escolha Oficial:** **Stone / Pagar.me** (Ecosystem robusto para o mercado brasileiro).
- **Funcionalidades Críticas:**
    - **Recorrência Automática (Cartão):** Cobrança mensal sem ocupar o limite do cartão do aluno (modelo assinatura).
    - **Pix Dinâmico:** Geração de QR Code de pagamento que libera o plano (e o check-in) instantaneamente após o pagamento.
    - **Split de Pagamento:** Divisão automática de valores entre sócios ou para a escola, se necessário.

### 2. Gestão de Inadimplência (Fricção Zero para o Gestor)
- **Régua de Cobrança:** Notificações automáticas via WhatsApp (3 dias antes, no dia, e 2 dias após o vencimento).
- **Trava de Check-in:** Se a fatura vencer, o botão de check-in é desabilitado no app e uma mensagem convida o aluno a regularizar o pagamento (via link direto no app).
- **Auto-Regularização:** O aluno paga via Pix dentro do app e o check-in é liberado em segundos, sem precisar falar na recepção.

---
### 3. Gestão de Contratos e Planos Ativos
- **Validade e Renovação:** Os contratos são lógicos (ex: Plano Trimestral, Semestral, Anual). O sistema conta os dias de vigência e sinaliza "Renovação Próxima" 15 dias antes do fim.
- **Assinatura Digital:** Ao se matricular via link de pagamento no celular, o aluno visualiza um termo simplificado (com as regras do Box) e clica em "Aceitar e Assinar" digitalmente. Sem papelada.
- **Trancamento de Plano:** Funcionalidade para congelar o contrato (ex: viagem ou lesão) por X dias, com o sistema estendendo automaticamente a data de vencimento final.
- **Mudança de Categoria:** (Upsell/Downsell automático). Se o aluno sai de um plano 3x na semana para o plano *Free Pass*, o sistema já ajusta o próximo faturamento e libera a "Cadeira Cativa" extra no mesmo instante.

## 📈 Gestão (O Centro de Comando)

A retaguarda administrativa, projetada para tirar fricção do dia a dia e fornecer dados em tempo real sobre retenção.

### 1. Dashboard Executivo (A Macro Visão / Gestor)
- **Painel de Receita MRR (Saúde de Caixa):** Gráfico principal que consolida a assinatura mensal automatizada via cartões, o volume via PIX em trânsito e exibe a inadimplência total limpa.
- **Detector Preditivo de Churn:** O verdadeiro controle de perdas. O sistema cruza os check-ins das últimas semanas e acende um alerta vermelho para quem quebrou repentinamente o padrão (ex: caiu para 1 treino na semana)—permitindo que o Coach/Admin aborde esse aluno carinhosamente via WhatsApp muito antes de ele cancelar o plano.
- **Mapa de Calor da Prática:** Visualização inteligente dos gargalos da grade nos últimos 30 dias (turmas sistematicamente estourando capacidade às 18h e turmas vazias às 14h), dando clareza matemática antes de decidir trocar coaches ou horários.

### 2. O Cockpit do Balcão (A Visão Tática / Operação)
- **Radar do Dia Atual:** Tela limpa separando os avisos relevantes em cards: *Novatos do Dia (primeira aula, atenção especial)*, *Aniversariantes*, e *Pendências de Cobrança que estão no horário marcado do dia*.
- **Agir com 1 Botão:** Não ter que ir buscar o número na agenda. Exemplo: um devedor pisou perto da Box, e com um toque na listagem envia "Link de Ativação do PIX" pelo canal de contato prioritário (WhatsApp).

---

---

## 🔐 Acesso e Onboarding (Fricção Zero)

A maior causa de desistência em apps de academia é a "perda de senha". No Coliseu, o acesso deve ser imediato e impossível de esquecer.

### 1. Fluxo de Cadastro (100% via Recepção)
O cadastro é realizado exclusivamente pela equipe do Coliseu no balcão, garantindo a coleta correta dos dados e a validação do ID Único.

1.  A recepção preenche os dados cadastrais (Nome, CPF, Nascimento, WhatsApp).
2.  O sistema gera um **Link de Ativação** ou **QR Code** único no momento da matrícula.
3.  O aluno escaneia o código ou clica no link recebido via WhatsApp para ativar seu perfil, tirar a foto oficial e escrever sua Bio.

### 2. Login e Segurança
*   **Método Principal: WhatsApp OTP (Sem Senha):**
    - O aluno insere o CPF ou WhatsApp.
    - Recebe um código de 6 dígitos via WhatsApp (rápido e seguro).
    - **Vantagem:** O aluno nunca esquece a senha porque ela não existe.
*   **Método Secundário: E-mail + Senha:** Para quem prefere o método tradicional, mas sempre com a opção de "Login Rápido" via telefone.

---

## 🏆 Gamificação e Progressão (A Experiência do Aluno)

A gamificação é o motor de retenção (LTV). O objetivo é que o aluno sinta que está evoluindo de forma tangível, transformando esforço em status dentro do box.

### 1. Sistema de XP (Esforço Recompensado)
- **Check-in diário:** +100 XP.
- **Wod Tv Integration:** Ao detectar o check-in, o Wod Tv pode exibir uma pequena animação de "XP Ganho" para o aluno.
- **Streak (Fogo):** Bônus para quem treina 3, 5 ou 10 dias seguidos. Se falhar, o "fogo" apaga.
- **PR Batido:** +500 XP ao registrar um Recorde Pessoal (Benchmark).
- **Suor Bônus:** XP extra para quem treina em horários de baixa ocupação (ajuda a equilibrar a lotação do Box).

### 2. Níveis e Patentes (Estilo Coliseu)
- **Fase de Adaptação (Nível 1-5):** "Iniciante" (Badge especial para que os outros saibam que ele é novo).
- **Evolução por Cores:** O perfil do aluno muda de cor conforme o nível (Branco -> Azul -> Roxo -> Marrom -> Preto).
- **Benefício por Nível:** Alunos de nível alto (Preto/Centurião) ganham prioridade na reserva de horários disputados ou acesso antecipado a eventos.

### 3. Conquistas e Badges
- **Madrugador:** 10 treinos no horário das 6h.
- **Resiliência:** Treinar em feriados ou fins de semana.
- **Mural de PRs:** Celebração automática no Feed da comunidade quando alguém bate um recorde.
- **Mestre da Técnica:** Badge atribuída pelo Coach para movimentos perfeitos (ex: Clean & Jerk).

---
