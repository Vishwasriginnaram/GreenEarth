import "./index.css"
const Blog = () => (
    <div id="blog" className="pt-24 pb-16 px-8 bg-[#243028] text-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-green-500">Blog & Resources</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <article className="bg-[#1a2421] rounded-lg overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f?auto=format&fit=crop&w=800" alt="Latest Conservation Efforts" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Latest Conservation Efforts</h3>
                            <p className="mb-4">Discover our recent successes in plant preservation and the projects we are currently undertaking to protect biodiversity.</p>
                            <button className="text-green-500 hover:text-green-400">Read More →</button>
                        </div>
                    </article>
                    <article className="bg-[#1a2421] rounded-lg overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800" alt="Plant Species Guide" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Plant Species Guide</h3>
                            <p className="mb-4">Learn about endangered plant species in your area and what you can do to help protect them.</p>
                            <button className="text-green-500 hover:text-green-400">Read More →</button>
                        </div>
                    </article>
                    <article className="bg-[#1a2421] rounded-lg overflow-hidden shadow-lg">
                        <img src="https://imgs.search.brave.com/_GiBwVm1RhKjDYQsJKEn3yjYRtV5jgUryHCVMvDmeog/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmNlcy5uY3N1/LmVkdS9tZWRpYS9p/bWFnZXMvQ0hfMTMt/MjVfRWNoZXZlcmlh/X0thdGhsZWVuX01v/b3JlX2NjYnkyMC5q/cGVn" alt="Preservation Techniques" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Innovative Preservation Techniques</h3>
                            <p className="mb-4">Explore the latest methods adopted in plant conservation to ensure the survival of endangered species.</p>
                            <button className="text-green-500 hover:text-green-400">Read More →</button>
                        </div>
                    </article>
                    <article className="bg-[#1a2421] rounded-lg overflow-hidden shadow-lg">
                        <img src="https://imgs.search.brave.com/4e5nxGEl1oJemoLr-b3jlI66zj_dszlJ3f-t4d663uc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc2LzM1LzY4/LzM2MF9GXzU3NjM1/NjgzM19kVFFJSG5L/SmJNWk5BRThycERY/cTBsMWdhZFVqS2tw/ay5qcGc" alt="Local Plants" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Local Plants and Their Importance</h3>
                            <p className="mb-4">Understanding the ecological role of local plant species and their significance in maintaining biodiversity.</p>
                            <button className="text-green-500 hover:text-green-400">Read More →</button>
                        </div>
                    </article>
                    <article className="bg-[#1a2421] rounded-lg overflow-hidden shadow-lg">
                        <img src="https://imgs.search.brave.com/2KcQ0_VkmrzkzawGJW2xmJijJH208g_gzdZGIesH0Zc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MTQ0MjEzMC9waG90/by9tdWx0aXJhY2lh/bC12b2x1bnRlZXJz/LXBsYW50aW5nLWlu/LXB1YmxpYy1wYXJr/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1BYU0xeVJuNnc2/WFpfUjc4b3NXekhw/dFJ2TUFLSzVsbU51/SkFDYjZvcGljPQ" alt="Impact Stories" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Impact Stories from Our Community</h3>
                            <p className="mb-4">Read stories from individuals who have made significant contributions to plant conservation efforts.</p>
                            <button className="text-green-500 hover:text-green-400">Read More →</button>
                        </div>
                    </article>
                    <article className="bg-[#1a2421] rounded-lg overflow-hidden shadow-lg">
                        <img src="https://imgs.search.brave.com/vC93Ccn3hRKpVg6wO3ekTWXrrg9uYoJAL-tOh3cMt90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlLmNv/bS90aG1iL0JDQzlO/Z2U3SkpoN2NJWWly/ZU1PMm9oeWN2OD0v/MTUwMHgwL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpLzEy/LUdldHR5SW1hZ2Vz/LTEyODEzNTM1MF9l/ZGl0ZWQtNC01ODAx/MWIzNjNkZjc4Y2Jj/MjhkODlkMjguanBn" alt="Gardening Tips" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Gardening Tips for Everyone</h3>
                            <p className="mb-4">Learn how you can contribute to conservation by creating a sustainable garden at home.</p>
                            <button className="text-green-500 hover:text-green-400">Read More →</button>
                        </div>
                    </article>
                    <article className="bg-[#1a2421] rounded-lg overflow-hidden shadow-lg">
                        <img src="https://imgs.search.brave.com/a6om_2vlJglHTgLmFK17dr5U4ZUCyHWYOeDc9GdgGIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/NDQ4MTUzMC9waG90/by9jb25kdWN0aW5n/LWV4cGVyaW1lbnRz/LXRvLXRlc3QtaGVy/LWh5cG90aGVzaXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUY1TjFJWXJiZDFD/bUdjaUk4ckhtd2NH/NUEtS0d3REZjNHBX/Z1MzclpadkU9" alt="Scientific Research" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">The Role of Scientific Research in Conservation</h3>
                            <p className="mb-4">Discover how research underpins our conservation efforts and helps us to adjust our strategies.</p>
                            <button className="text-green-500 hover:text-green-400">Read More →</button>
                        </div>
                    </article>
                    <article className="bg-[#1a2421] rounded-lg overflow-hidden shadow-lg">
                        <img src="https://imgs.search.brave.com/zdqhBJ8B1Bj7mu7v3fOqbziRqMe0DyCQIhv_e9tDTKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1pa/Yjc5anp4dnlBZEhN/UFNIR3NGTm0tMzIw/LTgwLmpwZw" alt="Eco-Friendly Practices" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Eco-Friendly Practices at Home</h3>
                            <p className="mb-4">Simple and effective ways you can reduce your ecological footprint and contribute to conservation.</p>
                            <button className="text-green-500 hover:text-green-400">Read More →</button>
                        </div>
                    </article>
                    <article className="bg-[#1a2421] rounded-lg overflow-hidden shadow-lg">
                        <img src="https://imgs.search.brave.com/6a7X93GftlQV3jmHktbmjAmCpfFDRRxMlOaQHE2VMeU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zYXZl/cGxhbnRzLm9yZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8x/Mi9lbmNlbGlhLWNh/bGlmb3JuaWNhLWhw/LWZ1bGwucG5n" alt="How to Get Involved" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">How to Get Involved in Conservation</h3>
                            <p className="mb-4">Find out various ways you can actively participate in conservation efforts locally.</p>
                            <button className="text-green-500 hover:text-green-400">Read More →</button>
                        </div>
                    </article>
                </div>
            </div>
        </div>

)
export default Blog