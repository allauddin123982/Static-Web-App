import React, { useState, useEffect } from 'react'

export default function ContactComp() {
    const a = { username: "", userlastname: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(a);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        validate(formValues);
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    const validate = () => {
        const errors = {};
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!formValues.username) {
            errors.username = "User name  required";
        }
        if (!formValues.userlastname) {
            errors.userlastname = "User lastname  required";
        }
        if (!formValues.email) {
            errors.email = "User email  required";
        } else if (!regex.test(formValues.email)) {
            errors.email = "Invalid email";
        }
        if (!formValues.password) {
            errors.password = "User pasword required";
        }
        return errors;
    }

    return (
        <>
            <span className="flex justify-center items-center m-10 text-3xl font-bold text-blue">
                Contact Us
            </span>

            <div className=" flex justify-center items-center m-10">

                <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                    {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='bg-gray-dark rounded text-white text-xl flex justify-center p-4  '>Signed in successfully</div>)
                        :
                        (
                            <pre></pre>
                        )}
                    <div className="flex flex-wrap -mx-3 mb-6 mt-5">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input onChange={handleChange} value={formValues.username} name="username" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            <p className='text-red font-bold pb-2'>{formErrors.username}</p>
                        </div>
                        <div className=" w-full md:w-1/2 px-3">
                            <label className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input onChange={handleChange} value={formValues.userlastname} name="userlastname" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                            <p className='text-red font-bold'>{formErrors.userlastname}</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="grid-last-name">
                                Email
                            </label>
                            <input onChange={handleChange} value={formValues.email} name="email" className="appearance-none block w-[510px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-email" type="text" placeholder="Email" />
                        </div>
                    </div>
                    <p className='pb-2 text-red font-bold' >{formErrors.email}</p>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Password
                            </label>
                            <input onChange={handleChange} name='password' value={formValues.password} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="" />
                        </div>
                    </div>
                    <p className='text-red font-bold'>{formErrors.password}</p>

                    <button className='bg-blue text-white font-bold text-xl rounded p-2  w-full mt-2'>Submit</button>



                </form>



            </div>
        </>
    )
}
