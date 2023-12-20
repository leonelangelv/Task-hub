import { filter_icon, search_icon } from '../assets';

function App() {
  return (
    <section className='max-w-3xl mx-auto'>
      <main className='flex justify-between h-14'>
        <button className='w-48 h-14 bg-slate-300 text-black rounded-3xl'>
          Agregar tarea
        </button>

        <div className='flex border-solid border-2'>
          <input type='search' placeholder='Titulo de la tarea' />
          <button className='bg-blue-500'>
            <img src={search_icon('red')} alt='Icono para buscar tarea' />
          </button>
        </div>

        <button>
          <img src={filter_icon()} alt='Icono para filtrar tareas' />
        </button>
      </main>

      <article>
        <header>
          <p>Titulo</p>
          <p>Descripción</p>
          <p>Imagenes</p>
          <p>Acciones</p>
        </header>
      </article>
    </section>
  );
}

export default App;
