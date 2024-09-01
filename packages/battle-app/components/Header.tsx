import React from 'react';
import { BarsIcon } from './BarsIcon';
import { Logo } from './Logo';
import { QuestionIcon } from './QuestionIcon';
import { atDotCss } from '@iyio/at-dot-css';
const style = atDotCss({
    name: 'Header',
    css: `
    @.header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:127px;
    
    }
        @media (max-width: 768px) {
            @.header {
                
                align-items: center;
                margin-bottom:50px;
            }
        
        }
`,
});
function Header() {
    return (
        <header className={style.header()}>
            <BarsIcon size="20px" />
            <Logo />
            <QuestionIcon size="20px" />
        </header>
    );
}

export default Header;
