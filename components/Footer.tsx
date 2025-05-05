import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

import Logo from '@/public/logo-white.png';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col mb-12 gap-4 md:gap-32 md:flex-row items-center md:justify-center">
          <div className="space-y-4">
            <div className="flex items-center h-14 w-auto">
              <Image
                src={Logo}
                alt="Logo Interlis"
                className="h-full w-auto object-contain"
                sizes="120px"
                quality={100}
              />
            </div>

            <p className="text-gray-400 mb-4">
              Soluções tecnológicas para laboratórios
            </p>

            {/* <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
            </div> */}
          </div>
          {/* 
          <div>
            <h3 className="text-lg font-bold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Interlis LIS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Módulos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Demo
                </Link>
              </li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="text-lg font-bold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Parceiros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                comercial@interlis.com.br
              </li>
              <li className="text-gray-400">
                +55 (92) 3042-0749
              </li>
              <li className="text-gray-400">
                Boa Vista, RR
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Interlis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}