import { Card } from "@/components/ui/card"
import { Search, FileText, Zap, Heart, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Avaliação Personalizada",
      description: "Consulta detalhada para entender seus objetivos e avaliar sua anatomia única.",
      image: "/placeholder-0k1em.png",
    },
    {
      icon: FileText,
      title: "Planejamento Exclusivo",
      description: "Criação de um plano personalizado com simulação 3D dos resultados esperados.",
      image: "/medical-planning-3d.png",
    },
    {
      icon: Zap,
      title: "Procedimento Seguro",
      description: "Aplicação precisa em ambiente estéril com máximo conforto e segurança.",
      image: "/placeholder-vmhjh.png",
    },
    {
      icon: Heart,
      title: "Cuidado Pós-Procedimento",
      description: "Acompanhamento completo com orientações e suporte durante a recuperação.",
      image: "/elegant-post-procedure-care.png",
    },
    {
      icon: CheckCircle,
      title: "Resultados Duradouros",
      description: "Acompanhamento de longo prazo para garantir sua satisfação e bem-estar.",
      image: "/happy-patient-consultation.png",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sua Jornada de Transformação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nosso processo exclusivo garante resultados excepcionais através de cuidado personalizado e atenção aos
            mínimos detalhes em cada etapa.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
                </div>

                {index === 0 && (
                  <Card className="p-4 bg-card border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">O que inclui sua avaliação:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Análise completa da anatomia dos glúteos</li>
                      <li>• Discussão sobre expectativas e resultados</li>
                      <li>• Exame de saúde geral e histórico médico</li>
                      <li>• Orientações pré-procedimento personalizadas</li>
                    </ul>
                  </Card>
                )}

                {index === 2 && (
                  <Card className="p-4 bg-card border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">Segurança em primeiro lugar:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Ambiente totalmente esterilizado</li>
                      <li>• Produtos certificados pela ANVISA</li>
                      <li>• Anestesia local para máximo conforto</li>
                      <li>• Monitoramento contínuo durante o procedimento</li>
                    </ul>
                  </Card>
                )}
              </div>

              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="w-full rounded-lg shadow-xl"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-card border-primary/20 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Cronograma Típico</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-primary font-bold text-lg">Dia 1</div>
                <div className="text-sm text-muted-foreground">Avaliação e Planejamento</div>
              </div>
              <div>
                <div className="text-primary font-bold text-lg">Dia 7-14</div>
                <div className="text-sm text-muted-foreground">Procedimento Realizado</div>
              </div>
              <div>
                <div className="text-primary font-bold text-lg">30 dias</div>
                <div className="text-sm text-muted-foreground">Resultado Final Visível</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
