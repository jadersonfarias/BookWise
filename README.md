# BookWise  
**BookWise Preview**  
![Texto alternativo](https://raw.githubusercontent.com/jadersonfarias/Bookwise/main/public/projeto.png)
## Sobre o Projeto  
**BookWise** é uma aplicação web full-stack desenvolvida inteiramente por um único desenvolvedor (eu 👨‍💻), funcionando como uma rede social literária. Ela permite que os usuários interajam com livros, compartilhem resenhas e descubram novas leituras dentro de uma comunidade vibrante. A aplicação oferece uma experiência de usuário intuitiva, incluindo recomendações personalizadas, perfis de usuário e uma interface completa de exploração.

## Funcionalidades  
- **Descoberta de Livros**: Usuários podem explorar uma vasta coleção de livros, categorizados por gênero ou através de uma função de busca.  
- **Recomendações Populares**: A página inicial exibe recomendações com base nas últimas resenhas da comunidade.  
- **Perfis de Usuário**: Cada usuário possui um perfil onde pode acompanhar seu progresso de leitura, visualizar o histórico de resenhas e se conectar com outros usuários.  
- **Engajamento Comunitário**: A aplicação incentiva a interação ao destacar resenhas recentes, livros populares e tópicos em alta na comunidade.  

## Tecnologias Utilizadas  
- **Next.js 14**  
- **TypeScript**  
- **Prisma**  
- **PostgreSQL**  
- **vanilla-extract**  
- **Zod**  
- **radix-ui**
- **react-query**
- **Mais**: Confira o código para descobrir 😁  

---

## Acessando o Projeto  
Você pode usar o projeto tanto **online** quanto **localmente**.  

### **Online**  
- [Clique aqui para acessar o projeto](https://book-wise-red.vercel.app)  

### **Localmente** 
1. Clone este repositório  
   ```bash
   git clone https://github.com/jadersonfarias/BookWise
   
## Instalação e Configuração    

```bash
# Instalar dependências
npm install

# Configurar o banco de dados PostgreSQL e atualizar as chaves no arquivo .env

# PostgreSQL Keys
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# GitHub OAuth
GITHUB_ID=
GITHUB_SECRET=

# NextAuth Secret
NEXTAUTH_SECRET=

# Executar migrações do banco de dados
npx prisma migrate dev

# Iniciar o projeto
npm run dev
```
## Uso
Ao abrir o app, você encontrará a tela de login, onde pode escolher fazer login usando sua conta do GitHub ou Google. Se preferir, você pode entrar como convidado.

Nota: Usuários convidados têm acesso limitado às funcionalidades.

Após o login, você será redirecionado para a página inicial, onde poderá explorar resenhas recentes e livros populares. Utilize a seção Explorar para navegar por gêneros ou usar a função de busca para encontrar títulos específicos. Clique em qualquer livro no explorar para acessar mais detalhes, postar uma resenha e interagir com resenhas de outros usuários.

OBS: Projeto feito para desktop 


