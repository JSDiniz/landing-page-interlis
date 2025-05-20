"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import OrbitingCircles from "../OrbitingCircles";

import Decoration from "@/public/decoration/decoration-2.svg"

export default function Integration() {
  const integrations = [
    "integration/human.png",
    "integration/mindray.png",
    "integration/qo-logo-indigo.png",
    "integration/radiomter.png",
    "integration/roche.png",

  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // bg-[url(/decoration/rectangle.svg)] bg-contain bg-center

  return (
    <section className="py-20 relative">

      <div className="absolute w-[1000px] h-auto bottom-0 left-0 right-5 opacity-5 -z-10">
        <Image
          src={Decoration}
          alt="Painel de Controle Interlis"
          className="w-full h-auto"
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-content-body font-ubuntu font-bold mb-6">
              Interfaceamento contínuo:
            </h2>

            <p className="mb-6 text-justify">
              Conecte tudo e otimize seu fluxo de trabalho com o Interlis. Graças à sua ampla compatibilidade e adaptabilidade, ele integra facilmente equipamentos de diversas marcas, como <span className="font-semibold">QuidelOrtho</span>, <span className="font-semibold">Roche</span>, <span className="font-semibold">Mindray</span>, <span className="font-semibold">Radiometer</span>, <span className="font-semibold">Human</span> e outras, garantindo um fluxo de dados contínuo. Isso traz segurança, flexibilidade para novas tecnologias e simplifica sua gestão, permitindo focar nos resultados e maximizar seus investimentos.
            </p>

          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto"
          >
            <OrbitingCircles
              radius={150}
              size={80}
              speed={0.5}
              images={integrations}
            />

          </motion.div>
        </div>
      </div>
    </section>
  );
}