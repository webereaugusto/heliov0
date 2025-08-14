import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function FAQ() {
  const faqs = [
    {
      question: "O procedimento de preenchimento de glúteos é seguro?",
      answer:
        "Sim, é completamente seguro quando realizado por profissional qualificado. Utilizamos apenas ácido hialurônico aprovado pela ANVISA, que é biocompatível e totalmente reversível. Dr. Hélio Millan possui mais de 15 anos de experiência e segue todos os protocolos internacionais de segurança.",
    },
    {
      question: "Quanto tempo duram os resultados?",
      answer:
        "Os resultados do preenchimento com ácido hialurônico duram em média de 12 a 18 meses, podendo variar de acordo com o metabolismo de cada paciente. O produto é gradualmente absorvido pelo organismo de forma natural e segura.",
    },
    {
      question: "Como é o processo de recuperação?",
      answer:
        "A recuperação é muito tranquila. Você pode retomar suas atividades normais no mesmo dia, evitando apenas exercícios intensos por 48 horas. Pode haver um leve inchaço inicial que desaparece em poucos dias. Fornecemos todas as orientações pós-procedimento para garantir sua comodidade.",
    },
    {
      question: "Os resultados ficam naturais?",
      answer:
        "Absolutamente! Nossa técnica prioriza a naturalidade e harmonia. Dr. Hélio Millan possui olhar artístico refinado e respeita sua anatomia natural, criando curvas harmoniosas que realçam sua beleza sem exageros. O resultado é um bumbum mais volumoso, mas com aparência completamente natural.",
    },
    {
      question: "Qual é o investimento necessário?",
      answer:
        "O investimento varia de acordo com suas necessidades específicas e objetivos. Durante a avaliação gratuita, elaboramos um plano personalizado com valores transparentes. Oferecemos também opções de parcelamento para facilitar seu investimento na autoestima.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">Perguntas Frequentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Esclarecemos suas principais dúvidas sobre o procedimento de preenchimento e harmonização de glúteos para
            que você se sinta completamente segura.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-primary/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas? Estamos aqui para ajudar!</p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Fale Conosco no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
