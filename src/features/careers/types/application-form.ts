export interface JobApplication {
    email: string;
    fullName: string;
    jobTitle: string;
    phone: string;
    resume: File | string | undefined;
}
