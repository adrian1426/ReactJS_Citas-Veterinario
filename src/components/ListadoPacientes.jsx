import ListadoPacientesItem from "./ListadoPacientesItem";

const ListadoPacientes = (props) => {
  const { pacientes } = props;

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-2xl text-center">Lista de pacientes</h2>
      <p className="text-lg text-center mt-2 mb-5">
        Administra tus <span className="text-indigo-600 font-bold"> pacientes y citas</span>
      </p>

      {pacientes.map((paciente, i) => {
        return (
          <ListadoPacientesItem
            key={paciente.id}
            paciente={paciente}
          />
        )
      })}
    </div>
  );
};

export default ListadoPacientes;