"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Eye } from "lucide-react"

export function ResultsGallery() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const results = [
    {
      before: "/before-cosmetic-silhouette.png",
      after: "/enhanced-curves-silhouette.png",
      description: "Resultado natural com aumento de volume e melhora do contorno",
    },
    {
      before: "/before-photo-silhouette.png",
      after: "/placeholder.svg?height=400&width=300",
      description: "Harmonização completa respeitando a anatomia natural",
    },
    {
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      description: "Transformação sutil e elegante com resultados duradouros",
    },
    {
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      description: "Melhora significativa da autoestima e confiança",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % results.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">Resultados que Inspiram</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sua transformação começa aqui. Veja os resultados reais de nossas pacientes que conquistaram a confiança e
            autoestima que sempre desejaram.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              {/* Before Image */}
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-4 text-lg">Antes</h3>
                <div className="relative">
                  <img
                    src={results[currentSlide].before || "/placeholder.svg"}
                    alt="Antes do procedimento"
                    className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute top-2 left-2 bg-muted text-muted-foreground px-2 py-1 rounded text-sm">
                    Antes
                  </div>
                </div>
              </div>

              {/* After Image */}
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-4 text-lg">Depois</h3>
                <div className="relative">
                  <img
                    src={results[currentSlide].after || "/placeholder.svg"}
                    alt="Depois do procedimento"
                    className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
                    Depois
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-center mb-6">
              <p className="text-muted-foreground leading-relaxed">{results[currentSlide].description}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="flex items-center gap-2 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </Button>

              <div className="flex items-center gap-2">
                {results.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="flex items-center gap-2 bg-transparent"
              >
                Próximo
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative group ${index === currentSlide ? "ring-2 ring-primary" : ""}`}
            >
              <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden">
                <img
                  src={result.before || "/placeholder.svg"}
                  alt={`Resultado ${index + 1} - Antes`}
                  className="w-full h-20 object-cover"
                />
                <img
                  src={result.after || "/placeholder.svg"}
                  alt={`Resultado ${index + 1} - Depois`}
                  className="w-full h-20 object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
            </button>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground italic">
            * Imagens ilustrativas. Resultados podem variar de acordo com cada paciente.
          </p>
        </div>
      </div>
    </section>
  )
}
