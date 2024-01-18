import React from "react";
import MyCard from "../../components/card/myCard";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import mfc from "../projectimages/mfc.png";
import pokedex from "../projectimages/pokedex.png";
import memorygame from "../projectimages/memorygame.png";
import ttt from "../projectimages/ttt.png";

const ProjectList = ({ id }) => {
  const projects = [
    {
      id: 4,
      name: "Tic-Tac-Toe: Animal Edition",
      img: ttt,
      date: "September 8th, 2023",
      link: "https://tictactoe-ten-ruby.vercel.app/",
      description:
        "JavaScript, CSS, HTML - I created a basic JavaScript tic-tac-toe app. It's a battle with your favorite domestic animals! Cats vs Dog! With this app Player Dog and Player Cat battle it out to see who'll come out on top!",
    },
    {
      id: 3,
      name: "Social Media Application",
      img: mfc,
      date: "July 2023-August 2023",
      link: "https://drive.google.com/drive/u/0/folders/1ZdT18WWIukUsOo6lQ0QpgqQiV4MYt7B5",
      techstack: "React, Expressjs, Nodejs, MySQl",
      description: "A fun and group-centered social media application.",
    },
    {
      id: 2,
      name: "Pokémon Pokédex",
      img: pokedex,
      date: "May 2023-June 2023",
      link: "https://main.d3cysl72cukyoo.amplifyapp.com/",
      description:
        "REACTjs - I created a Pokémon Pokédex. With this Pokédex you are able to search for a Pokémon based on a few different criterias: its name or a combination of their types and/or weaknesses.",
    },
    {
      id: 1,
      name: "Memory Game",
      img: memorygame,
      date: "April 2023",
      link: "https://main.d1chtrlwi4wa6x.amplifyapp.com/",
      description:
        "React – I created a memory game that shows various shapes. You must determine whether or not you've seen the shape before or not. Your best score is saved!",
    },
  ];

  return (
    <>
      <h3>{projects[1].name}</h3>
      <a href={projects[1].link}>
        <img src={projects[1].img} alt="Social Media Application" />
      </a>
      <p id="project-description">
        <b>
          <em>{projects[1].techstack}</em>
        </b>
        <br />
        {projects[1].description}
      </p>

      {/* <div id="carousel">
        {projects.map((project) => {
          if (id !== 1) {
            return (
              <>
                <Link
                  to={project.link}
                  key={project.name}
                  style={{ textDecoration: "none" }}
                >
                  <div id="project-card-div" key={project.id}>
                    <a id="project-link" href={project.link}>
                      <img
                        id="project-image"
                        src={project.img}
                        alt={project.name}
                      />
                    </a>
                    <div id="project-content">
                      <p id="project-name">{project.name}</p>
                      <p id="project-date">{project.date}</p>
                      <p id="project-description">{project.description}</p>
                    </div>
                  </div>
                </Link>
              </>
            );
          }
        })}
      </div> */}
    </>
  );
};

export default ProjectList;
