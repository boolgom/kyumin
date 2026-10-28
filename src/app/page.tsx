import { Builds } from "@/components/builds";
import { Career } from "@/components/career";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <Career />
      <Projects />
      <Builds />
      <Contact />
    </main>
  );
}
