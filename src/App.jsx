import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Container from './components/template/Container';

function App() {
  return (
    <Container>
      <TaskInput />
      <TaskList />
    </Container>
  );
}

export default App;
