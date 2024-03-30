import React from 'react';
import Spline from '@splinetool/react-spline';

const aboutUsData = [
    {
        title: 'Alen Basil Thelappilly',
        image: 'https://via.placeholder.com/300x200', 
        description: 'Backend Guru ! I love doing backend and making the website functional',
    },
    {
        title: 'Rathod Smit Amitkumar',
        image: 'https://via.placeholder.com/300x200',
        description: 'Frontend Freak ! Creative by birth 😎 Love adding designs and animations to website specially 3D',
    },
    {
        title: 'Vignesh',
        image: 'https://via.placeholder.com/300x200', 
        description: 'Something of this , something of that ! I love both frontend and backend',
    },
    {
        title: 'Vikas',
        image: 'https://via.placeholder.com/300x200', 
        description: 'I am the concept guy ! I love to come up with new ideas and concepts for the website',
    }
];

// Card component
const AboutUsCard = ({ title, image, description }) => {
    return (
        <div className="bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <img src={image} alt={title} className="w-full h-2/3 object-cover rounded-t-lg" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </div>
        </div>
    );
};

// About Us page component
const AboutUsPage = () => {
    return (
        <div className="bg-black h-screen overflow-hidden">
            {/* Original main page navbar */}
            <nav className="bg-gray-800 p-4 flex justify-end">
                <div className="flex justify-center items-center">
                    <a href="/" className="text-white mr-8 hover:text-teal-400">Home</a>
                    <a href="/about" className="text-white mr-8 hover:text-teal-400">About Us</a>
                    {/* Add other navigation links if needed */}
                </div>
            </nav>

            <div className="flex justify-center items-center h-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
                    {aboutUsData.map((card, index) => (
                        <AboutUsCard key={index} {...card} />
                    ))}
                </div>
            </div>
            <Spline scene="https://prod.spline.design/hiAaaV5HYHkRByqu/scene.splinecode" />
        </div>
    );
};

export default AboutUsPage;


