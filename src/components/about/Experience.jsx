import React from "react";

const experienceContent = [
  {
    year: "June 2023 - December 2024",
    position: "Software Engineer",
    companyName: "Aleh Tech FZCO",
    details: `Developed a versatile web application for deploying ERC20 tokens across multiple 
      blockchain networks. Built a token-based web app with staking and bridging modules. 
      Designed custom Web3 solutions, enabling seamless blockchain connectivity and DeFi integrations.`,
  },
  {
    year: "April 2021 - June 2023",
    position: "Software Engineer",
    companyName: "Stackup Solutions",
    details: `Designed and developed scalable SaaS applications with maps, online tracking, payments, 
      and real-time chat. Integrated third-party services for secure transactions and localised 
      applications, increasing market reach. Led the development of a construction solutions platform, 
      boosting revenue by 30%.`,
  },
  {
    year: "Aug 2020 - April 2021",
    position: "Associate Software Engineer",
    companyName: "Hybrid Squares",
    details: `Developed a digital platform for a wholesale market startup, enabling over 100 vendors 
      to sell online. Improved vendor-buyer interactions, supporting more than 1,000 weekly transactions. 
      Enhanced operational efficiency, increasing platform usage by 25% in six months.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
