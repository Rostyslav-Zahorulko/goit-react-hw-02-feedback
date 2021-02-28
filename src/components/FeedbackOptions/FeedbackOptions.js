import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className="feedback-btn-list">
    {options.map(option => {
      const capitalizedOption = option[0].toUpperCase() + option.substring(1);

      return (
        <li className="feedback-btn-list-item" key={option}>
          <button
            className="feedback-btn"
            type="button"
            id={option}
            onClick={onLeaveFeedback}
          >
            {capitalizedOption}
          </button>
        </li>
      );
    })}
  </ul>
);

export default FeedbackOptions;
