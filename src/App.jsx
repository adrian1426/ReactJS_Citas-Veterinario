import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [pacienteEdit, setPacienteEdit] = useState({});

  useEffect(() => {
    const pacientesLocal = JSON.parse(localStorage.getItem('pacientes'));
    pacientesLocal?.length > 0 && setPacientes(pacientesLocal);
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

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
          setPacientes={setPacientes}
        />
      </div>
    </div>
  )
}

export default App
