import { Card } from "@/components/ui/card"
import { Award, Users, Star, BadgeIcon as Certificate } from "lucide-react"

export function DoctorProfile() {
  const credentials = [
    "Membro da Sociedade Brasileira de Medicina Estética",
    "Certificação Internacional em Harmonização Facial",
    "Especialização em Preenchimentos Corporais",
    "Mais de 15 anos de experiência",
    "Milhares de pacientes satisfeitos",
    "Formação em Universidades Renomadas",
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">Dr. Hélio Millan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sua Referência em Estética e Harmonização Avançada
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Doctor Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Dr. Hélio Millan"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold font-serif">15+</div>
                  <div className="text-sm">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-semibold text-foreground">Excelência em Medicina Estética</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Dr. Hélio Millan é reconhecido como uma das principais referências em medicina estética no Brasil. Com
                mais de 15 anos de experiência, ele combina conhecimento científico avançado com sensibilidade artística
                para criar resultados naturais e harmoniosos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sua filosofia de trabalho baseia-se na valorização da beleza natural de cada paciente, sempre
                priorizando a segurança e o bem-estar. Dr. Millan acredita que a verdadeira transformação vai além da
                aparência física, impactando positivamente a autoestima e qualidade de vida de suas pacientes.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-xl flex items-center gap-2">
                <Certificate className="w-5 h-5 text-primary" />
                Credenciais e Especializações
              </h4>
              <div className="grid gap-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center bg-card border-primary/20">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary font-serif">5000+</div>
                <div className="text-sm text-muted-foreground">Pacientes Atendidos</div>
              </Card>
              <Card className="p-4 text-center bg-card border-primary/20">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary font-serif">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </Card>
            </div>

            {/* Philosophy */}
            <Card className="p-6 bg-card border-primary/20">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Filosofia de Trabalho
              </h4>
              <p className="text-muted-foreground italic leading-relaxed">
                "Acredito que cada mulher possui uma beleza única que deve ser realçada, nunca alterada drasticamente.
                Meu objetivo é ajudar minhas pacientes a se sentirem mais confiantes e felizes consigo mesmas, sempre
                respeitando sua individualidade e priorizando resultados naturais e seguros."
              </p>
              <div className="mt-4 text-right">
                <span className="text-primary font-semibold">- Dr. Hélio Millan</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
