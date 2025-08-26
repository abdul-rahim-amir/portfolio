"use client";

import Image from "next/image";

const testimonials = [
    {
        id: 1,
        text: "I recently hired Abdul Rahim to design the FertilityONE mobile app. He did a fantastic job professional, skilled, and easy to work with. He understood the vision clearly and delivered a smooth, user-friendly app on time. Highly recommend him for any mobile app development work!",
        author: "Afaq Ahmed",
        avatar: "/assets/client1.png", // from public folder
    },
    {
        id: 2,
        text: "I recently hired Abdul Rahim to design the website for my perfume brand.He did a fantastic job professional, skilled, and easy to work with. He understood the vision clearly and delivered a smooth, user-friendly website on time. Highly recommend him for websites development",
        author: "Abdul Basit",
        avatar: "/assets/client2.png",
    },
    {
        id: 3,
        text: "Abdul Rahim developed my website for IRTH Advisors, and I am extremely satisfied with his services. He demonstrated professionalism, delivered the project on time, and ensured the highest quality standards. I highly recommend his services.",
        author: "Rauf Shakori",
        avatar: "/assets/client3.png",
    },
];

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-[#1a1a1a] text-gray-200 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <p className="italic text-sm md:text-base leading-relaxed mb-6">
                “{testimonial.text}”
            </p>
            <div className="flex items-center">
                <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-full mr-3 object-cover"
                />
                <h4 className="text-white font-medium">— {testimonial.author}</h4>
            </div>
        </div>
    );
};

export default function ClientTestimonials() {
    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-white text-5xl md:text-6xl font-bold">
                    What Clients Say
                </h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </section>
    );
}
