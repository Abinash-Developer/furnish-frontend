import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import Favouritecoll from "../components/home/Favouritecoll";
import Ceo from "../components/home/Ceo";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
    return (<>
        <Navbar />
        <Hero />
        <Favouritecoll />
        <Ceo />
        <Newsletter />
        <Footer />
    </>);
}
export default Home;