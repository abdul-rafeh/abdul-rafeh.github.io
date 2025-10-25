import React from "react";

const educationContent = [
  {
    year: "Expected Dec 2026",
    degree: "Masters of Science in Computer Science",
    institute: "Mercy University, New York",
    details: `Specializing in artificial intelligence, data science, and machine learning,
    focusing on advanced algorithms, deep learning, and big data analytics.`,
  },
  {
    year: "Jan 2022",
    degree: "Bachelors of Science in Computer Science",
    institute: "COMSATS University Islamabad, Lahore",
    details: `Completed coursework in web development, mobile app development, machine learning, 
      data science, databases, and data structures.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
