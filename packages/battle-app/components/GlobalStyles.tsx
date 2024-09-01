import { atDotCss } from '@iyio/at-dot-css';

export function GlobalStyles() {
    style.root();
    return null;
}

const style = atDotCss({
    name: '_app',
    css: `
    
    html,body{
        margin:0;
        padding:0;
    
    }
    body{
         font-family: 'Inter', sans-serif !important;
        background-color:#000;
        color:#fff;
        height:100%;
        max-height:100dvh;
        
    
    }
    .svg-icon{
        fill:#fff;
    }
`,
});
