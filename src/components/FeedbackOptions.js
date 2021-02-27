const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button type="button" id="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" id="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" id="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </>
);

export default FeedbackOptions;
