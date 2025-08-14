import { Card } from "@/components/ui/card"
import { Heart, Shield, Sparkles, Users, Clock, Award } from "lucide-react"

export function ProcedureSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Resultados Naturais e Personalizados",
      description: "Cada procedimento é único, respeitando sua anatomia e desejos para resultados harmoniosos.",
    },
    {
      icon: Shield,
      title: "Segurança Comprovada",
      description: "Utilizamos apenas produtos aprovados pela ANVISA, com total reversibilidade e biocompatibilidade.",
    },
    {
      icon: Sparkles,
      title: "Melhora da Qualidade da Pele",
      description: "O ácido hialurônico hidrata profundamente, reduzindo celulite e melhorando a firmeza.",
    },
    {
      icon: Users,
      title: "Aumento da Autoestima",
      description: "Recupere sua confiança e sinta-se mais segura com seu corpo transformado.",
    },
    {
      icon: Clock,
      title: "Procedimento Minimamente Invasivo",
      description: "Rápido, com mínimo desconforto e retorno imediato às atividades cotidianas.",
    },
    {
      icon: Award,
      title: "Expertise Reconhecida",
      description: "Dr. Hélio Millan possui certificações internacionais e anos de experiência comprovada.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Ciência por Trás da Beleza
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entenda o preenchimento e harmonização de glúteos com ácido hialurônico - uma técnica avançada que combina
            arte, ciência e segurança para resultados excepcionais.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Tecnologia de Ponta para Sua Transformação
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                O ácido hialurônico é uma substância naturalmente presente em nosso corpo, responsável pela hidratação e
                volume dos tecidos. Quando aplicado nos glúteos, ele não apenas aumenta o volume de forma natural, mas
                também estimula a produção de colágeno, melhorando a qualidade da pele.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa técnica exclusiva garante distribuição uniforme do produto, criando curvas harmoniosas que
                respeitam sua anatomia natural. O resultado é um bumbum mais volumoso, firme e com aspecto jovem.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3">Diferenciais do Nosso Tratamento:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Produtos de última geração com certificação internacional
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Técnica de aplicação em múltiplos planos para maior naturalidade
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Anestesia local para máximo conforto durante o procedimento
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Acompanhamento pós-procedimento por 12 meses
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <img
              src="/elegant-medical-procedure.png"
              alt="Ilustração do procedimento"
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold font-serif">100%</div>
              <div className="text-sm">Seguro e Reversível</div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-primary/10">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
