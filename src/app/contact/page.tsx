import { ContactIndex } from "@/component/contact";
import { ContactNav } from "@/component/contact/nav";
import { Footer } from "@/component/footer";

export default function Contact() {
  return (
    <div>
      <ContactNav />
      <ContactIndex />
      <Footer />
    </div>
  );
}
