export default function FinishScreen({ points, maxPoints, dispatch }) {
  const perCent = Math.ceil((points / maxPoints) * 100);
  return (
    <div>
      <p className="result">
        🤓You scored {points} out of {maxPoints} ({perCent}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
}
