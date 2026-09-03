import React, {Component, useState} from "react";
import '../styles/App.css';

const projects = [
  {
    name: "AI Powered Recipe Generator",
    description: "An app that generates recipes based on ingredients you have at home."
  },
  {
    name: "Fitness Tracker",
    description: "A web application to track workouts, diet, and progress over time."
  },
  {
    name: "Personal Finance Manager",
    description: "A tool to manage budgets, expenses, and savings goals in one place."
  }
];

const App = () => {
  return (
    <div id="main">
      <div className="ns-wrapper">
        {projects.map((project, index) => (
          <div key={index}>
            <h1 data-ns-test="project-name">{project.name}</h1>
            <h6 data-ns-test="project-description">{project.description}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}


export default App;
