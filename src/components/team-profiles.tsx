import Image from "next/image";
import { teamMembers } from "@/lib/site-content";

type TeamMember = (typeof teamMembers)[number];

function TeamCard({
  member,
  variant,
}: {
  member: TeamMember;
  variant: "featured" | "standard";
}) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`glass-panel flex h-full rounded-[2rem] ${
        isFeatured
          ? "flex-col gap-6 p-7 md:p-8 xl:flex-row xl:items-start"
          : "flex-col gap-5 p-6 md:p-7"
      }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-white/70 ${
          isFeatured
            ? "aspect-[4/4.4] w-full xl:h-[17rem] xl:w-[15rem]"
            : "aspect-[4/4.4] w-full"
        }`}
      >
        <Image
          src={member.imageSrc}
          alt={member.name}
          fill
          sizes={
            isFeatured
              ? "(min-width: 1280px) 240px, (min-width: 768px) 40vw, 100vw"
              : "(min-width: 1280px) 26vw, (min-width: 768px) 40vw, 100vw"
          }
          className="object-cover object-center"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="eyebrow text-accent">Leadership</p>
        <h3
          className={`mt-3 font-semibold tracking-[-0.05em] text-foreground ${
            isFeatured
              ? "text-[2.15rem] md:text-[2.35rem]"
              : "text-[1.95rem] md:text-[2.1rem]"
          }`}
        >
          {member.name}
        </h3>
        <p
          className={`mt-3 text-muted ${
            isFeatured
              ? "text-[1.08rem] leading-8 md:text-[1.12rem]"
              : "text-[1.04rem] leading-8"
          }`}
        >
          {member.credentials}
        </p>
        <p
          className={`mt-4 text-muted ${
            isFeatured
              ? "text-[1.14rem] leading-8 md:text-[1.18rem]"
              : "text-[1.08rem] leading-8"
          }`}
        >
          {member.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {member.skills.slice(0, isFeatured ? 4 : 3).map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-foreground/10 bg-white/70 px-3.5 py-2 text-[0.96rem] text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function TeamProfiles() {
  const leadMembers = teamMembers.slice(0, 2);
  const supportingMembers = teamMembers.slice(2);

  return (
    <div className="mt-10 space-y-6">
      <div className="grid gap-6 xl:grid-cols-2">
        {leadMembers.map((member) => (
          <TeamCard key={member.name} member={member} variant="featured" />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {supportingMembers.map((member) => (
          <TeamCard key={member.name} member={member} variant="standard" />
        ))}
      </div>
    </div>
  );
}
