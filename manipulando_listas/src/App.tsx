import { useState } from 'react'



export default function App(){

  const [tasks, setTasks] = useState([
    'Estudar react com typescript',
    'Comprar pão meio dia',
    'Estudar inglês a noite'
  ])

  return(
    <div>
      <h1>
        Lista de tarefas
      </h1>
      <hr/>
      {tasks.map( (item, index) => (
        <section>
          <span>{item}</span>
        </section>
      ) )}
    </div>
  )
}
