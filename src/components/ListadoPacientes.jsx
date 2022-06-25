import ListadoPacientesItem from "./ListadoPacientesItem";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-2xl text-center">Lista de pacientes</h2>
      <p className="text-lg text-center mt-2 mb-5">
        Administra tus <span className="text-indigo-600 font-bold"> pacientes y citas</span>
      </p>

      <ListadoPacientesItem />
      <ListadoPacientesItem />
      <ListadoPacientesItem />
      <ListadoPacientesItem />
    </div>
  );
};

export default ListadoPacientes;