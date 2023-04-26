export interface WorkExperience {
 id: number;
 icon: JSX.Element;
 position: string;
 company: string;
 slug: string;
 shortDescription: string;
 link: string | null;
 linkDescription: string;
 startDate: string;
 endDate: string | null;
 responsibilities: string[];
}