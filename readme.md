# 🌟 Site Pessoal Retrô - Anos 90

Um site pessoal nostálgico no estilo dos primórdios da internet, com todas as características clássicas dos anos 90 e início dos 2000!

## ✨ Características

- 🎨 **Design autêntico dos anos 90**: Comic Sans, cores vibrantes, GIFs animados
- 📝 **Livro de visitas funcional**: Sistema real de comentários usando Netlify Forms  
- 🔢 **Contador de visitantes**: Tracking local das visitas
- ✨ **Efeitos especiais**: Sparkles, animações, marquee scrolling
- 📱 **Responsivo**: Funciona em dispositivos móveis
- 🚀 **Deploy fácil**: Pronto para hospedar no Netlify

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 com animações
- JavaScript vanilla
- Netlify Forms para comentários
- LocalStorage para estatísticas

## 📁 Estrutura do Projeto

```
site-retro/
├── index.html          # Página principal
├── obrigado.html       # Página de agradecimento  
├── style.css           # Estilos CSS
├── script.js           # JavaScript
├── netlify.toml        # Configurações do Netlify
├── README.md           # Este arquivo
└── .gitignore          # Arquivos ignorados pelo Git
```

## 🚀 Como Fazer Deploy

### 1. Preparar o repositório no GitHub

1. Crie um repositório no GitHub
2. Clone o repositório localmente:
```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPO.git
cd NOME_DO_REPO
```

3. Adicione todos os arquivos do projeto ao repositório:
```bash
# Copie todos os arquivos para a pasta do repositório
git add .
git commit -m "🚀 Site pessoal retrô - primeira versão"
git push origin main
```

### 2. Deploy no Netlify

#### Opção A - Via GitHub (Recomendado)
1. Acesse [netlify.com](https://netlify.com) e faça login
2. Clique em "New site from Git"
3. Conecte com GitHub e selecione seu repositório
4. Configure as settings:
   - **Branch to deploy**: `main`
   - **Publish directory**: deixe vazio (usará a raiz)
5. Clique em "Deploy site"

#### Opção B - Upload Manual
1. Acesse [netlify.com](https://netlify.com) 
2. Arraste a pasta com todos os arquivos para a área de deploy
3. Aguarde o processo completar

### 3. Configurar Formulários

Após o deploy, os formulários do Netlify serão automaticamente configurados. Para visualizar os comentários recebidos:

1. No painel do Netlify, vá em "Forms"
2. Você verá todos os comentários enviados pelo livro de visitas
3. Configure notificações por email se desejar

## 🎨 Personalização

### Modificar informações pessoais
Edite o arquivo `index.html` nas seções:
- **Sobre Mim**: Altere nome, idade, cidade, hobbies
- **Músicas Favoritas**: Adicione suas músicas preferidas
- **Setup**: Atualize com seu equipamento

### Mudar cores e estilos
No arquivo `style.css`, modifique:
- **Cores principais**: Variáveis no topo do arquivo
- **Animações**: Duração e efeitos dos keyframes
- **Layout**: Tamanhos e espaçamentos

### Adicionar funcionalidades
No arquivo `script.js`, você pode:
- Modificar o contador de visitantes
- Adicionar novos easter eggs
- Personalizar os efeitos de sparkles

## 🎮 Easter Eggs

- **Konami Code**: ↑↑↓↓←→←→BA (ativa modo rainbow)
- **Click Sparkles**: Clique em qualquer lugar para sparkles
- **Contador automático**: Incrementa a cada 30 segundos

## 📧 Gerenciar Comentários

Os comentários são enviados via Netlify Forms. Para moderar:

1. Acesse o painel do Netlify
2. Vá na aba "Forms" 
3. Visualize e gerencie todos os comentários
4. Configure spam protection se necessário

Para exibir comentários aprovados no site, você pode:
- Adicionar manualmente ao HTML 
- Usar Netlify Functions para automação
- Integrar com headless CMS (Netlify CMS, Contentful, etc.)

## 🔧 Resolução de Problemas

### Formulário não funciona
- Verifique se `data-netlify="true"` está no form
- Confirme que o atributo `name` está correto
- Teste primeiro em ambiente local

### Contador não salva
- Problema pode ser localStorage desabilitado
- Funciona apenas com HTTPS (produção)

### Animações não funcionam  
- Verifique suporte do navegador para CSS animations
- Teste em navegadores diferentes

## 📝 TODO / Melhorias Futuras

- [ ] Sistema de comentários dinâmico com aprovação automática
- [ ] Upload de avatars nos comentários  
- [ ] Playlist de músicas integrada
- [ ] Galeria de fotos estilo álbum
- [ ] Chat em tempo real (estilo IRC)
- [ ] Guestbook com ranking de visitantes
- [ ] Integração com redes sociais da época

## 📜 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 🤝 Contribuições

Pull requests são bem-vindos! Para mudanças maiores, abra uma issue primeiro para discutir o que você gostaria de mudar.

---

**Desenvolvido com nostalgia e ❤️**  
*Lembrando dos bons tempos da internet dial-up! 📞*
