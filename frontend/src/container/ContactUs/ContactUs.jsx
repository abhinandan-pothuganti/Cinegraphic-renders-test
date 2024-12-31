import React, { useState } from "react";
import axios from "axios";
import './ContactUs.css';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const ContactUs = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\+?\d{10,15}$/.test(phone);

  const submit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!values.name) newErrors.name = "Name is required.";
    if (!values.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(values.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!values.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!validatePhone(values.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!values.message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await axios.post("https://your-backend-url.com/api/v1/post", values);
      alert(res.data.message);
      setSubmitted(true);
      setValues({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      const errorMsg = error.response?.data?.message || "An unexpected error occurred.";
      alert(errorMsg);
    }
  };

  return (
    <div className="contact-container bg-gray-100 mt-10" id="contactus">
      <div className="contact-margin max-w-9xl">
        <div className="context-div">
          <h1 className="context flex justify-center font-cairo font-semibold text-black">Contact Us</h1>
          <div className="line-sr flex justify-center w-full pb-2">
            <div className="line-break h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" aria-hidden="true" role="separator"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8">
            {submitted ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-cairo font-semibold text-green-600 mb-4">
                  Thank you! We will get back to you.
                </h2>
                <p className="text-gray-600 font-cairo">We'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-blue-600 text-white font-cairo px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                {/* Form Fields */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium font-cairo text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={change}
                    className={`mt-1 block w-full rounded-md shadow-sm ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"}`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium font-cairo text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={change}
                    className={`mt-1 block w-full rounded-md shadow-sm ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium font-cairo text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={change}
                    placeholder="+91"
                    className={`mt-1 block w-full rounded-md shadow-sm ${errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"}`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium font-cairo text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={change}
                    rows={2}
                    className={`mt-1 block w-full rounded-md shadow-sm ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"}`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button type="submit" className="message w-full bg-primary-orange font-cairo text-white pb-2 rounded-lg hover:bg-orange-500 transition-colors focus:outline-none">
                  Submit
                </button>
                <p className="text-gray-400 font-cairo">Submit your details. Our team will get back to you as soon as possible.</p>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8">
              <h1 className="text-2xl font-cairo">Cinegraphic Renders</h1>
              <p className="font-cairo">L.B Nagar, Hyderabad</p>
              <p className="flex flex-row gap-2 mt-8 font-cairo font-medium"><FiPhone className="mt-1.5" />+91 90592 9840</p>
              <p className="mb-8 font-cairo">For Enquiries</p>
              <p className="flex flex-row gap-2 font-cairo font-medium"><MdOutlineEmail className="mt-1.5" />charanreddy.d@cinegraphicrenders.in</p>
              <p className="font-cairo">For Careers</p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-cairo font-semibold text-gray-900 mb-6">
                Follow Us
              </h2>
              <div className="flex gap-4 flex-row">
                <FaLinkedin size={32} className="cursor-pointer text-blue-600 hover:scale-110 transition-transform" />
                <FaInstagram size={32} className="cursor-pointer text-pink-500 hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
