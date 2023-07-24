import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <span className={css.statistic}>Good: {good}</span>
      <span className={css.statistic}>Neutral: {neutral}</span>
      <span className={css.statistic}>Bad: {bad}</span>
      <span className={css.statistic}>Total: {total}</span>
      <span className={css.statistic}>
        Positive Feedback: {positivePercentage}%
      </span>
    </div>
  );
};
