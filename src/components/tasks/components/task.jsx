import {
  checkmark_icon,
  pen_icon,
  trash_icon,
  xmark_icon
} from '../../../assets';

const styles = {
  task_container: {
    style: `grid grid-flow-col grid-cols-[25%_35%_20%_15%] gap-x-2 py-3
            mt-2 h-10 px-4 bg-gray-800 rounded-3xl text-[0.7rem] relative
            md:text-[1rem] md:h-14`,
    view_task: 'absolute bg-transparent w-3/4 h-full hover:cursor-pointer',
    title: 'truncate',
    description: 'truncate',
    hasImage: 'flex justify-center h-4 md:h-6',
    actions: {
      style: 'flex justify-around',
      icons: 'h-4 md:h-6'
    }
  }
};

export const Task = () => {
  return (
    <article className={styles.task_container.style}>
      <div className={styles.task_container.view_task}></div>
      <h2 className={styles.task_container.title}>Titulo de la tarea</h2>
      <p className={styles.task_container.description}>
        Descripción de la tarea, esto es solo para rrelleno deaaa que se pasaba
        ya no sabe lo que dice este tipo bueeee que le pasaba noooooo que decia
      </p>
      <div className={styles.task_container.hasImage}>
        <img
          src={checkmark_icon('#00C136')}
          alt='Checkmark icon for the tasks whit images'
        />
      </div>
      <div className={styles.task_container.actions.style}>
        <button>
          <img
            src={pen_icon('#C2DFE3')}
            alt='Pencil icon for editing the tasks'
            className={styles.task_container.actions.icons}
          />
        </button>
        <button>
          <img
            src={trash_icon('#FF0000')}
            alt='Trash icon for deleting the tasks'
            className={styles.task_container.actions.icons}
          />
        </button>
      </div>
    </article>
  );
};
