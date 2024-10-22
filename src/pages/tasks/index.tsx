import { useEffect } from "react";
import useRequests from "../../hooks/req";
import "./index.scss";
import { BallTriangle } from "react-loader-spinner";
import { toast } from "react-toastify";

const Tasks = () => {
  const { handleGetTasks, tasks, handleClaim, claim } = useRequests();
  useEffect(() => {
    handleGetTasks();
  }, []);

  // check for error on task claim
  useEffect(() => {
    if (claim?.error) {
      toast.error(claim?.error?.response?.data?.detail);
    }
  }, [claim?.error]);
  return (
    <div className="tasks">
      {tasks?.loading || !tasks?.data || claim?.loading ? (
        <div className="loader_container">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="var(--dark_brown)"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="task_container">
          {tasks?.data?.map(
            (
              task: {
                description: string;
                is_available: boolean;
                completed: boolean;
                id: string;
              },
              idx: number
            ) => {
              return (
                <div className="task" key={idx}>
                  <p>{task?.description}</p>
                  <button
                    className="task_action"
                    disabled={!task.is_available}
                    onClick={() => {
                      handleClaim(task?.id);
                    }}
                  >
                    <span>
                      {task?.is_available && !task?.completed ? "Do" : "Claim"}
                    </span>
                  </button>
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Tasks;
