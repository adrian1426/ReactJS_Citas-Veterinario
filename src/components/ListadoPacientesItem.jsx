const ListadoPacientesItem = props => {
  const { paciente: { nombre, propietario, email, fecha, sintomas } } = props;

  return (
    <div className="mt-4 ml-2 px-4 py-4 bg-white shadow-md rounded-md">
      <p
        className="font-bold text-gray-700 uppercase mb-2"
      >
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p
        className="font-bold text-gray-700 uppercase mb-2"
      >
        Propietario: <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p
        className="font-bold text-gray-700 uppercase mb-2"
      >
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p
        className="font-bold text-gray-700 uppercase mb-2"
      >
        Fecha Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p
        className="font-bold text-gray-700 uppercase mb-2"
      >
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div>
        <button
          className="py-1 px-5 text-white font-bold bg-indigo-600 hover:bg-indigo-700 rounded-md"
        >
          Editar
        </button>

        <button
          className="py-1 px-5 ml-4 text-white font-bold bg-red-600 hover:bg-red-700 rounded-md"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ListadoPacientesItem;