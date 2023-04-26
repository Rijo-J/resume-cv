import { WorkExperience } from './WorkExperience';

export type WorkDetails = Pick<WorkExperience, 'shortDescription' | 'link' | 'linkDescription' | 'startDate' | 'endDate' | 'responsibilities'>