import imgHTML from "../public/static/img/stack/html.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaVuejs } from "react-icons/fa";
import { SiExpress, SiMysql, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";



export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "Express",
    img: SiExpress,
  },
  {
    title: "MySql",
    img: SiMysql,
  },
  {
    title: "Postgres",
    img: SiPostgresql,
  },
  {
    title: "TailwindCSS",
    img: SiTailwindcss,
  },
   {
    title: "JS",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  
  {
    title: "React",
    img: imgReact,
  },
  { title: "Vuejs", img: FaVuejs },
  { title: "TypeScript", img: SiTypescript },
];
