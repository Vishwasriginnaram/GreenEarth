import { Component } from "react"
import { Link } from "react-router-dom"

import "./index.css"

class Navbar extends Component {
    state = { onMobile: false, activeButton: "/" }

    onClickMobileMenu = () => {
        this.setState(prevState => ({ onMobile: !prevState.onMobile }))
    }

    onHideNav = () => {
        this.setState({onMobile:false})
    }

    onButtonClick = (path) => {
        this.setState({ activeButton: path })
    }

    render() {
        const { onMobile, activeButton } = this.state

        return (
            <nav className="fixed w-full bg-[#1a2421]/90 backdrop-blur-sm z-50 border-b border-green-900">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" onClick={() => this.onButtonClick("/")}>
                            <button className="text-2xl font-bold text-green-500">GreenEarth</button>
                        </Link>
                        <div className="hidden lg:flex space-x-6 text-white">
                            {[
                                { path: "/", label: "Home" },
                                { path: "/about", label: "About Us" },
                                { path: "/mission", label: "Our Mission" },
                                { path: "/get-involved", label: "Get Involved" },
                                { path: "/blog", label: "Blog & Resources" },
                                { path: "/contact", label: "Contact" }
                            ].map(({ path, label }) => (
                                <Link key={path} to={path} onClick={() => this.onButtonClick(path)}>
                                    <button
                                        className={`nav-link hover:text-green-500 relative ${
                                            activeButton === path ? "border-b-2 border-green-500 text-green-500" : ""
                                        }`}
                                    >
                                        {label}
                                    </button>
                                </Link>
                            ))}
                        </div>
                        <div className="hidden lg:flex gap-x-2">
                            <Link to="/login" onClick={() => this.onButtonClick("/login")}>
                                <button
                                    className={`px-4 py-2 rounded-lg bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 transition-all ${
                                        activeButton === "/login" ? "bg-green-400 text-gray-900" : ""
                                    }`}
                                >
                                    Login
                                </button>
                            </Link>
                            <Link to="/signup" onClick={() => this.onButtonClick("/signup")}>
                                <button
                                    className={`px-4 py-2 rounded-lg bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 transition-all ${
                                        activeButton === "/signup" ? "bg-green-400 text-gray-900" : ""
                                    }`}
                                >
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                        <button className="lg:hidden text-3xl text-white" onClick={this.onClickMobileMenu}>
                            <i className="bi bi-list font-extrabold"></i>
                        </button>
                    </div>
                </div>

                <div id="mobileMenu" className={`lg:hidden bg-[#1a2421] text-white border-t border-green-900 ${onMobile ? "block" : "hidden"}`}>
                    <div className="flex flex-col space-y-4 p-4 text-center">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/about", label: "About Us" },
                            { path: "/mission", label: "Our Mission" },
                            { path: "/get-involved", label: "Get Involved" },
                            { path: "/blog", label: "Blog & Resources" },
                            { path: "/contact", label: "Contact" },
                            { path: "/login", label: "Login" },
                            { path: "/signup", label: "Sign Up" }
                        ].map(({ path, label }) => (
                            <Link key={path} to={path} onClick={() => this.onButtonClick(path)}>
                                <button onClick={this.onHideNav}
                                    className={`hover:text-green-400 ${
                                        activeButton === path ? "border-b-2 border-green-500 text-green-400" : ""
                                    }`}
                                >
                                    {label}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar