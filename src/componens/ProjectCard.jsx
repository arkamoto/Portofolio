import PropTypes from "prop-types";

function ProjectCard({
  imgSrc,
  title,
  tags,
  projectLink,
  githubLink,
  classes,
}) {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-slate-700 hover:bg-slate-600/50 active:bg-slate-600/60 ring-1 ring-inset ring-slate-50/5 transition-colors" +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <a href={projectLink} target="_blank">
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="img-cover reveal-up"
          />
        </a>
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <a href={projectLink} target="_blank">
            <h3 className="title-1 mb-3 reveal-up">{title}</h3>
          </a>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-slate-300 bg-slate-50/5 grid items-center px-3 rounded-lg reveal-up"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-cyan-500 text-slate-900 shrink-0 overflow-visible hover:shadow-xl hover:scale-110 transition-transform duration-300">
          <span className="material-symbols-rounded " aria-hidden="true">
            <a href={githubLink} target="_blank">
              <img src="/github-mark.svg" width={32} height={32} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  githubLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
