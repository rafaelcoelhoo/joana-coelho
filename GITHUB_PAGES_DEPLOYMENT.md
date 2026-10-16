# GitHub Pages - Publicação Automática

## Status: ✅ CONFIGURADO PARA PUBLICAÇÃO AUTOMÁTICA

### Como Funciona

Sim! O site será publicado **automaticamente** no GitHub Pages quando você fizer push para a branch `main`.

### Fluxo de Publicação

```
1. git push origin main
   ↓
2. GitHub Actions dispara o workflow "Publicar no GitHub Pages"
   ↓
3. Workflow executa:
   - Checkout do código
   - Instala dependências (pnpm)
   - Build do Next.js (npm run build)
   - Cria arquivo .nojekyll
   - Upload dos arquivos estáticos
   ↓
4. GitHub Pages publica automaticamente
   ↓
5. Site disponível em: https://rafaelcoelhoo.github.io/joana-coelho/
```

### Workflow Configurado

**Arquivo:** `.github/workflows/deploy.yml`

#### Triggers (O que dispara o workflow)
- ✅ Push na branch `main`
- ✅ Workflow dispatch (manual)

#### Passos do Build
1. **Checkout:** Baixa o código
2. **Setup pnpm:** Instala package manager
3. **Setup Node:** Instala Node.js v20
4. **Configure Pages:** Configura GitHub Pages
5. **Install:** `pnpm install`
6. **Build:** `pnpm next build` (cria pasta `out/`)
7. **Create .nojekyll:** Desativa Jekyll
8. **Upload Artifact:** Envia arquivos para GitHub
9. **Deploy:** Publica no GitHub Pages

### Verificar Status da Publicação

#### 1. No GitHub (Recomendado)
1. Ir para: https://github.com/rafaelcoelhoo/joana-coelho
2. Clicar em "Actions"
3. Ver workflow "Publicar no GitHub Pages"
4. Aguardar conclusão (2-5 minutos)

#### 2. Verificar Logs
1. Clicar no workflow em execução
2. Clicar em "build" ou "deploy"
3. Ver logs detalhados

#### 3. Acessar o Site
- URL: https://rafaelcoelhoo.github.io/joana-coelho/
- Aguardar 2-3 minutos após push
- Recarregar página se não aparecer

### Status Atual

✅ **Commit inicial já foi feito!**

```
Commit: 6b6dc38
Message: Initial commit
Files: 54 arquivos
Size: 260 KB
```

✅ **Push para GitHub já foi feito!**

```
Branch: main
Remote: origin
Status: Sincronizado
```

✅ **Workflow deve estar em execução agora!**

Verifique em: https://github.com/rafaelcoelhoo/joana-coelho/actions

### O Que Acontece Agora

1. **GitHub Actions está rodando** ⏳
   - Fazendo build do Next.js
   - Gerando arquivos estáticos
   - Preparando para deploy

2. **Em 2-5 minutos** ✅
   - Site será publicado
   - Disponível em: https://rafaelcoelhoo.github.io/joana-coelho/

3. **Próximos pushes** 🔄
   - Toda vez que fazer `git push origin main`
   - Workflow dispara automaticamente
   - Site atualiza em 2-5 minutos

### Checklist de Publicação

- [x] Código commitado
- [x] Push para GitHub feito
- [x] Workflow `.github/workflows/deploy.yml` existe
- [x] Branch `main` configurada
- [x] Permissões corretas (pages: write)
- [x] Next.js configurado para export estático
- [x] `.nojekyll` será criado automaticamente

### Possíveis Problemas e Soluções

#### ❌ Workflow falha com erro de build
**Solução:**
1. Verificar logs em GitHub Actions
2. Testar localmente: `npm run build`
3. Corrigir erros
4. Fazer novo push

#### ❌ Site não aparece após 5 minutos
**Solução:**
1. Aguardar mais tempo (às vezes demora)
2. Limpar cache do navegador (Ctrl+Shift+Del)
3. Tentar em navegador privado
4. Verificar URL: https://rafaelcoelhoo.github.io/joana-coelho/

#### ❌ Página em branco ou erro 404
**Solução:**
1. Verificar se `next.config.mjs` tem `output: "export"`
2. Verificar se `.nojekyll` foi criado
3. Verificar logs do workflow
4. Testar build local: `npm run build && npm run start`

### Configurações GitHub Pages

#### Verificar Configurações
1. Ir para: https://github.com/rafaelcoelhoo/joana-coelho/settings/pages
2. Verificar:
   - Source: "GitHub Actions" ✅
   - Branch: "main" ✅
   - Folder: "/" ✅

#### Habilitar HTTPS
- GitHub Pages usa HTTPS automaticamente
- Certificado SSL gratuito
- URL: https://rafaelcoelhoo.github.io/joana-coelho/

### Próximas Atualizações

Para atualizar o site após publicação:

```bash
# 1. Fazer alterações no código
# 2. Testar localmente
npm run dev

# 3. Commit
git add .
git commit -m "Descrição das alterações"

# 4. Push
git push origin main

# 5. Aguardar 2-5 minutos
# 6. Site atualiza automaticamente
```

### Monitorar Publicações

#### GitHub Actions Dashboard
- https://github.com/rafaelcoelhoo/joana-coelho/actions
- Ver histórico de workflows
- Verificar status de cada publicação

#### Logs Detalhados
1. Clicar no workflow
2. Clicar em "build" ou "deploy"
3. Expandir cada step
4. Ver output detalhado

### Resumo

| Item | Status | Detalhes |
|------|--------|----------|
| Workflow | ✅ | Configurado em `.github/workflows/deploy.yml` |
| Trigger | ✅ | Dispara ao fazer push na `main` |
| Build | ✅ | Next.js export estático |
| Deploy | ✅ | GitHub Pages automático |
| URL | ✅ | https://rafaelcoelhoo.github.io/joana-coelho/ |
| HTTPS | ✅ | Automático |
| Tempo | ⏳ | 2-5 minutos por publicação |

---

## 🚀 Site em Publicação!

**O site está sendo publicado agora mesmo!**

Verifique o progresso em:
https://github.com/rafaelcoelhoo/joana-coelho/actions

Em 2-5 minutos, acesse:
https://rafaelcoelhoo.github.io/joana-coelho/

**Desenvolvido com Devin** ✨
