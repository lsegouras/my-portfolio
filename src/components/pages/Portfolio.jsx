import React from 'react'

const Portfolio = () => {
  return (
    <section className="portfolio">
        <h5>Conheça</h5>
        <h2>Meu Portfolio</h2>

        <div className="portfolio-container">
            <article className="portfolio-item">
                <div className="portfolio-items"></div>
                <h3>Portfolio Title</h3>
                <a href="https://github.com" className="portfolio-link">Github</a>
                <a href="http://drible.com/Aliens_pixels" className="portfolio-link">Demo</a>


            </article>
        </div>

    </section>
  )
}

export default Portfolio