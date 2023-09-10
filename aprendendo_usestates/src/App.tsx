import {useState} from 'react'

export default function App(){
  const [input, setInput] = useState("")
  const [idade, setIdade] = useState("Nenhuma idade inserida");
  const [aluno, setAluno] = useState("Sem nenhum nome");

  function mostrarAluno(){
    setAluno(input);
    setIdade(idade);
  }



  return(
    <div>
      <h1>Conhecendo useState</h1>
      <input placeholder="Digite o nome"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <br/><br/>
      <input placeholder="Digite a idade"
      value={idade}
      onChange={(e) => setIdade(e.target.value)}
      />
      <br/><br/>
      <button onClick={mostrarAluno}>Mostrar aluno</button>
      <hr/>
      <h3>Bem vindo: {aluno}, {idade} </h3>
    </div>
  )
}