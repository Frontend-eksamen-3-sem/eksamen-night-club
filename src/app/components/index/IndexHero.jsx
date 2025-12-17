import { Suspense } from "react";
import headerImg1 from "@/assets/bg/header_bg_1.jpg";
import headerImg2 from "@/assets/bg/header_bg_2.jpg";
import logoImg from "@/assets/icon/Logo.svg";
import BottomLine from "@/assets/bottom_line.png";
import IndexHeroClient from "./IndexHeroClient";

const images = [headerImg1, headerImg2];

export default function IndexHero() {
  return (
    <Suspense fallback={<div>Loading hero…</div>}>
      <IndexHeroClient images={images} logoImg={logoImg} BottomLine={BottomLine} />
    </Suspense>
  );
}
