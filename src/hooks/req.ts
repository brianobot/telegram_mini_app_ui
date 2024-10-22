import useAxios from "axios-hooks";

const useRequests = () => {
  // get questions
  const [{ ...questionData }, getQuestion] = useAxios({}, { manual: true });

  const handleGetQuestion = ({ id }: { id?: string }) => {
    getQuestion({ method: "get", url: `/question/${id ? id : ""}` });
  };

  // mark question as answered
  const [{ ...question }, markQuestion] = useAxios({}, { manual: true });

  const handleMarkQuestion = ({ id }: { id?: string }) => {
    markQuestion({
      method: "post",
      url: `/answered/`,
      data: {
        question: id,
      },
    });
  };

  // get leaderboard
  const [{ ...leaderboard }, getLeaderboard] = useAxios({}, { manual: true });

  const handleGetLeaderboard = () => {
    getLeaderboard({
      method: "get",
      url: `/leaderboard/`,
    });
  };

  // get user
  const [{ ...userData }, getUser] = useAxios({}, { manual: true });

  const handleGetUser = () => {
    getUser({
      method: "get",
      url: `/users/`,
    });
  };

  // get tasks
  const [{ ...tasks }, getTasks] = useAxios({}, { manual: true });

  const handleGetTasks = () => {
    getTasks({
      method: "get",
      url: `/tasks/`,
    });
  };

  // claim tasks
  const [{ ...claim }, getClaim] = useAxios({}, { manual: true });

  const handleClaim = (id: string) => {
    getClaim({
      method: "get",
      url: `/tasks/${id}/claim`,
    });
  };

  return {
    questionData,
    handleGetQuestion,

    question,
    handleMarkQuestion,

    leaderboard,
    handleGetLeaderboard,

    userData,
    handleGetUser,

    tasks,
    handleGetTasks,

    claim,
    handleClaim,
  };
};
export default useRequests;
