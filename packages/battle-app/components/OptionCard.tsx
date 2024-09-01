import { Option } from '@battle-time/common';
import { atDotCss } from '@iyio/at-dot-css';
import React from 'react';
import { CheckIcon } from './CheckIcon';

interface OptionCardProps {
    option: Option;
    isOptionSelected?: boolean;
    onAnswerSelect: () => void;
}
function OptionCard({
    isOptionSelected = false,
    onAnswerSelect,
    option,
}: OptionCardProps) {
    return (
        <div
            className={`${style.cardDefault()} ${
                isOptionSelected && style.cardSelected()
            } `}
            onClick={onAnswerSelect}
        >
            <h3 className={style.title()}>{option.title}</h3>
            <p className={style.description()}>{option.description}</p>
            {isOptionSelected && (
                <div className={style.checkIcon()}>
                    <CheckIcon size="20px" />
                </div>
            )}
        </div>
    );
}
const style = atDotCss({
    name: 'OptionCard',
    css: `
    @.cardDefault {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #ffffff;
        padding:1.25rem 1.562rem 1.562rem;
        border: 2px solid grey;
        transition: border-color 0.3s ease;
        cursor: pointer;
        position: relative;
        border-radius: 12px;
        border: 2px solid #272B30;
        background-color: #1A1D1F;
    }
    @.cardSelected {
        
        flex-direction: column;
        justify-content: space-between;
        background-color:#1A1D1F;
        color: #ffffff;
        border-radius: 12px;
        border: 4px solid #007bff;
        transition: border-color 0.3s ease;
        position: relative;
    }

    @.title {
        color: rgba(252, 252, 252, 1);
        font-family: "Inter-SemiBold";
        font-size: 1.25rem;
        font-weight: 600;
        font-style: SemiBold;
        letter-spacing: -0.4px;
        text-align: left;
        line-height: 32px;
        margin-bottom: 10px;
    }


    @.description {
        opacity: 1;
        color: rgba(111, 118, 126, 1);
        font-family: "Inter-Medium";
        font-size: 0.937rem;
        font-weight: 500;
        font-style: Medium;
        letter-spacing: -0.22px;
        text-align: left;
        line-height: 23px;
    }

    @.checkIcon {
        position: absolute;
        top: 1.625rem;
        right: 1.562rem;
        width: 20px;
        height: 20px;
        background-color: #007bff;
        border-radius: 50%;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        @.cardDefault {
            padding: 10px;
        }
        @.cardSelected {
            padding: 10px;
        }
        @.title {
            font-size: 1.25rem;
        }
        @.description {
            font-size: 0.875rem;
        }
    }
`,
});

export default OptionCard;
