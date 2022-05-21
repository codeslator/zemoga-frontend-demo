import { Navbar, Hero } from "./components";

function App() {

  return (
    <div className="App">
      <Navbar title="Rule of thumb." />
      <Hero />
      <div className=" bottom-[7rem] sm:bottom-[10rem] md:bottom-[9rem] lg:relative lg:bottom-0 w-full">
        <aside></aside>
        <main className="">Hello world</main>
        <aside></aside>
      </div>

    </div>
  );
};

export default App
