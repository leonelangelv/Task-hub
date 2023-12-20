import { Task } from './components/task';

const styles = {
  tasks: {
    style: 'mt-6',
    header: {
      style: `grid grid-flow-col grid-cols-[25%_35%_20%_15%] items-center gap-x-2
              h-10 px-4 bg-gray-800 rounded-3xl text-[0.7rem] 
              md:text-[1rem] md:h-14`,
      image: 'text-center'
    }
  }
};

export const Tasks = () => {
  return (
    <article className={styles.tasks.style}>
      <header className={styles.tasks.header.style}>
        <p>Titulo</p>
        <p>Descripción</p>
        <p className={styles.tasks.header.image}>Imagenes</p>
        <p className={styles.tasks.header.image}>Acciones</p>
      </header>

      <section>
        <Task />
      </section>
    </article>
  );
};
