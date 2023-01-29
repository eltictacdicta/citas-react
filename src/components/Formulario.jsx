const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
     <h2 className="font-black text-3xl text-center">Seguimeinto de pacientes</h2> 
     <p className="text-lg mt-5 text-center mb-10">
      Añade Pacientes y {' '}
      <span className=" text-indigo-600 font-bold">Adeministralos</span>
     </p>
     <form className=" bg-white shadow-md rounded-lg py-10 px-5">
      <div className="mb-5">
        <label htmlFor="mascota" className=" block text-gray-700 font-bold uppercase">Nombre de mascota</label>
        <input 
          id="mascota"
          type="text"
          placeholder="Nombre de la mascota"
          className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
        />
      </div>
      <div className="mb-5">
        <label htmlFor="propietario" className=" block text-gray-700 font-bold uppercase">Nombre del propietario</label>
        <input 
          id="propietario"
          type="text"
          placeholder="Nombre del propietario"
          className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className=" block text-gray-700 font-bold uppercase">Email</label>
        <input 
          id="email"
          type="email"
          placeholder="Email de contacto del propietario"
          className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
        />
      </div>
      <div className="mb-5">
        <label htmlFor="alta" className=" block text-gray-700 font-bold uppercase">Alta</label>
        <input 
          id="alta"
          type="date"
          className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
        />
      </div>
      <div className="mb-5">
        <label htmlFor="sintomas" className=" block text-gray-700 font-bold uppercase">Sintomas</label>
        <textarea 
        name="sintomas" 
        id="sintomas" 
        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
        placeholder="Describe los sintomas"
        >
          
        </textarea>
      </div>
     </form>
    </div>
  )
}

export default Formulario