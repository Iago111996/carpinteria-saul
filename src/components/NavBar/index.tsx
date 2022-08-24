import { Container } from "./styles";

interface NavBarProps {
  idHome: string;
  idAbout: string;
  idContact: string;
}

export function NavBar({ idHome, idAbout, idContact }: NavBarProps) {
  return (
    <Container>
      <ul>
        <li>
          <a href={idHome}>Home</a>
        </li>
        <li>
          <a href={idAbout}>Sobre</a>
        </li>
        <li>
          <a href={idContact}>Contactos</a>
        </li>
      </ul>
    </Container>
  );
}
