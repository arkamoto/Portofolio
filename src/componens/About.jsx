function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-slate-700/50 p-7 rounded-2xl md:p-12 reveal-up">
          <h4 className="text-cyan-500 mb-4 md:mb-8 md:text-2xl md:max-w-[60ch] reveal-up">
            About Me
          </h4>
          <p className="text-slate-200 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] reveal-up">
            Hello! I'm Arief, a frontend developer focused on delivering
            polished, user-friendly interfaces. I combine my design sense with
            technical skills to build websites that are visually appealing and
            easy to navigate.
          </p>

          <div className=""></div>

          <img
            src="../public/arka2.svg"
            alt="Logo"
            width={50}
            height={40}
            className="ml-auto md:w-[40px] md:h-[40px] reveal-up"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
