import { EmailConfirmation } from "@/component/contact/emailConfirmation";
import { ContactNav } from "@/component/contact/nav";
import { Footer } from "@/component/footer";

export default function Confirmation() {
  return (
    <div>
      <ContactNav />
      <EmailConfirmation />
      <Footer />
    </div>
  );
}
