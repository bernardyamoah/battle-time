import React, { useEffect, useState } from 'react';

import { apiBaseUrl, Question } from '@battle-time/common';
import { useSubject } from '@iyio/react-common';
import { onboardingAnswer } from '../store/answer';
import QuestionCard from './QuestionCard';
import { atDotCss } from '@iyio/at-dot-css';
import CompleteBattle from './EndOnboarding';

export default function Onboard() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const answers = useSubject(onboardingAnswer);
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(
        null
    );
    const [isOnboardComplete, setIsOnboardComplete] = useState<boolean>(false);
    useEffect(() => {
        let isMounted = true;
        (async () => {
            const response = await fetch(`${apiBaseUrl}/questions`);
            if (!isMounted) return;

            const questionsData: Question[] = await response.json();
            if (!isMounted) return;

            setQuestions(questionsData);
        })();
        return () => {
            isMounted = false;
        };
    }, []);
    useEffect(() => {
        const currentQuestion = questions[currentQuestionIndex];
        const storedAnswer = answers.find(
            (answer) => answer.questionId === currentQuestion?.id
        );
        if (storedAnswer) {
            setSelectedOptionId(storedAnswer.optionId);
        } else {
            setSelectedOptionId(null);
        }
    }, [currentQuestionIndex]);

    const handleAnswerSelect = (questionId: string, optionId: string) => {
        const existingAnswerIndex = answers.findIndex(
            (answer) => answer.questionId === questionId
        );
        const updatedAnswers = [...answers];

        if (existingAnswerIndex > -1) {
            updatedAnswers[existingAnswerIndex] = { questionId, optionId };
        } else {
            updatedAnswers.push({ questionId, optionId });
        }

        setSelectedOptionId(optionId);
        onboardingAnswer.next(updatedAnswers);
    };

    const handleNextQuestion = () => {
        if (!selectedOptionId) {
            return;
        }

        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setIsOnboardComplete(true);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedOptionId(null);
        }
    };

    if (questions.length === 0) {
        return <div className={style.loading()}>Loading questions...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];
    return (
        <div>
            {isOnboardComplete && (
                <CompleteBattle onPrev={() => setIsOnboardComplete(false)} />
            )}

            {!isOnboardComplete && (
                <QuestionCard
                    question={currentQuestion}
                    onAnswerSelect={handleAnswerSelect}
                    selectedOptionId={selectedOptionId}
                    currentQuestionIndex={currentQuestionIndex}
                    totalQuestion={questions.length}
                    onNextQuestion={handleNextQuestion}
                    onPreviousQuestion={handlePreviousQuestion}
                />
            )}
        </div>
    );
}
const style = atDotCss({
    name: 'sdfd',
    css: `
    

  
    @.loading {
        display: flex;
        width:100%;
      align-items: center;
    justify-content: center; 
  min-height:40dvh;
    }

    

`,
});
