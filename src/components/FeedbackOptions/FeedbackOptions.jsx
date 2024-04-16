import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <ul className={css.list}>
    {options.map(name => (
      <li key={name}>
        <button
          type="button"
          className={`${css.button} ${css[name]}`}
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
