import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA",
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D",
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF",
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33",
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB",
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00",
    },
];

console.log(skills);

function Lang() {
    return (
        <div>
            {skills.map((skill) => (
                // eslint-disable-next-line react/jsx-key
                <Skill
                    skill={skill.skill}
                    color={skill.color}
                    level={skill.level}
                />
            ))}
        </div>
    );
    /*     return (
        <div className={props.divClass}>
            <p className={props.className}>{props.name}</p>
            <p className="emoji">{props.emoji}</p>
        </div>
    ); */
}

function Skill({ skill, color, level }) {
    return (
        <div className="props.divClass" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span className="emoji">
                {level === "beginner" && "👶"}
                {level === "intermediate" && "👍"}
                {level === "advanced" && "💪"}
            </span>
        </div>
    );
}

function Intro() {
    return (
        <>
            <img src="src/assets/jonas.jpeg" className="jonas" />
            <h1>Jonas Schmedtmann</h1>
            <p>
                Full-stack web developer and teacher at Udemy. When not coding
                oro preparing a course, I like to play board games, to cook and
                eat, or to just enjoy the Portuguese sun at the beach.
            </p>
        </>
    );
}

function Skills() {
    return (
        <div className="all-tags">
            <Lang />
        </div>
    );
}

function Container() {
    return (
        <div className="container">
            <Intro />
            <Skills />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Container />
    </React.StrictMode>
);
