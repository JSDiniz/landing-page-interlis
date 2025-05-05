"use client";

import { motion } from "framer-motion";
import { Laptop, Smartphone, Tablet } from "lucide-react";
import Image from "next/image";

import notebook from "@/public/platform/notebook.png"
import Request from "@/public/platform/request.png"

export default function Platform() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative inset-0">
              {/* <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-3xl opacity-70" /> */}

              <div className="w-[600px] h-[400px]">
                <Image
                  src={notebook}
                  alt="Painel de Controle Interlis"
                  className="absolute top-1/2 left-1/2 w-auto h-auto -translate-x-1/2 -translate-y-1/2 scale-125 object-center"
                />
              </div>

              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-[60%] rounded-lg shadow-lg">
                <Image
                  src={Request}
                  alt="Painel de Controle Interlis"
                  className="rounded-lg w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl text-content-body font-ubuntu font-bold mb-6">
              Uma plataforma completa em qualquer dispositivo
            </h2>

            <div className="space-y-4 text-justify">
              <p>
                O Interlis é a escolha certa. Um sistema de gestão focado no aumento de produtividade, com uma interface clara e intuitiva.
              </p>

              <p>
                Um layout multi-gráfico, análise técnica, cotações históricas e mais. Tudo o que procura numa plataforma - num dispositivo à sua escolha.
              </p>
            </div>

            <div className="flex justify-around gap-6 mt-8 text-primary">
              <div className="flex items-center gap-2" data-aos="fade-up-left">
                <Laptop className="h-6 w-6 md:h-8 md:w-8" />
                <span className="font-medium">Desktop</span>
              </div>
              <div className="flex items-center gap-2" data-aos="fade-up-left">
                <Tablet className="h-6 w-6 md:h-8 md:w-8" />
                <span className="font-medium"> Tablet</span>
              </div>
              <div className="flex items-center gap-2" data-aos="fade-up-left">
                <Smartphone className="h-6 w-6 md:h-8 md:w-8" />
                <span className="font-medium">Mobile</span>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}