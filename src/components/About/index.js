import "./index.css"
const About = () => (
    <div id="about" className="pt-24 pb-16 px-6 text-white bg-[#243028]">
            <h2 className="text-3xl mx-auto max-w-6xl font-bold mb-8 text-green-500">About Us</h2>
            <div className="container mx-auto max-w-6xl flex flex-col gap-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800" alt="Conservation work" className="rounded-lg shadow-lg hover:translate-y-[-10px] hover:shadow-xl ease-in duration-200"/>
                    </div>
                    <div>
                        <p className="text-lg mb-6">
                            GreenEarth is a dedicated organization of botanists, conservationists, and nature enthusiasts working together to protect endangered plant species worldwide.
                        </p>
                        <p className="text-lg mb-6">
                            Founded in 2010, we've successfully preserved over 1,000 plant species and restored numerous natural habitats. We believe that everyone can make a difference.
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <img src="https://saveplants.org/wp-content/uploads/2020/12/plants-in-peril-img-home.png" alt="Conservation work" className="rounded-lg shadow-lg hover:translate-y-[-10px] hover:shadow-xl ease-in duration-200"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-green-500">Why We Save Plants</h2>
                        <p className="text-lg mb-6">
                            Without plants there would be no us. Plants are integral to our quality of life and essential to our very survival. Plants clean the air, water and soil and provide food, clothing, medicine and shelter for the Earth’s 7 billion human inhabitants. 
                        </p>
                        <p className="text-lg mb-6">
                            Plants also hold an immeasurable intrinsic value, providing beauty, tranquility and escape from an ever increasingly chaotic world. Integral to the world’s ecosystem, plants and their incredible diversity make life as we know it possible.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-8 text-green-500 text-center mt-6">How We Save Plants</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 flex flex-col items-center">
                        <div className="w-16 h-16 mb-6">
                            <img src="https://saveplants.org/wp-content/uploads/2020/12/tubes-icon.png" alt="img1"/>
                        </div>
                        <p className="text-white-400 mb-6 text-center">We work hard to continually advance the science of saving rare plant species.</p>
                    </div>
                    <div className="p-8 flex flex-col items-center">
                        <div className="w-16 h-16 mb-6">
                            <img src="https://saveplants.org/wp-content/uploads/2020/12/maple-icon.png" alt="img2"/>
                        </div>
                        <p className="text-white-400 mb-6 text-center">We apply this science to save imperiled plant species.</p>
                    </div>
                    <div className="p-8 flex flex-col items-center">
                        <div className="w-16 h-16 mb-6">
                            <img src="https://saveplants.org/wp-content/uploads/2020/12/advocacy-icon.png" alt="img3"/>
                        </div>
                        <p className="text-white-400 mb-6 text-center">We advocate on behalf of our collective efforts to Save Plants and promote the value of plants to humankind.                        </p>
                    </div>
                </div>
            </div>
        </div>

)
export default About