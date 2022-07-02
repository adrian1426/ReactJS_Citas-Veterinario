import { useState, useEffect } from 'react';
import { uniqueID } from '../helpers';
import ErrorMessage from './ErrorMessage';

const Formulario = (props) => {
  const { setPacientes, pacienteEdit, setPacienteEdit } = props;
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [errorForm, setErrorForm] = useState(false);

  const resetForm = () => {
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
    setErrorForm('');

    setPacienteEdit({});
  };

  const fillOutForm = () => {
    const { nombre, propietario, email, fecha, sintomas } = pacienteEdit;
    setNombre(nombre);
    setPropietario(propietario);
    setEmail(email);
    setFecha(fecha);
    setSintomas(sintomas);
  };

  const isEditActive = Object.entries(pacienteEdit).length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (![nombre, propietario, email, fecha, sintomas].includes('')) {
      const paciente = {
        id: uniqueID(),
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      };

      setPacientes(pacientes => {
        if (!isEditActive) {
          return [paciente, ...pacientes];
        } else {
          return pacientes.map(p => {
            if (p.id === pacienteEdit.id) {
              return {
                ...paciente,
                id: p.id
              }
            } else {
              return p;
            }
          });
        }
      });

      setErrorForm(false);
      resetForm();
    } else {
      setErrorForm(true);
    }
  };

  useEffect(() => {
    if (isEditActive) {
      fillOutForm();
    }
  }, [pacienteEdit]);

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-2xl text-center">Seguimiento de pacientes</h2>
      <p className="text-lg text-center mt-2 mb-5">
        Añade pacientes y <span className="text-indigo-600 font-bold">adminístralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md py-5 px-5 mb-4"
      >
        {errorForm && <ErrorMessage>Todos los campos son requeridos</ErrorMessage>}
        <div className="mb-3">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota
          </label>
          <input
            id="mascota"
            type='text'
            className="border-2 w-full p-1 rounded-md"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre propietario
          </label>
          <input
            id="propietario"
            type='text'
            className="border-2 w-full p-1 rounded-md"
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type='text'
            className="border-2 w-full p-1 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha alta
          </label>
          <input
            id="alta"
            type='date'
            className="border-2 w-full p-1 rounded-md"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-1 rounded-md"
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value={!isEditActive ? 'Registrar' : 'Editar'}
          className="bg-indigo-600 w-full p-2 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Formulario;