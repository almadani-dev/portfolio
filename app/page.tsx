import Container from "@/components/Container";
import Profile from "@/components/home/profile";
import ServicesPage from "./services/page";
import ResumePage from "./resume/page";
import WorkPage from "./work/page";
import ContactPage from "./contact/page";


export default function Home() {
  return (
    <div className="bg-bodycolor text-white/80 ">
      <Container>
        <Profile />
        <div>
          <h1
            id="services"
            className="mt-52 text-hovercolor text-4xl md:text-6xl tracking-normal"
          >
            Services
          </h1>

          <ServicesPage />
        </div>
        <div id="resume">
          <h1 className="mt-52 text-hovercolor text-4xl md:text-6xl tracking-normal">
            Resume
          </h1>

          <ResumePage />
        </div>
        <div id="work">
          <h1 className="mt-52 text-hovercolor text-4xl md:text-6xl tracking-normal">
            Work
          </h1>

          <WorkPage />
        </div>

        <div id="contact">
          <h1 className="mt-52 text-hovercolor text-4xl md:text-6xl tracking-normal">
            Contact
          </h1>

          <ContactPage />
        </div>
      </Container>
    </div>
  );
}
