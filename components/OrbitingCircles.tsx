// components/OrbitingCircles.tsx
"use client";

import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import Logo from "@/public/logo-icone.jpg"

interface OrbitingCirclesProps {
    images: string[];
    radius?: number;
    size?: number;
    speed?: number;
    reverse?: boolean;
    width?: number;   // novo
    height?: number;  // novo
}

export default function OrbitingCircles({
    images,
    radius = 100,
    size = 40,
    speed = 1,
    reverse = false,
    width = 300,
    height = 300,
}: OrbitingCirclesProps) {
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useAnimationFrame((t) => {
        const angleStep = (2 * Math.PI) / images.length;

        images.forEach((_, index) => {
            const angle = ((t / 1000) * speed + angleStep * index) * (reverse ? -1 : 1);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            const el = itemsRef.current[index];
            if (el) {
                el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
            }
        });
    });

    return (
        <div
            className="relative rounded-full border-dashed border border-purple-500"
            style={{ width, height }}
        >
            <div
                className="absolute"
                style={{
                    left: width / 2,
                    top: height / 2,
                }}
            >
                {images.map((logo, index) => (
                    <div
                        key={index}
                        ref={(el) => (itemsRef.current[index] = el)}
                        className="absolute "
                        style={{
                            width: size,
                            height: size,
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <div className="w-full h-full flex items-center justify-center p-2 bg-white border border-gray-300 rounded-full shadow-secondary shadow-md">
                            <Image
                                src={logo}
                                alt={`logo-${index}`}
                                width={size}
                                height={size}
                                className="w-full object-contain"
                            />
                        </div>

                    </div>
                ))}
            </div>

            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-0">
                <Image
                    src={Logo}
                    alt="Logo Interlis"
                    className="h-full w-auto object-contain"
                    sizes="120px"
                    quality={100}
                />
            </div>
        </div>
    );
}
