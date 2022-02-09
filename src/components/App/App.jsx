import React from 'react';
import s from './App.module.css'
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

class App extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
  
    onLeaveFeedback = feedback => {
        this.setState(prevState => {
        return { [feedback]: prevState[feedback] + 1 };});
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return total ? Math.round((good / total) * 100) : 0;
    }

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div className={s.container}>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={this.onLeaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback() ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (<Notification message="There is no feedback" />)}
                </Section>
            </div>
        );

    }

}

export default App;