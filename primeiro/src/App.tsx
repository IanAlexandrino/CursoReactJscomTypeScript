export default function App() {
  return (
    <div>
      <h1>Meu Projeto</h1>
      <Aluno nome="Ian Rodrigues" idade={22}/>
      <Aluno nome="Jorge Mendes" idade={34}/>
      <Aluno nome="Péricles Fronteira" idade={56}/>
    </div>
  )
}

interface AlunoProps{
  nome: string;
  idade: number;
}

function Aluno({nome, idade}: AlunoProps) {
  return (
  <div>
    <h1>Aluno: {nome}</h1>
    <h3>Idade: {idade}</h3>
  </div>
  )
}
