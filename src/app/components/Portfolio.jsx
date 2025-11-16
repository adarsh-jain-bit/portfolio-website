"use client"
import React from "react";
import Icon from "./Icon";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = React.useState("All");

  // ---------- PROJECT DATA ----------
  const projects = [
        {
      title: "Pixel Profile",
      category: "React Website",
      link: "https://pixelprofiles.com/",
      img: "./assets/images/pixelprofile.png",
    },
          {
      title: "Scale Dining",
      category: "React Website",
      link: "https://scaledining.com/",
      img: "./assets/images/pos.png",
    },
    {
      title: "Chemistry Coffee",
      category: "React Website",
      link: "https://chemistycoffee.vercel.app/",
      img: "./assets/images/cafe.png",
    },
      {
      title: "Lab Of Clothing",
      category: "React Website",
      link: "https://labofclothing.vercel.app/it-consulting",
      img: "./assets/images/labofclothing.png",
    },
 
   
      {
      title: "Pet Food App",
      category: "React Website",
      link: "https://petfoodnewversion.onrender.com/",
      img: "./assets/images/petfoodapp.png",
    },
     {
      title: "Dashboard Design",
      category: "React Website",
      link: "https://dashboard-three-vert-51.vercel.app/",
      img: "./assets/images/dashboard.png",
    },

      {
      title: "Crypto Dashboard",
      category: "React Website",
      link: "https://crypto-app-seven-dusky.vercel.app/",
      img: "./assets/images/crypto.png",
    },
    {
      title: "Test Assessment Website",
      category: "React Website",
      link: "https://testifyfrontend.onrender.com/",
      img: "./assets/images/testify.png",
    },
    {
      title: "Wedding Website",
      category: "React Website",
      link: "https://photographyapp-lake.vercel.app/",
      img: "./assets/images/Pappu-Video-02-28-2025_03_37_PM.png",
    },
    {
      title: "Toy Website",
      category: "HTML CSS Template",
      link: "https://toywebsite-template.onrender.com",
      img: "./assets/images/toywebsite.png",
    },
    {
      title: "HouseStory",
      category: "HTML CSS Template",
      link: "https://housestory.onrender.com/",
      img: "./assets/images/HouseStory.png",
    },
    {
      title: "Sugar Website Clone",
      category: "HTML CSS Template",
      link: "https://4e8445e5-6f88-451a-8b10-e9533380077b-00-2f6xlquye01se.kirk.replit.dev/",
      img: "./assets/images/sugar.png",
    },
    {
      title: "Finance Tracker",
      category: "React Website",
      link: "https://finance-tracker-7hdu.onrender.com",
      img: "./assets/images/financetracker.png",
    },
    {
      title: "Task Manager",
      category: "Small Projects",
      link: "https://draggable.onrender.com",
      img: "./assets/images/taskmanager.png",
    },
  ];

  // ---------- FILTER LOGIC ----------
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
        );

  // FILTER BUTTON LIST
  const filters = ["All", "React Website", "HTML CSS Template", "Small Projects"];

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* ---------- FILTER BUTTONS ---------- */}
        <ul className="filter-list">
          {filters.map((filter) => (
            <li key={filter} className="filter-item">
              <button
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        {/* ---------- PROJECT GRID ---------- */}
        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li
              key={index}
              className="project-item active"
              data-category={project.category}
            >
              <a href={project.link} target="_blank">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <Icon name="eye-outline" />
                  </div>
                  <img src={project.img} alt={project.title} loading="lazy" />
                </figure>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
