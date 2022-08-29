import { WrapperContainer, Container, Title, Text, Bar } from "./styles";

export function About() {
  return (
    <WrapperContainer id="about">
      <Container>
        <Title>Sobre</Title>
        <Bar />

        <div>
          <aside>
            <Text>
              Trabajamos a mas de 30 años, Se ofrecen todo tipo de servicio
              relacionado en la carpinteria, instalaciones de paneles
              decorativo, tarimas, armarios, cocinas empotradas, etc.
              <br />
              <br />
              No dude en conctatarnos, tienemos un equipo especializado
              esperandote, hacemos presupuesto sin compromiso.
            </Text>
          </aside>

          <img
            src="./assets/carpinteiro.webp"
            alt="Persona plachando madera."
          />
        </div>
      </Container>
    </WrapperContainer>
  );
}
