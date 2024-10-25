import useAxios from "axios-hooks";

const useRequests = () => {
  // get questions
  const [{ ...questionData }, getQuestion] = useAxios({}, { manual: true });

  const handleGetQuestion = async ({ id }: { id?: string }) => {
    await getQuestion({ method: "get", url: `/question/${id ? id : ""}` });
  };

  // mark question as answered
  const [{ ...question }, markQuestion] = useAxios({}, { manual: true });

  const handleMarkQuestion = async ({ id }: { id?: string }) => {
    await markQuestion({
      method: "post",
      url: `/answered/`,
      data: {
        question: id,
      },
    });
  };

  // get leaderboard
  const [{ ...leaderboard }, getLeaderboard] = useAxios({}, { manual: true });

  const handleGetLeaderboard = async () => {
    await getLeaderboard({
      method: "get",
      url: `/leaderboard/`,
    });
  };

  // get user
  const [{ ...userData }, getUser] = useAxios({}, { manual: true });

  const handleGetUser = async () => {
    await getUser({
      method: "get",
      url: `/users/`,
    });
  };

  // get tasks
  const [{ ...tasks }, getTasks] = useAxios({}, { manual: true });

  const handleGetTasks = async () => {
    await getTasks({
      method: "get",
      url: `/tasks/`,
    });
  };

  // claim tasks
  const [{ ...claim }, getClaim] = useAxios({}, { manual: true });

  const handleClaim = async (id: string) => {
    await getClaim({
      method: "get",
      url: `/tasks/${id}/claim/`,
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
