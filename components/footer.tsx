import { Button } from "@/components/ui/button"
import { MessageCircle, MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-primary">Lilabelle Luxé</h3>
            <p className="text-background/80 leading-relaxed">
              Sua referência em medicina estética. Transformamos sonhos em realidade com segurança, naturalidade e
              excelência.
            </p>
            <div className="flex gap-4">
              <Button
                size="icon"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-primary">Contato</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@lilabelleluxe.com.br</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>
                  Rua das Flores, 123
                  <br />
                  Jardins - São Paulo/SP
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-primary">Horário de Funcionamento</h4>
            <div className="space-y-2 text-background/80">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <div>
                  <div>Segunda a Sexta: 8h às 18h</div>
                  <div>Sábado: 8h às 14h</div>
                  <div>Domingo: Fechado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-primary">Nossos Serviços</h4>
            <div className="space-y-2 text-background/80">
              <div>Preenchimento de Glúteos</div>
              <div>Harmonização Corporal</div>
              <div>Medicina Estética</div>
              <div>Consultoria em Beleza</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="text-center space-y-4">
            <h4 className="font-serif text-xl font-semibold text-primary">Pronta para Sua Transformação?</h4>
            <p className="text-background/80">
              Agende sua avaliação gratuita e dê o primeiro passo rumo à sua nova versão.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar Consulta via WhatsApp
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Lilabelle Luxé. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
