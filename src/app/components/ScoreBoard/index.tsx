import Display from "./Display";

const ScoreBoard = ({
  scores,
}: {
  scores: {
    score: number;
    time: number;
  }[];
}) => {
  const orderedScores = [...scores].sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return b.time - a.time;
  });
  return (
    <>
      <div className="flex flex-col gap-4 px-4">
        {orderedScores.length === 0 ? (
          <p className="text-center text-gray-500">
            Chưa có điểm nào được ghi nhận
          </p>
        ) : (
          orderedScores.map((item, index) => {
            return <Display key={index} score={item.score} />;
          })
        )}
      </div>
    </>
  );
};
export default ScoreBoard;
