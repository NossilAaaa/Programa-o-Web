import React, { useState } from 'react';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (peso && altura) {
      const alturaEmMetros = parseFloat(altura);
      const pesoEmKg = parseFloat(peso);
      const imcCalculado = pesoEmKg / (alturaEmMetros * alturaEmMetros);
      setImc(imcCalculado.toFixed(2));

      if (imcCalculado < 18.5) {
        setClassificacao('Magreza (Grau 0)');
      } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
        setClassificacao('Normal (Grau 0)');
      } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
        setClassificacao('Sobrepeso (Grau I)');
      } else if (imcCalculado >= 30 && imcCalculado <= 39.9) {
        setClassificacao('Obesidade (Grau II)');
      } else if (imcCalculado >= 40) {
        setClassificacao('Obesidade Grave (Grau III)');
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Calculadora de IMC</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
          />
        </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Altura (metros):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 1.75"
            step="0.01"
          />
        </label>
      </div>

      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc && (
        <div style={{ marginTop: '20px' }}>
          <h2>Seu IMC: {imc}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
