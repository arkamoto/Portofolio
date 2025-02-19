import { Button, ButtonScroll } from "./Button";

function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid items-center lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/sidikjari.png"
                width={40}
                height={40}
                alt="S"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-slate-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className=""></span>
              </span>
              Let’s Collaborate
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Developing Websites Built to Scale for the Future
          </h2>

          <div className="flex items-center gap-2">
            <Button
              label="Download CV"
              icon="download"
              href="/CV.pdf"
              target="_blank"
            />
            <ButtonScroll
              label="Scroll down"
              href="#about"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-cyan-500 via-25% via-cyan-400/40 to-65% rounded-[200px] overflow-hidden">
            <img
              src="/potrait.png"
              width={656}
              height={800}
              alt="Arief Kamaluddin - Portrait"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
