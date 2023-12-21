import { TaskBar } from '../components/task-bar';
import { Tasks } from '../components/tasks';

function App() {
  return (
    <section className='max-w-5xl h-[40rem] mt-10 px-2'>
      <TaskBar />

      <Tasks />
    </section>
  );
}

export default App;
