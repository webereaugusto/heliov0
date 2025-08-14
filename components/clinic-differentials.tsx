import { Card } from "@/components/ui/card"
import { Shield, Heart, Award, Sparkles, Users, Clock } from "lucide-react"

export function ClinicDifferentials() {
  const differentials = [
    {
      icon: Shield,
      title: "Segurança Absoluta",
      description:
        "Protocolos rigorosos de segurança, produtos certificados e ambiente totalmente esterilizado para sua tranquilidade.",
      features: ["Produtos aprovados pela ANVISA", "Ambiente hospitalar", "Protocolos internacionais"],
    },
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      description: "Cada paciente é única. Oferecemos consultas individualizadas e planos de tratamento exclusivos.",
      features: ["Consulta individual", "Plano personalizado", "Acompanhamento dedicado"],
    },
    {
      icon: Award,
      title: "Resultados de Excelência",
      description: "Combinamos técnica avançada com sensibilidade artística para resultados naturais e harmoniosos.",
      features: ["Técnicas avançadas", "Resultados naturais", "Satisfação garantida"],
    },
    {
      icon: Sparkles,
      title: "Tecnologia de Ponta",
      description: "Utilizamos os equipamentos mais modernos e produtos de última geração para máxima eficácia.",
      features: ["Equipamentos modernos", "Produtos premium", "Inovação constante"],
    },
    {
      icon: Users,
      title: "Ambiente Exclusivo",
      description: "Clínica projetada para oferecer máximo conforto, privacidade e uma experiência luxuosa.",
      features: ["Design exclusivo", "Privacidade total", "Conforto premium"],
    },
    {
      icon: Clock,
      title: "Acompanhamento Completo",
      description:
        "Suporte integral desde a primeira consulta até o resultado final, com acompanhamento de longo prazo.",
      features: ["Suporte 24/7", "Acompanhamento pós-procedimento", "Garantia de satisfação"],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">Lilabelle Luxé</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Onde a Excelência Encontra a Sua Beleza. Descubra por que somos a escolha preferida de mulheres exigentes
            que buscam o melhor em medicina estética.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((differential, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-primary/10 group">
              <div className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <differential.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{differential.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{differential.description}</p>
                </div>

                <div className="space-y-2">
                  {differential.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-card p-8 rounded-lg border border-primary/20">
          <h3 className="font-serif text-2xl font-semibold text-foreground text-center mb-8">
            Certificações e Reconhecimentos
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="bg-primary/10 p-4 rounded-lg mx-auto w-fit">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm font-semibold text-foreground">ANVISA</div>
              <div className="text-xs text-muted-foreground">Produtos Certificados</div>
            </div>

            <div className="space-y-2">
              <div className="bg-primary/10 p-4 rounded-lg mx-auto w-fit">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm font-semibold text-foreground">ISO 9001</div>
              <div className="text-xs text-muted-foreground">Qualidade Certificada</div>
            </div>

            <div className="space-y-2">
              <div className="bg-primary/10 p-4 rounded-lg mx-auto w-fit">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm font-semibold text-foreground">SBME</div>
              <div className="text-xs text-muted-foreground">Membro Ativo</div>
            </div>

            <div className="space-y-2">
              <div className="bg-primary/10 p-4 rounded-lg mx-auto w-fit">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm font-semibold text-foreground">Excelência</div>
              <div className="text-xs text-muted-foreground">Prêmio 2024</div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-serif mb-2">15+</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-serif mb-2">5000+</div>
            <div className="text-muted-foreground">Pacientes Satisfeitas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-serif mb-2">98%</div>
            <div className="text-muted-foreground">Taxa de Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-serif mb-2">24/7</div>
            <div className="text-muted-foreground">Suporte Disponível</div>
          </div>
        </div>
      </div>
    </section>
  )
}
