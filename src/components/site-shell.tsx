"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode, useEffect, useState } from "react";
import { CleanSectionLink } from "@/components/clean-section-link";
import {
  ConsultationFormButton,
  ConsultationSessionPrompt,
} from "@/components/consultation-button";
import { HelpWidget } from "@/components/help-widget";
import { SiteSearchForm } from "@/components/site-search-form";
import { contactDetails, navigation, socialLinks, whatsappHref } from "@/lib/site-content";

type SiteShellProps = {
  children: React.ReactNode;
  currentPath: string;
};

const servicesScrollIntentKey = "zenesis-scroll-to-services";
const sectionScrollIntentKey = "zenesis-scroll-to-section";

export function SiteShell({
  children,
  currentPath,
}: SiteShellProps) {
  const shellWidthClass = "max-w-[100rem]";
  const isHomepage = currentPath === "/";
  const router = useRouter();
  const [hoveredNavHref, setHoveredNavHref] = useState<string | null>(null);
  const [openDesktopMenuHref, setOpenDesktopMenuHref] = useState<string | null>(null);
  const [hoveredServiceGroupTitle, setHoveredServiceGroupTitle] = useState<string | null>(null);

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

  useEffect(() => {
    const sectionId = window.sessionStorage.getItem(sectionScrollIntentKey);

    if (!sectionId) {
      return;
    }

    window.sessionStorage.removeItem(sectionScrollIntentKey);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "auto", block: "start" });
        window.history.replaceState(null, "", currentPath);
      });
    });
  }, [currentPath]);

  useEffect(() => {
    const sectionId = window.location.hash.slice(1);

    if (!sectionId) {
      return;
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "auto", block: "start" });
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}`,
        );
      });
    });
  }, [currentPath]);

  const handleSectionLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const hashIndex = href.indexOf("#");

    if (hashIndex === -1) {
      return;
    }

    const targetPath = href.slice(0, hashIndex) || currentPath;
    const sectionId = href.slice(hashIndex + 1);

    if (!sectionId) {
      return;
    }

    event.preventDefault();
    setOpenDesktopMenuHref(null);
    setHoveredNavHref(null);
    setHoveredServiceGroupTitle(null);

    if (targetPath === currentPath) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "auto", block: "start" });
      window.history.replaceState(null, "", targetPath);
      return;
    }

    window.sessionStorage.setItem(sectionScrollIntentKey, sectionId);
    router.push(targetPath, { scroll: false });
  };

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
      <ConsultationSessionPrompt />
      <div
        aria-hidden="true"
        className="site-background pointer-events-none fixed inset-0 -z-10"
      />
      <header
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/12 bg-[rgba(15,31,39,0.94)] backdrop-blur-xl"
      >
        <div
          className={`mx-auto flex ${shellWidthClass} items-center justify-between gap-5 px-6 py-3 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:px-10 xl:px-14 2xl:px-16`}
        >
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="lg:hidden">
              <Image
                src="/logos/zenesis-logo-full.webp"
                alt="Zenesis Corporation"
                width={220}
                height={54}
                sizes="120px"
                className="h-8 w-auto object-contain brightness-0 invert sm:h-9 md:h-10"
              />
            </span>
            <span className="hidden lg:block">
              <Image
                src="/logos/zenesis-logo-full.webp"
                alt="Zenesis Corporation"
                width={360}
                height={88}
                sizes="180px"
                className="h-9 w-auto object-contain brightness-0 invert 2xl:h-10"
              />
            </span>
          </Link>

          <nav className="hidden min-w-0 items-center justify-center gap-1 justify-self-center px-1 py-0.5 text-[0.88rem] font-semibold text-white/88 lg:flex xl:gap-1.5 xl:text-[0.92rem] 2xl:gap-2 2xl:text-[0.96rem]">
            {navigation.map((item) => {
              const isActive =
                item.href === currentPath ||
                ("groups" in item &&
                  (currentPath === item.href ||
                    item.groups.some((group) =>
                      group.links.some((link) => link.href === currentPath),
                    )));
              const isHovered = hoveredNavHref === item.href;
              const isDesktopMenuOpen = openDesktopMenuHref === item.href;
              const shouldShowUnderline = isHovered || isDesktopMenuOpen;
              if ("groups" in item) {
                const isServicesMenu = item.label === "Services";
                const groupCount = item.groups.length;

                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => {
                      setHoveredNavHref(item.href);
                      setOpenDesktopMenuHref(item.href);
                    }}
                    onMouseLeave={() => {
                      setHoveredNavHref((current) => (current === item.href ? null : current));
                      setOpenDesktopMenuHref((current) => (current === item.href ? null : current));
                    }}
                    onFocusCapture={() => {
                      setHoveredNavHref(item.href);
                      setOpenDesktopMenuHref(item.href);
                    }}
                    onBlurCapture={(event) => {
                      if (event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        return;
                      }

                      setHoveredNavHref((current) => (current === item.href ? null : current));
                      setOpenDesktopMenuHref((current) => (current === item.href ? null : current));
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={(event) => handleServicesNavClick(event, item.href)}
                      className={`group inline-flex items-center gap-1.5 px-1.5 py-2 transition-colors duration-200 hover:text-white xl:px-2 ${
                        isActive ? "text-white" : ""
                      }`}
                    >
                      <span className="relative inline-block">
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 top-full mt-[2px] h-[1.5px] bg-current transition-[width,opacity] duration-300 ease-out ${
                            shouldShowUnderline ? "w-full opacity-100" : "w-0 opacity-70"
                          }`}
                        />
                      </span>
                      <ChevronDownIcon
                        className={`mt-px h-3.5 w-3.5 opacity-80 transition-transform duration-200 ${
                          isDesktopMenuOpen ? "translate-y-[1px]" : ""
                        }`}
                      />
                    </Link>

                    <div
                      className={`${
                        isServicesMenu
                          ? "fixed left-1/2 top-[3.25rem]"
                          : "absolute left-1/2 top-full"
                      } -translate-x-1/2 pt-3 transition-all duration-200 ease-out ${
                        isDesktopMenuOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-1.5 opacity-0"
                      } ${
                        isServicesMenu
                          ? "w-[min(calc(100vw-2rem),80rem)]"
                          : groupCount > 2
                            ? "w-[28rem]"
                            : groupCount > 1
                              ? "w-[25rem]"
                              : "w-[16.5rem]"
                      }`}
                    >
                      <div
                          className={`overflow-hidden rounded-lg border border-white/12 bg-[rgba(15,31,39,0.99)] shadow-[0_18px_44px_rgba(7,21,27,0.24)] backdrop-blur-xl ${
                          isServicesMenu ? "p-4" : "p-2.5"
                        }`}
                      >
                        <div
                          className={`grid gap-2.5 ${
                            isServicesMenu
                              ? "md:grid-cols-[0.9fr_1fr_0.9fr_1.1fr_1.1fr] md:gap-0"
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
                                  ? "min-w-0 px-3 py-1 first:pl-0 last:pr-0 md:border-l md:border-white/10 md:first:border-l-0 md:pl-4 md:first:pl-0 md:pr-4 md:last:pr-0 xl:pl-5 xl:pr-5"
                                  : "rounded-md border border-white/8 bg-white/[0.04] p-3"
                              }
                            >
                              {isServicesMenu ? (
                                <a
                                  href={getServiceGroupHref(group.title)}
                                  onClick={(event) => handleSectionLinkClick(event, getServiceGroupSectionHref(group.title))}
                                  onMouseEnter={() => setHoveredServiceGroupTitle(group.title)}
                                  onMouseLeave={() =>
                                    setHoveredServiceGroupTitle((current) =>
                                      current === group.title ? null : current,
                                    )
                                  }
                                  onFocus={() => setHoveredServiceGroupTitle(group.title)}
                                  onBlur={() =>
                                    setHoveredServiceGroupTitle((current) =>
                                      current === group.title ? null : current,
                                    )
                                  }
                                  className="block text-[1rem] font-semibold leading-[1.3] tracking-[-0.02em] text-white transition-colors hover:text-white/82 xl:text-[1.04rem]"
                                >
                                  <span className="relative inline-block">
                                    {group.title}
                                    <span
                                      aria-hidden="true"
                                      className={`absolute left-0 top-full mt-[2px] h-[1.5px] bg-current transition-[width,opacity] duration-300 ease-out ${
                                        hoveredServiceGroupTitle === group.title
                                          ? "w-full opacity-100"
                                          : "w-0 opacity-80"
                                      }`}
                                    />
                                  </span>
                                </a>
                              ) : (
                                <p className="whitespace-nowrap text-sm font-medium text-white/62">
                                  {group.title}
                                </p>
                              )}
                              <div className={`flex flex-col ${isServicesMenu ? "mt-4 gap-1" : "mt-3"}`}>
                                {group.links.map((link) => (
                                  <Link
                                    key={`${group.title}-${link.label}-${link.href}`}
                                    href={link.href.split("#")[0] || currentPath}
                                    onClick={(event) => handleSectionLinkClick(event, link.href)}
                                    className={`rounded-md transition-all duration-200 hover:bg-white/7 hover:text-white ${
                                      isServicesMenu
                                        ? "-mx-3 px-3 py-2 text-[0.96rem] font-medium leading-[1.45] text-white/72 hover:text-white"
                                        : "px-2.75 py-2.25 text-[0.92rem] text-white/90"
                                    }`}
                                  >
                                    <span className={`block tracking-[-0.01em] ${isServicesMenu ? "whitespace-normal [overflow-wrap:anywhere]" : "whitespace-nowrap"}`}>{link.label}</span>
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
                  onMouseEnter={() => setHoveredNavHref(item.href)}
                  onMouseLeave={() =>
                    setHoveredNavHref((current) => (current === item.href ? null : current))
                  }
                  onFocus={() => setHoveredNavHref(item.href)}
                  onBlur={() =>
                    setHoveredNavHref((current) => (current === item.href ? null : current))
                  }
                  className={`group px-1.5 py-2 transition-colors duration-200 hover:text-white xl:px-2 ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-full mt-[2px] h-[1.5px] bg-current transition-[width,opacity] duration-300 ease-out ${
                        shouldShowUnderline ? "w-full opacity-100" : "w-0 opacity-70"
                      }`}
                    />
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <div className="hidden lg:block">
              <SiteSearchForm compact className="w-[11.75rem] xl:w-[12rem] 2xl:w-[17rem]" />
            </div>
            <div className="hidden h-10 items-center gap-3 border-l border-white/14 pl-3 text-[0.9rem] font-medium text-white/86 lg:flex 2xl:text-[0.94rem]">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 whitespace-nowrap transition-colors hover:text-white"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_18px_rgba(37,211,102,0.22)]">
                  <WhatsAppIcon className="h-4 w-4 shrink-0 fill-current" />
                </span>
                <span className="hidden 2xl:inline">+971 58 914 2200</span>
              </a>
              <span className="hidden h-3 w-px bg-white/16 xl:block" />
              <a
                href="mailto:info@zenesiscorp.com"
                className="hidden whitespace-nowrap transition-colors hover:text-white xl:inline-flex"
              >
                info@zenesiscorp.com
              </a>
            </div>
            <details className="relative lg:hidden">
              <summary
                className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-white/14 bg-white/6 text-white marker:content-none"
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

              <div className="absolute right-0 top-[calc(100%+0.75rem)] max-h-[calc(100dvh-5rem)] w-[19.75rem] overflow-y-auto rounded-lg border border-white/12 bg-[rgba(15,31,39,0.99)] p-4 shadow-[0_18px_44px_rgba(7,21,27,0.24)] backdrop-blur-xl">
                <p className="px-1 text-sm font-medium text-white/58">Menu</p>
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
                          <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-3 text-[1.05rem] font-semibold !text-white transition-colors hover:bg-white/6 marker:content-none">
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
                                <a
                                  href={getServiceGroupHref(group.title)}
                                  onClick={(event) => handleSectionLinkClick(event, getServiceGroupSectionHref(group.title))}
                                  className="group/title block px-1"
                                >
                                  <span className="relative inline-block text-[1.08rem] font-semibold tracking-[-0.02em] !text-white">
                                    {group.title}
                                    <span
                                      aria-hidden="true"
                                      className="absolute left-0 top-full mt-[2px] h-[1.5px] w-0 bg-current opacity-80 transition-[width,opacity] duration-300 ease-out group-hover/title:w-full"
                                    />
                                  </span>
                                </a>
                                <div className="mt-2.5 flex flex-col gap-0.5">
                                  {group.links.map((link) => (
                                  <Link
                                      key={`${group.title}-${link.label}-${link.href}`}
                                    href={link.href.split("#")[0] || currentPath}
                                    onClick={(event) => handleSectionLinkClick(event, link.href)}
                                      className="rounded-md px-3 py-2.5 text-[0.96rem] font-medium leading-6 !text-white/88 transition-all duration-200 hover:bg-white/7 hover:!text-white hover:pl-4"
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
        className={`mx-auto flex w-full ${shellWidthClass} flex-1 flex-col px-6 pt-10 md:px-12 md:pt-14 xl:px-16`}
      >
        {children}
      </main>

      <footer
        className="relative left-1/2 w-screen -translate-x-1/2 border-t border-[#d8d0c2] bg-[#f8f6f1]"
      >
        <div className={`mx-auto w-full ${shellWidthClass} px-6 py-12 md:px-12 md:py-14 xl:px-16`}>
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.15fr_0.9fr] md:gap-8">
          <div className="pr-2">
            <Image
              src="/logos/zenesis-logo-full.webp"
              alt="Zenesis Corporation"
              width={300}
              height={72}
              sizes="168px"
              className="h-10 w-auto object-contain brightness-0 saturate-0"
            />
            <p className="mt-4 max-w-md text-[1.08rem] leading-8 text-foreground/78">
              Business setup, accounting and tax, and corporate support for
              companies operating through Dubai and the UAE.
            </p>
          </div>

          <div className="md:border-l md:border-r md:border-foreground/10 md:px-8">
            <p className="text-sm font-semibold text-[#8d7453]">
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
                          <a
                            href={getServiceGroupHref(group.title)}
                            onClick={(event) => handleSectionLinkClick(event, getServiceGroupSectionHref(group.title))}
                            className="inline-flex text-[0.96rem] font-semibold tracking-[-0.02em] text-foreground/78 transition-colors hover:text-foreground"
                          >
                            {group.title}
                          </a>
                          <div className="mt-1.5 grid gap-1.5">
                            {group.links.map((link) => (
                              <Link
                                key={`${group.title}-${link.label}-${link.href}`}
                                href={link.href.split("#")[0] || currentPath}
                                onClick={(event) => handleSectionLinkClick(event, link.href)}
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
            <p className="text-sm font-semibold text-[#8d7453]">
              Contact
            </p>
            <ConsultationFormButton
              label="Schedule a Free Consultation"
              leadingIcon={
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#11232a] text-[#f4dfb5] shadow-[0_5px_14px_rgba(17,35,42,0.22)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 3v3M17 3v3M4.5 9h15" />
                    <rect x="4.5" y="5" width="15" height="15" rx="3" />
                    <path d="m9.5 14 1.7 1.7 3.6-4" />
                  </svg>
                </span>
              }
              className="group mt-5 inline-flex min-h-14 w-full items-center justify-center rounded-full border border-[#f6e4bd]/90 bg-[linear-gradient(135deg,#fff9ec_0%,#edd9b2_52%,#d9b97e_100%)] px-5 py-3 text-center text-sm font-semibold tracking-[0.015em] !text-[#11232a] shadow-[0_18px_40px_rgba(17,35,42,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] outline-none ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-1 hover:border-[#fff1d3] hover:brightness-[1.04] hover:shadow-[0_22px_46px_rgba(17,35,42,0.24),inset_0_1px_0_rgba(255,255,255,0.95)] focus-visible:ring-2 focus-visible:ring-[#c6a15f] focus-visible:ring-offset-3 focus-visible:ring-offset-[#f5efe4] active:translate-y-0"
            />
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
                  <div key={item.label} className="rounded-lg border border-[#d8d0c2] bg-white/72 px-4 py-3.5">
                    <p className="text-sm font-medium text-muted">
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
            <div className="mt-4 rounded-lg border border-[#d8d0c2] bg-white/72 px-4 py-3.5">
              <p className="text-sm font-medium text-muted">
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

      <HelpWidget />
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
      return "/corporate-support";
    case "Corporate License Lifecycle":
      return "/corporate-support";
    case "Corporate Services":
      return "/corporate-support";
    case "Visa and Banking":
      return "/visa-and-banking";
    default:
      return "/";
  }
}

function getServiceGroupSectionHref(groupTitle: string) {
  switch (groupTitle) {
    case "Corporate License Lifecycle":
      return "/corporate-support#license-lifecycle";
    case "Corporate Services":
      return "/corporate-support#corporate-services";
    default:
      return getServiceGroupHref(groupTitle);
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
  preloadBackgroundImage?: boolean;
  ambientImageClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  highlights?: readonly {
    icon: string;
    label: string;
    value: ReactNode;
  }[];
  ctaHref?: string;
  ctaLabel?: string;
  ctaPresetEnquiry?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  showBottomBorder?: boolean;
  footerContent?: ReactNode;
};

export function PageIntro({
  breadcrumb,
  title,
  description,
  backgroundImageSrc,
  backgroundImageAlt,
  backgroundImagePosition,
  backgroundImageMode = "full",
  preloadBackgroundImage = false,
  ambientImageClassName,
  contentClassName,
  titleClassName,
  highlights,
  ctaHref,
  ctaLabel,
  ctaPresetEnquiry,
  secondaryHref,
  secondaryLabel,
  showBottomBorder = true,
  footerContent,
}: PageIntroProps) {
  const hasBackgroundImage = Boolean(backgroundImageSrc);
  const usesFullBackgroundImage = hasBackgroundImage && backgroundImageMode === "full";
  const usesAmbientBackgroundImage = hasBackgroundImage && backgroundImageMode === "ambient";
  const usesEditorialIntro = !usesFullBackgroundImage;
  const breadcrumbItems = Array.isArray(breadcrumb) ? breadcrumb : null;
  const breadcrumbText = typeof breadcrumb === "string" ? breadcrumb : null;
  const shouldOpenConsultationForm =
    ctaLabel?.toLowerCase().includes("consultation") ?? false;
  const primaryCtaClassName =
    "rounded-full bg-[#244ba8] px-6 py-3 text-center text-sm font-semibold !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1b3c86]";
  const ctaIsSectionLink = ctaHref?.startsWith("#") ?? false;
  const secondaryIsSectionLink = secondaryHref?.startsWith("#") ?? false;

  return (
    <section
      className={[
        usesFullBackgroundImage
          ? "relative left-1/2 -mt-10 w-screen -translate-x-1/2 overflow-hidden pt-20 pb-10 md:-mt-14 md:pt-28 md:pb-16"
          : usesAmbientBackgroundImage
            ? "relative left-1/2 -mt-px flex min-h-[17rem] w-screen -translate-x-1/2 items-center overflow-hidden bg-[#f5efe4] py-7 md:min-h-[18rem] md:py-8"
            : "relative left-1/2 -mt-px flex min-h-[17rem] w-screen -translate-x-1/2 items-center bg-[#f5efe4] py-7 md:min-h-[18rem] md:py-8",
        showBottomBorder ? "border-b border-foreground/8" : "",
      ]
        .filter(Boolean)
        .join(" ")}
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
            "pointer-events-none absolute inset-y-0 right-0 w-[48%] max-w-[52rem] overflow-hidden sm:w-[54%] md:w-[52%] lg:w-[54%] xl:w-[56%]",
            ambientImageClassName ?? "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div
            className="absolute inset-0 opacity-[0.4] sm:opacity-[0.52] md:opacity-[0.98]"
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
              preload={preloadBackgroundImage}
              loading={preloadBackgroundImage ? undefined : "lazy"}
              fetchPriority={preloadBackgroundImage ? undefined : "low"}
              quality={76}
              sizes="(max-width: 767px) 92vw, (max-width: 1279px) 54vw, 832px"
              className={`object-cover object-right-top saturate-[0.94] contrast-[0.98] ${backgroundImagePosition ?? "object-[82%_24%]"}`}
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_44%,rgba(36,75,168,0.12),transparent_30%),linear-gradient(180deg,rgba(245,239,228,0.02)_0%,rgba(245,239,228,0.08)_72%,rgba(245,239,228,0.22)_100%)]" />
        </div>
      ) : null}
      {usesAmbientBackgroundImage ? (
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#f5efe4_0%,#f5efe4_72%,rgba(245,239,228,0.98)_82%,rgba(245,239,228,0.72)_92%,transparent_100%)] md:bg-none" />
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
              : "max-w-[52rem] border-l-4 border-[#244ba8] py-1 pl-5 sm:pl-6 md:pl-7",
            contentClassName ?? "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {usesEditorialIntro ? (
            <div className="mb-5 h-px w-12 bg-[#b88d53]" />
          ) : null}
          {breadcrumb ? (
            breadcrumbItems ? (
              <div
                className={`relative z-20 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 pointer-events-auto text-sm font-medium ${
                  usesFullBackgroundImage ? "text-white/68" : "text-[#244ba8]"
                }`}
              >
                {breadcrumbItems.map((item, index) => (
                  <Fragment key={`${item.label}-${index}`}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`relative z-20 inline-flex cursor-pointer pointer-events-auto transition-colors ${
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
                className={`text-sm font-medium ${
                  usesFullBackgroundImage ? "text-white/68" : "text-[#244ba8]"
                }`}
              >
                {breadcrumbText}
              </p>
            )
          ) : null}
          <h1
            className={`${breadcrumb ? "mt-4" : "mt-0"} ${
              usesFullBackgroundImage
                ? "max-w-[20ch] text-[3.05rem] [text-wrap:balance] sm:max-w-[21ch] sm:text-[4.05rem] lg:max-w-[22ch] lg:text-[4.75rem]"
                : "max-w-[22ch] text-[2.35rem] [text-wrap:balance] sm:max-w-[23ch] sm:text-[3.25rem] lg:max-w-[24ch] lg:text-[4.05rem]"
            } page-title-display ${
              usesFullBackgroundImage ? "text-white" : "text-foreground"
            } ${usesFullBackgroundImage ? "hero-reveal hero-reveal-1" : ""} ${titleClassName ?? ""}`}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={`${
                usesEditorialIntro ? "mt-5 max-w-[40rem] text-[1rem] leading-7 md:text-[1.08rem] md:leading-8" : "mt-6 max-w-3xl text-[1.14rem] leading-8 md:text-[1.28rem] md:leading-9"
              } ${
                usesFullBackgroundImage ? "font-medium text-white/88" : "font-semibold text-[#11232a] md:font-medium md:text-[#11232a]/90"
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
                    presetEnquiry={
                      ctaPresetEnquiry ??
                      "I would like to schedule a free consultation with Zenesis."
                    }
                  />
                ) : ctaIsSectionLink ? (
                  <CleanSectionLink
                    href={ctaHref as `#${string}`}
                    className={primaryCtaClassName}
                  >
                    {ctaLabel}
                  </CleanSectionLink>
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
                secondaryIsSectionLink ? (
                  <CleanSectionLink
                    href={secondaryHref as `#${string}`}
                    className={`rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${
                      usesFullBackgroundImage
                        ? "border border-white/24 bg-white/12 !text-white backdrop-blur-md hover:bg-white/20"
                        : "border border-[#244ba8] bg-[#244ba8] !text-white hover:bg-[#1b3c86]"
                    }`}
                  >
                    {secondaryLabel}
                  </CleanSectionLink>
                ) : (
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
                )
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
                      <p className={`text-sm font-medium ${usesFullBackgroundImage ? "text-white/66" : "text-muted"}`}>
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

          {footerContent ? (
            <div className={usesFullBackgroundImage ? "mt-6 hero-reveal hero-reveal-4" : "mt-4"}>
              {footerContent}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
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
  title,
  description,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className="max-w-[54rem]">
      <h2
        className={[
          "section-title w-full border-t border-[#b88d53]/55 pt-5 !text-[1.75rem] font-semibold !leading-[1.16] !tracking-[-0.02em] text-foreground sm:!text-[1.9rem] md:!text-[2.05rem]",
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
            "text-muted mt-4 max-w-[50rem] !text-[1.06rem] !leading-8 text-[#07151b]/76 md:!text-[1.1rem]",
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
