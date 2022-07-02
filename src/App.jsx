import { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [pacienteEdit, setPacienteEdit] = useState({});

  return (
    <div className='container mx-auto mt-5'>
      <Header />
      <div className='mt-4 md:flex'>
        <Formulario
          setPacientes={setPacientes}
          pacienteEdit={pacienteEdit}
          setPacienteEdit={setPacienteEdit}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPacienteEdit={setPacienteEdit}
        />
      </div>
    </div>
  )
}

export default App
