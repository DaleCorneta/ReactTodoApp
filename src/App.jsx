import Header from './components/Header';
import Todo from './components/Todo';
import './App.css';
// import InlineComponent from './components/InlineComponent';
// import OutlineComponent from './components/OutlineComponent';
export default function app(){
  return (
    <div>
      <Header/>
      <Todo />
      {/* <InlineComponent/>
      <OutlineComponent/> */}
    </div>
  )
}

