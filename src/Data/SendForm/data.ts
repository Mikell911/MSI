import axios, { AxiosError, AxiosResponse } from 'axios';
import { FormData } from "../../Page/ContactUs/types";

export const submitFormData = async (formData: FormData): Promise<void> => {
    try {
        const response: AxiosResponse = await axios.post('/contact-us', formData);
        console.log('Success:', response.data);
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
            console.error('Server responded with error status:', axiosError.response.status);
            console.error('Error data:', axiosError.response.data);
        } else if (axiosError.request) {
            console.error('No response received from the server');
        } else {
            console.error('Error during request setup:', axiosError.message);
        }
    }
}