Date Difference Calculator

Uma biblioteca leve e prática para calcular a diferença de tempo exata entre o momento atual e uma data futura. Ideal para criar contagens regressivas (countdowns), verificar prazos ou calcular tempo restante em dias, horas, minutos e segundos.

📋 Índice

Instalação
Como Usar
Funcionalidades
API
Tratamento de Erros
Autor
Licença
🚀 Instalação

Para instalar este pacote no seu projeto, execute o seguinte comando no terminal:

npm install date-difference-calculator

💻 Como Usar
A biblioteca exporta uma função principal chamada calculateTimeDifference. Você deve importar a função e passar a data alvo (futura) como argumento.

Aqui está um exemplo básico de como implementar:

JavaScript
const { calculateTimeDifference } = require('date-difference-calculator');

// Defina uma data futura (Ex: Ano Novo de 2026)
// Recomendamos passar um objeto Date ou um timestamp
const targetDate = new Date('2026-01-01T00:00:00');

try {
    const timeRemaining = calculateTimeDifference(targetDate);
    
    // Verifica se houve erro de data no passado
    if (timeRemaining.error) {
        console.log("Atenção:", timeRemaining.error);
    } else {
        console.log(`Faltam: 
        ${timeRemaining.days} dias, 
        ${timeRemaining.hours} horas, 
        ${timeRemaining.minutes} minutos e 
        ${timeRemaining.seconds} segundos.`);
    }
} catch (err) {
    console.error("Erro na data:", err.message);
}
✨ Funcionalidades
Cálculo Preciso: Retorna a diferença quebrada em dias, horas, minutos e segundos.

Validação de Data: Verifica se a data fornecida é válida.

Verificação de Passado: Identifica se a data alvo já passou e retorna uma mensagem amigável ao invés de números negativos.

📚 API
calculateTimeDifference(targetDate)

Calcula o tempo restante até a targetDate.

Parâmetros

Parâmetro	Tipo	Descrição
targetDate	Date	Number
Retorno

Retorna um Objeto contendo os seguintes campos:

JavaScript
{
  days: number,    // Dias restantes
  hours: number,   // Horas restantes (0-23)
  minutes: number, // Minutos restantes (0-59)
  seconds: number  // Segundos restantes (0-59)
}
Caso a data seja no passado, o retorno será:

JavaScript
{
  error: 'Date provided is in the past'
}
⚠️ Tratamento de Erros
A função lançará um erro (throw Error) se o formato da data for inválido (por exemplo, algo que não seja uma data ou número). Recomenda-se envolver a chamada da função em um bloco try...catch ou garantir que o input seja um objeto Date válido.

👤 Autor
Rafael Victor

Sinta-se à vontade para contribuir ou reportar problemas!

📄 Licença
Este projeto está sob a licença ISC.


---

### 💡 Dica Técnica (Opcional)

Notei um detalhe interessante no seu código no arquivo `index.js`:

```javascript
if (isNaN(targetDate)){
    throw new Error("Invalid date format");
}
A função isNaN funciona bem para números e objetos Date, mas se o usuário tentar passar uma string diretamente (ex: "2025-12-25"), o isNaN retornará true e vai dar erro, mesmo a string sendo uma data válida.

Sugestão de melhoria para a versão 1.0.1: Se você quiser aceitar strings diretamente no futuro, você pode ajustar a validação para verificar a data depois de convertê-la:

JavaScript
// Exemplo de ajuste:
const futureDate = new Date(targetDate);

// Valida se a data criada é válida (Date inválido vira "Invalid Date", que é NaN em valor numérico)
if (isNaN(futureDate.getTime())) { 
    throw new Error("Invalid date format");
}
