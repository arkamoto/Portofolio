import { hr } from "framer-motion/client";
import { Button } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  /*{
    label: "Reviews",
    href: "#reviews",
  },*/
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/arkamoto",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arief-kamaluddin-a156111a0/",
  },
  {
    label: "Twitter X",
    href: "https://x.com/AriefKamaluddi1",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/arief_kamaluddin/",
  },
];

function Footer() {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-2 mb-8 lg:max-w-[12ch] reveal-up">
              Let’s collaborate and get things done today!
            </h2>

            <Button
              href="mailto:ariefkamaluddin.ak96@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-slate-400 py-1 transition-colors hover:text-slate-100 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Social Media</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-slate-400 py-1 transition-colors hover:text-slate-100 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-10 mb-8 gap-6">
          <a className="logo reveal-up" href="/">
            <img src="/arka2.svg" width={40} height={40} alt="Logo" />
          </a>

          <p className="text-slate-400 text-sm reveal-up">
            &copy; 2025{" "}
            <span className="text-slate-100">- Arief Kamaluddin</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
