import { filter_icon, search_icon } from '../../assets';

const styles = {
  task_bar: {
    style: 'flex justify-between h-14',
    button_add: 'w-48 h-14 bg-slate-300 text-black rounded-3xl',
    search: {
      style: 'flex rounded-3xl',
      input:
        'rounded-tl-3xl rounded-bl-3xl bg-slate-300 placeholder:text-black px-7',
      button:
        'bg-gray-800 w-16 h-14 flex justify-center items-center rounded-tr-3xl rounded-br-3xl'
    },
    button_filter:
      'bg-gray-800 w-[76.85px] rounded-3xl flex justify-center items-center'
  }
};

export const TaskBar = () => {
  return (
    <header className={`${styles.task_bar.style}`}>
      <button className={`${styles.task_bar.button_add}`}>
        Agregar tarea
      </button>

      <div className={`${styles.task_bar.search.style}`}>
        <input
          type='search'
          placeholder='Titulo de la tarea'
          className={`${styles.task_bar.search.input}`}
        />
        <button className={`${styles.task_bar.search.button}`}>
          <img src={search_icon('white')} alt='Icono para buscar tarea' />
        </button>
      </div>

      <button className={`${styles.task_bar.button_filter}`}>
        <img src={filter_icon('white')} alt='Icono para filtrar tareas' />
      </button>
    </header>
  );
};
