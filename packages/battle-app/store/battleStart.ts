import { BehaviorSubject } from 'rxjs';

const initialStartBattleState = false;
export const startOnboarding = new BehaviorSubject<boolean>(
    initialStartBattleState
);

const isComplete = false;
export const onboardingStatus = new BehaviorSubject<boolean>(isComplete);
