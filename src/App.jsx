import React from 'react';
import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import NotificationMessage from 'components/NotificationMessage';
import Container from './App.styled';


function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onButtonFeedbackClick = event => {
   const { name } = event.currentTarget;

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };
 
  const countTotalFeedback = good + neutral + bad;
  
  const countPositiveFeedback = () => {
    return countTotalFeedback > 0 ? Math.floor((good / countTotalFeedback) * 100) : 0;
  };

  const options = Object.keys({good, neutral, bad})
 
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onButtonFeedbackClick}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={countTotalFeedback}
              positivePercentage={countPositiveFeedback()}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
}

export default App;