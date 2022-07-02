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
    </div>
  );
};

export default ListadoPacientesItem;