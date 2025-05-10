"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Monitor from "@/public/fluidity/monitor.png"
import Request1 from "@/public/fluidity/request-1.png"
import Request2 from "@/public/fluidity/request-2.png"
import Decoration from "@/public/decoration/decoration-1.svg"


export default function Fluidity() {
  return (
    <section className="py-20 relative">

      <div className="absolute w-[1000px] h-auto -top-[80%] right-5 opacity-5 -z-10">
        <Image
          src={Decoration}
          alt="Painel de Controle Interlis"
          className="w-full h-auto"
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl text-content-body font-ubuntu font-bold mb-6">
              Busca mais fluidez para as operações do seu laboratório?
            </h2>

            <div className="space-y-4 text-justify">
              <p>
                O Interlis é a escolha certa. Um sistema de gestão focado no aumento de produtividade, com uma interface clara e intuitiva.
              </p>

              <p>
                Leve, rápido e com interfaceamento inteligente, oferece soluções para tudo que você precisa.
              </p>

              <p className="font-semibold">
                Eleve seu laboratório com um novo patamar de eficiência.
              </p>

            </div>

            {/* <div className="bg-white p-5 rounded-lg shadow-md">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">Código</div>
                  <div className="font-medium">TSH</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">Paciente</div>
                  <div className="font-medium">Maria S.</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">Resultado/Unid</div>
                  <div className="font-medium">3.8 µUI/mL</div>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Dados clínicos</button>
                <button className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Visualizar</button>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
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


              <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-[75%] rounded-lg shadow-lg">
                <Image
                  src={Request2}
                  alt="Painel de Controle Interlis"
                  className="rounded-lg w-full h-auto object-contain"
                />
              </div>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[75%] rounded-lg shadow-lg">
                <Image
                  src={Request1}
                  alt="Painel de Controle Interlis"
                  className="rounded-lg w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}