import { search_icon } from '../../assets';
import { useModal } from '../../hooks/useModal';
import { AddTask } from '../modals/add-task';

const styles = {
  task_bar: {
    style: `flex flex-col items-center gap-5
            md:flex-row md:justify-between 
            text-[.8rem] md:text-[1rem]`,
    button_add: 'w-48 h-10 md:h-14 bg-slate-300 text-black rounded-3xl',
    search: {
      style: 'flex rounded-3xl h-10 md:h-14',
      input:
        'rounded-tl-3xl rounded-bl-3xl bg-slate-300 placeholder:text-black px-7 outline-none',
      button:
        'bg-gray-800 w-16 flex justify-center items-center rounded-tr-3xl rounded-br-3xl'
    }
  }
};

export const TaskBar = () => {
  const [isOpenAddTaskModal, openAddTaskModal, closeAddTaskModal] =
    useModal(false);

  return (
    <header className={`${styles.task_bar.style}`}>
      {isOpenAddTaskModal && (
        <AddTask
          isOpenModal={isOpenAddTaskModal}
          closeModal={closeAddTaskModal}
        />
      )}
      <button
        className={`${styles.task_bar.button_add}`}
        onClick={openAddTaskModal}
      >
        Agregar tarea
      </button>

      <div className={`${styles.task_bar.search.style}`}>
        <input
          type='search'
          placeholder='Titulo de la tarea'
          className={`${styles.task_bar.search.input}`}
        />
        <button className={`${styles.task_bar.search.button}`}>
          <img
            src={search_icon('white')}
            alt='Icono para buscar tarea'
            className='h-6 md:h-8'
          />
        </button>
      </div>
    </header>
  );
};
