# NLW06NodeJS
Aplicação desenvolvida durante a NLW together de NodeJS em typescript

Sistema NLWValoriza

Aplicação que represneta um sistema de elogios de uma empresa, permitindo cadastro de usuários, elogios e atribuição desse a algum
usuários, listagem de elogios recebidos e enviados por  determinado indivíduo, listagem de todos os usuários cadastrados no sistema
e a listagem de todos os elogios já cadastrados no sistema.

- Tecnologias Utilizadas: - Typescript (Linguagem), 
                          - SQLite3 (Linguagem para trabalhar com o banco de dados),
                          - Yarn (Package manager),
                          - TypeORM (Para relacionar e mapear os objetos [POO com BD]),
                          - JWT (Para gerar os tokens para os usuários),
                          - Insomnia (Servindo como interface para chamar as rotas do backEnd),
                          - Beekeeper (Para acompanhar o preenchimento do BD). 



-  Caracteristicas e Implementação do projeto:

- Padrão de projeto com Entities, Service, Repositories e Controllers; 
- Sistema de autenticação por login com tokens, utilizando a JWT (JsonWebToken);
- Encriptografia das senhas dos usuários;
- Middlewares para aplicarem as regras de négocio (Exemplo: não permitir que determinado elogio fosse feito e recebido pelo mesmo usuário);
- Utilização de Migrations para criar as tabelas que representam as entidades no BD;
- Teste constante das Rotas para execução das funcionalidade por meio do Insomnia;
 
