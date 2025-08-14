"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"

export function ClinicTour() {
  const [currentImage, setCurrentImage] = useState(0)

  const clinicImages = [
    {
      src: "/placeholder.svg?height=500&width=700",
      title: "Recepção Exclusiva",
      description: "Ambiente acolhedor e sofisticado para recebê-la com todo conforto.",
    },
    {
      src: "/placeholder.svg?height=500&width=700",
      title: "Consultório Privativo",
      description: "Espaço reservado para consultas individualizadas e planejamento personalizado.",
    },
    {
      src: "/placeholder.svg?height=500&width=700",
      title: "Sala de Procedimentos",
      description: "Ambiente totalmente esterilizado com tecnologia de ponta para sua segurança.",
    },
    {
      src: "/placeholder.svg?height=500&width=700",
      title: "Área de Recuperação",
      description: "Espaço confortável para relaxamento pós-procedimento com todos os cuidados necessários.",
    },
    {
      src: "/placeholder.svg?height=500&width=700",
      title: "Lounge VIP",
      description: "Área exclusiva para aguardar com máximo conforto e privacidade.",
    },
    {
      src: "/placeholder.svg?height=500&width=700",
      title: "Fachada da Clínica",
      description: "Localização privilegiada com arquitetura moderna e elegante.",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % clinicImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + clinicImages.length) % clinicImages.length)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">Conheça Nossa Clínica</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Um Ambiente de Luxo e Conforto Projetado Especialmente para Você. Cada detalhe foi pensado para proporcionar
            uma experiência única e memorável.
          </p>
        </div>

        {/* Main Image Display */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="overflow-hidden border-primary/20">
            <div className="relative">
              <img
                src={clinicImages[currentImage].src || "/placeholder.svg"}
                alt={clinicImages[currentImage].title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-lg text-sm">
                {currentImage + 1} / {clinicImages.length}
              </div>
            </div>

            {/* Image Info */}
            <div className="p-6">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                {clinicImages[currentImage].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{clinicImages[currentImage].description}</p>
            </div>
          </Card>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 max-w-5xl mx-auto">
          {clinicImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative group overflow-hidden rounded-lg ${
                index === currentImage ? "ring-2 ring-primary" : ""
              }`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-24 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-1 left-1 right-1">
                <div className="text-xs text-white font-medium bg-black/50 px-1 py-0.5 rounded text-center truncate">
                  {image.title}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Clinic Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center bg-card border-primary/20">
            <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Localização Privilegiada</h4>
            <p className="text-sm text-muted-foreground">Centro da cidade com fácil acesso e estacionamento</p>
          </Card>

          <Card className="p-6 text-center bg-card border-primary/20">
            <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4">
              <div className="w-6 h-6 text-primary flex items-center justify-center font-bold">★</div>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Design Exclusivo</h4>
            <p className="text-sm text-muted-foreground">Arquitetura moderna com acabamentos de luxo</p>
          </Card>

          <Card className="p-6 text-center bg-card border-primary/20">
            <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4">
              <div className="w-6 h-6 text-primary flex items-center justify-center font-bold">🔒</div>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Privacidade Total</h4>
            <p className="text-sm text-muted-foreground">Entrada discreta e ambientes reservados</p>
          </Card>

          <Card className="p-6 text-center bg-card border-primary/20">
            <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4">
              <div className="w-6 h-6 text-primary flex items-center justify-center font-bold">✨</div>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Conforto Premium</h4>
            <p className="text-sm text-muted-foreground">Amenidades de luxo para sua comodidade</p>
          </Card>
        </div>

        {/* Location Info */}
        <Card className="p-8 bg-card border-primary/20 text-center max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Visite Nossa Clínica</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Localizada em uma das regiões mais nobres da cidade, nossa clínica oferece fácil acesso, estacionamento
            privativo e total discrição para sua comodidade.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div>📍 Endereço: Rua das Flores, 123 - Jardins</div>
            <div>🕒 Horário: Segunda a Sexta, 8h às 18h | Sábado, 8h às 14h</div>
            <div>📞 Telefone: (11) 99999-9999</div>
          </div>
        </Card>
      </div>
    </section>
  )
}
