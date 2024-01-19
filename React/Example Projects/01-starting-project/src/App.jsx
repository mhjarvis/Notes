import reactImg from './assets/react-core-concepts.png';

const reactDescriptions = ['Funamental', 'Cruicial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const description = reactDescriptions[genRandomInt(3)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>PoopReact Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
