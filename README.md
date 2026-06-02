# EvoTech

Site institucional da startup EvoTech, criado com React e Vite.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

O build final fica na pasta `dist`.

## Publicar no GitHub Pages

Este projeto já inclui o workflow em `.github/workflows/deploy.yml`.

1. Faça push para o repositório `Felipecordeiiro/evotech` na branch `main`.
2. No GitHub, abra `Settings` > `Pages`.
3. Em `Build and deployment`, escolha `GitHub Actions` como source.
4. Aguarde o workflow `Deploy to GitHub Pages` terminar.

Depois do deploy, o site fica disponível em:

```text
https://Felipecordeiiro.github.io/evotech/
```
