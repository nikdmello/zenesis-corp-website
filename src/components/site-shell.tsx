"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState, type ReactNode } from "react";
import { ConsultationFormButton } from "@/components/consultation-form";
import { contactDetails, navigation, whatsappHref } from "@/lib/site-content";

type SiteShellProps = {
  children: React.ReactNode;
  currentPath: string;
};

export function SiteShell({ children, currentPath }: SiteShellProps) {
  const shellWidthClass = "max-w-[100rem]";
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const nearTop = currentScrollY < 24;

      setHeaderVisible(nearTop || scrollingUp);
      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden">
      <div
        aria-hidden="true"
        className="site-background pointer-events-none fixed inset-0 -z-10"
      />
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b border-white/14 bg-[rgba(17,35,42,0.62)] shadow-[0_14px_40px_rgba(7,21,27,0.16)] backdrop-blur-xl transition-transform duration-300 ease-out ${
          headerVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`mx-auto flex ${shellWidthClass} items-center justify-between px-6 py-2.5 md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:px-12 xl:px-16`}
        >
          <Link href="/" className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-[1rem] md:hidden"
            >
              <Image
                src="/zenesis-logo-mark.png"
                alt="Zenesis logo mark"
                width={34}
                height={34}
                className="h-7 w-7 object-contain brightness-0 invert"
                priority
              />
            </span>
            <span className="hidden md:block">
              <Image
                src="/zenesis-logo-full.png"
                alt="Zenesis Corporation"
                width={300}
                height={72}
                className="h-8 w-auto object-contain brightness-0 invert"
                priority
              />
            </span>
          </Link>

          <nav className="hidden items-center gap-1 justify-self-center rounded-full px-1 py-0.5 text-[1.03rem] font-semibold text-white/90 md:flex">
            {navigation.map((item) => {
              const isActive = item.href === currentPath;
              if ("groups" in item) {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={`group inline-flex items-center gap-1 px-3 py-1 transition-colors hover:text-white ${
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
                        item.groups.length > 1 ? "w-[31rem]" : "w-[20rem]"
                      }`}
                    >
                      <div className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-[rgba(17,35,42,0.96)] p-4 shadow-[0_28px_80px_rgba(7,21,27,0.38)] backdrop-blur-xl">
                        <div
                          className={`grid gap-5 ${
                            item.groups.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"
                          }`}
                        >
                          {item.groups.map((group) => (
                            <div
                              key={group.title}
                              className="rounded-[1.2rem] border border-white/8 bg-white/4 p-3.5"
                            >
                              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-white/48">
                                {group.title}
                              </p>
                              <div className="mt-3 flex flex-col">
                                {group.links.map((link) => (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    className="group/link flex items-center justify-between rounded-[0.9rem] px-2.5 py-2.5 text-[0.98rem] text-white/82 transition-colors hover:bg-white/6 hover:text-white"
                                  >
                                    <span>{link.label}</span>
                                    <span className="text-white/28 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:text-white/56">
                                      →
                                    </span>
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
                  className={`group px-3 py-1 transition-colors hover:text-white ${
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
            <div className="hidden items-center gap-3 rounded-full border border-white/12 bg-white/8 px-3.5 py-1.5 text-[0.92rem] font-medium text-white/88 lg:flex">
              <a
                href="tel:+971589142200"
                className="transition-colors hover:text-white"
              >
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
                className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-[1rem] text-white marker:content-none"
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

              <div className="absolute right-0 top-[calc(100%+0.75rem)] w-64 rounded-[1.5rem] border border-foreground/10 bg-[rgba(255,252,248,0.96)] p-3 shadow-[0_24px_60px_rgba(17,35,42,0.14)] backdrop-blur-xl">
                <nav className="flex flex-col gap-1">
                  {navigation.map((item) => {
                    const isActive = item.href === currentPath;
                    if ("groups" in item) {
                      return (
                        <details
                          key={item.href}
                          className="rounded-[1rem] border border-foreground/10 bg-white/28"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between rounded-[1rem] px-4 py-3 text-[0.98rem] font-medium text-foreground transition-colors hover:bg-white/56 marker:content-none">
                            <span>{item.label}</span>
                            <ChevronDownIcon className="h-4 w-4 text-foreground/60" />
                          </summary>
                          <div className="flex flex-col gap-3 px-3 pb-3">
                            <Link
                              href={item.href}
                              className={`rounded-[0.95rem] px-3 py-2.5 text-[0.96rem] transition-colors hover:bg-white ${
                                isActive
                                  ? "text-foreground"
                                  : "text-muted"
                              }`}
                            >
                              Overview
                            </Link>
                            {item.groups.map((group) => (
                              <div key={group.title} className="rounded-[1rem] bg-white p-2">
                                <p className="px-2 pb-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted">
                                  {group.title}
                                </p>
                                <div className="flex flex-col">
                                  {group.links.map((link) => (
                                    <Link
                                      key={link.href}
                                      href={link.href}
                                      className="rounded-[0.9rem] px-2 py-2.5 text-[0.96rem] text-foreground/82 transition-colors hover:bg-background hover:text-foreground"
                                    >
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </details>
                      );
                    }

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`rounded-[1rem] px-4 py-3 text-[0.98rem] transition-colors hover:bg-white ${
                          isActive ? "text-foreground" : "text-muted"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </details>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group rounded-full border border-[#1da851] bg-[#25D366] px-3.5 py-1.5 text-[0.88rem] font-semibold !text-white shadow-[0_10px_24px_rgba(37,211,102,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d] md:px-4"
            >
              <span className="flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4 shrink-0 fill-current" />
                <span className="relative inline-block">
                  WhatsApp
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-full mt-[2px] h-[1.5px] w-0 bg-current opacity-80 transition-[width,opacity] duration-300 ease-out group-hover:w-full"
                  />
                </span>
              </span>
            </a>
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
        <div className="grid gap-8 border-t border-foreground/10 py-8 md:grid-cols-[1fr_1.25fr_1fr]">
          <div>
            <Image
              src="/zenesis-logo-full.png"
              alt="Zenesis Corporation"
              width={300}
              height={72}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-3 max-w-md text-[1.04rem] leading-8 text-muted">
              Business setup, accounting and tax, and corporate support for
              companies operating through Dubai and the UAE.
            </p>
          </div>

          <div>
            <p className="eyebrow text-muted">Navigation</p>
            <div className="mt-4 grid gap-4">
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[1.02rem] font-semibold text-foreground/88 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                  {"groups" in item ? (
                    <div className="mt-2 grid gap-2">
                      {item.groups.map((group) => (
                        <div key={group.title}>
                          <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-muted">
                            {group.title}
                          </p>
                          <div className="mt-1.5 grid gap-1.5">
                            {group.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="pl-3 text-[0.98rem] leading-7 text-foreground/82 transition-colors hover:text-foreground"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-muted">Contact</p>
            <div className="mt-4 grid gap-3">
              {contactDetails.map((item) => {
                const isEmail = item.label === "Email";
                const isPhone =
                  item.label === "Main line" || item.label === "Mobile / WhatsApp";
                const href = isEmail
                  ? `mailto:${item.value}`
                  : isPhone
                    ? `tel:${item.value.replace(/\s+/g, "")}`
                    : null;

                return (
                  <div key={item.label}>
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-muted">
                      {item.label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block text-[1.02rem] font-medium leading-7 text-foreground/88 transition-colors hover:text-foreground"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[1.02rem] leading-7 text-foreground/88">
                        {item.value}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
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
  contentClassName,
  highlights,
  ctaHref,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
}: PageIntroProps) {
  const hasBackgroundImage = Boolean(backgroundImageSrc);
  const breadcrumbItems = Array.isArray(breadcrumb) ? breadcrumb : null;
  const breadcrumbText = typeof breadcrumb === "string" ? breadcrumb : null;
  const shouldOpenConsultationForm =
    ctaLabel?.toLowerCase().includes("consultation") ?? false;
  const primaryCtaClassName =
    "rounded-full bg-[#244ba8] px-6 py-3 text-center text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1b3c86]";

  return (
    <section
      className={
        hasBackgroundImage
          ? "relative left-1/2 -mt-10 w-screen -translate-x-1/2 overflow-hidden pt-20 pb-10 md:-mt-14 md:pt-28 md:pb-16"
          : "relative left-1/2 -mt-px w-screen -translate-x-1/2 border-b border-foreground/8 bg-[#f5efe4] pt-24 pb-10 md:pt-28 md:pb-12"
      }
    >
      {hasBackgroundImage ? (
        <>
          <div className="absolute inset-0 bg-[#11232a]" />
          <div className="absolute inset-0">
            <Image
              src={backgroundImageSrc!}
              alt={backgroundImageAlt ?? ""}
              fill
              priority
              sizes="100vw"
              className={`hero-image translate-x-[12%] scale-110 object-cover saturate-[1.04] contrast-[1.04] md:translate-x-[18%] md:scale-110 ${backgroundImagePosition ?? "object-center"}`}
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,35,42,0.88)_0%,rgba(17,35,42,0.66)_48%,rgba(17,35,42,0.72)_100%)] md:bg-[linear-gradient(90deg,rgba(17,35,42,0.94)_0%,rgba(17,35,42,0.86)_28%,rgba(17,35,42,0.42)_58%,rgba(17,35,42,0.14)_100%)]" />
        </>
      ) : null}

      <div
        className={`relative z-10 ${
          hasBackgroundImage
            ? "mx-auto flex min-h-[calc(100svh-7.5rem)] w-full max-w-[100rem] flex-col justify-between gap-10 px-6 pt-10 md:px-12 md:pt-16 xl:px-20"
            : "mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20"
        }`}
      >
        <div
          className={[
            hasBackgroundImage
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
                  hasBackgroundImage ? "text-white/68" : "text-[#244ba8]"
                }`}
              >
                {breadcrumbItems.map((item, index) => (
                  <Fragment key={`${item.label}-${index}`}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`relative z-20 inline-flex cursor-pointer pointer-events-auto transition-colors ${
                          hasBackgroundImage
                            ? "hover:text-white"
                            : "hover:text-[#1b3c86]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    {index < breadcrumbItems.length - 1 ? (
                      <span aria-hidden="true">→</span>
                    ) : null}
                  </Fragment>
                ))}
              </div>
            ) : (
              <p
                className={`eyebrow ${
                  hasBackgroundImage ? "text-white/68" : "text-[#244ba8]"
                }`}
              >
                {breadcrumbText}
              </p>
            )
          ) : null}
          {eyebrow ? (
            <p
              className={`eyebrow ${
                hasBackgroundImage ? "hero-reveal text-white/78" : "text-accent"
              } ${breadcrumb ? "mt-5" : ""}`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`${eyebrow ? "mt-6" : breadcrumb ? "mt-5" : "mt-0"} max-w-[16ch] text-[3.4rem] font-semibold leading-[0.94] tracking-[-0.04em] sm:max-w-[17ch] sm:text-[4.3rem] lg:max-w-[18ch] lg:text-[4.85rem] ${
              hasBackgroundImage ? "text-white" : "text-foreground"
            } ${hasBackgroundImage ? "hero-reveal hero-reveal-1" : ""}`}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={`mt-6 max-w-3xl text-[1.14rem] font-medium leading-8 md:text-[1.28rem] md:leading-9 ${
                hasBackgroundImage ? "text-white/88" : "text-muted"
              } ${hasBackgroundImage ? "hero-reveal hero-reveal-2" : ""}`}
            >
              {description}
            </p>
          ) : null}
        </div>

        <div className={hasBackgroundImage ? "mt-auto" : ""}>
          {(ctaHref || secondaryHref) && (
            <div className={`flex flex-col gap-4 sm:flex-row ${hasBackgroundImage ? "hero-reveal hero-reveal-3" : "mt-9"}`}>
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
                    hasBackgroundImage
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
                hasBackgroundImage
                  ? "hero-reveal hero-reveal-4 gap-3 sm:grid-cols-3"
                  : "gap-3 sm:grid-cols-3"
              }`}
            >
              {highlights.map((item) => (
                <div
                  key={`${item.label}-${item.value}`}
                  className={`px-4 py-4 backdrop-blur-sm ${
                    hasBackgroundImage
                      ? "rounded-[1.4rem] border border-white/22 bg-[#11232a]/76 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                      : "rounded-[1.4rem] border border-white/60 bg-white/55"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xl ${
                        hasBackgroundImage ? "bg-white/12" : "bg-[rgba(36,75,168,0.1)]"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p className={`eyebrow ${hasBackgroundImage ? "text-white/66" : "text-muted"}`}>
                        {item.label}
                      </p>
                      <p
                        className={`mt-1 text-sm font-semibold tracking-normal ${
                          hasBackgroundImage ? "text-white" : "text-foreground"
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
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className="max-w-5xl">
      <p className="eyebrow text-accent">{eyebrow}</p>
      <h2
        className={[
          "section-title mt-4 font-semibold text-foreground",
          titleClassName ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-4xl text-[1.16rem] leading-8 text-muted md:text-[1.24rem] md:leading-9">
          {description}
        </p>
      ) : null}
    </div>
  );
}
