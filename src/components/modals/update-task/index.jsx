import { useContext, useState } from 'react';
import { TaskContext } from '../../../context/TaskContext';
import PropTypes from 'prop-types';
import { image_icon, more_icon, xmark_icon } from '../../../assets';
import useForm from '../../../hooks/useForm';

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
        bg_image: `w-[90%] flex justify-center gap-2 absolute opacity-20`,
        label_add_image_bg: `absolute w-full h-full rounded-2xl`,
        more_icon: `z-50`,
        label: `w-[70%] text-center z-50 relative`
      },
      button:
        'w-[14rem] p-2 border border-gray-300 rounded-2xl bg-gray-800 self-center hover:opacity-80'
    }
  }
};

import cssStyles from '../styles/AddTask.module.css';

export const UpdateTask = ({ closeModal, task }) => {
  const { updateTask } = useContext(TaskContext);

  const [animationModal, setAnimationModal] = useState(cssStyles['open-modal']);

  const [images, setImages] = useState(task.images);

  const [isDragOver, setIsDragOver] = useState(false);

  const handleCloseModal = () => {
    setAnimationModal(cssStyles['close-modal']);
    setTimeout(() => {
      closeModal();
    }, 450);
  };

  const processImageFile = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (images.length === 2) {
        setImages([images[1], reader.result]);
      } else {
        setImages([...images, reader.result]);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImages(images);
    }
  };

  const handleInputFile = (e) => {
    const file = e.target.files[0];
    processImageFile(file);
  };

  const handleDropFile = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    processImageFile(file);
  };

  const { values, handleChange, handleSubmit } = useForm({
    initialValues: task,
    onSubmit: (value) => {
      let finalValue = {
        ...value,
        images
      };

      updateTask(task.id, finalValue);
    }
  });

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

        <form className={twStyles.add_task.modal.form} onSubmit={handleSubmit}>
          <input
            name='title'
            id='title'
            type='text'
            value={values.title}
            className={twStyles.add_task.modal.input}
            placeholder='Titulo de la tarea'
            onChange={handleChange}
          />
          <textarea
            name='description'
            id='description'
            value={values.description}
            className={twStyles.add_task.modal.textarea}
            placeholder='Descripción de la tarea'
            onChange={handleChange}
          />
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDropFile}
            className={`${twStyles.add_task.modal.image_box.style} ${
              isDragOver && 'bg-gray-700'
            }`}
          >
            <div className={twStyles.add_task.modal.image_box.bg_image}>
              {images.length > 0 ? (
                images.map((image, index) => (
                  <img src={image} key={index} className='h-32 ' />
                ))
              ) : (
                <img src={image_icon('#C2DFE3')} />
              )}
            </div>

            <label
              htmlFor='images'
              className={twStyles.add_task.modal.image_box.label_add_image_bg}
            ></label>

            <img
              src={more_icon('white')}
              alt='More icon for adding images'
              className={twStyles.add_task.modal.image_box.more_icon}
            />

            <label
              htmlFor='images'
              className={twStyles.add_task.modal.image_box.label}
            >
              Arrastre o presione para actualizar imagen (solo 2)
            </label>
            <input
              type='file'
              accept='image/*'
              name='images'
              id='images'
              style={{ display: 'none' }}
              onChange={handleInputFile}
            />
          </div>

          <button
            className={twStyles.add_task.modal.button}
            type='submit'
            onClick={handleCloseModal}
          >
            Guardar tarea
          </button>
        </form>
      </div>
    </section>
  );
};

UpdateTask.propTypes = {
  closeModal: PropTypes.func,
  task: PropTypes.object
};
