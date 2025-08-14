import React, { useState } from "react";
import WorldMap from "../assets/world.jpg";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [captchaVisible, setCaptchaVisible] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formDataCache, setFormDataCache] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setFormDataCache(formData); // Save temporarily

    // Show CAPTCHA on first submit click
    if (!captchaVisible) {
      setCaptchaVisible(true);
      return;
    }

    // If already visible but not completed
    if (!captchaValue) {
      Swal.fire({
        icon: "warning",
        title: "Verify you're human",
        text: "Please complete the CAPTCHA before submitting.",
      });
      return;
    }

    submitForm(formData);
  };

  const submitForm = async (formData) => {
    formData.append("access_key", "d409d5ff-6593-475b-b401-f2a1d454a688");
    const json = JSON.stringify(Object.fromEntries(formData));

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent!",
        icon: "success",
      });
      setCaptchaValue(null);
      setCaptchaVisible(false);
      document.querySelector("form").reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div
      className="main_contact flex w-full h-screen flex-col"
      style={{
        backgroundImage: `url(${WorldMap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="contact_overlay"></div>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <div className="main_contacter z-10 flex w-full h-full flex-row">
          <div className="contact_inputs w-full h-full flex justify-center items-center flex-col gap-5">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>

            {/* Inputs */}
            <div className="name-container w-full flex flex-col sm:flex-row justify-center items-center gap-5 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-white w-full sm:w-[300px] h-[45px] px-4 py-2 rounded-md border border-gray-300"
                name="First Name"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-white w-full sm:w-[300px] h-[45px] px-4 py-2 rounded-md border border-gray-300"
                name="Last Name"
                required
              />
            </div>

            <input
              type="number"
              placeholder="Mobile Number (Optional)"
              className="bg-white w-full sm:w-[620px] h-[45px] px-4 py-2 rounded-md border border-gray-300"
              name="Contact Number"
            />

            <input
              type="email"
              placeholder="Email"
              required
              className="bg-white w-full sm:w-[620px] h-[45px] px-4 py-2 rounded-md border border-gray-300"
              name="Email"
            />

            <textarea
              className="w-full sm:w-[620px] h-[60px] px-4 py-2 rounded-md border border-gray-300 bg-white resize-none"
              placeholder="Enter your message here"
              required
              name="message"
            ></textarea>
            {/* Conditional CAPTCHA */}
            {captchaVisible && (
              <div className="mt-4">
                <ReCAPTCHA
                  sitekey="6LctZZorAAAAAPFEjgQNnwjU6Ow65dJfCnAJ51jH"
                  onChange={(val) => {
                    setCaptchaValue(val);
                    if (val && formDataCache) {
                      submitForm(formDataCache);
                    }
                  }}
                />
              </div>
            )}
            {/* Submit Button */}
            <div className="button_container w-[32.5%] h-auto flex justify-end items-center gap-2">
              <a href="/" className="text-blue-400 text-xs">
                -- Back to Main Page
              </a>
              <button
                className="btn bg-blue-400 text-white px-4 py-2 rounded-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
