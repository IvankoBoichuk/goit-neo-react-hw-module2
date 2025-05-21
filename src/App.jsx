import { useEffect, useState } from 'react'
import './App.css'
import Notification from './components/Notification'
import Description from './components/Description'
import Feedback from './components/Feedback'
import Options from './components/Options'

function App() {
  const reviewsDefault = { good: 0, neutral: 0, bad: 0 };
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("reviews");
    if (savedReviews) {
      return JSON.parse(savedReviews);
    }
    return reviewsDefault;
  });

  // Збереження в localStorage при зміні стану
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const { good, neutral, bad } = reviews;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  const updateFeedback = (feedbackType) => {
    setReviews(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1
    }));
  };

  const reset = () => {
    setReviews(reviewsDefault);
  };

  return (
    <>
      <Description />
      <Options handler={updateFeedback} reset={reset} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? <Feedback reviews={reviews} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> : <Notification />}
    </>
  )
}

export default App