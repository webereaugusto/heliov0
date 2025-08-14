import { HeroSection } from "@/components/hero-section"
import { ProcedureSection } from "@/components/procedure-section"
import { ProcessSection } from "@/components/process-section"
import { ResultsGallery } from "@/components/results-gallery"
import { DoctorProfile } from "@/components/doctor-profile"
import { ClinicDifferentials } from "@/components/clinic-differentials"
import { ClinicTour } from "@/components/clinic-tour"
import { FinalCTA } from "@/components/final-cta"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProcedureSection />
      <ProcessSection />
      <ResultsGallery />
      <DoctorProfile />
      <ClinicDifferentials />
      <ClinicTour />
      <FinalCTA />
      <FAQ />
      <Footer />
    </main>
  )
}
