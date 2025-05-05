"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import Businessperson from "./../../public/businessperson.png"
import { useState } from "react";
import { ContactModal } from "../ContactModal";

export default function Cta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(145deg,rgba(252,247,252, 0.8)), url('/businessperson.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 skew-y-3 -z-10 transform-gpu"></div> */}

      <div className="container max-w-7xl mx-auto px-4 pt-10">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl text-content-body font-ubuntu font-bold mb-6">
              Interessado Em Aumentar A <samp className="bg-gradient-to-r from-[#5E2C82] to-[#944B9A] bg-clip-text text-transparent">Fluidez</samp> Em Seu Laboratório?
            </h2>

            <p className="mb-8 text-lg">
              Entre em contato conosco e descubra como o Interlis pode transformar a gestão do seu laboratório.
            </p>
          </motion.div>

          <div>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => setIsModalOpen(true)}
              className="text-lg px-8 py-4 rounded-lg bg-gradient-to-r from-[#5E2C82] to-[#944B9A] hover:brightness-110 text-white"
            >
              Clique aqui
            </motion.button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}