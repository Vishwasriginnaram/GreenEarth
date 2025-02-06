const Footer = () => (
    <footer className="bg-[#1a2421] border-t border-green-900 py-8 text-white">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-4 lg:gap-10 text-base md:text-sm xl:text-base">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-green-500">GreenEarth</h3>
                    <p>Preserving nature's legacy for future generations.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 lg:mb-4 text-xl">Quick Links</h4>
                    <ul className="space-y-1 lg:space-y-2">
                        <li><button className="hover:text-green-500">Home</button></li>
                        <li><button className="hover:text-green-500">About Us</button></li>
                        <li><button className="hover:text-green-500">Our Mission</button></li>
                        <li><button className="hover:text-green-500">Resources</button></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 lg:mb-4 text-xl">Get Involved</h4>
                    <ul className="space-y-1 lg:space-y-2"> 
                        <li><button className="hover:text-green-500">Volunteer</button></li>
                        <li><button className="hover:text-green-500">Donate</button></li>
                        <li><button className="hover:text-green-500">FAQ</button></li>
                        <li><button className="hover:text-green-500">Contact</button></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-2 lg:mb-4">Connect</h4>
                    <div className="flex space-x-4 mb-3 lg:mb-6">
                        <a href="https://facebook.com/" className="text-gray-400 hover:text-green-400"><i className="bi bi-facebook"></i></a>
                        <a href="https://twitter.com/" className="text-gray-400 hover:text-green-400"><i className="bi bi-twitter"></i></a>
                        <a href="https://www.instagram.com/" className="text-gray-400 hover:text-green-400"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/ginnaram-vishwasri-201399259" className="text-gray-400 hover:text-green-400"><i className="bi bi-linkedin"></i></a>
                    </div>
                    <div>
                        <ul className="space-y-1 lg:space-y-2">
                            <li>+91 756934511</li>
                            <li>greenearth@gmail.com</li>
                        </ul>
                    </div>
                </div>
                {/* <div className="hidden md:block">
                    <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
                    <form className="flex">
                        <input type="email" placeholder="Enter your email" className="bg-gray-800 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-400"/>
                        <button className="bg-green-400 text-gray-900 px-4 py-2 rounded-r-lg hover:bg-green-500">Subscribe</button>
                    </form>
                </div> */}
            </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-900 text-center">
                <p>&copy; 2025 GreenEarth. All rights reserved.</p>
        </div>
    </footer>
)
export default Footer   