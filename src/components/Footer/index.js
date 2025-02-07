import { Link } from "react-router-dom";

const Footer = () => (
    <footer className="bg-[#1a2421] border-t border-green-900 py-8 text-white">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-4 lg:gap-32 text-base md:text-sm xl:text-base">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-green-500">GreenEarth</h3>
                    <p>Preserving nature's legacy for future generations.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 lg:mb-4 text-xl">Quick Links</h4>
                    <ul className="space-y-1 lg:space-y-2">
                        <li><Link to="/" className="hover:text-green-500">Home</Link></li>
                        <li><Link to="/about" className="hover:text-green-500">About Us</Link></li>
                        <li><Link to="/mission" className="hover:text-green-500">Our Mission</Link></li>
                        <li><Link to="/resources" className="hover:text-green-500">Resources</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 lg:mb-4 text-xl">Get Involved</h4>
                    <ul className="space-y-1 lg:space-y-2"> 
                        <li><Link to="/volunteer" className="hover:text-green-500">Volunteer</Link></li>
                        <li><Link to="/donate" className="hover:text-green-500">Donate</Link></li>
                        <li><Link to="/faq" className="hover:text-green-500">FAQ</Link></li>
                        <li><Link to="/contact" className="hover:text-green-500">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-2 lg:mb-4">Connect</h4>
                    <div className="flex space-x-4 mb-3 lg:mb-6">
                        <a href="https://facebook.com/" aria-label="Facebook" className="text-gray-400 hover:text-green-400">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://twitter.com/" aria-label="Twitter" className="text-gray-400 hover:text-green-400">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/" aria-label="Instagram" className="text-gray-400 hover:text-green-400">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ginnaram-vishwasri-201399259" aria-label="LinkedIn" className="text-gray-400 hover:text-green-400">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                    <div>
                        <ul className="space-y-1 lg:space-y-2">
                            <li><a href="tel:+91756934511" className="hover:text-green-500">+91 756934511</a></li>
                            <li><a href="mailto:greenearth@gmail.com" className="hover:text-green-500">greenearth@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-900 text-center">
                <p>&copy; {new Date().getFullYear()} GreenEarth. All rights reserved.</p>
        </div>
    </footer>
);
export default Footer;
