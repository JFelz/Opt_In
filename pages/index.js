import EmailInputField from '../components/EmailField';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <section className="dual_scrn">
        <div id="west">
          <h1>West</h1>
          <EmailInputField />
        </div>
        <div id="east">
          <h1>East</h1>
        </div>
      </section>
    </>
  );
}

export default Home;
