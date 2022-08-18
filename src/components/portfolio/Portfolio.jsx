import React from "react";
import "./portfolio.css";
import IMG1 from "../../assests/portfolio1.jpg";
import IMG2 from "../../assests/portfolio2.jpg";
import IMG3 from "../../assests/portfolio3.jpg";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio examples for inspiration",
    github: "https://github.com/UsmanAsif166",
    demo: "https://usman-asif-portfolio.herokuapp.com/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Have a passion for news?",
    github: "https://github.com/UsmanAsif166",
    demo: "https://github.com/UsmanAsif166/NewsApp"
  },
  {
    id: 3,
    image: IMG3,
    title: "Banking Landing Page",
    github: "https://github.com/UsmanAsif166",
    demo: "https://github.com/UsmanAsif166/Bank-Landing-Page"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">{
        data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta"><a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank" rel="noreferrer"
                >
                  Live Demo
                </a></div>
            </article>
          )
        })
      }



      </div>
    </section>
  );
};
export default Portfolio;
