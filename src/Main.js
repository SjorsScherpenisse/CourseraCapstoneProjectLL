import './App.css';
import './Main.css';
import HeroSection from './HeroSection.js';
import HighlightSection from './HighlightSection.js';
import TestimonialSection from './TestimonialSection.js';
import AboutSection from './AboutSection.js';



function Main() {
    return (
        <main className='main-container'>
            <HeroSection/>
            <HighlightSection/>
            <TestimonialSection/>
            <AboutSection/>
        </main>
    )
}
export default Main;