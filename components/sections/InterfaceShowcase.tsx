"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clock, BarChart, Activity } from "lucide-react";

const features = [
  {
    icon: <Activity size={24} />,
    title: "Gerenciamento Inteligente",
    description: "Integração perfeita entre todos os departamentos e sistemas existentes.",
  },
  {
    icon: <Clock size={24} />,
    title: "Fluidez Operacional",
    description: "Plataforma otimizada para máxima eficiência no dia a dia.",
  },
  {
    icon: <BarChart size={24} />,
    title: "Gestão Completa",
    description: "Controle total sobre as operações do seu laboratório.",
  },
];

export default function InterfaceShowcase() {
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
    <section className="pt-72 pb-20 relative z-10">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-content-body font-ubuntu font-bold mb-4">
            Conheça a interface do Interlis
          </h2>

          <p className="text-lg">
            Uma plataforma intuitiva que simplifica a interface com tecnologia robusta.
          </p>

        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >

          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-purple-100 text-primary rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl text-content-body font-ubuntu font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}