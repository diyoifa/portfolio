import { useState } from "react";
import Paginacíon from "../Pagination/Pagination";

import "./portfolio.css";
import IMG from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import IMG9 from "../../assets/portfolio9.jpg";

const Portfolio = () => {
  const availableProducts = [
    {
      id: 1,
      image: IMG,
      title: "Notifinanciera",
      github: "https://github.com/diyoifa/Notifinanzas",
      demo: "https://notifinanzas.vercel.app/",
      tecnologies:
        "Next.js | Typescript | Talwing | Next-auth.js  | sanity | Vercel | CI/CD",
    },
    {
      id: 2,
      image: IMG5,
      title: "World Blog Platform",
      github: "https://github.com/diyoifa/Proyecto-wordBlog",
      demo: "https://proyecto-word-blog-universidad-de-pamplona-snik.vercel.app/",
      tecnologies:
        "Next.js  | Talwing | Next-auth  | PostGresQl | Supabase | Firebase | Prisma | Node.js | Shadcn UI",
    },
    {
      id: 3,
      image: IMG3,
      title: "Powergym",
      github: "https://github.com/diyoifa/gym",
      demo: "https://gym-exercises-black.vercel.app/",
      tecnologies:
        "React | CSS | Material UI | Node.js | Express | MongoDB | Mongoose| Vercel | CI/CD ",
    },
    {
      id: 4,
      image: IMG6,
      title: "Users Administration",
      github: "https://github.com/diyoifa/portfolio-template",
      tecnologies:
        "Angular | PrimeNG | Pytest | Jest | TestClient | FastApi | Python | JWT" 
    },
    {
      id: 5,
      image: IMG2,
      title: "Chatgpt Util Prompts",
      github: "https://github.com/diyoifa/promptopia",
      demo: "https://chatgpt-prompts-three.vercel.app/",
      tecnologies:
        "Next | Tailwing | Next-auth.js | Docker | TypeScript  | Vercel | CI/CD" 
    },
    {
      id: 6,
      image: IMG7,
      title: "JAVA TURING QUIZ",
      github: "https://github.com/diyoifa/Turing-Java-Quiz",
      tecnologies:
        "JAVA | CSS | HTML | E2E Testing | Unit Testing | Integration Testing" 
    },
    {
      id: 7,
      image: IMG8,
      title: "Microservices Proyect",
      github: "https://github.com/diyoifa/microservices_Fastapi_and_Redis",
      tecnologies:
        "Python | FastApi | Redis | Microservices | testClient | Docker | CI/CD | React | Jest | APIrest" 
    },
    {
      id: 8,
      image: IMG4,
      title: "Portfolio Template",
      github: "https://github.com/diyoifa/portfolio-template",
      tecnologies:
        "React | Chakra UI | CSS | Jest | Docker | CI/CD | HTML | Vercel" 
    },
    {
      id: 9,
      image: IMG9,
      title: "Little lemon restaurant",
      github: "https://github.com/diyoifa/little-lemmon-proyect",
      tecnologies:
        "React | Chakra UI | CSS | Jest | Docker | CI/CD | HTML | Vercel| UI/UX" 
    },
  ];

  const ProyectsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (event, value) => {
    // console.log("🚀 ~ paginate ~ value:", value)
    //Update the current page of our pagination if the user click on a different page number
    setCurrentPage(value);
  };

  const indexOfLastProyect = currentPage * ProyectsPerPage;
  const indexOfFirtProyect = indexOfLastProyect - ProyectsPerPage;
  const currentProyects = availableProducts.slice(
    indexOfFirtProyect,
    indexOfLastProyect
  );

  return (
    <>
      <section id="portfolio">
        <h5>My Portfolio</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {currentProyects?.map((proyect) => (
            <article className="portfolio__item" key={proyect.id}>
              <div className="portfolio__item-image">
                <img
                  style={{ height: "170px", width: "280px" }}
                  src={proyect.image}
                  alt={proyect.title + "img"}
                />
              </div>
              <h3>{proyect.title}</h3>
              <p style={{ marginBottom: "1rem", textAlign: "center" }}>
                {proyect?.tecnologies}
              </p>
              <div className="portfolio__item-cta">
                <a
                  href={proyect.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                {proyect.demo && (
                  <a
                    href={proyect.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4rem",
          }}
        >
          <Paginacíon
            array={availableProducts}
            currentPage={currentPage}
            dataPerPage={ProyectsPerPage}
            paginate={paginate}
          />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
