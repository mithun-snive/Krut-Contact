import axios from "axios";
import toast from "react-hot-toast";


// ============ Login User API ================

export const contactFormAPI = async ({
    name,
    email,
    phoneNumber,
    profession,
    linkedInProfile,
    companyName,
    hearAboutUs
}:{
    name:string,
    email:string,
    phoneNumber:string,
    profession:string,
    linkedInProfile:string,
    companyName:string,
    hearAboutUs:string,
}) => {
    try {
        const url = "https://dull-teal-ox-kilt.cyclic.app/api/v1/admin/form/Krut-contact"
        const formData = {
            name,
            email,
            phoneNumber,
            profession,
            linkedInProfile,
            companyName,
            hearAboutUs,
        }

        const response = await axios.post(url, formData);
        console.log("1",response)
        if (response?.status === 200 && response?.data) {
            return response.data;
        } else {
            toast.error("Unable to send form, please try later");
        }

    } catch (error) {
        console.log((error as Error).message);
        toast.error((error as Error).message);
    }
}