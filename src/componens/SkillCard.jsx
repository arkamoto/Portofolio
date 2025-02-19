import PropTypes from "prop-types";

function SkillCard({ imgSrc, label, desc, classes }) {
  return (
    <>
      <div
        className={
          `flex items-center gap-3 ring-2 ring-inset ring-slate-50/10 rounded-2xl p-3 hover:bg-slate-700 transition-colors group ` +
          classes
        }
      >
        <figure className="bg-slate-600/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-slate-800 transition-colors">
          <img src={imgSrc} width={32} height={32} alt={label} />
        </figure>

        <div>
          <h3>{label}</h3>

          <p className="text-slate-400 text-sm">{desc}</p>
        </div>
      </div>
    </>
  );
}

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
