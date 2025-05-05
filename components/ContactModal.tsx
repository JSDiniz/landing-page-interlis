"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        institution: "",
        role: "",
        privacy: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] p-6 bg-white">
                <h2 className="text-xl text-center text-content-body font-ubuntu font-semibold mb-4">
                    Preencha com seus dados para melhorar os resultados da sua clínica ou hospital:
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input
                            id="name"
                            placeholder="Nome"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Celular</Label>
                        <Input
                            id="phone"
                            placeholder="(99) 99999-9999"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="institution">Tipo de instituição</Label>
                        <Select
                            value={formData.institution}
                            onValueChange={(value) => setFormData({ ...formData, institution: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>

                            <SelectContent className="bg-white">
                                <SelectItem value="hospital">Hospital</SelectItem>
                                <SelectItem value="clinic">Clínica</SelectItem>
                                <SelectItem value="laboratory">Laboratório</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="role">Cargo</Label>
                        <Select
                            value={formData.role}
                            onValueChange={(value) => setFormData({ ...formData, role: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>

                            <SelectContent className="bg-white">
                                <SelectItem value="director">Diretor</SelectItem>
                                <SelectItem value="manager">Gerente</SelectItem>
                                <SelectItem value="coordinator">Coordenador</SelectItem>
                                <SelectItem value="other">Outro</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="privacy"
                            checked={formData.privacy}
                            onCheckedChange={(checked) =>
                                setFormData({ ...formData, privacy: checked as boolean })
                            }
                        />
                        <label
                            htmlFor="privacy"
                            className="text-sm text-gray-600"
                        >
                            Eu li e concordo com a Política de Privacidade
                        </label>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary via-primary/90 to-primary/50 hover:brightness-110 text-white"
                    >
                        Enviar
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}