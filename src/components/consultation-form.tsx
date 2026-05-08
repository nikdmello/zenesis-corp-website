"use client";

import Image from "next/image";
import { useEffect, useId, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";

const whatsappNumber = "971589142200";
const scrollPromptStorageKey = "zenesis-consultation-scroll-prompt-seen";
const enquiryShortcuts = [
  {
    label: "New company setup",
    value:
      "I need help setting up a new company in the UAE and choosing the right route for the business.",
  },
  {
    label: "Mainland vs free zone",
    value:
      "I would like guidance on whether mainland or free zone setup is a better fit for how I plan to operate.",
  },
  {
    label: "Banking and visa support",
    value:
      "I need support with business banking, visa requirements, and the practical steps after company formation.",
  },
  {
    label: "Corporate tax and VAT",
    value:
      "I need help with corporate tax, VAT, registrations, or filing support for a UAE business.",
  },
  {
    label: "Bookkeeping and reporting",
    value:
      "I need bookkeeping, reporting, or recurring finance support to keep the business organized and compliant.",
  },
  {
    label: "General consultation",
    value:
      "I would like a consultation to understand the right next step for my business in the UAE.",
  },
] as const;

function buildEnquiryMessage(
  selectedShortcutLabels: string[],
  presetEnquiry?: string,
) {
  const selectedShortcuts = enquiryShortcuts.filter((item) =>
    selectedShortcutLabels.includes(item.label),
  );

  if (!selectedShortcuts.length) {
    return presetEnquiry ?? "";
  }

  const lines = [
    "I would like help with the following:",
    ...selectedShortcuts.map((item) => `- ${item.label}`),
    "",
    ...selectedShortcuts.map((item) => item.value),
  ];

  if (
    presetEnquiry &&
    !selectedShortcuts.some((item) => item.value === presetEnquiry)
  ) {
    lines.push("", presetEnquiry);
  }

  return lines.join("\n");
}

const countryCodes = [
  { label: "🇦🇪 United Arab Emirates (+971)", value: "+971" },
  { label: "🇦🇫 Afghanistan (+93)", value: "+93" },
  { label: "🇦🇱 Albania (+355)", value: "+355" },
  { label: "🇩🇿 Algeria (+213)", value: "+213" },
  { label: "🇦🇸 American Samoa (+1)", value: "+1" },
  { label: "🇦🇩 Andorra (+376)", value: "+376" },
  { label: "🇦🇴 Angola (+244)", value: "+244" },
  { label: "🇦🇮 Anguilla (+1)", value: "+1" },
  { label: "🇦🇬 Antigua and Barbuda (+1)", value: "+1" },
  { label: "🇦🇷 Argentina (+54)", value: "+54" },
  { label: "🇦🇲 Armenia (+374)", value: "+374" },
  { label: "🇦🇼 Aruba (+297)", value: "+297" },
  { label: "🇦🇺 Australia (+61)", value: "+61" },
  { label: "🇦🇹 Austria (+43)", value: "+43" },
  { label: "🇦🇿 Azerbaijan (+994)", value: "+994" },
  { label: "🇧🇸 Bahamas (+1)", value: "+1" },
  { label: "🇧🇭 Bahrain (+973)", value: "+973" },
  { label: "🇧🇩 Bangladesh (+880)", value: "+880" },
  { label: "🇧🇧 Barbados (+1)", value: "+1" },
  { label: "🇧🇾 Belarus (+375)", value: "+375" },
  { label: "🇧🇪 Belgium (+32)", value: "+32" },
  { label: "🇧🇿 Belize (+501)", value: "+501" },
  { label: "🇧🇯 Benin (+229)", value: "+229" },
  { label: "🇧🇲 Bermuda (+1)", value: "+1" },
  { label: "🇧🇹 Bhutan (+975)", value: "+975" },
  { label: "🇧🇴 Bolivia (+591)", value: "+591" },
  { label: "🇧🇦 Bosnia and Herzegovina (+387)", value: "+387" },
  { label: "🇧🇼 Botswana (+267)", value: "+267" },
  { label: "🇧🇷 Brazil (+55)", value: "+55" },
  { label: "🇻🇬 British Virgin Islands (+1)", value: "+1" },
  { label: "🇧🇳 Brunei (+673)", value: "+673" },
  { label: "🇧🇬 Bulgaria (+359)", value: "+359" },
  { label: "🇧🇫 Burkina Faso (+226)", value: "+226" },
  { label: "🇧🇮 Burundi (+257)", value: "+257" },
  { label: "🇰🇭 Cambodia (+855)", value: "+855" },
  { label: "🇨🇲 Cameroon (+237)", value: "+237" },
  { label: "🇨🇦 Canada (+1)", value: "+1" },
  { label: "🇨🇻 Cape Verde (+238)", value: "+238" },
  { label: "🇰🇾 Cayman Islands (+1)", value: "+1" },
  { label: "🇨🇫 Central African Republic (+236)", value: "+236" },
  { label: "🇹🇩 Chad (+235)", value: "+235" },
  { label: "🇨🇱 Chile (+56)", value: "+56" },
  { label: "🇨🇳 China (+86)", value: "+86" },
  { label: "🇨🇴 Colombia (+57)", value: "+57" },
  { label: "🇰🇲 Comoros (+269)", value: "+269" },
  { label: "🇨🇬 Congo (+242)", value: "+242" },
  { label: "🇨🇩 Congo, Democratic Republic (+243)", value: "+243" },
  { label: "🇨🇰 Cook Islands (+682)", value: "+682" },
  { label: "🇨🇷 Costa Rica (+506)", value: "+506" },
  { label: "🇭🇷 Croatia (+385)", value: "+385" },
  { label: "🇨🇺 Cuba (+53)", value: "+53" },
  { label: "🇨🇼 Curacao (+599)", value: "+599" },
  { label: "🇨🇾 Cyprus (+357)", value: "+357" },
  { label: "🇨🇿 Czech Republic (+420)", value: "+420" },
  { label: "🇩🇰 Denmark (+45)", value: "+45" },
  { label: "🇩🇯 Djibouti (+253)", value: "+253" },
  { label: "🇩🇲 Dominica (+1)", value: "+1" },
  { label: "🇩🇴 Dominican Republic (+1)", value: "+1" },
  { label: "🇪🇨 Ecuador (+593)", value: "+593" },
  { label: "🇪🇬 Egypt (+20)", value: "+20" },
  { label: "🇸🇻 El Salvador (+503)", value: "+503" },
  { label: "🇬🇶 Equatorial Guinea (+240)", value: "+240" },
  { label: "🇪🇷 Eritrea (+291)", value: "+291" },
  { label: "🇪🇪 Estonia (+372)", value: "+372" },
  { label: "🇸🇿 Eswatini (+268)", value: "+268" },
  { label: "🇪🇹 Ethiopia (+251)", value: "+251" },
  { label: "🇫🇰 Falkland Islands (+500)", value: "+500" },
  { label: "🇫🇴 Faroe Islands (+298)", value: "+298" },
  { label: "🇫🇯 Fiji (+679)", value: "+679" },
  { label: "🇫🇮 Finland (+358)", value: "+358" },
  { label: "🇫🇷 France (+33)", value: "+33" },
  { label: "🇬🇫 French Guiana (+594)", value: "+594" },
  { label: "🇵🇫 French Polynesia (+689)", value: "+689" },
  { label: "🇬🇦 Gabon (+241)", value: "+241" },
  { label: "🇬🇲 Gambia (+220)", value: "+220" },
  { label: "🇬🇪 Georgia (+995)", value: "+995" },
  { label: "🇩🇪 Germany (+49)", value: "+49" },
  { label: "🇬🇭 Ghana (+233)", value: "+233" },
  { label: "🇬🇮 Gibraltar (+350)", value: "+350" },
  { label: "🇬🇷 Greece (+30)", value: "+30" },
  { label: "🇬🇱 Greenland (+299)", value: "+299" },
  { label: "🇬🇩 Grenada (+1)", value: "+1" },
  { label: "🇬🇵 Guadeloupe (+590)", value: "+590" },
  { label: "🇬🇺 Guam (+1)", value: "+1" },
  { label: "🇬🇹 Guatemala (+502)", value: "+502" },
  { label: "🇬🇬 Guernsey (+44)", value: "+44" },
  { label: "🇬🇳 Guinea (+224)", value: "+224" },
  { label: "🇬🇼 Guinea-Bissau (+245)", value: "+245" },
  { label: "🇬🇾 Guyana (+592)", value: "+592" },
  { label: "🇭🇹 Haiti (+509)", value: "+509" },
  { label: "🇭🇳 Honduras (+504)", value: "+504" },
  { label: "🇭🇰 Hong Kong (+852)", value: "+852" },
  { label: "🇭🇺 Hungary (+36)", value: "+36" },
  { label: "🇮🇸 Iceland (+354)", value: "+354" },
  { label: "🇮🇳 India (+91)", value: "+91" },
  { label: "🇮🇩 Indonesia (+62)", value: "+62" },
  { label: "🇮🇷 Iran (+98)", value: "+98" },
  { label: "🇮🇶 Iraq (+964)", value: "+964" },
  { label: "🇮🇪 Ireland (+353)", value: "+353" },
  { label: "🇮🇲 Isle of Man (+44)", value: "+44" },
  { label: "🇮🇱 Israel (+972)", value: "+972" },
  { label: "🇮🇹 Italy (+39)", value: "+39" },
  { label: "🇨🇮 Ivory Coast (+225)", value: "+225" },
  { label: "🇯🇲 Jamaica (+1)", value: "+1" },
  { label: "🇯🇵 Japan (+81)", value: "+81" },
  { label: "🇯🇪 Jersey (+44)", value: "+44" },
  { label: "🇯🇴 Jordan (+962)", value: "+962" },
  { label: "🇰🇿 Kazakhstan (+7)", value: "+7" },
  { label: "🇰🇪 Kenya (+254)", value: "+254" },
  { label: "🇰🇮 Kiribati (+686)", value: "+686" },
  { label: "🇽🇰 Kosovo (+383)", value: "+383" },
  { label: "🇰🇼 Kuwait (+965)", value: "+965" },
  { label: "🇰🇬 Kyrgyzstan (+996)", value: "+996" },
  { label: "🇱🇦 Laos (+856)", value: "+856" },
  { label: "🇱🇻 Latvia (+371)", value: "+371" },
  { label: "🇱🇧 Lebanon (+961)", value: "+961" },
  { label: "🇱🇸 Lesotho (+266)", value: "+266" },
  { label: "🇱🇷 Liberia (+231)", value: "+231" },
  { label: "🇱🇾 Libya (+218)", value: "+218" },
  { label: "🇱🇮 Liechtenstein (+423)", value: "+423" },
  { label: "🇱🇹 Lithuania (+370)", value: "+370" },
  { label: "🇱🇺 Luxembourg (+352)", value: "+352" },
  { label: "🇲🇴 Macau (+853)", value: "+853" },
  { label: "🇲🇬 Madagascar (+261)", value: "+261" },
  { label: "🇲🇼 Malawi (+265)", value: "+265" },
  { label: "🇲🇾 Malaysia (+60)", value: "+60" },
  { label: "🇲🇻 Maldives (+960)", value: "+960" },
  { label: "🇲🇱 Mali (+223)", value: "+223" },
  { label: "🇲🇹 Malta (+356)", value: "+356" },
  { label: "🇲🇭 Marshall Islands (+692)", value: "+692" },
  { label: "🇲🇶 Martinique (+596)", value: "+596" },
  { label: "🇲🇷 Mauritania (+222)", value: "+222" },
  { label: "🇲🇺 Mauritius (+230)", value: "+230" },
  { label: "🇲🇽 Mexico (+52)", value: "+52" },
  { label: "🇫🇲 Micronesia (+691)", value: "+691" },
  { label: "🇲🇩 Moldova (+373)", value: "+373" },
  { label: "🇲🇨 Monaco (+377)", value: "+377" },
  { label: "🇲🇳 Mongolia (+976)", value: "+976" },
  { label: "🇲🇪 Montenegro (+382)", value: "+382" },
  { label: "🇲🇸 Montserrat (+1)", value: "+1" },
  { label: "🇲🇦 Morocco (+212)", value: "+212" },
  { label: "🇲🇿 Mozambique (+258)", value: "+258" },
  { label: "🇲🇲 Myanmar (+95)", value: "+95" },
  { label: "🇳🇦 Namibia (+264)", value: "+264" },
  { label: "🇳🇷 Nauru (+674)", value: "+674" },
  { label: "🇳🇵 Nepal (+977)", value: "+977" },
  { label: "🇳🇱 Netherlands (+31)", value: "+31" },
  { label: "🇳🇨 New Caledonia (+687)", value: "+687" },
  { label: "🇳🇿 New Zealand (+64)", value: "+64" },
  { label: "🇳🇮 Nicaragua (+505)", value: "+505" },
  { label: "🇳🇪 Niger (+227)", value: "+227" },
  { label: "🇳🇬 Nigeria (+234)", value: "+234" },
  { label: "🇳🇺 Niue (+683)", value: "+683" },
  { label: "🇰🇵 North Korea (+850)", value: "+850" },
  { label: "🇲🇰 North Macedonia (+389)", value: "+389" },
  { label: "🇲🇵 Northern Mariana Islands (+1)", value: "+1" },
  { label: "🇳🇴 Norway (+47)", value: "+47" },
  { label: "🇴🇲 Oman (+968)", value: "+968" },
  { label: "🇵🇰 Pakistan (+92)", value: "+92" },
  { label: "🇵🇼 Palau (+680)", value: "+680" },
  { label: "🇵🇸 Palestine (+970)", value: "+970" },
  { label: "🇵🇦 Panama (+507)", value: "+507" },
  { label: "🇵🇬 Papua New Guinea (+675)", value: "+675" },
  { label: "🇵🇾 Paraguay (+595)", value: "+595" },
  { label: "🇵🇪 Peru (+51)", value: "+51" },
  { label: "🇵🇭 Philippines (+63)", value: "+63" },
  { label: "🇵🇱 Poland (+48)", value: "+48" },
  { label: "🇵🇹 Portugal (+351)", value: "+351" },
  { label: "🇵🇷 Puerto Rico (+1)", value: "+1" },
  { label: "🇶🇦 Qatar (+974)", value: "+974" },
  { label: "🇷🇪 Reunion (+262)", value: "+262" },
  { label: "🇷🇴 Romania (+40)", value: "+40" },
  { label: "🇷🇺 Russia (+7)", value: "+7" },
  { label: "🇷🇼 Rwanda (+250)", value: "+250" },
  { label: "🇼🇸 Samoa (+685)", value: "+685" },
  { label: "🇸🇲 San Marino (+378)", value: "+378" },
  { label: "🇸🇹 Sao Tome and Principe (+239)", value: "+239" },
  { label: "🇸🇦 Saudi Arabia (+966)", value: "+966" },
  { label: "🇸🇳 Senegal (+221)", value: "+221" },
  { label: "🇷🇸 Serbia (+381)", value: "+381" },
  { label: "🇸🇨 Seychelles (+248)", value: "+248" },
  { label: "🇸🇱 Sierra Leone (+232)", value: "+232" },
  { label: "🇸🇬 Singapore (+65)", value: "+65" },
  { label: "🇸🇽 Sint Maarten (+1)", value: "+1" },
  { label: "🇸🇰 Slovakia (+421)", value: "+421" },
  { label: "🇸🇮 Slovenia (+386)", value: "+386" },
  { label: "🇸🇧 Solomon Islands (+677)", value: "+677" },
  { label: "🇸🇴 Somalia (+252)", value: "+252" },
  { label: "🇿🇦 South Africa (+27)", value: "+27" },
  { label: "🇰🇷 South Korea (+82)", value: "+82" },
  { label: "🇸🇸 South Sudan (+211)", value: "+211" },
  { label: "🇪🇸 Spain (+34)", value: "+34" },
  { label: "🇱🇰 Sri Lanka (+94)", value: "+94" },
  { label: "🇸🇭 St Helena (+290)", value: "+290" },
  { label: "🇰🇳 St Kitts and Nevis (+1)", value: "+1" },
  { label: "🇱🇨 St Lucia (+1)", value: "+1" },
  { label: "🇵🇲 St Pierre and Miquelon (+508)", value: "+508" },
  { label: "🇻🇨 St Vincent and the Grenadines (+1)", value: "+1" },
  { label: "🇸🇩 Sudan (+249)", value: "+249" },
  { label: "🇸🇷 Suriname (+597)", value: "+597" },
  { label: "🇸🇪 Sweden (+46)", value: "+46" },
  { label: "🇨🇭 Switzerland (+41)", value: "+41" },
  { label: "🇸🇾 Syria (+963)", value: "+963" },
  { label: "🇹🇼 Taiwan (+886)", value: "+886" },
  { label: "🇹🇯 Tajikistan (+992)", value: "+992" },
  { label: "🇹🇿 Tanzania (+255)", value: "+255" },
  { label: "🇹🇭 Thailand (+66)", value: "+66" },
  { label: "🇹🇱 Timor-Leste (+670)", value: "+670" },
  { label: "🇹🇬 Togo (+228)", value: "+228" },
  { label: "🇹🇰 Tokelau (+690)", value: "+690" },
  { label: "🇹🇴 Tonga (+676)", value: "+676" },
  { label: "🇹🇹 Trinidad and Tobago (+1)", value: "+1" },
  { label: "🇹🇳 Tunisia (+216)", value: "+216" },
  { label: "🇹🇷 Turkey (+90)", value: "+90" },
  { label: "🇹🇲 Turkmenistan (+993)", value: "+993" },
  { label: "🇹🇨 Turks and Caicos Islands (+1)", value: "+1" },
  { label: "🇹🇻 Tuvalu (+688)", value: "+688" },
  { label: "🇺🇬 Uganda (+256)", value: "+256" },
  { label: "🇺🇦 Ukraine (+380)", value: "+380" },
  { label: "🇬🇧 United Kingdom (+44)", value: "+44" },
  { label: "🇺🇸 United States (+1)", value: "+1" },
  { label: "🇺🇾 Uruguay (+598)", value: "+598" },
  { label: "🇺🇿 Uzbekistan (+998)", value: "+998" },
  { label: "🇻🇺 Vanuatu (+678)", value: "+678" },
  { label: "🇻🇦 Vatican City (+39)", value: "+39" },
  { label: "🇻🇪 Venezuela (+58)", value: "+58" },
  { label: "🇻🇳 Vietnam (+84)", value: "+84" },
  { label: "🇻🇮 Virgin Islands, U.S. (+1)", value: "+1" },
  { label: "🇾🇪 Yemen (+967)", value: "+967" },
  { label: "🇿🇲 Zambia (+260)", value: "+260" },
  { label: "🇿🇼 Zimbabwe (+263)", value: "+263" },
] as const;

type ConsultationFormProps = {
  label: string;
  className?: string;
  presetEnquiry?: string;
};

function getCompactCountryLabel(label: string, value: string) {
  const [flag] = label.split(" ");
  return `${flag ?? ""} ${value}`.trim();
}

export function ConsultationFormButton({
  label,
  className,
  presetEnquiry,
}: ConsultationFormProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className={className} onClick={() => setIsOpen(true)}>
        {label}
      </button>

      <ConsultationModal
        key={`${isOpen ? "open" : "closed"}-${presetEnquiry ?? "default"}`}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        presetEnquiry={presetEnquiry}
      />
    </>
  );
}

export function ConsultationScrollPrompt() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(scrollPromptStorageKey)) {
      return;
    }

    function onScroll() {
      const triggerPoint = Math.min(window.innerHeight * 0.42, 360);

      if (window.scrollY < triggerPoint) {
        return;
      }

      sessionStorage.setItem(scrollPromptStorageKey, "true");
      setIsOpen(true);
      window.removeEventListener("scroll", onScroll);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ConsultationModal
      key={isOpen ? "scroll-open" : "scroll-closed"}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    />
  );
}

type ConsultationInlinePanelProps = {
  presetEnquiry?: string;
};

export function ConsultationInlinePanel({
  presetEnquiry,
}: ConsultationInlinePanelProps) {
  const nameId = useId();
  const countryCodeId = useId();
  const mobileId = useId();
  const emailId = useId();
  const messageId = useId();
  const [selectedCountryLabel, setSelectedCountryLabel] = useState<string>(
    countryCodes[0].label,
  );
  const [selectedShortcutLabels, setSelectedShortcutLabels] = useState<string[]>(
    [],
  );
  const [enquiryValue, setEnquiryValue] = useState(
    buildEnquiryMessage([], presetEnquiry),
  );
  const selectedCountryValue =
    countryCodes.find((item) => item.label === selectedCountryLabel)?.value ??
    "+971";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const countryCode = String(form.get("countryCode") ?? "+971").trim();
    const mobile = String(form.get("mobile") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const enquiry = String(form.get("enquiry") ?? "").trim();

    const message = [
      "Hello Zenesis, I would like to request a consultation.",
      "",
      `Name: ${name}`,
      `Mobile: ${countryCode} ${mobile}`,
      `Email: ${email}`,
      enquiry ? `Enquiry: ${enquiry}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="overflow-hidden rounded-[2rem] border border-foreground/10 bg-[#fffdfa] shadow-[0_24px_80px_rgba(17,35,42,0.12)]"
    >
      <div className="relative overflow-hidden bg-[#11232a] p-6 text-white md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(36,75,168,0.48),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_42%)]" />
        <div className="relative z-10">
          <p className="eyebrow text-white/58">Consultation</p>
          <h2 className="mt-4 text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
            Schedule a free consultation.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/88">
            Send your enquiry through WhatsApp.
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="mt-7 grid gap-4">
          <div className="grid gap-2">
            <p className="text-sm font-semibold text-foreground">
              What do you need help with?
            </p>
            <p className="text-sm leading-6 text-muted">
              Select the topics that apply, then edit the enquiry if needed.
            </p>
            <div className="flex flex-wrap gap-2">
              {enquiryShortcuts.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    const nextLabels = selectedShortcutLabels.includes(item.label)
                      ? selectedShortcutLabels.filter(
                          (label) => label !== item.label,
                        )
                      : [...selectedShortcutLabels, item.label];

                    setSelectedShortcutLabels(nextLabels);
                    setEnquiryValue(buildEnquiryMessage(nextLabels, presetEnquiry));
                  }}
                  className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                    selectedShortcutLabels.includes(item.label)
                      ? "border-accent bg-[rgba(36,75,168,0.08)] text-accent"
                      : "border-foreground/10 bg-white text-foreground hover:border-accent/40 hover:bg-[rgba(36,75,168,0.04)]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-foreground" htmlFor={nameId}>
            Name
            <input
              id={nameId}
              name="name"
              required
              className="rounded-xl border border-foreground/12 bg-white px-4 py-3 text-base font-normal text-foreground shadow-inner outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_4px_rgba(36,75,168,0.1)]"
              autoComplete="name"
            />
          </label>

          <div className="grid gap-2">
            <p className="text-sm font-semibold text-foreground">Mobile number</p>
            <div className="grid grid-cols-[7.35rem_minmax(0,1fr)] gap-3 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
              <label className="sr-only" htmlFor={countryCodeId}>
                Country code
              </label>
              <div className="relative rounded-xl border border-foreground/12 bg-white px-4 py-3 shadow-inner transition-colors focus-within:border-accent focus-within:shadow-[0_0_0_4px_rgba(36,75,168,0.1)]">
                <span className="block pr-5 text-base font-normal text-foreground">
                  {getCompactCountryLabel(
                    selectedCountryLabel,
                    selectedCountryValue,
                  )}
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted"
                >
                  ▾
                </span>
                <select
                  id={countryCodeId}
                  name="countryCode"
                  defaultValue="+971"
                  aria-label="Country code"
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  onChange={(event) => {
                    const selectedOption =
                      event.currentTarget.selectedOptions[0]?.textContent;

                    if (selectedOption) {
                      setSelectedCountryLabel(selectedOption);
                    }
                  }}
                >
                  {countryCodes.map((item) => (
                    <option key={item.label} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <label className="sr-only" htmlFor={mobileId}>
                Mobile number
              </label>
              <input
                id={mobileId}
                name="mobile"
                required
                className="min-w-0 rounded-xl border border-foreground/12 bg-white px-4 py-3 text-base font-normal text-foreground shadow-inner outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_4px_rgba(36,75,168,0.1)]"
                autoComplete="tel-national"
                inputMode="tel"
              />
            </div>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-foreground" htmlFor={emailId}>
            Email
            <input
              id={emailId}
              name="email"
              type="email"
              required
              className="rounded-xl border border-foreground/12 bg-white px-4 py-3 text-base font-normal text-foreground shadow-inner outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_4px_rgba(36,75,168,0.1)]"
              autoComplete="email"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-foreground" htmlFor={messageId}>
            Enquiry
            <textarea
              id={messageId}
              name="enquiry"
              value={enquiryValue}
              onChange={(event) => setEnquiryValue(event.currentTarget.value)}
              rows={4}
              className="resize-none rounded-xl border border-foreground/12 bg-white px-4 py-3 text-base font-normal text-foreground shadow-inner outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_4px_rgba(36,75,168,0.1)]"
              placeholder="Tell us what you need help with."
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold !text-white shadow-[0_16px_36px_rgba(37,211,102,0.24)] transition-colors hover:bg-[#1ebe5d]"
        >
          Submit via WhatsApp
        </button>
      </div>
    </form>
  );
}

type ConsultationModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  presetEnquiry?: string;
};

function ConsultationModal({
  isOpen,
  onOpenChange,
  presetEnquiry,
}: ConsultationModalProps) {
  const nameId = useId();
  const countryCodeId = useId();
  const mobileId = useId();
  const emailId = useId();
  const messageId = useId();
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const [selectedCountryLabel, setSelectedCountryLabel] = useState<string>(
    countryCodes[0].label,
  );
  const [selectedShortcutLabels, setSelectedShortcutLabels] = useState<string[]>(
    [],
  );
  const [enquiryValue, setEnquiryValue] = useState(
    buildEnquiryMessage([], presetEnquiry),
  );
  const selectedCountryValue =
    countryCodes.find((item) => item.label === selectedCountryLabel)?.value ??
    "+971";

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setPortalTarget(document.body);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onOpenChange]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const countryCode = String(form.get("countryCode") ?? "+971").trim();
    const mobile = String(form.get("mobile") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const enquiry = String(form.get("enquiry") ?? "").trim();

    const message = [
      "Hello Zenesis, I would like to request a consultation.",
      "",
      `Name: ${name}`,
      `Mobile: ${countryCode} ${mobile}`,
      `Email: ${email}`,
      enquiry ? `Enquiry: ${enquiry}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    onOpenChange(false);
  }

  if (!isOpen || !portalTarget) {
    return null;
  }

  return createPortal(
    <div
      className="consultation-backdrop fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#11232a]/78 px-3 py-3 backdrop-blur-md md:px-5 md:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-form-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onOpenChange(false);
        }
      }}
    >
      <form
        onSubmit={onSubmit}
        className="consultation-panel flex max-h-[calc(100svh-0.75rem)] w-full max-w-4xl flex-col overflow-hidden rounded-[1.4rem] border border-white/20 bg-[#fffdfa] shadow-[0_36px_120px_rgba(0,0,0,0.34)] md:max-h-[calc(100svh-2rem)] md:rounded-[1.75rem]"
      >
        <div className="relative overflow-hidden border-b border-white/10 bg-[#11232a] px-5 pb-5 pt-5 text-white md:px-8 md:pb-7 md:pt-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(36,75,168,0.48),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_42%)]" />
          <button
            type="button"
            aria-label="Close consultation form"
            className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-white/10 text-lg leading-none text-white shadow-sm transition-colors hover:bg-white/16 md:right-8 md:top-8"
            onClick={() => onOpenChange(false)}
          >
            ×
          </button>

          <div className="relative z-10 pr-14">
            <Image
              src="/zenesis-logo-full.png"
              alt="Zenesis Corporation"
              width={300}
              height={72}
              className="h-8 w-auto object-contain brightness-0 invert md:h-10"
              priority
            />
            <h2
              id="consultation-form-title"
              className="mt-4 text-[1.75rem] font-semibold leading-tight tracking-normal text-white md:mt-5 md:text-4xl"
            >
              Schedule a free consultation
            </h2>
          </div>
        </div>

        <div className="relative overflow-y-auto p-5 md:p-8">

        <div className="grid gap-3 md:gap-4">
          <div className="grid gap-2">
            <p className="text-sm font-semibold text-foreground">
              What do you need help with?
            </p>
            <p className="text-sm leading-6 text-muted">
              Select the topics that apply, then edit the enquiry if needed.
            </p>
            <div className="flex flex-wrap gap-2">
              {enquiryShortcuts.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    const nextLabels = selectedShortcutLabels.includes(item.label)
                      ? selectedShortcutLabels.filter(
                          (label) => label !== item.label,
                        )
                      : [...selectedShortcutLabels, item.label];

                    setSelectedShortcutLabels(nextLabels);
                    setEnquiryValue(buildEnquiryMessage(nextLabels, presetEnquiry));
                  }}
                  className={`rounded-full border px-3 py-1.5 text-[0.92rem] font-medium transition-colors md:px-3.5 md:py-2 md:text-sm ${
                    selectedShortcutLabels.includes(item.label)
                      ? "border-accent bg-[rgba(36,75,168,0.08)] text-accent"
                      : "border-foreground/10 bg-white text-foreground hover:border-accent/40 hover:bg-[rgba(36,75,168,0.04)]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-foreground" htmlFor={nameId}>
            Name
            <input
              id={nameId}
              name="name"
              required
              className="rounded-xl border border-foreground/12 bg-white px-4 py-3 text-base font-normal text-foreground shadow-inner outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_4px_rgba(36,75,168,0.1)]"
              autoComplete="name"
            />
          </label>

          <div className="grid gap-2">
            <p className="text-sm font-semibold text-foreground">Mobile number</p>
            <div className="grid grid-cols-[7.35rem_minmax(0,1fr)] gap-3 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
              <label className="sr-only" htmlFor={countryCodeId}>
                Country code
              </label>
              <div className="relative rounded-xl border border-foreground/12 bg-white px-4 py-3 shadow-inner transition-colors focus-within:border-accent focus-within:shadow-[0_0_0_4px_rgba(36,75,168,0.1)]">
                <span className="block pr-5 text-base font-normal text-foreground">
                  {getCompactCountryLabel(
                    selectedCountryLabel,
                    selectedCountryValue,
                  )}
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted"
                >
                  ▾
                </span>
                <select
                  id={countryCodeId}
                  name="countryCode"
                  defaultValue="+971"
                  aria-label="Country code"
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  onChange={(event) => {
                    const selectedOption =
                      event.currentTarget.selectedOptions[0]?.textContent;

                    if (selectedOption) {
                      setSelectedCountryLabel(selectedOption);
                    }
                  }}
                >
                  {countryCodes.map((item) => (
                    <option key={item.label} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <label className="sr-only" htmlFor={mobileId}>
                Mobile number
              </label>
              <input
                id={mobileId}
                name="mobile"
                required
                className="min-w-0 rounded-xl border border-foreground/12 bg-white px-4 py-3 text-base font-normal text-foreground shadow-inner outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_4px_rgba(36,75,168,0.1)]"
                autoComplete="tel-national"
                inputMode="tel"
              />
            </div>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-foreground" htmlFor={emailId}>
            Email
            <input
              id={emailId}
              name="email"
              type="email"
              required
              className="rounded-xl border border-foreground/12 bg-white px-4 py-3 text-base font-normal text-foreground shadow-inner outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_4px_rgba(36,75,168,0.1)]"
              autoComplete="email"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-foreground" htmlFor={messageId}>
            Enquiry
            <textarea
              id={messageId}
              name="enquiry"
              value={enquiryValue}
              onChange={(event) => setEnquiryValue(event.currentTarget.value)}
              rows={4}
              className="min-h-[8.5rem] resize-y rounded-xl border border-foreground/12 bg-white px-4 py-3 text-base font-normal text-foreground shadow-inner outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_4px_rgba(36,75,168,0.1)] md:min-h-[12rem] md:rows-[7]"
              placeholder="Tell us what you need help with."
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-5 w-full rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold !text-white shadow-[0_16px_36px_rgba(37,211,102,0.24)] transition-colors hover:bg-[#1ebe5d] md:mt-6"
        >
          Submit via WhatsApp
        </button>
        </div>
      </form>
    </div>,
    portalTarget,
  );
}
