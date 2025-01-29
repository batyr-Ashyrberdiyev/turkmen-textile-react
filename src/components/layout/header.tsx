import { FC } from "react";
import { Container, Burger } from "./";
import { MapPin, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Logo } from "../shared";

export const navData = [
  {
    title: "Медиа",
    link: "",
  },
  {
    title: "Контакты",
    link: "",
  },
];

export const navData2 = [
  {
    title: "О выставке",
    link: "/about",
  },
  {
    title: "Посетителям",
    link: "",
  },
  {
    title: "Экспонентам",
    link: "",
  },
];

export const Header: FC = () => {
  return (
    <header>
      <div className="h-12 hidden lg:flex bg-teritary text-on_primary items-center overflow-hidden">
        <Container className="flex items-center justify-between">
          <div className="gap-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin />
              <h4 className="text-sm">Ашхабад, Туркменистан</h4>
            </div>

            <nav className="flex items-center gap-6 text-reverse_primary">
              {navData.map(({ title, link }) => (
                <Link className="py-2" key={title} to={link}>
                  {title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Smartphone size={16} strokeWidth="3px" />
              <h4 className="text-sm text-reverse_primary">+99371871814</h4>
            </div>

            {/* <LangMenu /> */}
          </div>
        </Container>
      </div>

      <div className="bg-primary py-2 flex items-center justify-between h-20 overflow-hidden">
        <Container className="flex items-center justify-between ">
          <div className="flex items-center gap-8">
            <Link to="/">
              <Logo />
            </Link>

            <nav className="lg:flex hidden items-center gap-6 text-reverse_primary">
              {navData2.map(({ title, link }) => (
                <Link key={title} to={link} className="flex items-center gap-2">
                  {title} <img src="/chevron.svg" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            {/* <LangMenu className="lg:hidden" /> */}
            <Burger />
          </div>

          <div className="lg:flex hidden items-center gap-2">
            <Button
              variant={"secondary"}
              size={"sm"}
              className="bg-secondary_container text-primary hover:bg-secondary_container/90"
            >
              Официальная поддержка
            </Button>

            <Button
              variant={"secondary"}
              size={"sm"}
              className="bg-reverse_primary text-on_secondary_container hover:bg-reverse_primary/90"
            >
              B2B | B2G встречи
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
};
