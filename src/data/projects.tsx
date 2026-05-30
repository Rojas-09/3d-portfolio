import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "hotelbook-pro",
    category: "Hotel Management",
    title: "HotelBook Pro",
    src: "/assets/projects-screenshots/hotelbook/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.vue,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "#",
    github: "https://github.com/Rojas-09/Proyecto_Hotel",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Flask + Vue 3 + PostgreSQL
          </TypographyP>
          <TypographyP className="font-mono ">
            HotelBook Pro es un sistema de gestión hotelera completo que permite
            administrar reservas, huéspedes, habitaciones, facturación,
            check-in, check-out y servicios adicionales. Cuenta con una
            arquitectura en dos capas: backend en Python (Flask) con base de
            datos relacional (PostgreSQL/SQLite) y frontend moderno en Vue 3 con
            Tailwind CSS.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Autenticación por Roles
          </TypographyH3>
          <p className="font-mono mb-2">
            Control de acceso con JWT para Administradores, Recepcionistas y
            Gerentes. Cada rol tiene permisos específicos dentro del sistema.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Flujo de Operación
          </TypographyH3>
          <p className="font-mono mb-2">
            El sistema maneja un flujo completo: creación de habitaciones,
            registro de huéspedes, reservas con pago de garantía (50%),
            check-in, servicios adicionales (Spa, Comedor, Lavandería),
            check-out con liquidación automática y generación de facturas en
            PDF.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Reportes Estratégicos
          </TypographyH3>
          <p className="font-mono mb-2">
            Dashboard analítico con KPIs de ocupación, ingresos totales y
            exportación a CSV/PDF.
          </p>
        </div>
      );
    },
  },
  {
    id: "mototec",
    category: "Predictive Analysis",
    title: "MotoTec Predictive Analysis",
    src: "/assets/projects-screenshots/mototec/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "#",
    github: "https://github.com/Rojas-09/Proyecto-de-Ampliacion-Planta-Ensambladora-de-Motocicletas",
    get content(): React.JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Proyecto de análisis predictivo para MotoTec que utiliza métodos de
            mínimos cuadrados y álgebra lineal para pronosticar la demanda de
            motocicletas y optimizar la planificación de inventario.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Objetivos
          </TypographyH3>
          <p className="font-mono mb-2">
            Pronosticar ventas de 4 tipos de motocicletas (2023-2027), calcular
            necesidades de 10 componentes clave por año, cuantificar
            incertidumbre mediante modelos estadísticos y optimizar inventario
            reduciendo dependencia de componentes importados.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Metodología
          </TypographyH3>
          <p className="font-mono mb-2">
            Construcción de matriz de diseño, mínimos cuadrados, descomposición
            SVD para estabilidad numérica, análisis de incertidumbre con
            intervalos de predicción y simulación estocástica Monte Carlo con
            10,000 iteraciones.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Resultados Clave
          </TypographyH3>
          <p className="font-mono mb-2">
            Modelo global con R² = 0.98 (98% de variabilidad explicada).
            Proyección 2025: 1,455 unidades (IC 95%: [1,334 - 1,576]).
            Error relativo: ±5.4%.
          </p>
        </div>
      );
    },
  },
  {
    id: "biblioteca",
    category: "Desktop App",
    title: "Java Biblioteca",
    src: "/assets/projects-screenshots/biblioteca/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [],
    },
    live: "#",
    github: "https://github.com/Rojas-09/Java_Biblioteca",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Sistema de gestión bibliotecaria desarrollado en Java con
            arquitectura MVC y persistencia de datos. Permite administrar
            libros, usuarios, préstamos y devoluciones.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];
export default projects;
