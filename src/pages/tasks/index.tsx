import { tasks } from "../../utils/datas";
import "./index.scss";

const Tasks = () => {
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
