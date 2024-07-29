import React, { useEffect, useState, useRef } from 'react';
import blogsData from './jsonfiles/blogs.json';

interface Blog {
    title: string;
    link: string;
    image: string;
}

const Blogs: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setBlogs(blogsData.blogs);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? blogs.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === blogs.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: carouselRef.current.clientWidth * currentIndex,
                behavior: 'smooth',
            });
        }
    }, [currentIndex]);

    return (
        <div className="bg-primary py-10 lg:pb-[200px]">
            <div className="relative mx-auto w-full max-w-4xl lg:pb-[60px]">
                <h2 className="text-4xl font-bold text-rose-400 flex pb-4">BLOGS</h2>
                <div
                    ref={carouselRef}
                    className="flex overflow-hidden relative"
                    style={{ width: '100%', scrollBehavior: 'smooth' }}
                >
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-2"
                            style={{ minHeight: '400px' }}
                        >
                            <div className="max-w-sm  overflow-hidden shadow-lg h-full bg-rose-300 rounded-xl">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{blog.title}</div>
                                    <a
                                        href={blog.link}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-primary border-primary border-2 hover:underline px-4 py-2 rounded-md inline-block"
                                    >
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 p-4">
                    {blogs.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 bg-gray-400 rounded-full ${
                                index === currentIndex ? 'bg-gray-800' : ''
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-slate-400 text-white p-2 rounded-full"
                >
                    &lt;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-slate-400 text-white p-2 rounded-full"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Blogs;
