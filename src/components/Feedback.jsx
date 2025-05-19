const Feedback = ({ reviews, totalFeedback, positiveFeedback }) => {
  return totalFeedback > 0 ? <ul>
      <li>Good: {reviews.good}</li>
      <li>Neutral: {reviews.neutral}</li>
      <li>Bad: {reviews.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
  </ul> : <p>No feedback yet</p>;
};

export default Feedback;