import './AboutSection.css';

function AboutSection() {
    return(
        <div className='about-wrapper'>
            <section className='about-container'>
                <div className='about-content'>
                    <h1 className='about-title'>Little Lemon</h1>
                    <p>Chicago</p>
                    <p>Founded in 2010 by the Rossi family, Little Lemon brings authentic Mediterranean flavors to the heart of Chicago.
                        What started as a small family-run eatery has grown into a beloved neighborhood institution, known for our
                        handmade pastas, fresh seafood, and warm hospitality. Our recipes are passed down through generations,
                        combining traditional techniques with locally-sourced ingredients.
                        <br/><br/>
                        At Little Lemon, we believe great food brings people together. Every dish is crafted with care,
                        from our signature truffle pasta to our herb-crusted salmon. We're proud to be a gathering place
                        where families celebrate, friends reconnect, and food lovers discover new favorites.</p>
                </div>
                <div className='about-image'>
                    <img
                        src="https://images.unsplash.com/photo-1542216765-7b2793f379a9?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="The Lemoni Family, owners of Little Lemon"
                    />
                </div>
            </section>
        </div>
    )
}

export default AboutSection;

