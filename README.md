# 🥗 Dieta.IA


Dieta.IA é um sistema inteligente que gera listas personalizadas de refeições com base nas características do usuário. Utilizando Node.js para o backend e integrando o Gemini AI, o sistema retorna um plano alimentar otimizado com refeições detalhadas e sugestões de suplementos. O front-end será desenvolvido com ReactJS.

# 🚀 Tecnologias

- Backend: Node.js, Express
- IA: Gemini AI
- Banco de Dados: (Definir: MongoDB, PostgreSQL, etc.)
- Front-end: (Em desenvolvimento com ReactJS)

# 🔧 Funcionalidades

[ x ] API que recebe parâmetros do usuário (nome, idade, gênero, peso, altura, objetivo e nível).
[ x ] Integração com Gemini AI para gerar listas de refeições personalizadas.
[ x ] Retorno detalhado com refeições, horários e suplementos recomendados.
[ ] Desenvolvimento do front-end em React native com ExpoGo.

# 📦 Instalação

1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/dieta.ia.git
cd dieta.ia
```

2️⃣ Instale as dependências

```bash
npm install
```

3️⃣ Configure as variáveis de ambiente

```bash
# Crie um arquivo .env na raiz do projeto e adicione:
GEMINI_API_KEY=your_api_key_here
```

4️⃣ Execute o servidor

```bash
npm start
```

O backend estará rodando em http://localhost:3000.

# 📡 Endpoints Principais
| Método | Rota | Descrição |
| --- | --- | --- |
| ```POST``` | ```/api/create``` |	Recebe dados do usuário e retorna sugestões de refeições |

# Exemplo de Requisição

```json
{
  "nome": "Gabriel",
  "idade": 23,
  "genero": "masculino",
  "peso": 80,
  "altura": 1.97,
  "objetivo": "Hipertrofia",
  "nivel": "intermediário"
}
```

```json
Exemplo de Resposta

{
  "data": {
    "nome": "Gabriel",
    "sexo": "Masculino",
    "idade": 23,
    "altura": 1.97,
    "peso": 80,
    "objetivo": "Hipertrofia",
    "refeicoes": [
      {
        "horario": "7:00",
        "nome": "Café da manhã",
        "alimentos": [
          "3 ovos inteiros",
          "2 fatias de pão integral",
          "1 colher de sopa de pasta de amendoim",
          "1 banana média",
          "200ml de leite desnatado"
        ]
      },
      {
        "horario": "10:00",
        "nome": "Lanche da manhã",
        "alimentos": [
          "1 copo de iogurte desnatado",
          "1/2 xícara de frutas vermelhas"
        ]
      },
      {
        "horario": "13:00",
        "nome": "Almoço",
        "alimentos": [
          "150g de frango grelhado",
          "1 xícara de arroz integral",
          "1 xícara de salada verde",
          "1 colher de sopa de azeite de oliva"
        ]
      },
      {
        "horario": "16:00",
        "nome": "Lanche da tarde",
        "alimentos": [
          "1 scoop de whey protein",
          "1 fruta (maçã ou pera)"
        ]
      },
      {
        "horario": "19:00",
        "nome": "Jantar",
        "alimentos": [
          "150g de carne vermelha magra",
          "1 xícara de batata doce",
          "1 xícara de brócolis"
        ]
      },
      {
        "horario": "21:00",
        "nome": "Lanche antes de dormir",
        "alimentos": [
          "Caseína 30g"
        ]
      }
    ],
    "suplementos": [
      "Whey protein",
      "Creatina",
      "BCAA",
      "Ômega 3"
    ]
  }
}
```

# 📌 Próximos Passos

- [ ] Criar um banco de dados para armazenar histórico de usuários.
- [ ] Desenvolver o front-end com ReactJS.
- [ ] Melhorar a personalização das recomendações com machine learning.
- [ ] Implementar autenticação de usuários.

# 🤝 Contribuição

Sinta-se à vontade para abrir issues e pull requests!


# 📝 Licença

Este projeto está sob a licença MIT.