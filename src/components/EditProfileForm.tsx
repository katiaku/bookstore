import { useState } from "react";

export default function EditProfileForm() {

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        photo: ''
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { firstName, lastName, email, photo } = event.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }
    
    return (
        <form className="mx-4 w-full md:w-[350px] font-poppins flex flex-col p-4 text-slate-200">
            <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-semibold">
                    First Name:
                </label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    className="text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                    value={formValues.firstName}
                    name="firstName"
                    onChange={handleInputChange}
                />
                <div className="h-4"></div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="lastName" className="text-sm font-semibold">
                    Last Name:
                </label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    className="text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                    value={formValues.lastName}
                    name="lastName"
                    onChange={handleInputChange}
                />
                <div className="h-4"></div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="email@email.com"
                    className="text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                    value={formValues.email}
                    name="email"
                    onChange={handleInputChange}
                />
                <div className="h-4"></div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="photo" className="text-sm font-semibold">
                    Photo:
                </label>
                <input
                    type="text"
                    id="photo"
                    placeholder="https://photo.jpg"
                    className="text-sm bg-transparent border-[1px] border-slate-200 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                    value={formValues.photo}
                    name="photo"
                    onChange={handleInputChange}
                />
                <div className="h-4"></div>
            </div>

            <button className="bg-orange-400 text-white px-4 py-[.8rem] mt-4 font-bold">
                Submit Data
            </button>
        </form>
    )
}
