import './App.css'
import Button from './components/Button/Button'
import Title from './components/Title/Title'
import Paragraph from './components/Paragraph/Paragraph';

function App() {
 
  return (
    <>
      <Title title='Поиск'/>
      <Paragraph 
      font='info-text'
      innerText='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.' />
      <Button buttonText='Искать'/>
    </>
  )
};

export default App