# Configuração da Foto da Joana

## Onde Colocar a Foto

### Passo 1: Preparar a Foto
1. Escolha uma foto de perfil da Joana (recomendado: quadrada, mínimo 400x400px)
2. Salve em formato: **JPG** ou **PNG**
3. Nomeie como: `joana.jpg` ou `joana.png`

### Passo 2: Copiar para o Projeto
1. Crie a pasta `public/images/` se não existir:
   ```bash
   mkdir -p public/images
   ```

2. Copie a foto para:
   ```
   /Users/rafael.coelho/Downloads/joana/public/images/joana.jpg
   ```

### Passo 3: Ativar a Foto no Site
1. Abra o arquivo `lib/site.ts`
2. Procure pela linha:
   ```typescript
   ownerPhoto: null as string | null,
   ```

3. Altere para:
   ```typescript
   ownerPhoto: "/images/joana.jpg",
   ```

### Exemplo Completo

**Antes:**
```typescript
export const site = {
  brand: "Doce Fórmula",
  owner: "Joana Coelho",
  role: "Farmacêutica & pasteleira por paixão",
  // ...
  ownerPhoto: null as string | null,
}
```

**Depois:**
```typescript
export const site = {
  brand: "Doce Fórmula",
  owner: "Joana Coelho",
  role: "Farmacêutica & pasteleira por paixão",
  // ...
  ownerPhoto: "/images/joana.jpg",
}
```

## Estrutura de Pastas

```
joana/
├── public/
│   └── images/
│       └── joana.jpg  ← COLOCAR AQUI
├── lib/
│   └── site.ts  ← EDITAR AQUI
├── components/
├── app/
└── ...
```

## Recomendações de Foto

- **Tamanho:** 400x400px ou maior (quadrada)
- **Formato:** JPG (mais leve) ou PNG (transparência)
- **Qualidade:** Boa iluminação, fundo limpo
- **Estilo:** Profissional ou casual (conforme preferência)

## Onde a Foto Aparece

A foto aparecerá na seção "Sobre" (About) do site, próximo ao nome e descrição da Joana.

## Testar Localmente

1. Coloque a foto em `public/images/joana.jpg`
2. Atualize `lib/site.ts` com o caminho
3. Recarregue o navegador (http://localhost:3000)
4. A foto deve aparecer na seção "Sobre"

## Problemas Comuns

### Foto não aparece
- ✓ Verifique se o arquivo está em `public/images/`
- ✓ Verifique se o caminho em `site.ts` está correto
- ✓ Limpe o cache: `rm -rf .next && npm run dev`

### Foto distorcida
- ✓ Use uma imagem quadrada (400x400px)
- ✓ O site redimensionará automaticamente

### Foto muito pesada
- ✓ Comprima em: https://tinypng.com
- ✓ Tamanho ideal: < 200KB

---

**Pronto para adicionar a foto!** 📸
