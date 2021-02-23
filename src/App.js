import './App.css';
import ImageComponent from './components/ImgComponent';
import MyComponent from './components/MyComponent';

function App() {
  let code = "404";
  return (
    <section className="App">
      <h1>Min första React-applikation</h1>
      <MyComponent name="Maja" age="26" />
      <ImageComponent code={code} />
    </section>
  );
}

export default App;
