"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Carlos Silva",
      role: "Diretor Médico",
      image: "https://mighty.tools/mockmind-api/content/human/90.jpg",
      rating: 5,
      quote: "O sistema Interlis revolucionou a forma como gerenciamos nosso laboratório. A eficiência aumentou e os erros operacionais praticamente desapareceram."
    },
    {
      name: "Renata Santos",
      role: "Gerente de Operações",
      image: "https://mighty.tools/mockmind-api/content/human/120.jpg",
      rating: 5,
      quote: "Implementamos o Interlis há 6 meses e notamos uma melhoria significativa na produtividade. O suporte é excepcional!"
    },
    {
      name: "Marcos Almeida",
      role: "Diretor Técnico",
      image: "https://mighty.tools/mockmind-api/content/human/129.jpg",
      rating: 5,
      quote: "A integração do Interlis com nossos equipamentos foi surpreendentemente fácil. A redução no tempo de entrega dos resultados é impressionante."
    }
  ];

  return (
    <section className="py-20" id="depoimentos">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-content-body font-ubuntu font-bold mb-4">
            O que nossos clientes dizem
          </h2>

          <p className="max-w-2xl mx-auto">
            Veja o que profissionais de laboratórios que utilizam nossa plataforma têm a dizer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-ubuntu font-semibold text-content-body">{testimonial.name}</h3>
                  <p className="text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p>"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}