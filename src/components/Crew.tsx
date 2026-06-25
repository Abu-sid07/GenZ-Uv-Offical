import SectionHeading from "./SectionHeading";

type CrewMember = {
  name: string;
  role: string;
  tagline: string;
  skills: string[];
  image: string;
  imagePosition: string;
};

const CREW: CrewMember[] = [
  {
    name: "R. Mohamed Uvaiz",
    role: "Founder — Growth Strategist",
    tagline: "Visionary Brand & Growth Strategist",
    skills: ["Digital Marketing", "SEO", "Automation", "Content Creation"],
    image: "/uwais.jpeg",
    imagePosition: "center 35%",
  },
  {
    name: "Abu",
    role: "Co-Founder — Software Developer",
    tagline: "Developer of Seamless Web Experiences",
    skills: ["Software Development", "Content Creation"],
    image: "/abu.jpeg",
    imagePosition: "center 20%",
  },
];

export default function Crew() {
  return (
    <section id="crew" className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-purple-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Meet the Crew"
          title="The visionaries, engineers, and creatives behind every GenZ UV project"
          desc="United by a relentless drive to deliver unlimited value."
        />

        <div className="mt-10 flex justify-center">
          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl w-full">
            {CREW.map((member, index) => (
              <article
                key={member.name}
                className="reveal group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-400/25 flex flex-col"
                data-delay={`${index * 90}`}
              >
                <div className="relative flex flex-col items-center text-center flex-1">
                  <div className="relative mb-6 h-44 w-44 overflow-hidden rounded-full border-4 border-emerald-400/30">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: member.imagePosition }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <div className="mt-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-400">
                    {member.skills.join(" • ")}
                  </div>
                  <p className="mt-4 text-lg font-semibold text-emerald-400">{member.role}</p>
                  <div className="mt-6 rounded-2xl bg-white/5 px-6 py-4 border border-white/10">
                    <p className="text-sm text-emerald-50/70 leading-relaxed">
                      "{member.name} | {member.tagline}"
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
