import useEmblaCarousel from "embla-carousel-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";

export const btns = [
  {
    title: "План выставки",
    link: "",
  },
  {
    title: "Забронировать стенд",
    link: "",
  },
  {
    title: "B2B | B2G встречи",
    link: "",
  },
  {
    title: "Стать спонсором",
    link: "",
  },
];

export const HomeHero: FC = () => {
  const [embalRef] = useEmblaCarousel();

  // const lg = useMediaQuery("(min-width: 1024px)");
  // const md = useMediaQuery("(min-width: 768px)");

  // function getBanner() {
  //   if (lg) return "/banners/ru/l.jpg";
  //   else if (md) return "/banners/ru/m.jpg";
  //   else return "/banners/ru/s.jpg";
  // }

  return (
    <section className="flex flex-col gap-5">
      <div ref={embalRef} className="embla">
        <div className="embla__container">
          <div className="embla__slide">
            <img
              src={"/hero-banner.png"}
              alt=""
              className="size-full object-cover lg:max-h-[600px] lg:min-h-[320px]"
            />
          </div>
        </div>
      </div>

      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 text-2xl">
        {btns.map(({ title, link }) => (
          <Link key={title} to={link} className="w-full">
            <Button
              size={"lg"}
              variant={"teritary"}
              className="w-full drop-shadow-sm shadow-md bg-teritary text-on_teritary hover:bg-teritary/90"
            >
              {title}
            </Button>
          </Link>
        ))}
      </Container>
    </section>
  );
};
