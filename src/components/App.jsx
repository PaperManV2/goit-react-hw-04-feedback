import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => ({
      [option]: Number(prevState[option]) + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedBack = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedBack > 0 ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={totalFeedBack}
              positivePercentage={positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
/* <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div> */

/* <h2>Statistics</h2>
        <div className={css.statistics}>
          <span className={css.statistic}>Good: {good}</span>
          <span className={css.statistic}>Neutral: {neutral}</span>
          <span className={css.statistic}>Bad: {bad}</span>
          <span className={css.statistic}>Total: {total}</span>
          <span className={css.statistic}>
            Positive Feedback: {percentage}%
          </span>
        </div> */
