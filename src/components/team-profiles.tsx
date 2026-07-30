import Image from "next/image";
import { teamMembers } from "@/lib/site-content";

type TeamMember = (typeof teamMembers)[number];

function TeamCard({
  member,
}: {
  member: TeamMember;
}) {
  return (
    <article className="flex h-full min-w-0 flex-col">
      <div className="relative h-[19rem] w-full shrink-0 md:h-[21rem] xl:h-[19rem] 2xl:h-[21rem]">
        <Image
          src={member.imageSrc}
          alt={member.name}
          fill
          sizes="(min-width: 1280px) 26vw, (min-width: 768px) 42vw, 100vw"
          className="object-contain object-center"
        />
      </div>

      <div className="min-w-0 flex flex-1 flex-col border-t border-[#d8d0c2] pt-5">
        <div>
          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
            {member.title}
          </p>
          <h3 className="mt-2 text-[1.55rem] font-semibold leading-[1.12] text-foreground md:text-[1.65rem]">
            {member.name}
          </h3>
          <p className="mt-2 text-[0.92rem] leading-6 text-[#5d6b71]">
            {member.credentials}
          </p>
        </div>
        <p className="mt-4 text-[0.98rem] leading-7 text-muted">
          {member.summary}
        </p>
      </div>
    </article>
  );
}

export function TeamProfiles() {
  return (
    <div className="grid auto-rows-fr items-stretch gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
      {teamMembers.map((member) => (
        <TeamCard key={member.name} member={member} />
      ))}
    </div>
  );
}
