import { atDotCss } from '@iyio/at-dot-css';
import React from 'react';
import Button from './Button';
type NavigationButtonProps = {
    onNext: () => void;
    onPrev: () => void;
    onCancel?: () => void;
    currentQuestionIndex: number;
    optionSelected?: string;
};
function NavigationButton({
    onNext,
    onPrev,
    onCancel,
    currentQuestionIndex,
    optionSelected,
}: NavigationButtonProps) {
    return (
        <div className={style.navigationButtons()}>
            {optionSelected ? (
                <Button variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
            ) : (
                currentQuestionIndex > 0 && (
                    <Button variant="outline" onClick={onPrev}>
                        Back
                    </Button>
                )
            )}

            <Button
                variant="primary"
                disabled={!optionSelected}
                onClick={onNext}
            >
                Next
            </Button>
        </div>
    );
}
const style = atDotCss({
    name: 'NavigationButtons',
    css: `
    
    @.navigationButtons {
        display: flex;
        gap: 1.25rem;
    }

    

`,
});

export default NavigationButton;
