import { BehaviorSubject } from 'rxjs';

const initialStartOnboardingState = false;
export const startOnboarding = new BehaviorSubject<boolean>(
    initialStartOnboardingState
);

const isComplete = false;
export const onboardingStatus = new BehaviorSubject<boolean>(isComplete);
