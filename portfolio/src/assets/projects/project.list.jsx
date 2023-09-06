import React from "react";
import LongCard from "../../components/card/long.card";
import { Link } from "react-router-dom";
import mfc from "../projectimages/mfc.png";
import pokedex from "../projectimages/pokedex.png";
import memorygame from "../projectimages/memorygame.png";

const ProjectList = ({ style }) => {
  const projects = [
    {
      name: "Social Media Application",
      img: mfc,
      date: "July 2023-August 2023",
      link: "https://drive.google.com/drive/u/0/folders/1ZdT18WWIukUsOo6lQ0QpgqQiV4MYt7B5",
      description:
        "MERN - I created a database using MySQL and a full stack mobile application using Express.js, React and Node.js. With this social media application, the user is able to create and form their own circle of friends and tailor a social media experience centered only around the people they have connected with and no one else.",
    },
    {
      name: "Pokémon Pokédex",
      img: pokedex,
      date: "May 2023-June 2023",
      link: "https://main.d3cysl72cukyoo.amplifyapp.com/",
      description:
        "REACTjs - I created a Pokémon Pokédex. With this Pokédex you are able to search for a Pokémon based on a few different criterias: its name or a combination of their types and/or weaknesses.",
    },
    {
      name: "Memory Game",
      img: memorygame,
      date: "April 2023",
      link: "https://main.d1chtrlwi4wa6x.amplifyapp.com/",
      description:
        "React – I created a memory game that shows various shapes. You must determine whether or not you've seen the shape before or not. Your best score is saved!",
    },
  ];

  return (
    <div style={style}>
      {projects.map((project) => {
        return (
          <>
            <Link to={project.link} key={project.name}>
              <LongCard
                link={project.link}
                date={project.date}
                name={project.name}
                img={project.img}
                description={project.description}
              ></LongCard>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default ProjectList;
