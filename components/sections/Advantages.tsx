"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ClipboardCheck, Clock, Lock, Users, Layers, Globe } from "lucide-react";

import Logo from "@/public/logo-icon.svg"

export default function Advantages() {
  const advantages = [
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Gestão de Pacientes e Exames",
      description: "Organize o cadastro de pacientes e o gerenciamento dos exames e resultados."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Controle de Acesso",
      description: "Defina perfis de acesso e níveis de autorização para manter o controle completo das informações."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fluxo Otimizado",
      description: "Organização otimizada de fluxos de exames e agilidade na entrega dos resultados."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Acesso Online",
      description: "Resultados disponíveis online para pacientes através da plataforma segura."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Gestão de Materiais",
      description: "Controle adequado dos kits e reagentes para comunicação dos custos."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Integração da Equipe",
      description: "Maior interação entre equipe com designação completa de tarefas."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 relative" id="vantagens">

      <div className="absolute w-[600px] h-auto bottom-0 left-1/2 -translate-x-1/2  opacity-5 -z-10">
        <Image
          src={Logo}
          alt="Painel de Controle Interlis"
          className="w-full h-auto"
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-content-body font-bold mb-4">
            Vantagens do Interlis
          </h2>

          <p className="text-lg">
            Descubra como nossa plataforma pode transformar os processos do seu laboratório
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl text-content-body font-ubuntu font-semibold mb-2">
                {advantage.title}
              </h3>
              <p>{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}