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
              Entre en contacto con nosostros se necesitas, estamos prontos para
              atenderte.
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
