import React, { useEffect, useState } from "react";
import { fakeFetch } from "../data";
export const Todo = () => {
  // Create a React component that calls the todo api and display the todos in an unordered list and show the todos as a list. The todo should display a heading with a little description of what that todo is about. Under that, it should display all the tasks to be done as a list.
  const [data, setData] = useState([]);

  const fetchTodoApi = async () => {
    const response = await fakeFetch("https://example.com/api/todos");
    setData(response.data.todos);
  };
  useEffect(() => {
    fetchTodoApi();
  }, []);

  return (
    <>
      <h2>Question 2</h2>
      {data.map(({ title, todos },idx) => (
        <div key={idx}>
          <h3>{title}</h3>
          <ol>
            {todos.map((item,idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
          <hr />
        </div>
      ))}
    </>
  );
};
