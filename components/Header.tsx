"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import Logo from "@/public/logo.png"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-2"
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center h-14 w-auto"
          >
            <Image
              src={Logo}
              alt="Logo Interlis"
              className="h-full w-auto object-contain"
              sizes="120px"
              quality={100}
            />
          </motion.div>
        </Link>

        <nav>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#5E2C82] to-[#944B9A] hover:brightness-110 text-white"
          >
            <Link href="https://www.zendesk.com.br/login/" target="_blank">
              Login
            </Link>
          </motion.div>
        </nav>
      </div>
    </header>
  );
}