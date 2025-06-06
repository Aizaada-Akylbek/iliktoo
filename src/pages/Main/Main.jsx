import MainBG from "../../components/MainBG/MainBG.jsx";
import About from "../../components/About/About.jsx";
import Blog from "../../components/Blog/Blog.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import FirstVisit from "../../components/FirstVisit/FirstVisit.jsx";
import License from "../../components/License/License.jsx";
import Map from "../../components/Map/Map.jsx";
import Safety from "../../components/Safety/Safety.jsx";
function Main() {
  return (
    <>
      <main>
        <MainBG />
        <About />
        <License />
        <FirstVisit />
        <Safety />
        <FAQ />
        <Blog />
        <Map />
      </main>
    </>
  );
}

export default Main;
