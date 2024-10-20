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

  return {
    handleGetQuestion,
    questionData,

    question,
    handleMarkQuestion,

    leaderboard,
    handleGetLeaderboard,
  };
};
export default useRequests;
