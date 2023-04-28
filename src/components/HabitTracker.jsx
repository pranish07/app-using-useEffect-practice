import { useEffect, useState } from "react";
import { fakeFetch, fakeFetchHabitTracker } from "../data";

export const HabitTracker = () => {
  const [data, setData] = useState([]);
  const fakeFetchData = async () => {
    const response = await fakeFetchHabitTracker(
      "https://example.com/api/habits"
    );
    setData(response.data.habits);
  };

  useEffect(() => {
    fakeFetchData();
  }, []);
  return (
    <>
      <h2>Question 3</h2>
      <h3>Habit Tracker </h3>
      <ul>
        {data.map(({ daysFollowed, daysSkipped, desc, title },idx) => (
          <li key={idx}>
            <h4>{title}</h4>
            <p>{desc}</p>
            <p>
              <b>Days Followed </b>:{daysFollowed}
            </p>
            <p>
              <b>Days Skipped </b>: {daysSkipped}
            </p>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};
