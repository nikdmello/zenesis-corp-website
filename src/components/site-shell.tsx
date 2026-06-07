"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode, useEffect } from "react";
import { ConsultationFormButton } from "@/components/consultation-form";
import { SiteSearchForm } from "@/components/site-search-form";
import { contactDetails, navigation, socialLinks, whatsappHref } from "@/lib/site-content";

type SiteShellProps = {
  children: React.ReactNode;
  currentPath: string;
};

const servicesScrollIntentKey = "zenesis-scroll-to-services";

export function SiteShell({ children, currentPath }: SiteShellProps) {
  const shellWidthClass = "max-w-[100rem]";
  const isHomepage = currentPath === "/";
  const router = useRouter();

  const scrollToServicesSection = () => {
    const servicesSection = document.getElementById("services");
    const header = document.querySelector("header");

    if (!servicesSection) {
      return;
    }

    const headerOffset = header instanceof HTMLElement ? header.offsetHeight - 10 : 70;
    const targetTop =
      servicesSection.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.replaceState(null, "", "/");
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!isHomepage) {
      return;
    }

    if (window.sessionStorage.getItem(servicesScrollIntentKey) !== "true") {
      return;
    }

    window.sessionStorage.removeItem(servicesScrollIntentKey);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToServicesSection();
      });
    });
  }, [isHomepage]);

  const handleServicesNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href !== "/#services") {
      return;
    }

    event.preventDefault();

    if (isHomepage) {
      scrollToServicesSection();
      return;
    }

    window.sessionStorage.setItem(servicesScrollIntentKey, "true");
    router.push("/", { scroll: false });
  };

  return (
    <div className="relative isolate min-h-screen overflow-x-clip">
      <div
        aria-hidden="true"
        className="site-background pointer-events-none fixed inset-0 -z-10"
      />
      <header
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[rgba(12,27,34,0.82)] shadow-[0_16px_42px_rgba(7,21,27,0.16)] backdrop-blur-xl"
      >
        <div
          className={`mx-auto flex ${shellWidthClass} items-center justify-between px-6 py-3.5 md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:px-12 xl:px-16`}
        >
          <Link href="/" className="flex items-center gap-3">
            <span className="md:hidden">
              <Image
                src="/logos/zenesis-logo-full.webp"
                alt="Zenesis Corporation"
                width={220}
                height={54}
                className="h-8 w-auto object-contain brightness-0 invert sm:h-9"
                priority
              />
            </span>
            <span className="hidden md:block">
              <Image
                src="/logos/zenesis-logo-full.webp"
                alt="Zenesis Corporation"
                width={360}
                height={88}
                className="h-10 w-auto object-contain brightness-0 invert lg:h-11"
                priority
              />
            </span>
          </Link>

          <nav className="hidden items-center gap-3 justify-self-center px-1 py-0.5 text-[1.14rem] font-semibold text-white/95 md:flex xl:text-[1.16rem]">
            {navigation.map((item) => {
              const isActive =
                item.href === currentPath ||
                ("groups" in item &&
                  (currentPath === item.href ||
                    item.groups.some((group) =>
                      group.links.some((link) => link.href === currentPath),
                    )));
              if ("groups" in item) {
                const isServicesMenu = item.label === "Services";
                const groupCount = item.groups.length;

                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      onClick={(event) => handleServicesNavClick(event, item.href)}
                      className={`group inline-flex items-center gap-1.5 px-2 py-2.5 transition-colors duration-200 hover:text-white ${
                        isActive ? "text-white" : ""
                      }`}
                    >
                      <span className="relative inline-block">
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 top-full mt-[2px] h-[1.5px] bg-current transition-[width,opacity] duration-300 ease-out ${
                            isActive
                              ? "w-full opacity-100"
                              : "w-0 opacity-70 group-hover:w-full"
                          }`}
                        />
                      </span>
                      <ChevronDownIcon className="mt-px h-3.5 w-3.5 opacity-80 transition-transform duration-200 group-hover:translate-y-[1px]" />
                    </Link>

                    <div
                      className={`pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:opacity-100 ${
                        isServicesMenu
                          ? "w-[45rem]"
                          : groupCount > 2
                            ? "w-[28rem]"
                            : groupCount > 1
                              ? "w-[25rem]"
                              : "w-[16.5rem]"
                      }`}
                    >
                      <div
                          className={`overflow-hidden rounded-[1.25rem] border border-white/10 bg-[rgba(15,31,39,0.98)] shadow-[0_24px_64px_rgba(7,21,27,0.32)] backdrop-blur-xl ${
                          isServicesMenu ? "p-5" : "p-2.75"
                        }`}
                      >
                        <div
                          className={`grid gap-2.5 ${
                            isServicesMenu
                              ? "md:grid-cols-3 md:gap-0"
                              : groupCount > 1
                                ? "md:grid-cols-2"
                                : "md:grid-cols-1"
                          }`}
                        >
                          {item.groups.map((group) => (
                            <div
                              key={group.title}
                              className={
                                isServicesMenu
                                  ? "px-4 py-1 first:pl-0 last:pr-0 md:border-l md:border-white/10 md:first:border-l-0 md:pl-5 md:first:pl-0 md:pr-5 md:last:pr-0"
                                  : "rounded-[0.95rem] border border-white/8 bg-white/[0.04] p-3"
                              }
                            >
                              {isServicesMenu ? (
                                <Link
                                  href={getServiceGroupHref(group.title)}
                                  className="group/title block text-[1.24rem] font-semibold tracking-[-0.02em] text-white transition-colors hover:text-white/82"
                                >
                                  <span className="relative inline-block">
                                    {group.title}
                                    <span
                                      aria-hidden="true"
                                      className="absolute left-0 top-full mt-[2px] h-[1.5px] w-0 bg-current opacity-80 transition-[width,opacity] duration-300 ease-out group-hover/title:w-full"
                                    />
                                  </span>
                                </Link>
                              ) : (
                                <p className="whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/52">
                                  {group.title}
                                </p>
                              )}
                              <div className={`flex flex-col ${isServicesMenu ? "mt-4 gap-1" : "mt-3"}`}>
                                {group.links.map((link) => (
                                  <Link
                                    key={`${group.title}-${link.label}-${link.href}`}
                                    href={link.href}
                                    className={`rounded-[0.8rem] transition-all duration-200 hover:bg-white/7 hover:text-white ${
                                      isServicesMenu
                                        ? "px-0 py-2 text-[1.06rem] font-medium leading-[1.45] text-white/72 hover:px-3 hover:text-white"
                                        : "px-2.75 py-2.25 text-[0.98rem] text-white/90"
                                    }`}
                                  >
                                    <span className="block tracking-[-0.01em]">{link.label}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleServicesNavClick(event, item.href)}
                  className={`group px-2 py-2.5 transition-colors duration-200 hover:text-white ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-full mt-[2px] h-[1.5px] bg-current transition-[width,opacity] duration-300 ease-out ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-70 group-hover:w-full"
                      }`}
                    />
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <div className="hidden lg:block">
              <SiteSearchForm compact className="w-[15.25rem] xl:w-[16.5rem]" />
            </div>
            <div className="hidden h-11 items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 text-[1rem] font-medium text-white/92 shadow-[0_10px_24px_rgba(7,21,27,0.16)] lg:flex">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_18px_rgba(37,211,102,0.22)]">
                  <WhatsAppIcon className="h-4 w-4 shrink-0 fill-current" />
                </span>
                +971 58 914 2200
              </a>
              <span className="h-3 w-px bg-white/16" />
              <a
                href="mailto:info@zenesiscorp.com"
                className="transition-colors hover:text-white"
              >
                info@zenesiscorp.com
              </a>
            </div>
            <details className="relative md:hidden">
              <summary
                className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/12 bg-white/8 text-white shadow-[0_10px_24px_rgba(7,21,27,0.16)] marker:content-none"
              >
                <span className="sr-only">Open navigation menu</span>
                <span className="flex flex-col gap-1.5">
                  <span
                    className="h-0.5 w-4 rounded-full bg-white"
                  />
                  <span
                    className="h-0.5 w-4 rounded-full bg-white"
                  />
                  <span
                    className="h-0.5 w-4 rounded-full bg-white"
                  />
                </span>
              </summary>

              <div className="absolute right-0 top-[calc(100%+0.85rem)] max-h-[calc(100dvh-5rem)] w-[19.75rem] overflow-y-auto rounded-[1.6rem] border border-white/10 bg-[rgba(15,31,39,0.985)] p-4 shadow-[0_24px_60px_rgba(7,21,27,0.28)] backdrop-blur-xl">
                <p className="eyebrow px-1 text-white/48">Menu</p>
                <div className="mt-3">
                  <SiteSearchForm compact className="w-full" />
                </div>
                <nav className="mt-3 flex flex-col !text-white">
                  {navigation.map((item) => {
                    if ("groups" in item) {
                      return (
                        <details
                          key={item.href}
                          className="border-b border-white/8 py-1.5 last:border-b-0"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between rounded-[0.95rem] px-3 py-3 text-[1.12rem] font-semibold !text-white transition-colors hover:bg-white/6 marker:content-none">
                            <span>{item.label}</span>
                            <ChevronDownIcon className="h-4 w-4 text-white/56" />
                          </summary>
                          <div className="flex flex-col gap-3 px-3 pb-3 pt-1">
                            <div className="grid gap-0">
                              {item.groups.map((group) => (
                              <div
                                key={group.title}
                                className="border-b border-white/8 py-3 last:border-b-0"
                              >
                                <Link
                                  href={getServiceGroupHref(group.title)}
                                  className="group/title block px-1"
                                >
                                  <span className="relative inline-block text-[1.08rem] font-semibold tracking-[-0.02em] !text-white">
                                    {group.title}
                                    <span
                                      aria-hidden="true"
                                      className="absolute left-0 top-full mt-[2px] h-[1.5px] w-0 bg-current opacity-80 transition-[width,opacity] duration-300 ease-out group-hover/title:w-full"
                                    />
                                  </span>
                                </Link>
                                <div className="mt-2.5 flex flex-col gap-0.5">
                                  {group.links.map((link) => (
                                    <Link
                                      key={`${group.title}-${link.label}-${link.href}`}
                                      href={link.href}
                                      className="rounded-[0.9rem] px-3 py-2.5 text-[1.01rem] font-medium leading-6 !text-white/88 transition-all duration-200 hover:bg-white/7 hover:!text-white hover:pl-4"
                                    >
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                            </div>
                          </div>
                        </details>
                      );
                    }

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={(event) => handleServicesNavClick(event, item.href)}
                        className="border-b border-white/8 px-3 py-4 text-[1.08rem] font-medium !text-white transition-colors hover:bg-white/6 last:border-b-0"
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </details>
          </div>
        </div>
      </header>

      <main
        className={`mx-auto flex w-full ${shellWidthClass} flex-1 flex-col px-6 pb-24 pt-10 md:px-12 md:pt-14 xl:px-16`}
      >
        {children}
      </main>

      <footer
        className={`mx-auto w-full ${shellWidthClass} px-6 pb-8 md:px-12 xl:px-16`}
      >
        <div className="rounded-[2rem] border border-foreground/10 bg-[linear-gradient(180deg,rgba(255,253,250,0.92)_0%,rgba(245,239,228,0.98)_100%)] px-6 py-8 shadow-[0_22px_70px_rgba(17,35,42,0.08)] md:px-8 md:py-9">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.15fr_0.9fr] md:gap-8">
          <div className="pr-2">
            <Image
              src="/logos/zenesis-logo-full.webp"
              alt="Zenesis Corporation"
              width={300}
              height={72}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-4 max-w-md text-[1.08rem] leading-8 text-foreground/78">
              Business setup, accounting and tax, and corporate support for
              companies operating through Dubai and the UAE.
            </p>
          </div>

          <div className="md:border-l md:border-r md:border-foreground/10 md:px-8">
            <p className="text-[1.2rem] font-semibold tracking-[-0.03em] text-[#8d7453]">
              Navigation
            </p>
            <div className="mt-5 grid gap-5">
              {navigation.map((item) => {
                const isActive =
                  item.href === currentPath ||
                  ("groups" in item &&
                    (currentPath === item.href ||
                      item.groups.some((group) =>
                        group.links.some((link) => link.href === currentPath),
                      )));

                return "groups" in item ? (
                  <details
                    key={item.href}
                    className="pt-1 first:pt-0"
                  >
                    <summary className="inline-flex cursor-pointer list-none items-center gap-2 marker:content-none">
                      <Link
                        href={item.href}
                        className={`text-[1.08rem] font-semibold tracking-[-0.02em] transition-colors hover:text-foreground ${
                          isActive ? "text-foreground" : "text-foreground/88"
                        }`}
                        onClick={(event) => event.stopPropagation()}
                      >
                        {item.label}
                      </Link>
                      <ChevronDownIcon className="h-4 w-4 shrink-0 text-foreground/48 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="mt-3 grid gap-3 pl-1">
                      {item.groups.map((group) => (
                        <div key={group.title}>
                          <Link
                            href={getServiceGroupHref(group.title)}
                            className="inline-flex text-[0.96rem] font-semibold tracking-[-0.02em] text-foreground/78 transition-colors hover:text-foreground"
                          >
                            {group.title}
                          </Link>
                          <div className="mt-1.5 grid gap-1.5">
                            {group.links.map((link) => (
                              <Link
                                key={`${group.title}-${link.label}-${link.href}`}
                                href={link.href}
                                className="pl-3 text-[1.02rem] leading-7 text-foreground/82 transition-colors hover:text-foreground"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </details>
                ) : (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[1.08rem] font-semibold tracking-[-0.02em] text-foreground/88 transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-[1.2rem] font-semibold tracking-[-0.03em] text-[#8d7453]">
              Contact
            </p>
            <div className="mt-5 grid gap-4">
              {contactDetails.map((item) => {
                const isEmail = item.label === "Email";
                const isWhatsApp = item.label === "Mobile / WhatsApp";
                const isPhone = item.label === "Main line";
                const href = isEmail
                  ? `mailto:${item.value}`
                  : isWhatsApp
                    ? whatsappHref
                  : isPhone
                    ? `tel:${item.value.replace(/\s+/g, "")}`
                    : null;

                return (
                  <div key={item.label} className="rounded-[1rem] border border-foreground/8 bg-white px-4 py-3.5 shadow-[0_8px_20px_rgba(17,35,42,0.05)]">
                    <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-muted">
                      {item.label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={isWhatsApp ? "_blank" : undefined}
                        rel={isWhatsApp ? "noreferrer" : undefined}
                        className="mt-2 inline-flex items-center gap-2.5 text-[1.06rem] font-medium leading-7 text-foreground/88 transition-colors hover:text-foreground"
                      >
                        {isWhatsApp ? (
                          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_18px_rgba(37,211,102,0.18)]">
                            <WhatsAppIcon className="h-4 w-4 shrink-0 fill-current" />
                          </span>
                        ) : null}
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-[1.06rem] leading-7 text-foreground/88">
                        {item.value}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 rounded-[1rem] border border-foreground/8 bg-white px-4 py-3.5 shadow-[0_8px_20px_rgba(17,35,42,0.05)]">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-muted">
                Social Media
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/8 bg-[#f8f5ef] text-[#11232a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#244ba8]"
                  >
                    {item.label === "Facebook" ? <FacebookIcon className="h-5 w-5 fill-current" /> : null}
                    {item.label === "LinkedIn" ? <LinkedInIcon className="h-5 w-5 fill-current" /> : null}
                    {item.label === "Instagram" ? <InstagramIcon className="h-5 w-5 stroke-current" /> : null}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}

function getServiceGroupHref(groupTitle: string) {
  switch (groupTitle) {
    case "Business Setup":
      return "/business-setup";
    case "Accounting and Tax":
      return "/accounting-tax";
    case "Corporate Support":
      return "/contact";
    case "Visa and Banking":
      return "/visa-and-banking";
    default:
      return "/";
  }
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.94 9.94 0 0 0-8.63 14.87L2 22l5.27-1.38A9.94 9.94 0 0 0 12 22a10 10 0 0 0 10-9.98 9.9 9.9 0 0 0-2.95-7.08Zm-7.05 15.4a8.3 8.3 0 0 1-4.23-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.33 8.33 0 1 1 7.02 3.86Zm4.57-6.23c-.25-.12-1.5-.74-1.73-.82-.23-.09-.4-.12-.56.12-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.21-.73-.65-1.23-1.45-1.37-1.69-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.02 2.58.12.17 1.77 2.7 4.29 3.79.6.26 1.08.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.5-.61 1.71-1.2.21-.6.21-1.11.15-1.21-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M13.5 21v-7.38H16l.38-2.95H13.5V8.8c0-.85.24-1.43 1.47-1.43h1.57V4.73c-.27-.04-1.2-.12-2.29-.12-2.27 0-3.82 1.39-3.82 3.93v2.13H8v2.95h2.43V21h3.07Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M6.94 8.5a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46ZM5.4 18.6h3.08V9.77H5.4v8.84Zm4.92 0h3.08v-4.93c0-1.3.25-2.56 1.86-2.56 1.58 0 1.6 1.48 1.6 2.65v4.84h3.08v-5.46c0-2.68-.58-4.74-3.71-4.74-1.51 0-2.52.83-2.93 1.62h-.04V9.77h-2.95c.04.7 0 8.84 0 8.84Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.25" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.6" strokeWidth="1.8" />
      <circle cx="17.25" cy="6.85" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="m5 7.5 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PageIntroProps = {
  eyebrow?: string;
  breadcrumb?:
    | string
    | readonly {
        label: string;
        href?: string;
      }[];
  title: string;
  description?: string;
  backgroundImageSrc?: string;
  backgroundImageAlt?: string;
  backgroundImagePosition?: string;
  backgroundImageMode?: "full" | "ambient";
  ambientImageClassName?: string;
  contentClassName?: string;
  highlights?: readonly {
    icon: string;
    label: string;
    value: ReactNode;
  }[];
  ctaHref?: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageIntro({
  eyebrow,
  breadcrumb,
  title,
  description,
  backgroundImageSrc,
  backgroundImageAlt,
  backgroundImagePosition,
  backgroundImageMode = "full",
  ambientImageClassName,
  contentClassName,
  highlights,
  ctaHref,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
}: PageIntroProps) {
  const hasBackgroundImage = Boolean(backgroundImageSrc);
  const usesFullBackgroundImage = hasBackgroundImage && backgroundImageMode === "full";
  const usesAmbientBackgroundImage = hasBackgroundImage && backgroundImageMode === "ambient";
  const breadcrumbItems = Array.isArray(breadcrumb) ? breadcrumb : null;
  const breadcrumbText = typeof breadcrumb === "string" ? breadcrumb : null;
  const shouldOpenConsultationForm =
    ctaLabel?.toLowerCase().includes("consultation") ?? false;
  const primaryCtaClassName =
    "rounded-full bg-[#244ba8] px-6 py-3 text-center text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1b3c86]";

  return (
    <section
      className={
        usesFullBackgroundImage
          ? "relative left-1/2 -mt-10 w-screen -translate-x-1/2 overflow-hidden pt-20 pb-10 md:-mt-14 md:pt-28 md:pb-16"
          : usesAmbientBackgroundImage
            ? "relative left-1/2 -mt-px w-screen -translate-x-1/2 overflow-hidden border-b border-foreground/8 bg-[#f5efe4] pt-24 pb-10 md:pt-28 md:pb-12"
            : "relative left-1/2 -mt-px w-screen -translate-x-1/2 border-b border-foreground/8 bg-[#f5efe4] pt-24 pb-10 md:pt-28 md:pb-12"
      }
    >
      {usesFullBackgroundImage ? (
        <>
          <div className="absolute inset-0 bg-[#11232a]" />
          <div className="absolute inset-0">
            <Image
              src={backgroundImageSrc!}
              alt={backgroundImageAlt ?? ""}
              fill
              preload
              quality={72}
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 78vw, 62vw"
              className={`hero-image translate-x-[12%] scale-110 object-cover saturate-[1.04] contrast-[1.04] md:translate-x-[18%] md:scale-110 ${backgroundImagePosition ?? "object-center"}`}
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,35,42,0.88)_0%,rgba(17,35,42,0.66)_48%,rgba(17,35,42,0.72)_100%)] md:bg-[linear-gradient(90deg,rgba(17,35,42,0.94)_0%,rgba(17,35,42,0.86)_28%,rgba(17,35,42,0.42)_58%,rgba(17,35,42,0.14)_100%)]" />
        </>
      ) : null}
      {usesAmbientBackgroundImage ? (
        <div
          className={[
            "pointer-events-none absolute inset-y-0 right-0 w-[68%] overflow-hidden md:w-[52%] lg:w-[54%] xl:w-[56%]",
            ambientImageClassName ?? "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div
            className="absolute inset-0 opacity-[0.56] md:opacity-[0.98]"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 20%, rgba(0,0,0,0.42) 34%, rgba(0,0,0,0.78) 50%, #000 64%)",
              maskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 20%, rgba(0,0,0,0.42) 34%, rgba(0,0,0,0.78) 50%, #000 64%)",
            }}
          >
            <Image
              src={backgroundImageSrc!}
              alt={backgroundImageAlt ?? ""}
              fill
              preload
              quality={68}
              sizes="(max-width: 767px) 92vw, (max-width: 1279px) 54vw, 50vw"
              className={`object-cover object-right-top saturate-[0.94] contrast-[0.98] ${backgroundImagePosition ?? "object-[100%_100%]"}`}
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_44%,rgba(36,75,168,0.12),transparent_30%),linear-gradient(180deg,rgba(245,239,228,0.02)_0%,rgba(245,239,228,0.08)_72%,rgba(245,239,228,0.22)_100%)]" />
        </div>
      ) : null}

      <div
        className={`relative z-10 ${
          usesFullBackgroundImage
            ? "mx-auto flex min-h-[calc(100svh-7.5rem)] w-full max-w-[100rem] flex-col justify-between gap-10 px-6 pt-10 md:px-12 md:pt-16 xl:px-20"
            : "mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20"
        }`}
      >
        <div
          className={[
            usesFullBackgroundImage
              ? "mt-auto max-w-[48rem] border-l-4 border-[#244ba8] pl-5 pb-10 sm:pl-6 md:pl-7 md:pb-14"
              : "max-w-[64rem] border-l-4 border-[#244ba8] pl-5 sm:pl-6 md:pl-7",
            contentClassName ?? "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {breadcrumb ? (
            breadcrumbItems ? (
              <div
                className={`relative z-20 eyebrow flex flex-wrap items-center gap-2 pointer-events-auto ${
                  usesFullBackgroundImage ? "text-white/68" : "text-[#244ba8]"
                }`}
              >
                {breadcrumbItems.map((item, index) => (
                  <Fragment key={`${item.label}-${index}`}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`relative z-20 inline-flex cursor-pointer pointer-events-auto font-semibold underline decoration-current/45 underline-offset-[0.28em] transition-colors ${
                          usesFullBackgroundImage
                            ? "text-white/86 hover:text-white"
                            : "text-[#244ba8] hover:text-[#1b3c86]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className={usesFullBackgroundImage ? "text-white/86" : "text-[#11232a]/78"}>
                        {item.label}
                      </span>
                    )}
                    {index < breadcrumbItems.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className={usesFullBackgroundImage ? "text-white/46" : "text-[#244ba8]/58"}
                      >
                        →
                      </span>
                    ) : null}
                  </Fragment>
                ))}
              </div>
            ) : (
              <p
                className={`eyebrow ${
                  usesFullBackgroundImage ? "text-white/68" : "text-[#244ba8]"
                }`}
              >
                {breadcrumbText}
              </p>
            )
          ) : null}
          {eyebrow ? (
            <p
              className={`eyebrow ${
                usesFullBackgroundImage ? "hero-reveal text-white/78" : "text-accent"
              } ${breadcrumb ? "mt-5" : ""}`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`${eyebrow ? "mt-6" : breadcrumb ? "mt-5" : "mt-0"} max-w-[16ch] text-[3.4rem] font-semibold leading-[0.94] tracking-[-0.04em] sm:max-w-[17ch] sm:text-[4.3rem] lg:max-w-[18ch] lg:text-[4.85rem] ${
              usesFullBackgroundImage ? "text-white" : "text-foreground"
            } ${usesFullBackgroundImage ? "hero-reveal hero-reveal-1" : ""}`}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={`mt-6 max-w-3xl text-[1.14rem] font-medium leading-8 md:text-[1.28rem] md:leading-9 ${
                usesFullBackgroundImage ? "text-white/88" : "text-muted"
              } ${usesFullBackgroundImage ? "hero-reveal hero-reveal-2" : ""}`}
            >
              {description}
            </p>
          ) : null}
        </div>

        <div className={usesFullBackgroundImage ? "mt-auto" : ""}>
          {(ctaHref || secondaryHref) && (
            <div className={`flex flex-col gap-4 sm:flex-row ${usesFullBackgroundImage ? "hero-reveal hero-reveal-3" : "mt-9"}`}>
              {ctaHref && ctaLabel ? (
                shouldOpenConsultationForm ? (
                  <ConsultationFormButton
                    label={ctaLabel}
                    className={primaryCtaClassName}
                  />
                ) : (
                  <Link
                    href={ctaHref}
                    className={primaryCtaClassName}
                  >
                    {ctaLabel}
                  </Link>
                )
              ) : null}

              {secondaryHref && secondaryLabel ? (
                <Link
                  href={secondaryHref}
                  className={`rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${
                    usesFullBackgroundImage
                      ? "border border-white/24 bg-white/12 !text-white backdrop-blur-md hover:bg-white/20"
                      : "border border-[#244ba8] bg-[#244ba8] !text-white hover:bg-[#1b3c86]"
                  }`}
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          )}

          {highlights?.length ? (
            <div
              className={`mt-6 grid gap-0 overflow-hidden ${
                usesFullBackgroundImage
                  ? "hero-reveal hero-reveal-4 gap-3 sm:grid-cols-3"
                  : "gap-3 sm:grid-cols-3"
              }`}
            >
              {highlights.map((item) => (
                <div
                  key={`${item.label}-${item.value}`}
                  className={`px-4 py-4 backdrop-blur-sm ${
                    usesFullBackgroundImage
                      ? "rounded-[1.4rem] border border-white/22 bg-[#11232a]/76 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                      : "rounded-[1.4rem] border border-white/60 bg-white/55"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xl ${
                        usesFullBackgroundImage ? "bg-white/12" : "bg-[rgba(36,75,168,0.1)]"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p className={`eyebrow ${usesFullBackgroundImage ? "text-white/66" : "text-muted"}`}>
                        {item.label}
                      </p>
                      <p
                        className={`mt-1 text-sm font-semibold tracking-normal ${
                          usesFullBackgroundImage ? "text-white" : "text-foreground"
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

type CardAccentProps = {
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className="max-w-5xl">
      <p className={["eyebrow text-accent", eyebrowClassName ?? ""].filter(Boolean).join(" ")}>
        {eyebrow}
      </p>
      <h2
        className={[
          "section-title font-semibold text-foreground",
          titleClassName ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            "mt-4 max-w-4xl text-[1.16rem] leading-8 text-muted md:text-[1.24rem] md:leading-9",
            descriptionClassName ?? "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function CardAccent({ className }: CardAccentProps) {
  return (
    <div
      aria-hidden="true"
      className={["mb-5 h-1.5 w-16 rounded-full bg-[#8d7453]", className ?? ""]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
