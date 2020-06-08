import React from 'react';
import QuestionBox from './QuestionBox';

const QABox = ({ questions, selected }) => {
    return <div>
        {
            questions.map(({ questionId, question, answers, correct }) =>
                <QuestionBox
                    key={questionId}
                    question={question}
                    options={answers}
                    selected={(s) => selected(s, correct)}
                />
            )
        }
    </div>
};

export default QABox;
