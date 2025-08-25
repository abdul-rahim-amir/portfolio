"use client";

import Image from "next/image";

const testimonials = [
    {
        id: 1,
        text: "I'm genuinely impressed with the final result of the portfolio website. It's visually appealing, easy to navigate, and does an amazing job presenting my projects. The attention to detail and smooth interactions really set it apart. I've already seen a boost in engagement.",
        author: "Emily",
        avatar: "/assets/client1.png", // from public folder
    },
    {
        id: 2,
        text: "This portfolio website turned out even better than I imagined! Its sleek, modern design highlights my work beautifully, and the seamless animations give it a unique edge. I've gotten tons of positive feedback from clients and recruiters.",
        author: "William",
        avatar: "/assets/client1.png",
    },
    {
        id: 3,
        text: "The portfolio website exceeded my expectations! The clean and modern design perfectly showcases my work, and the smooth animations make it stand out. I've received so many compliments from clients and recruiters. Highly recommended!",
        author: "Alex Bell",
        avatar: "/assets/client1.png",
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
