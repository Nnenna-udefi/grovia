import { ContactForm } from "@/component/contactForm";
import { Footer } from "@/component/footer";
import { HomeComponent } from "@/component/home";
import { Nav } from "@/component/nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <HomeComponent />
      <ContactForm
        heading="Let’s build your business to a market Leader"
        para="Tell us about your business goals and we’ll send you a free growth audit packed with clarity and insight and actionable recommendations tailored for you"
      />
      <Footer />
    </div>
  );
}
