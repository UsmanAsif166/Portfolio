import React from "react";
import "./portfolio.css";
import IMG1 from "../../assests/portfolio1.jpg";
import IMG2 from "../../assests/portfolio2.jpg";
import IMG3 from "../../assests/portfolio3.jpg";
import IMG4 from "../../assests/portfolio4.jpg";
import IMG5 from "../../assests/portfolio5.png";
import IMG6 from "../../assests/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "This is a portfolio item title which is demo",
    github: "https://github.com/Acidier",
    demo: "https://github.com/Acidier/TextUtils-React"
  },
  {
    id: 1,
    image: IMG2,
    title: "This is a portfolio item title which is demo",
    github: "https://github.com/Acidier",
    demo: "https://github.com/Acidier/TextUtils-React"
  },
  {
    id: 1,
    image: IMG3,
    title: "This is a portfolio item title which is demo",
    github: "https://github.com/Acidier",
    demo: "https://github.com/Acidier/TextUtils-React"
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
              <div className="portfolio_item-cta"><a href={github} className="btn" target="_blank">
                Github
              </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
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
