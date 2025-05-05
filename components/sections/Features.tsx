"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Monitor from "@/public/features/monitor.png"
import Report from "@/public/features/report.png"

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
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
                  src={Monitor}
                  alt="Painel de Controle Interlis"
                  className="absolute top-1/2 left-1/2 w-auto h-auto -translate-x-1/2 -translate-y-1/2 scale-125 object-center"
                />
              </div>

              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[75%] rounded-lg shadow-lg">
                <Image
                  src={Report}
                  alt="Painel de Controle Interlis"
                  className="rounded-lg w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl text-content-body font-ubuntu font-bold mb-6">
              Tecnologia que organiza, analista que analisa:
            </h2>

            <div className="space-y-4 text-justify">
              <p>
                O Interlis simplifica processos para que você tenha mais tempo para sua expertise: a interpretação analítica.
              </p>

              <p>
                Focando simultaneamente nos setores do seu laboratório, o Interlis oferece crescimento escalável. Desenvolvemos novos módulos sob medida para suas necessidades, assegurando que todas as demandas sejam supridas. A arquitetura do sistema e nosso time garantem escalabilidade e adaptação contínuas.
              </p>
            </div>

            {/* <ul className="space-y-3">
              {[
                "Interfaceamento direto com equipamentos",
                "Acesso imediato a resultados",
                "Gestão de estoque automatizada",
                "Relatórios detalhados e personalizáveis",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="#7C3AED"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}