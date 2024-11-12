import { useEffect, useState } from "react";
import useRequests from "../../hooks/req";
import "./index.scss";
import { BallTriangle } from "react-loader-spinner";
import { toast } from "react-toastify";

const Tasks = () => {
  const { handleGetTasks, tasks, handleClaim, claim } = useRequests();

  const [claimId, setClaimId] = useState<string>();
  const [claimAct, setClaimAct] = useState<string>();

  useEffect(() => {
    handleGetTasks();
  }, []);

  // check for error on task claim
  useEffect(() => {
    if (claim?.error) {
      toast.error(claim?.error?.response?.data?.detail);
    }
  }, [claim?.error]);

  // rums when tasks have been claimed successfully
  useEffect(() => {
    if (claim?.data) {
      if (claimAct === "do") {
        window.open("https://twtr.to/Cvh31", "_self");
      }
      toast.success("🎉 Task claimed successfully!");
    }
  }, [claim?.data, claimAct]);

  return (
    <div className="tasks">
      {tasks?.loading || !tasks?.data ? (
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
                action: string;
              },
              idx: number
            ) => {
              return (
                <div className="task" key={idx}>
                  <p>{task?.description}</p>
                  <button
                    className="task_action"
                    disabled={!task.is_available || task?.completed}
                    onClick={() => {
                      setClaimAct(task.action);
                      setClaimId(task?.id);
                      handleClaim(task?.id);
                    }}
                  >
                    <span>
                      {claimId === task?.id && claim?.loading ? (
                        <BallTriangle
                          height={30}
                          width={30}
                          radius={5}
                          color="var(--dark_brown)"
                          ariaLabel="ball-triangle-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                        />
                      ) : task?.completed ? (
                        "Claimed"
                      ) : (
                        task?.action
                      )}
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
