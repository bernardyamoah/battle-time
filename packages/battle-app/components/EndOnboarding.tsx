import React from 'react';
import { atDotCss } from '@iyio/at-dot-css';
import Image from 'next/image';
import Button from './Button';
import { apiBaseUrl } from '@battle-time/common';
import { useSubject } from '@iyio/react-common';
import { onboardingAnswer } from '../store/answer';

type EndOnboardingProps = {
    onPrev: () => void;
};
const EndOnboarding: React.FC<EndOnboardingProps> = ({ onPrev }) => {
    const answers = useSubject(onboardingAnswer);
    const handleSubmit = async () => {
        try {
            await fetch(`${apiBaseUrl}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(answers.values),
            });
            alert("Answers submitted! Let's rock n' roll!");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={style.container()}>
            <div className={style.content()}>
                <h1 className={style.title()}>You&apos;re battle ready!</h1>
                <p className={style.description()}>
                    Review your selections and get ready to hit the battlefield.
                    To the victor go the spoils.
                </p>
                <div className={style.navigationButtons()}>
                    <Button variant="outline" onClick={onPrev}>
                        Back
                    </Button>

                    <Button variant="primary" onClick={handleSubmit}>
                        Let&apos;s rock n&apos; roll
                    </Button>
                </div>
            </div>
            <div className={style.imageWrapper()}>
                <Image
                    className={style.onboardImage()}
                    src="/images/image-6.png"
                    alt="End Onboarding"
                    width={1200}
                    height={1200}
                    quality={85}
                />
            </div>
        </div>
    );
};

export default EndOnboarding;
const style = atDotCss({
    name: 'End-Onboarding',
    css: `
        @.container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap:125px;
          color: #ffffff;
          min-height: 80vh;
          
        }
          
        @.content {
          max-width: 50%;
          width:500px;
      
        }
          
        @.title {
        opacity: 1;
        color: #FCFCFC;
        font-family: "Inter-Bold";
        font-size: 84px;
        font-weight: 700;
        font-style: Bold;
        letter-spacing: -2.52px;
        text-align: left;
        line-height: 94px;
        }

        @.description{
          opacity: 1;
          color: #FCFCFC;
          font-family: "Inter-SemiBold";
          font-size: 20px;
          font-weight: 600;
          font-style: SemiBold;
          letter-spacing: -0.4px;
          text-align: left;
          line-height: 32px;
            margin: 20px 0 57px 0;
          }

        @.imageWrapper{
          max-width: 50%;
          height: auto;
        
          
        }

        @.onboardImage {
          width: 100%;
          height: auto;
          
        }

      
        @.navigationButtons {
          display: flex;
          gap: 1.25rem;
        }

        @media (max-width: 768px) {
          @.container {
            flex-direction: column;
            align-items: center;
            text-align: center;
              gap:40px;
          }

          @.content {
            max-width: 100%;
            margin-bottom: 20px;
          order:2;
            }

          @.title {
            text-align:center;
            font-size: 50px;
            line-height: 50px;
        }
        
          @.description {
            text-align:center
        
        }
            
          @.navigationButtons {
            display: flex;
            align-items: center;
            justify-content: center; 
          }
      
          @.imageWrapper {
            max-width: 100%;
             order:1;
        }
             @.onboardImage {
          width: 100%;
          height: auto;
          
        }
    `,
});
