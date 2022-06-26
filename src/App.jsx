import { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className='container mx-auto mt-5'>
      <Header />
      <div className='mt-4 md:flex'>
        <Formulario
          setPacientes={setPacientes}
        />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
