import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import FlipBook from "../../components/FlipBook";
import { NavBar } from "../../components/NavBar";
import { Services } from "../../components/Services";
import { Container } from "./styles";

export function Home() {
  return (
    <Container id="home">
      <div className="wrapper">
        <header>
          <h1>
            <span>C</span>arpinteria <span>S</span>ahiren
          </h1>

          <NavBar idHome="#home" idService="#service" idAbout="#about" idContact="#contact" />
        </header>
      </div>

      <main>
        <FlipBook />

        <Services />

        <About />

        <Contact />
      </main>

      <footer>
        <NavBar idHome="#home" idService="#service" idAbout="#about" idContact="#contact" />

        <span>
          Copyright © 2022 Todos os direitos reservados - Carpinteria Sahiren
        </span>
      </footer>
    </Container>
  );
}
