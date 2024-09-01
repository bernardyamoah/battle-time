import { startOnboarding } from '../store/onboarding';

import Onboard from '../components/Onboard';
import { useEffect, useState } from 'react';
import OnboardLayout from '../layout/OnboardLayout';
import StartOnboarding from '../components/StartOnboarding';

export default function Index() {
    const [hasOnbordingStarted, setHasOnboardingStarted] = useState(false);
    useEffect(() => {
        const subscription = startOnboarding.subscribe(setHasOnboardingStarted);
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <OnboardLayout>
            {hasOnbordingStarted ? <Onboard /> : <StartOnboarding />}
        </OnboardLayout>
    );
}
