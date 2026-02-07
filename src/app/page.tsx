import Carousel from "../components/carousel";
import Header from "../components/header";
import Activities from "../components/activities";
import Region from "../components/region";
import Members from "../components/members";
import WhoAreWe from "../components/who-are-we";
import Partners from "../components/partners";
import Membership from "../components/membership";
import Gallery from "../components/gallery";
import Joining from "../components/joining";

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
        <div className="section-stack-no-gap">
          <Partners />
          <Membership />
        </div>
        <Gallery />
        <Joining />
      </div>
    </main>
  );
}
