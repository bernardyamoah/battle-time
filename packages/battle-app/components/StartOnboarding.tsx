import React from 'react';

import { atDotCss } from '@iyio/at-dot-css';
import Image from 'next/image';
import Button from './Button';
import { startOnboarding } from '../store/battleStart';
const style = atDotCss({
    name: 'StartBattle',
    css: `
        @.container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap:125px;
          color: #ffffff;
          // min-height: 100dvh;
              height:100%;
      
          
        }
          
        @.content {
          max-width: 35%;
          width:395px;
      
        }
          
        @.title {
        opacity: 1;
        color: rgba(252, 252, 252, 1);
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
          color: rgba(252, 252, 252, 1);
          font-family: "Inter-SemiBold";
          font-size: 20px;
          font-weight: 600;
          font-style: SemiBold;
          letter-spacing: -0.4px;
          text-align: left;
          line-height: 32px;
            margin: 20px 0 50px 0;
          }

        @.imageWrapper{
          max-width: 60%;
          height: auto;
          width:800px;
          
        }

        @.onboardImage {
          width: 100%;
          height: auto;
          
        }

      
        @.link {
          opacity: 1;
          display: block;
          color: rgba(111, 118, 126, 1);
          font-family: "Inter-SemiBold";
          font-size: 15px;
          font-weight: 600;
          font-style: SemiBold;
          letter-spacing: -0.15px;
          text-align: left;
          line-height: 24px;
          text-decoration: underline;
          margin-top:25px;
        }

        @.container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap:125px;
          color: #ffffff;
          // min-height: 80vh;
          
        }


        @media (max-width: 768px) {
          @.container {
            flex-direction: column;
            align-items: center;
            text-align: center;
              gap:30px;
          }

        @.content {
            max-width: 100%;
            margin-bottom: 20px;
          
        }

        @.title {
            text-align:center;
            font-size: 50px;
            line-height: 70px;
        }
        
        @.description {
            text-align:center
        
        }

        @.link{
            display: block;
            text-align: center;
        }
        @.imageWrapper {
            max-width: 100%;
        
        }

    `,
});

const StartOnboarding: React.FC = () => {
    const handleStart = () => {
        startOnboarding.next(true);
    };

    return (
        <div className={style.container()}>
            <div className={style.content()}>
                <h1 className={style.title()}>Prepare for Battle</h1>
                <p className={style.description()}>
                    Take a moment to make a few selections and get ready to
                    play!
                </p>
                <Button onClick={handleStart}>Let's get ready</Button>
                <a href="#" className={style.link()}>
                    System requirements
                </a>
            </div>
            <div className={style.imageWrapper()}>
                <Image
                    className={style.onboardImage()}
                    src="/images/image-1.png"
                    alt="Battle Preparation"
                    width={1200}
                    height={1200}
                    quality={85}
                />
            </div>
        </div>
    );
};

export default StartOnboarding;
