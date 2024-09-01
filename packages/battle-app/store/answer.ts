import { Answer } from '@battle-time/common';
import { BehaviorSubject } from 'rxjs';

export const onboardingAnswer = new BehaviorSubject<Answer[]>([]);
