import Carousel from "../components/carousel";
import Header from "../components/header";
import Activities from "../components/activities";
import Region from "../components/region";
import Members from "../components/members";
import WhoAreWe from "../components/who-are-we";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="section-stack">
        <Carousel />
        <WhoAreWe />
        <Region />
        <Activities />
        <Members />
      </div>
    </main>
  );
}
