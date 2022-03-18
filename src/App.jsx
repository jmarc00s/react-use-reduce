import TaskInput from './components/TaskInput';
import Container from './components/template/Container';
import { TaskProvider } from './core/context/TaskContext';
import useTasks from './core/hooks/useTasks';

function App() {
  const {
    state: { tasks },
  } = useTasks();

  return (
    <Container>
      <TaskInput />
    </Container>
  );
}

export default App;
