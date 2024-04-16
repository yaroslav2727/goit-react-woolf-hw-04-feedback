import css from "./Statistics.module.css";

const POSITIVE_CUTOFF = 50;

const Statistics = ({ bad, neutral, good, total, positivePercentage }) => {
  return (
    <>
      <h2 className={css.title}>Statistics</h2>
      <div>
        <div className={css.options}>
          <div className={css.good}>
            <p className={css.text}>good: {good}</p>
          </div>
          <div className={css.neutral}>
            <p className={css.text}>neutral: {neutral}</p>
          </div>
          <div className={css.bad}>
            <p className={css.text}>bad: {bad}</p>
          </div>
        </div>
        <div className={css.total}>
          <p className={css.text}>Total: {total}</p>
        </div>
        <div className={positivePercentage > POSITIVE_CUTOFF ? css.good : css.bad}>
          <p className={css.text}>Positive feedback: {positivePercentage}%</p>
        </div>
      </div>
    </>
  );
};

export default Statistics;
