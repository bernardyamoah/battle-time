import { atDotCss } from '@iyio/at-dot-css';
import React from 'react';
type ProgressIndicatorProps = {
    currentQuestionIndex: number;
    totalQuestion: number;
};
function ProgressIndicator({
    currentQuestionIndex,
    totalQuestion,
}: ProgressIndicatorProps) {
    return (
        <div className={style.progressContainer()}>
            {Array.from({ length: totalQuestion }).map((_, index) => (
                <div
                    key={index}
                    className={`${style.step()} ${
                        index === currentQuestionIndex && style.activeStep()
                    }`}
                />
            ))}
        </div>
    );
}
const style = atDotCss({
    name: 'ProgressIndicator',
    css: `

    @.progressContainer {
        display: flex;
        gap: 0.312rem;
    }

    @.step {
        width: 0.75rem;
        height: 0.312rem;
        border-radius: 6px;
        background-color: #6c757d;
        transition: width 0.3s ease;
    }

    @.activeStep {
        width: 2rem;
        background-color: #007bff;
         transition: width 0.3s ease;
    }

        
    }
`,
});
export default ProgressIndicator;
