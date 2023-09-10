import { Header } from './components/header';
import {Aluno} from './components/aluno';
import {Footer} from './components/footer';

export default function App() {
  return (
    <div>
      <Header title="Malucos beleza"/>
      <Aluno nome="Ian Rodrigues" idade={22}/>
      <Aluno nome="Jorge Mendes" idade={34}/>
      <Aluno nome="Péricles Fronteira" idade={56}/>
      <Footer/>
    </div>
  )
}


