"use client";

import { useState, useEffect } from "react";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Track mouse position
    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    // Track hover state for specific elements
    useEffect(() => {
        const addHover = () => setIsHovering(true);
        const removeHover = () => setIsHovering(false);

        // Hover effect on links, buttons, and .cursor-hover class elements
        const hoverElements = document.querySelectorAll("a, button, .cursor-hover");

        hoverElements.forEach((el) => {
            el.addEventListener("mouseenter", addHover);
            el.addEventListener("mouseleave", removeHover);
        });

        return () => {
            hoverElements.forEach((el) => {
                el.removeEventListener("mouseenter", addHover);
                el.removeEventListener("mouseleave", removeHover);
            });
        };
    }, []);

    return (
        <>
            {/* Main Cursor */}
            <div
                className="fixed pointer-events-none z-50 transition-all duration-300 ease-out"
                style={{
                    left: mousePosition.x - 10,
                    top: mousePosition.y - 10,
                    transform: `scale(${isHovering ? 2 : 1})`,
                }}
            >
                <div
                    className={`w-5 h-5 rounded-full border-2 border-white/70 ${isHovering ? "bg-white/20" : "bg-transparent"
                        } transition-all duration-300 relative`}
                >
                    <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
                </div>
            </div>

            {/* Trail */}
            <div
                className="fixed pointer-events-none z-40 transition-all duration-500 ease-out opacity-50"
                style={{
                    left: mousePosition.x - 20,
                    top: mousePosition.y - 20,
                }}
            >
                <div className="w-10 h-10 rounded-full border border-white/30"></div>
            </div>
        </>
    );
}
