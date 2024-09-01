import React, { useState } from 'react';
import { Question as QuestionType } from '@battle-time/common';
import { atDotCss } from '@iyio/at-dot-css';
import OptionCard from './OptionCard';
import ProgressIndicator from './ProgressIndicator';
import NavigationButton from './NavigationButton';

interface QuestionCardProps {
    question: QuestionType;
    onAnswerSelect: (questionId: string, optionId: string) => void;
    selectedOptionId?: string;
    currentQuestionIndex: number;
    totalQuestion: number;
    onPreviousQuestion: () => void;
    onNextQuestion: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    onAnswerSelect,
    selectedOptionId,
    currentQuestionIndex,
    totalQuestion,
    onNextQuestion,
    onPreviousQuestion,
}) => {
    const [isExiting, setIsExisting] = useState(false);
    const handleNext = () => {
        setIsExisting(true);
        setTimeout(() => {
            onNextQuestion();
            setIsExisting(false);
        }, 200);
    };
    const handleBack = () => {
        setIsExisting(true);
        setTimeout(() => {
            onPreviousQuestion();
            setIsExisting(false);
        }, 200);
    };
    return (
        <div
            className={`${style.questionWrapper()} ${
                isExiting ? style.slideOut() : style.slideIn()
            }`}
        >
            <div className={style.questionImageWrapper()}>
                <img
                    className={style.questionImage()}
                    src={question.imageUrl}
                    alt={question.title}
                />
            </div>

            <div className={style.questionContent()}>
                <h2 className={style.title()}>{question.title}</h2>
                <p className={style.description()}>{question.description}</p>
                <div className={style.optionsContainer()}>
                    {question.options.map((option) => (
                        <OptionCard
                            key={option.id}
                            option={option}
                            isOptionSelected={option.id === selectedOptionId}
                            onAnswerSelect={() =>
                                onAnswerSelect(question.id, option.id)
                            }
                        />
                    ))}
                </div>

                {/* Bottom */}
                <div className={style.bottom()}>
                    <ProgressIndicator
                        currentQuestionIndex={currentQuestionIndex}
                        totalQuestion={totalQuestion}
                    />

                    <NavigationButton
                        currentQuestionIndex={currentQuestionIndex}
                        onPrev={handleBack}
                        onNext={handleNext}
                        optionSelected={selectedOptionId}
                        onCancel={() => {
                            onAnswerSelect(question.id, null);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

const style = atDotCss({
    name: 'QuestionCard',
    css: `
    @.questionWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // min-height: 100dvh;
        padding: 40px;
        color: #ffffff;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.5s ease;
    }
 
    @.questionImageWrapper {
         max-width:30%;
          height: auto;
          width:400px;

    }
    @.slideIn{
        opacity: 1;
        transform: translateX(0);

        }
    @.slideOut{
        opacity: 0;
        transform: translateX(-2%);
        }

    @.questionImage {
        width: 100%;
    }

    @.questionContent {
        max-width: 65%;
    }

    @.title {
        margin-bottom: 20px;
        opacity: 1;
        color: rgba(239, 239, 239, 1);
        font-family: "Inter-SemiBold",san-serif;
        font-size: 2.5rem;
        font-weight: 600;
        font-style: SemiBold;
        letter-spacing: -0.8px;
        text-align: left;
        line-height: 48px;
    
    }

    @.description {
        font-size: 1.25rem;
        margin-bottom: 40px;
        opacity: 1;
        color: rgba(111, 118, 126, 1);
        font-family: "Inter-Medium";
        font-size: 15px;
        font-weight: 500;
        font-style: Medium;
        letter-spacing: -0.22px;
        text-align: left;
        line-height: 24px;
    }

    @.optionsContainer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    @.bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 4rem;
    }


    @.progressContainer {
        display: flex;
        gap: 10px;
    }



    @media (max-width: 768px) {

        @.questionWrapper {
            flex-direction: column;
            align-items: center;
            text-align: start;
            padding: 0px;
            // min-height: 100vh;
        }

        @.questionContent{
            max-width: 100%;
        }

        @.title {
            color: rgba(239, 239, 239, 1);
            font-family: "Inter-SemiBold",san-serif;
            font-size: 1.6rem;
            line-height: 30px;
            text-align:center;
        }

        @.questionImageWrapper{
              max-width: 40%;
            }
        @.questionImage {
              max-width: 100%;
              left: 0;
              object-fit: contain;
              object-align: center;
        }

        @.optionsContainer {
            grid-template-columns: 1fr;
        }
    }
`,
});

export default QuestionCard;
