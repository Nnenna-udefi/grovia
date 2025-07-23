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
        heading="Let’s Build Your Brand Into a Market Leader"
        para=" If you're serious about growing your business, we’re ready to
          partner with you. Tell us what you're building and we’ll show you
          what’s possible."
      />
      <Footer />
    </div>
  );
}
