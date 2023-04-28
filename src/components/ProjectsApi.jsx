import { useEffect } from "react";
import { useState } from "react";
import { fakeFetchProjectApi } from "../data";

export const ProjectApi = () => {
  //Create a React component that calls the projects api and list all the projects when the page loads with titles and description. Create buttons saying “Show Details” for each project. On click of the button show title, description, technologies, completed of that project only.

  const [showData, setShowData] = useState([]);
  const [details, setDetails] = useState([]);
  const [isProjectShown, setIsProjectShown] = useState(false);

  const fakeFetchData = async () => {
    const response = await fakeFetchProjectApi(
      "https://example.com/api/projects"
    );
    setShowData(response.data.projects);
  };
  useEffect(() => {
    fakeFetchData();
  }, []);
  const handleClick = (id) => {
    const showDetails = showData.filter((item, idx) => idx === id);
    setIsProjectShown(true);
    setDetails(showDetails);
  };
  return (
    <>
      <h3>Question 7</h3>
      <h2>Projects</h2>
      {showData.map(({ title, description }, idx) => (
        <div key={idx}>
          <p>
            <b>Name</b>: {title}
          </p>
          <p>
            <b>Description</b>: {description}
          </p>
          <button onClick={() => handleClick(idx)}>Show details</button>
        </div>
      ))}
      <h2>{isProjectShown && "Project Details"}</h2>
      {details.map(({ title, description, technologies, completed }, idx) => (
        <div key={idx}>
          <p>
            <b>Name</b>:{title}
          </p>
          <p>
            <b>Description</b>:{description}
          </p>
          <p>
            <b>Technologies</b>:{technologies.map((item) => item)}
          </p>
          <p>
            <b>Completed</b>:{completed ? "true" : "false"}
          </p>
        </div>
      ))}
    </>
  );
};
