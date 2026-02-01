import Carousel from "../components/carousel";
import Header from "../components/header";
import WhoAreWe from "../components/who-are-we";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="section-stack">
        <Carousel />
        <WhoAreWe />
      </div>
    </main>
  );
}
