import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Heart, Shield, Star } from "lucide-react"

export function FinalCTA() {
  const benefits = [
    {
      icon: Heart,
      title: "Autoestima Renovada",
      description: "Desperte sua confiança e sinta-se radiante todos os dias",
    },
    {
      icon: Shield,
      title: "Resultados Duradouros",
      description: "Investimento de longo prazo na sua beleza e bem-estar",
    },
    {
      icon: Star,
      title: "Procedimento Seguro",
      description: "Técnicas avançadas com máxima segurança e naturalidade",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 mb-12">
            <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground">Seu Investimento em Você</h2>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Beleza, Confiança e Bem-Estar. Transforme sua vida com segurança, naturalidade e a expertise de quem é
              referência em medicina estética.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>

          {/* Main CTA */}
          <div className="space-y-8">
            <Card className="p-8 bg-card border-primary/20 max-w-2xl mx-auto">
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-semibold text-foreground">Pronta para Sua Transformação?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Agende sua avaliação gratuita e descubra como podemos realçar sua beleza natural com segurança e
                  resultados excepcionais. Sua nova versão está a um clique de distância.
                </p>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto animate-pulse"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Solicite Seu Orçamento Personalizado
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    ✨ Avaliação gratuita • 📱 Resposta em até 2 horas • 🔒 Consulta sigilosa
                  </p>
                </div>
              </div>
            </Card>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <span>98% Satisfação</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                <span>Resultados Naturais</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12">
            <Card className="p-6 bg-primary/5 border-primary/30 max-w-xl mx-auto">
              <p className="text-primary font-semibold mb-2">⏰ Oferta Limitada</p>
              <p className="text-sm text-muted-foreground">
                Últimas vagas para avaliação gratuita este mês. Não perca a oportunidade de transformar sua autoestima!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
