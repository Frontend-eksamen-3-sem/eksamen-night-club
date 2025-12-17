import { connection } from "next/server";
import logoImg from "@/assets/icon/Logo.svg";
import BottomLine from "@/assets/bottom_line.png";
import IndexHeroClient from "./IndexHeroClient";

import headerImg1 from "@/assets/bg/header_bg_1.jpg";
import headerImg2 from "@/assets/bg/header_bg_2.jpg";
const images = [headerImg1, headerImg2];

export default async function IndexHero() {
  await connection();

  const imgIndex = Math.floor(Math.random() * images.length);

  return <IndexHeroClient logoImg={logoImg} BottomLine={BottomLine} imgIndex={imgIndex} />;
}
