import { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./index.css";

const Signup = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="signup-tree1 min-h-screen flex items-center justify-center pt-24 pb-8 bg-[#1a2421]">
      <div className="w-full flex justify-end px-4 lg:px-32 py-6">
        <div className="max-w-md w-full px-8 py-8 rounded-lg shadow-2xl border border-green-400 bg-[#243028]">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-green-400">Welcome</h2>
            <p className="text-white">Sign up to access your GreenEarth account</p>
          </div>

          {/* Signup Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium mb-2 text-white">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                required
                className="w-full p-3 rounded-lg bg-[#1a2421] border border-green-900 focus:border-green-500 focus:outline-none text-white"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium mb-2 text-white">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                required
                className="w-full p-3 rounded-lg bg-[#1a2421] border border-green-900 focus:border-green-500 focus:outline-none text-white"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-3 rounded-lg bg-[#1a2421] border border-green-900 focus:border-green-500 focus:outline-none text-white"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="phonenumber" className="block text-sm font-medium mb-2 text-white">
                Phone Number
              </label>
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputProps={{
                  id: "phonenumber",
                  name: "phonenumber",
                  required: true,
                  className: "w-full p-3 rounded-lg bg-[#1a2421] border border-green-900 focus:border-green-500 focus:outline-none text-white",
                }}
                containerClass="react-tel-input"
                inputClass="pl-22" // ✅ Adds left padding
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2 text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="w-full p-3 rounded-lg bg-[#1a2421] border border-green-900 focus:border-green-500 focus:outline-none text-white"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label htmlFor="confirmpassword" className="block text-sm font-medium mb-2 text-white">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                required
                className="w-full p-3 rounded-lg bg-[#1a2421] border border-green-900 focus:border-green-500 focus:outline-none text-white"
                placeholder="Confirm password"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="rounded bg-transparent" />
              <label htmlFor="terms" className="ml-2 text-[12px] md:text-sm text-white">
                I accept the{" "}
                <span className="text-green-400">Terms of Use</span> &{" "}
                <span className="text-green-400">Privacy Policy</span>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-green-400 text-black py-3 rounded-lg font-medium hover:bg-white transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
