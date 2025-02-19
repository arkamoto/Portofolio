import Job from "./Job";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/project-1.jpg",
    title: "Movie Discovery",
    tags: ["API", "Development"],
    projectLink: "https://movie-discovery-six.vercel.app/",
    githubLink: "https://github.com/arkamoto/movie-discovery",
  },
  {
    imgSrc: "/project-2.jpg",
    title: "Coming Soon ...",
    tags: ["Waiting"],
    projectLink: "",
    githubLink: "",
  },
  {
    imgSrc: "/project-2.jpg",
    title: "Coming Soon ...",
    tags: ["Waiting"],
    projectLink: "",
    githubLink: "",
  },
];

function Work() {
  return (
    <>
      <section id="work" className="section">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">
            Highlights From My Journey
          </h2>
          <div className="mb-12 reveal-up">
            <Job />
          </div>

          <div className="section">
            <h2 className="headline-2 mb-8 reveal-up">Find My Portfolio</h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
              {works.map(
                ({ imgSrc, title, tags, projectLink, githubLink }, key) => (
                  <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    githubLink={githubLink}
                    classes="reveal-up"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
