import "./index.scss";

const Tasks = () => {
  const tasks = [
    { task: "Follow us on us", action: "Do" },
    {
      task: "Be one of the first 4,000 players to refer 7 users",
      action: "Claim",
    },
    {
      task: "Be one of the first 4,000 players to earn 40,000 BUZ from quiz",
      action: "Claim",
    },
    { task: "Follow us on us", action: "Do" },
    { task: "Follow us on us", action: "Claim" },
  ];
  return (
    <div className="tasks">
      <div className="task_container">
        {tasks?.map((task, idx) => {
          return (
            <div className="task" key={idx}>
              <p>{task?.task}</p>
              <button className="task_action">
                <span>{task?.action}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
