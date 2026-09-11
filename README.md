# Somente

Aplicação web estática de operações de atendimento, com controle de operações, blocos, horas mensais, Dashboard e perfis de acesso.

## Credencial inicial

- E-mail: `admin@conectasaude.com`
- Senha: `12345678`

Os dados desta versão ainda são armazenados no `localStorage` do navegador. A aplicação está preparada para publicação estática no GitHub Pages.

## Perfis

- **Administrador:** acesso completo, incluindo Acessos.
- **Editor:** pode editar operações, blocos e horas.
- **Visualizador:** acessa somente a Dashboard; as abas Operações e Acessos ficam ocultas.

## Publicar no GitHub Pages

1. Crie um repositório e copie `index.html` para a raiz.
2. Faça o push dos arquivos.
3. Em Settings → Pages, selecione a branch principal e a pasta `/root`.

## Supabase

O arquivo `supabase/schema.sql` contém a estrutura inicial para migrar usuários, operações, blocos e lançamentos mensais. O cliente público está configurado em `supabase-config.js` com a URL do projeto e a publishable key fornecidas. O app ainda usa `localStorage` como camada de dados da versão atual; a migração completa exige aplicar o SQL, configurar Auth/RLS e substituir as funções de leitura/gravação por chamadas às tabelas do Supabase.

Nunca inclua uma `service_role key` no frontend. A publishable key é apropriada para uso público, desde que as políticas RLS estejam corretamente configuradas.
