"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";

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
        otherInstitution: "",
        role: "",
        otherRole: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-full max-w-[90vw] sm:max-w-[500px] p-6 bg-white overflow-y-auto max-h-[90vh] rounded-lg">
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
                                <SelectItem value="hospital" className="cursor-pointer">Hospital</SelectItem>
                                <SelectItem value="clinic" className="cursor-pointer">Clínica</SelectItem>
                                <SelectItem value="laboratory" className="cursor-pointer">Laboratório</SelectItem>
                                <SelectItem value="other" className="cursor-pointer">Outro</SelectItem>
                            </SelectContent>
                        </Select>

                        {formData.institution === "other" && (
                            <Input
                                placeholder="Digite o tipo de instituição"
                                value={formData.otherInstitution}
                                onChange={(e) => setFormData({ ...formData, otherInstitution: e.target.value })}
                            />
                        )}
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
                                <SelectItem value="director" className="cursor-pointer">Diretor</SelectItem>
                                <SelectItem value="manager" className="cursor-pointer">Gerente</SelectItem>
                                <SelectItem value="coordinator" className="cursor-pointer">Coordenador</SelectItem>
                                <SelectItem value="clinicalAnalyst" className="cursor-pointer">Analista clínico</SelectItem>
                                <SelectItem value="other" className="cursor-pointer">Outro</SelectItem>
                            </SelectContent>
                        </Select>

                        {formData.role === "other" && (
                            <Input
                                placeholder="Digite o cargo"
                                value={formData.otherRole}
                                onChange={(e) => setFormData({ ...formData, otherRole: e.target.value })}
                            />
                        )}
                    </div>

                    {/* <div className="flex items-center space-x-2">
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
                    </div> */}

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>

                        <Textarea
                            id="message"
                            rows={4}
                            placeholder="Sua mensagem..."
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
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