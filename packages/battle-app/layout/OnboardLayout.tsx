import Header from '../components/Header';
import { atDotCss } from '@iyio/at-dot-css';
import Footer from '../components/Footer';

interface OnboardLayoutProps {
    children: React.ReactNode;
}

export default function OnboardLayout({ children }: OnboardLayoutProps) {
    return (
        <div className={style.onboarding()}>
            <Header />
            <main className={style.main()}>{children}</main>
            <Footer />
        </div>
    );
}

const style = atDotCss({
    name: 'OnboardLayout',
    css: `
    @.onboarding {
        display: flex;
        padding: 25px 60px 52px 60px;
        flex-direction: column;
        min-height: 100dvh;
        height:100%;
        
    }

    @.main {
        flex: 1;
        height:100%;
    }
    @media (max-width: 768px) {
    
    @.onboarding {
        display: flex;
        padding: 20px 20px 22px 20px;
        min-height: 100dvh;
        height:100%;
    }

    }

         
`,
});
