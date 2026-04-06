import Hero from "../components/about/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mission from "../components/about/Mission";
import Values from "../components/about/Values";
import Team from "../components/about/Team";
const About = ()=>{
    return(<>
        <Navbar/>
        <Hero/>
        <Mission/>
        <Values/>
        <Team/>
        <Footer/>
    </>);
}
export default About;