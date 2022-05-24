import { Navbar, Hero, Banner, Footer, VotationList } from "./components";
import { useWebsite } from "./hooks";

function App() {
  const { title, bannerTop, bannerBottom } = useWebsite();
  
  return (
    <div className="App">
      <Navbar title={title} />
      <Hero />
      <div className="max-centered">
        <Banner
          type="top"
          hairline={bannerTop.hairline}
          title={bannerTop.title}
          text={bannerTop.text}
          onClose={() => console.log('Closing banner')}
        />
        <main>
          <VotationList title="Previous Rulings" />
        </main>
        <Banner
          type="bottom"
          enableBackgroundImg
          title={bannerBottom.title}
          callToActionText={bannerBottom.callToAction}
          onClick={() => console.log('Submit banner')}
        />
        <hr role="separator" />
        <Footer />
      </div>
    </div>
  );
};

export default App
