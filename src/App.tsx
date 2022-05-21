import { Navbar, Hero, Banner, Footer, VotationList } from "./components";

function App() {

  return (
    <div className="App">
      <Navbar title="Rule of thumb." />
      <Hero />
      <div className="max-centered">
        <Banner
          type="top"
          hairline="Speak out. Be heard."
          title="Be counted"
          text="Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report."
          onClose={() => console.log('Closing banner')}
        />
        <main>
          <VotationList title="Previous Rulings" />
        </main>
        <Banner
          type="bottom"
          enableBackgroundImg
          title="Is there anyone else you would want us to add?"
          callToActionText="Submit a name"
          onClick={() => console.log('Submit banner')}
        />
        <hr role="separator" />
        <Footer />
      </div>
    </div>
  );
};

export default App
