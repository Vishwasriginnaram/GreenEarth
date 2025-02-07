import { Link } from "react-router-dom";
import "./index.css";

const Login = () => (
  <div className="login-tree min-h-screen flex items-center justify-center pt-24 pb-8 bg-[#1a2421]">
    <div className="w-full flex justify-start px-4 lg:px-32 py-6">
    <div className="max-w-md w-full px-8 py-8 rounded-lg shadow-2xl border border-green-400 bg-[#243028]">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-green-400">Welcome Back</h2>
          <p className="text-white">Sign in to access your GreenEarth account</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="rounded bg-transparent" />
              <label htmlFor="remember" className="ml-2 text-sm text-white">
                Remember me
              </label>
            </div>
            <Link to="#" className="text-sm text-green-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-green-400 text-black py-3 rounded-lg font-medium hover:bg-white transition"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-white">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-400 hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Social Login */}
        <div className="mt-8 pt-6 border-t">
          <p className="text-center text-sm text-white mb-4">Or continue with</p>
          <div className="flex justify-center space-x-4">
            {["google", "facebook", "github"].map((provider) => (
              <button
                key={provider}
                className="p-2 border border-green-400 rounded-lg hover:translate-y-[-2px] transition-transform"
              >
                <i className={`bi bi-${provider} text-xl text-white hover:text-green-400`}></i>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
