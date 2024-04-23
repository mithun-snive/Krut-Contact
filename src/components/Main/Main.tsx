import { useState } from "react";
import KrutLoaderModal from "../KrutLoaderModal";
import toast, { Toaster } from "react-hot-toast";
import { contactFormAPI } from "../../services/APIservice";

function Main() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [profession, setProfession] = useState("");
    const [linkedInProfile, setLinkedInProfile] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [hearAboutUs, setHearAboutUs] = useState("");
    const [loading, setLoading] = useState(false);

    //---------------_ Handle User Login ----------------------------------
    async function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault()
        if (!name.trimEnd() || !email.trimEnd() || !phoneNumber.trimEnd() || !profession.trimEnd() || !hearAboutUs.trimEnd()) toast.error("Please fill in all fields")

        setLoading(true); //loading modal popup
        const response = await contactFormAPI({
            name,
            email,
            phoneNumber,
            profession,
            linkedInProfile,
            companyName,
            hearAboutUs
        });
        console.log("2",response)//test

        if (response) {
            // contact API call here
            toast.success("Form submitted successfully");
            setLoading(false); //loading modal popup

        } else {
            setLoading(false);
        }
    }

    return (
        <div className="container-fluid">
            <Toaster />
            <div className="sm:mt-10 mx-auto">

                <section id="banner" className="w-full flex flex-col justify-between sm:flex-row p-6 gap-10 pb-12">
                    <div className="sm:w-[50%] px-10">
                        <h1 className="text-4xl text-center sm:text-5xl lg:text-6xl sm:text-left text-white">
                            Introducing The <span className="font-bold text-krutNeon">Krut AI</span>
                        </h1>
                        <p className=" text-xl mt-4 text-center sm:text-left text-white font-light">
                            We supercharge creators of all levels with an AI powered creative suite tailored for them.
                        </p>

                        <br />
                        <h1 className="text-4xl text-center sm:text-5xl lg:text-8xl sm:text-left text-white font-bold">
                            Website
                        </h1>
                        <h1 className="text-4xl text-center sm:text-5xl lg:text-8xl sm:text-left text-white font-bold">
                            Coming <span className=" text-krutNeon">Soon!</span>
                        </h1>

                        <p className=" text-4xl font-bold mt-4 text-center sm:text-left text-white">
                            {/* 21st April 2024 */}
                        </p>

                        {/* social media */}
                        <div className="flex mt-10 justify-center sm:justify-start">
                            <div className="flex space-x-5">
                                <a href="https://discord.gg/MpTy5X5n" target="_blank">
                                    <img className='h-8' src="/icons/discord.png" alt="discord" />
                                </a>
                                <a href="https://www.linkedin.com/company/krut-ai/" target="_blank">
                                    <img className='h-8' src="/icons/linkedIn.png" alt="linkedIn" />
                                </a>
                                <a href="https://www.instagram.com/_krut.ai/" target="_blank">
                                    <img className='h-8' src="/icons/instagram.png" alt="instagram" />
                                </a>
                                <a href="https://x.com/krutAI_?t=jXEsIN-SWtldK_oak7WyZQ&s=09" target="_blank">
                                    <img className='h-8' src="/icons/x.png" alt="x" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="sm:w-[40%] flex justify-center">
                        <div className="w-[80%]" >
                            <div className="max-w-[400px]">
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="mb-3 mt-3">
                                        <input
                                            type="text"
                                            className="block w-full px-3 py-3.5 rounded-2xl border-0 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            className="block w-full px-3 py-3.5 rounded-2xl border-0 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="tel"
                                            className="block w-full px-3 py-3.5 rounded-2xl border-0 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6"
                                            placeholder="Phone Number"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="block w-full px-3 py-3.5 rounded-2xl border-0 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6"
                                            placeholder="Profession"
                                            value={profession}
                                            onChange={(e) => setProfession(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="block w-full px-3 py-3.5 rounded-2xl border-0 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6"
                                            placeholder="LinkedIn Profile"
                                            value={linkedInProfile}
                                            onChange={(e) => setLinkedInProfile(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="block w-full px-3 py-3.5 rounded-2xl border-0 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6"
                                            placeholder="Company Name(if Any)"
                                            value={companyName}
                                            onChange={(e) => setCompanyName(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            className="block w-full px-3 py-3.5 rounded-2xl border-0 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6"
                                            placeholder="How did you hear about us"
                                            value={hearAboutUs}
                                            onChange={(e) => setHearAboutUs(e.target.value)}
                                        />
                                    </div>
                                    <br />
                                    <div className="text-center font-bold">
                                        <button type="submit" className="px-16 py-3 rounded-3xl bg-krutNeon">
                                            Book a Demo
                                        </button>
                                    </div>
                                </form>
                               
                            </div>
                        </div>
                    </div>

                </section>

                {loading && <KrutLoaderModal isLoading={loading} />}

            </div>
        </div>
    )
}

export default Main