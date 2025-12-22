import './AboutSection.css';

function AboutSection() {
    return(
        <div className='about-wrapper'>
            <section className='about-container'>
                <div className='about-content'>
                    <h1 className='about-title'>Little Lemon</h1>
                    <p>Chicago</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.

                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.</p>
                </div>
                <div className='about-image'>
                    <img
                        src="littlelemon.png"
                        alt="Little Lemon Logo"
                    />
                </div>
            </section>
        </div>
    )
}

export default AboutSection;

