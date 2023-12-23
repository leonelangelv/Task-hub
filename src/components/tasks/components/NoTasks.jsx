import { noTasks_image } from '../../../assets';

export const NoTasks = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <img
        src={noTasks_image}
        alt='No tasks'
        className='w-[15rem] md:w-[20rem] translate-x-[2.15rem] py-6'
      />
    </div>
  );
};
