import { useState } from 'react';
import PropTypes from 'prop-types';
import { image_icon, more_icon, xmark_icon } from '../../../assets';

const twStyles = {
  add_task: {
    style: `w-full h-full fixed top-0 left-0 z-50 bg-black/50 
            flex justify-center items-center`,
    modal: {
      style: 'w-[23rem] md:w-[34rem] relative bg-slate-300 p-4 rounded-lg',
      close_button: {
        style:
          'bg-red-500 p-3 rounded-full absolute -top-4 -right-4 hover:cursor-pointer',
        icon: 'h-4'
      },
      form: 'flex flex-col gap-2',
      input:
        'p-2 border border-gray-300 rounded-2xl outline-none focus:outline-2 focus:outline-gray-800 bg-gray-800 placeholder:text-white',
      textarea:
        'h-[11rem] p-2 border border-gray-300 rounded-2xl outline-none focus:outline-2 focus:outline-gray-800 resize-none bg-gray-800 placeholder:text-white',
      image_box: {
        style: `h-[11rem] relative flex flex-col justify-center items-center border 
      bg-gray-800 rounded-2xl hover:bg-gray-700`,
        bg_image: `absolute opacity-20`,
        label_add_image_bg: `absolute w-full h-full rounded-2xl`,
        more_icon: `z-50`,
        label: `z-50 relative `
      },
      button:
        'w-[14rem] p-2 border border-gray-300 rounded-2xl bg-gray-800 self-center hover:opacity-80'
    }
  }
};

import cssStyles from './AddTask.module.css';

export const AddTask = ({ closeModal }) => {
  const [animationModal, setAnimationModal] = useState(cssStyles['open-modal']);

  const handleCloseModal = () => {
    setAnimationModal(cssStyles['close-modal']);
    setTimeout(() => {
      closeModal();
    }, 450);
  };

  return (
    <section className={twStyles.add_task.style} onClick={handleCloseModal}>
      <div
        className={`${twStyles.add_task.modal.style} ${animationModal}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className={twStyles.add_task.modal.close_button.style}
          onClick={handleCloseModal}
        >
          <img
            src={xmark_icon('white')}
            alt='Xmark icon for closing the modal'
            className={twStyles.add_task.modal.close_button.icon}
          />
        </button>

        <form className={twStyles.add_task.modal.form}>
          <input
            name='title'
            id='title'
            type='text'
            className={twStyles.add_task.modal.input}
            placeholder='Titulo de la tarea'
          />
          <textarea
            name='description'
            id='description'
            className={twStyles.add_task.modal.textarea}
            placeholder='Descripción de la tarea'
          />
          <div className={twStyles.add_task.modal.image_box.style}>
            <img
              src={image_icon('#C2DFE3')}
              className={twStyles.add_task.modal.image_box.bg_image}
            />
            <label
              htmlFor='image'
              className={twStyles.add_task.modal.image_box.label_add_image_bg}
            ></label>
            <img
              src={more_icon('white')}
              alt='More icon for adding images'
              className={twStyles.add_task.modal.image_box.more_icon}
            />
            <label
              htmlFor='image'
              className={twStyles.add_task.modal.image_box.label}
            >
              Arrastre o presione para agregar imagen
            </label>
            <input
              type='file'
              name='image'
              id='image'
              style={{ display: 'none' }}
            />
          </div>

          <button className={twStyles.add_task.modal.button} type='submit'>
            Añadir tarea
          </button>
        </form>
      </div>
    </section>
  );
};

AddTask.propTypes = {
  closeModal: PropTypes.func
};
