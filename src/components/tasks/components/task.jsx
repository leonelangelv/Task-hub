import { PropTypes } from 'prop-types';
import {
  checkmark_icon,
  pen_icon,
  trash_icon,
  xmark_icon
} from '../../../assets';
import { useContext } from 'react';
import { TaskContext } from '../../../context/TaskContext';
import { useModal } from '../../../hooks/useModal';
import { UpdateTask } from '../../modals/update-task';

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

export const Task = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  const handleDeleteTask = (id) => {
    const deleteConfirm = confirm('¿Desea eliminar esta tarea?');
    if (deleteConfirm) {
      deleteTask(id);
    }
  };

  const [isOpenUpdateTaskModal, openUpdateTaskModal, closeUpdateTaskModal] =
    useModal(false);

  return (
    <article className={styles.task_container.style}>
      {isOpenUpdateTaskModal && (
        <UpdateTask closeModal={closeUpdateTaskModal} task={task} />
      )}

      <div className={styles.task_container.view_task}></div>

      <h2 className={styles.task_container.title}>{task.title}</h2>

      <p className={styles.task_container.description}>{task.description}</p>

      <div className={styles.task_container.hasImage}>
        <img
          src={
            task.images.length > 0
              ? checkmark_icon('#00C136')
              : xmark_icon('#FF0000')
          }
          alt='Checkmark icon for the tasks whit images'
        />
      </div>

      <div className={styles.task_container.actions.style}>
        <button onClick={openUpdateTaskModal}>
          <img
            src={pen_icon('#C2DFE3')}
            alt='Pencil icon for editing the tasks'
            className={styles.task_container.actions.icons}
          />
        </button>

        <button onClick={() => handleDeleteTask(task.id)}>
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

Task.propTypes = {
  task: PropTypes.object
};
