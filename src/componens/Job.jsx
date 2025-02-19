function Job() {
  return (
    <>
      <div className="bg-slate-700/50 p-7 rounded-2xl md:p-12 mb-6">
        <div className="flex flex-col md:flex-row items-stretch gap-6 reveal-up">
          <figure className="aspect-square rounded-lg mb-4 flex-auto w-48 h-48 md:w-64 md:h-64">
            <img
              src="/tgi.png"
              className=" w-full h-full object-contain rounded-lg"
            />
          </figure>

          <div>
            <h4 className="text-cyan-500  md:text-2xl md:max-w-[60ch] font-semibold">
              Web Designer
            </h4>
            <h4 className="text-cyan-600 mb-4 md:mb-8 md:text-lg md:max-w-[60ch]">
              CV. Tri Goods Indo (May 2023 - present)
            </h4>
            <p className="text-slate-200 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
              As a Web Designer at CV. Tri Goods Indo, I contribute to creating
              and developing website designs that are not only visually
              appealing but also user-friendly. With a deep understanding of
              design, I ensure that every web element functions optimally and
              aligns with the company's business objectives.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-700/50 p-7 rounded-2xl md:p-12">
        <div className="flex flex-col md:flex-row items-stretch gap-6 reveal-up">
          <figure className="aspect-square rounded-lg mb-4 flex-auto w-48 h-48 md:w-64 md:h-64">
            <img
              src="/sawiji.png"
              className=" w-full h-full object-contain rounded-lg"
            />
          </figure>

          <div>
            <h4 className="text-cyan-500  md:text-2xl md:max-w-[60ch] font-semibold">
              Landing Page Designer
            </h4>
            <h4 className="text-cyan-600 mb-4 md:mb-8 md:text-lg md:max-w-[60ch]">
              Sawiji Farm (September 2020 - January 2023)
            </h4>
            <p className="text-slate-200 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
              As a Landing Page Designer at Sawiji Farm, I'm play a vital role
              in creating appealing and functional landing pages.
              Responsibilities include designing intuitive layouts, selecting
              the right visual elements, and ensuring that each page supports
              marketing objectives. Proficiency with modern design tools and an
              understanding of user behavior will be crucial for achieving
              optimal results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Job;
