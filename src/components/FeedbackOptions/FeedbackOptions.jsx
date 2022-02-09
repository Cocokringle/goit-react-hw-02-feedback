import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={s.button_container}>
            {options.map(option => {
                return (
                    <button className={s.button}
                        key={option}
                        name={option}
                        onClick={() => onLeaveFeedback(option)}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}

export default FeedbackOptions;
