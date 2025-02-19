import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "../public/html.svg",
    label: "HTML",
    desc: "Web",
  },
  {
    imgSrc: "../public/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "../public/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "../public/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "../public/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "../public/nextui.svg",
    label: "NextUI",
    desc: "Utility Component",
  },
  {
    imgSrc: "../public/github.svg",
    label: "GitHub",
    desc: "Version Control",
  },
];

function Skill() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Key Tools I Rely On</h2>
        <p className="text-slate-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Find out the essential tools and technologies I rely on to develop
          high-performing websites and applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
