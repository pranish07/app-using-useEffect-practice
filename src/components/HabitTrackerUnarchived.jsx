import { useEffect } from "react";
import { useState } from "react";
import { fakeFetchHabitTrackerUnarchived } from "../data";

export const HabitTrackerUnarchived = () => {
  // Create a React component that calls the habit tracker api and display only the habits which are unarchived with heading “Unarchived”. Create a show archive button and on click of show archive button show the archive habits and hide the unarchives. Change the heading of the page to “Archived” when the button is clicked.

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isArchive, setIsArchive] = useState(false);

  const fakeFetchData = async () => {
    const response = await fakeFetchHabitTrackerUnarchived(
      "https://example.com/api/habits"
    );
    const data = response.data.habits;
    setData(data);

    const unArchivedData = data.filter((item) => !item.archived);
    setFilteredData(unArchivedData);
  };
  useEffect(() => {
    fakeFetchData();
  }, []);

  const handleClick = () => {
    setIsArchive(!isArchive);
    if (isArchive) {
      const unArchiveData = data.filter((item) => !item.archived);
      return setFilteredData(unArchiveData);
    } else {
      const ArchiveData = data.filter((item) => item.archived);
      return setFilteredData(ArchiveData);
    }
  };

  return (
    <>
      <h3>Question 6</h3>

      <h1>{isArchive ? "Archive" : "Unarchive"}</h1>
      {filteredData.map(
        ({ title, desc, daysFollowed, daysSkipped, archived }) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>Days Followed: {daysFollowed}</p>
            <p>Days Skipped: {daysSkipped}</p>
            <hr />
          </div>
        )
      )}

      <button onClick={handleClick}>
        {isArchive ? "Show UnArchive Data" : "Show Archive Data"}
      </button>
    </>
  );
};
