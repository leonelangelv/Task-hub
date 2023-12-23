import { useContext } from 'react';
import { Task } from './components/task';
import { TaskContext } from '../../context/TaskContext';
import { NoTasks } from './components/NoTasks';

const styles = {
  tasks: {
    style: 'mt-6 w-[90vw] md:max-w-[64rem]',
    header: {
      style: `grid grid-flow-col grid-cols-[25%_35%_20%_15%] items-center gap-x-2
              h-10 px-4 bg-gray-800 rounded-3xl text-[0.7rem] 
              md:text-[1rem] md:h-14`,
      image: 'text-center'
    }
  }
};

export const Tasks = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <article className={styles.tasks.style}>
      <header className={styles.tasks.header.style}>
        <p>Titulo</p>
        <p>Descripción</p>
        <p className={styles.tasks.header.image}>Imagenes</p>
        <p className={styles.tasks.header.image}>Acciones</p>
      </header>

      <section>
        {tasks.length > 0 ? (
          tasks.map((task) => <Task task={task} key={task.id} />)
        ) : (
          <NoTasks />
        )}
      </section>
    </article>
  );
};
