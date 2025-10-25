import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Abdul" },
  { meta: "last name", metaInfo: "Rafeh" },
  // { meta: "Age", metaInfo: "29 Years" },
  // { meta: "Nationality", metaInfo: "Pakistani" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "New York, USA" },
  // { meta: "Address", metaInfo: "Lahore, Pakistan" },
  // { meta: "phone", metaInfo: "+1 646 765 2179" },
  { meta: "Email", metaInfo: "abdulrafeh@live.co.uk" },
  { meta: "Languages", metaInfo: "English, Urdu, Hindi" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
