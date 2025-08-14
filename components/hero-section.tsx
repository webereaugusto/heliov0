import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Clock, MessageCircle, Users, Award, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-card via-background to-muted overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-spa-interior.png"
          alt="Ambiente luxuoso da clínica"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Transforme Seus Glúteos
                <span className="block text-primary">com Elegância</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Conquiste o bumbum dos seus sonhos de forma segura, natural e sem cirurgia, com a expertise do Dr. Hélio
                Millan na Lilabelle Luxé.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Resultados naturais e harmoniosos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Procedimento minimamente invasivo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Aumento da autoestima e confiança</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Ambiente exclusivo e luxuoso</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agende Sua Avaliação Gratuita via WhatsApp
              </Button>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Últimas vagas para avaliação gratuita este mês!</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Social Proof */}
          <div className="space-y-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-card/80 backdrop-blur-sm border-primary/20">
                <div className="text-3xl font-bold text-primary font-serif">+1000</div>
                <div className="text-sm text-muted-foreground">Procedimentos Realizados</div>
              </Card>
              <Card className="p-6 text-center bg-card/80 backdrop-blur-sm border-primary/20">
                <div className="text-3xl font-bold text-primary font-serif">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
              </Card>
              <Card className="p-6 text-center bg-card/80 backdrop-blur-sm border-primary/20">
                <div className="text-3xl font-bold text-primary font-serif">15</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </Card>
              <Card className="p-6 text-center bg-card/80 backdrop-blur-sm border-primary/20">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Avaliação Média</div>
              </Card>
            </div>

            {/* Social Proof */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background"
                    ></div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-foreground">+500 clientes satisfeitas</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                "Resultados incríveis e atendimento excepcional. Recomendo!"
              </p>
            </Card>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Segurança Certificada</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Especialista Reconhecido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
