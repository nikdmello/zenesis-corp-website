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
      className={`flex h-full rounded-[2rem] border border-[#d9d2c5] bg-[linear-gradient(180deg,#fbf7ef_0%,#f2eadc_100%)] shadow-[0_26px_80px_rgba(17,35,42,0.10)] ${
        isFeatured
          ? "flex-col gap-6 p-7 md:p-8 xl:flex-row xl:items-start"
          : "flex-col gap-5 p-6 md:p-7"
      }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden rounded-[1.5rem] border border-[#d9d2c5] bg-[#f8f2e8] ${
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
        <div className="mt-3">
          <h3
            className={`font-semibold tracking-[-0.05em] text-foreground ${
              isFeatured
                ? "text-[2.15rem] md:text-[2.35rem]"
                : "text-[1.95rem] md:text-[2.1rem]"
            }`}
          >
            {member.name}
          </h3>
          <p
            className={`mt-2 font-semibold tracking-[-0.01em] text-foreground ${
              isFeatured
                ? "text-[1.06rem] leading-7 md:text-[1.1rem]"
                : "text-[1.01rem] leading-7"
            }`}
          >
            {member.title}
          </p>
          <p
            className={`mt-1 text-[#5d6b71] ${
              isFeatured
                ? "text-[0.98rem] leading-7 md:text-[1.02rem]"
                : "text-[0.95rem] leading-7"
            }`}
          >
            {member.credentials}
          </p>
        </div>
        <p
          className={`mt-4 text-muted ${
            isFeatured
              ? "text-[1.14rem] leading-8 md:text-[1.18rem]"
              : "text-[1.08rem] leading-8"
          }`}
        >
          {member.summary}
        </p>

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
