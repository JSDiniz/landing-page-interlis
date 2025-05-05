"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import Dashboard from "@/public/dashboard.png"
import DecorationLeft from "@/public/decoration-left.svg"
import DecorationRight from "@/public/decoration-right.svg"
import { useState } from "react";
import { ContactModal } from "../ContactModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-[866px] pt-32 pb-20 relative rounded-b-[30px] bg-tertiary">
      {/* Grid pattern for decoration */}
      <div className="absolute inset-0 z-0">
        <Image
          src={DecorationLeft}
          alt="Decoração esquerda"
          className="absolute left-[3%] top-[15%] w-auto h-auto max-w-none"
        />

        <Image
          src={DecorationRight}
          alt="Decoração esquerda"
          className="absolute right-[3%] top-[25%] w-auto h-auto max-w-none"
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-ubuntu text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center max-w-4xl text-content-body">
              Soluções <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5E2C82] to-[#944B9A]">Tecnológicas</span> Para O Seu Laboratório
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-8 text-lg text-center max-w-xl">
              Saiba por que o Interlis é a solução perfeita em sistemas de gestão laboratorial.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-lg bg-gradient-to-r from-[#5E2C82] to-[#944B9A] hover:brightness-110 text-white"
          >
            Em contato conosco
            <ChevronRight size={24} />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 relative max-w-5xl mx-auto"
        >
          <Image
            src={Dashboard}
            alt="Interface do Interlis"
            width={1000}
            height={600}
            className="absolute inset-0 z-10 w-full h-auto object-cover rounded-lg shadow-xl "
          />

          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[90%] h-20 rounded-full blur-2xl bg-secondary"></div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}