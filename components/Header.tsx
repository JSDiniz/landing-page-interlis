"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import Logo from "@/public/logo.png"

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) return;

    const url = `https://${formData.name}.interlis.com.br/auth/login`;
    window.open(url, "_blank");

    setFormData({ name: "" });
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-2"
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center h-14 w-auto"
          >
            <Image
              src={Logo}
              alt="Logo Interlis"
              className="h-full w-auto object-contain"
              sizes="120px"
              quality={100}
            />
          </motion.div>
        </Link>

        <nav>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#5E2C82] to-[#944B9A] hover:brightness-110 text-white"
            onClick={() => setIsModalOpen(true)}
          >
            {/* <Link href="https://www.zendesk.com.br/login/" target="_blank">
              Login
            </Link> */}

            Login
          </motion.button>
        </nav>
      </div>

      <Dialog open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
        <DialogContent className="sm:max-w-[500px] p-6 bg-white">
          <h2 className="text-xl text-center text-content-body font-ubuntu font-semibold mb-4">
            Seu domínio do Interlis
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">seudomínio.interlis.com.br</Label>
              <Input
                id="name"
                placeholder="Seu domínio"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary via-primary/90 to-primary/50 hover:brightness-110 text-white"
            >
              Entrar
            </Button>
          </form>
        </DialogContent>
      </Dialog>

    </header>
  );
}