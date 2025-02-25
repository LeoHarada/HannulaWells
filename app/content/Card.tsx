import React from "react";
import Image from "next/image";

type CardProps = {
    image: string;
    title: string;
    description: string;
    author: string;
    link: string;
};

const Card = ({ image, title, description, author, link }: CardProps) => {
    return (
        <div className="card w-full sm:w-96 h-[32rem] rounded-lg p-6 bg-white relative flex flex-col justify-end transition-transform duration-500 shadow-lg group hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">
            {/* Background Overlay */}
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Image */}
            <Image
                src={image}
                alt={title}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg filter grayscale group-hover:filter-none transition-all duration-500"
            />

            {/* Card Content */}
            <div className="relative z-10 text-white flex flex-col justify-between h-full">
                <div className="flex flex-col">
                    {/* Title */}
                    <h1 className="text-2xl sm:text-4xl font-bold m-0 transition-all duration-500 line-clamp-3 whitespace-pre-line transform group-hover:scale-105">
                        {title}
                    </h1>

                    {/* Info - Initially Hidden, Appears on Hover */}
                    <div className="info flex flex-col justify-center items-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                        <p className="tracking-wide text-base mt-4 text-center">
                            {description}
                        </p>
                        <a
                            href={link}
                            target="_blank"
                            className="mt-6 py-2 px-4 outline-none border-none rounded bg-white text-black font-bold cursor-pointer transition-colors duration-400 hover:bg-blue-500 hover:text-white"
                        >
                            Read More
                        </a>
                    </div>
                </div>

                {/* Author - Fades out on Hover */}
                <div className="mt-auto">
                    <h2 className="text-lg sm:text-xl font-semibold group-hover:opacity-0 transition-opacity duration-500">
                        {author}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Card;
