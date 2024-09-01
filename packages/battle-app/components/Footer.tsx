import React from 'react';

import { atDotCss } from '@iyio/at-dot-css';
const style = atDotCss({
    name: 'Footer',
    css: `
    @.footer {
        position:relative;
        bottom:0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:135px;

    }
        @.footer p {
            opacity: 1;
            color:#6F767E;
            font-family: "Inter-Medium";
            font-size: 12px;
            font-weight: 500;
            font-style: Medium;
            letter-spacing: -0.12px;
            text-align: left;
            line-height: 12px;}
`,
});
function Footer() {
    return (
        <footer className={style.footer()}>
            <p>2022 © Impactware</p>
            <p>We make dope shit.</p>
        </footer>
    );
}

export default Footer;
