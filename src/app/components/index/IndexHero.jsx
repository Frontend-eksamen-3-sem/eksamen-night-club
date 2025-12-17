import { Suspense } from "react";
import IndexHeroRandom from "./IndexHeroRandom";

export default function IndexHero() {
  return (
    <Suspense fallback={<div>Loading hero…</div>}>
      <IndexHeroRandom />
    </Suspense>
  );
}
