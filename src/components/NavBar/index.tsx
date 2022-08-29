import { Container } from "./styles";

interface NavBarProps {
  idHome: string;
  idService: string;
  idAbout: string;
  idContact: string;
}

export function NavBar({ idHome, idService, idAbout, idContact }: NavBarProps) {
  return (
    <Container>
      <ul>
        <li>
          <a href={idHome}>Home</a>
        </li>
        <li>
          <a href={idService}>Servicios</a>
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
