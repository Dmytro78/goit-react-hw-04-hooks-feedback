// import { React, Component } from 'react';
import { useState } from 'react';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(good => good + 1);
      case 'neutral':
        return setNeutral(neutral => neutral + 1);
      case 'bad':
        return setBad(bad => bad + 1);
      default:
        return;
    }
  };

// export default class App extends Component {
//   state = { good: 0, neutral: 0, bad: 0 };

//   onLeaveFeedback = name => {
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(100 / ((good + neutral + bad) / good));
  };

    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage ()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }