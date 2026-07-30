"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { type ConsultationLeadPayload } from "@/lib/consultation-lead";
import { submitConsultationLeadToZohoWebform } from "@/lib/zoho-webform";

const whatsappNumber = "971589142200";
const homepageConsultationPromptSeenKey = "zenesis-homepage-consultation-prompt-seen";

function hasSeenHomepageConsultationPrompt() {
  try {
    return window.localStorage.getItem(homepageConsultationPromptSeenKey) === "true";
  } catch {
    try {
      return window.sessionStorage.getItem(homepageConsultationPromptSeenKey) === "true";
    } catch {
      return false;
    }
  }
}

function markHomepageConsultationPromptSeen() {
  try {
    window.localStorage.setItem(homepageConsultationPromptSeenKey, "true");
    return;
  } catch {
    // Fall back to tab storage if persistent storage is blocked.
  }

  try {
    window.sessionStorage.setItem(homepageConsultationPromptSeenKey, "true");
  } catch {
    // Ignore storage access issues and fall back to in-memory behavior.
  }
}
const enquiryShortcuts = [
  {
    label: "Business setup",
    value:
      "I need help setting up a new company in the UAE and choosing the right route for the business.",
  },
  {
    label: "Mainland vs free zone",
    value:
      "I would like guidance on whether mainland or free zone setup is a better fit for how I plan to operate.",
  },
  {
    label: "Golden Visa and company visas",
    value:
      "I need help with Golden Visa eligibility, company visa support, or the related residency steps in the UAE.",
  },
  {
    label: "Business banking support",
    value:
      "I need support with business banking, KYC documents, and the practical next steps after company formation.",
  },
  {
    label: "Accounting, VAT, and corporate tax",
    value:
      "I need help with corporate tax, VAT, registrations, or filing support for a UAE business.",
  },
  {
    label: "Corporate support and renewals",
    value:
      "I need help with renewals, company changes, PRO support, or ongoing corporate administration in the UAE.",
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
  additionalNote?: string,
) {
  const selectedShortcuts = enquiryShortcuts.filter((item) =>
    selectedShortcutLabels.includes(item.label),
  );

  const trimmedAdditionalNote = additionalNote?.trim();

  if (!selectedShortcuts.length) {
    const fallbackLines = [presetEnquiry?.trim(), trimmedAdditionalNote].filter(Boolean);
    return fallbackLines.join("\n\n");
  }

  const lines = [
    "I would like help with the following:",
    ...selectedShortcuts.map((item) => `- ${item.label}`),
  ];

  if (
    presetEnquiry &&
    !selectedShortcuts.some((item) => item.value === presetEnquiry)
  ) {
    lines.push("", presetEnquiry);
  }

  if (trimmedAdditionalNote) {
    lines.push("", `Additional note: ${trimmedAdditionalNote}`);
  }

  return lines.join("\n");
}

function buildWhatsAppConsultationMessage(payload: ConsultationLeadPayload) {
  return [
    "Hello Zenesis, I would like to request a consultation.",
    "",
    `Name: ${payload.name}`,
    `Mobile: ${payload.countryCode} ${payload.mobile}`,
    `Email: ${payload.email}`,
    payload.enquiry ? `Enquiry: ${payload.enquiry}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function openWhatsAppConsultation(payload: ConsultationLeadPayload) {
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      buildWhatsAppConsultationMessage(payload),
    )}`,
    "_blank",
    "noopener,noreferrer",
  );
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
  leadingIcon?: React.ReactNode;
};

function getCountryFlagIso(label: string) {
  const flagCharacters = Array.from(label).slice(0, 2);

  if (
    flagCharacters.length !== 2 ||
    !flagCharacters.every((character) => {
      const codePoint = character.codePointAt(0);
      return codePoint !== undefined && codePoint >= 0x1f1e6 && codePoint <= 0x1f1ff;
    })
  ) {
    return null;
  }

  return flagCharacters
    .map((character) => {
      const codePoint = character.codePointAt(0) ?? 0x1f1e6;
      return String.fromCharCode(codePoint - 0x1f1e6 + 97);
    })
    .join("");
}

function getCountryDisplayLabel(label: string) {
  return label.replace(/^[\u{1f1e6}-\u{1f1ff}]{2}\s*/u, "").trim();
}

function CountryFlag({ label }: { label: string }) {
  const flagIso = getCountryFlagIso(label);

  if (!flagIso) {
    return null;
  }

  return (
    // Windows does not render regional-indicator flag emoji as country flags,
    // so use a tiny image in the custom picker surface instead.
    <Image
      alt=""
      aria-hidden="true"
      className="h-3.5 w-5 shrink-0 rounded-[0.12rem] object-cover shadow-[0_0_0_1px_rgba(17,35,42,0.08)]"
      height={15}
      loading="lazy"
      src={`https://flagcdn.com/40x30/${flagIso}.png`}
      width={20}
    />
  );
}

type CountryCodePickerProps = {
  countryCodeId: string;
  selectedCountryLabel: string;
  selectedCountryValue: string;
  onSelectedCountryLabelChange: (label: string) => void;
};

function CountryCodePicker({
  countryCodeId,
  selectedCountryLabel,
  selectedCountryValue,
  onSelectedCountryLabelChange,
}: CountryCodePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const selectedCountry = countryCodes.find(
    (item) => item.label === selectedCountryLabel,
  ) ?? countryCodes[0];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      if (pickerRef.current?.contains(event.target as Node)) {
        return;
      }

      setIsOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  return (
    <div ref={pickerRef} className="relative">
      <label className="sr-only" htmlFor={countryCodeId}>
        Country code
      </label>
      <input type="hidden" name="countryCode" value={selectedCountryValue} />
      <button
        id={countryCodeId}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="flex h-full min-h-[3.25rem] w-full items-center gap-2 rounded-xl border border-foreground/12 bg-white px-3 py-3 text-left text-base font-normal text-foreground shadow-inner outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_4px_rgba(36,75,168,0.1)]"
        onClick={() => setIsOpen((current) => !current)}
      >
        <CountryFlag label={selectedCountry.label} />
        <span>{selectedCountryValue}</span>
        <span aria-hidden="true" className="ml-auto text-xs text-muted">
          ▾
        </span>
      </button>
      {isOpen ? (
        <div
          className="absolute left-0 top-[calc(100%+0.35rem)] z-40 max-h-64 w-[19rem] overflow-y-auto rounded-xl border border-foreground/12 bg-white py-1.5 text-foreground shadow-[0_18px_48px_rgba(17,35,42,0.18)]"
          role="listbox"
          aria-label="Country code"
        >
          {countryCodes.map((item) => {
            const isSelected = item.label === selectedCountryLabel;

            return (
              <button
                key={item.label}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-[#f8f5ef] ${
                  isSelected ? "bg-[rgba(36,75,168,0.08)] text-accent" : ""
                }`}
                onClick={() => {
                  onSelectedCountryLabelChange(item.label);
                  setIsOpen(false);
                }}
              >
                <CountryFlag label={item.label} />
                <span className="min-w-0 flex-1 truncate">
                  {getCountryDisplayLabel(item.label)}
                </span>
                <span className="shrink-0 text-foreground/58">{item.value}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export function ConsultationFormButton({
  label,
  className,
  presetEnquiry,
  leadingIcon,
}: ConsultationFormProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className={className} onClick={() => setIsOpen(true)}>
        <span className="inline-flex items-center gap-2">
          {leadingIcon}
          <span>{label}</span>
        </span>
      </button>

      <ConsultationModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        presetEnquiry={presetEnquiry}
      />
    </>
  );
}

type ConsultationFormButtonWithScrollPromptProps = ConsultationFormProps;

export function ConsultationFormButtonWithScrollPrompt({
  label,
  className,
  presetEnquiry,
  leadingIcon,
}: ConsultationFormButtonWithScrollPromptProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (hasSeenHomepageConsultationPrompt()) {
      hasTriggeredRef.current = true;
      return;
    }

    const onScroll = () => {
      if (hasTriggeredRef.current) {
        return;
      }

      if (window.scrollY < 72) {
        return;
      }

      hasTriggeredRef.current = true;
      markHomepageConsultationPromptSeen();
      setIsOpen(true);
      window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          markHomepageConsultationPromptSeen();
          hasTriggeredRef.current = true;
          setIsOpen(true);
        }}
      >
        <span className="inline-flex items-center gap-2">
          {leadingIcon}
          <span>{label}</span>
        </span>
      </button>

      <ConsultationModal
        isOpen={isOpen}
        onOpenChange={(nextIsOpen) => {
          if (!nextIsOpen) {
            hasTriggeredRef.current = true;
          }
          setIsOpen(nextIsOpen);
        }}
        presetEnquiry={presetEnquiry}
      />
    </>
  );
}

type WhatsAppCueIconProps = {
  inverse?: boolean;
};

export function WhatsAppCueIcon({ inverse = false }: WhatsAppCueIconProps) {
  return (
    <span
      className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
        inverse
          ? "bg-white text-[#25D366] shadow-[0_6px_16px_rgba(255,255,255,0.18)]"
          : "bg-[#25D366] text-white shadow-[0_6px_16px_rgba(37,211,102,0.28)]"
      }`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
        <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.94 9.94 0 0 0-8.63 14.87L2 22l5.27-1.38A9.94 9.94 0 0 0 12 22a10 10 0 0 0 10-9.98 9.9 9.9 0 0 0-2.95-7.08Zm-7.05 15.4a8.3 8.3 0 0 1-4.23-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.33 8.33 0 1 1 7.02 3.86Zm4.57-6.23c-.25-.12-1.5-.74-1.73-.82-.23-.09-.4-.12-.56.12-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.21-.73-.65-1.23-1.45-1.37-1.69-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.02 2.58.12.17 1.77 2.7 4.29 3.79.6.26 1.08.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.5-.61 1.71-1.2.21-.6.21-1.11.15-1.21-.06-.1-.23-.17-.48-.29Z" />
      </svg>
    </span>
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
  const noteId = useId();
  const [selectedCountryLabel, setSelectedCountryLabel] = useState<string>(
    countryCodes[0].label,
  );
  const [selectedShortcutLabels, setSelectedShortcutLabels] = useState<string[]>(
    [],
  );
  const [additionalNote, setAdditionalNote] = useState("");
  const [submittedPayload, setSubmittedPayload] = useState<ConsultationLeadPayload | null>(null);
  const selectedCountryValue =
    countryCodes.find((item) => item.label === selectedCountryLabel)?.value ??
    "+971";
  const enquiryValue = useMemo(
    () =>
      buildEnquiryMessage(selectedShortcutLabels, presetEnquiry, additionalNote),
    [additionalNote, presetEnquiry, selectedShortcutLabels],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const payload: ConsultationLeadPayload = {
      name: String(form.get("name") ?? "").trim(),
      countryCode: selectedCountryValue,
      mobile: String(form.get("mobile") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      enquiry: enquiryValue.trim(),
      source: "inline-panel",
      pagePath: window.location.pathname,
      pageTitle: document.title,
    };

    submitConsultationLeadToZohoWebform(payload);
    setSubmittedPayload(payload);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="overflow-hidden rounded-lg border border-foreground/10 bg-[#fffdfa] shadow-[0_12px_34px_rgba(17,35,42,0.07)]"
    >
      <div className="relative overflow-hidden bg-[#11232a] p-6 text-white md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(36,75,168,0.48),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_42%)]" />
        <div className="relative z-10">
          <p className="eyebrow text-white/58">Consultation</p>
          <h2 className="mt-4 text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
            Schedule a free consultation.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/88">
            Send your details to Zenesis first, then choose whether you want to continue on WhatsApp.
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8">
        {submittedPayload ? (
          <div className="grid gap-5">
            <div className="rounded-md border border-foreground/10 bg-[#f8f6f1] p-5">
              <p className="text-[1.18rem] font-semibold tracking-[-0.03em] text-foreground">
                Your enquiry has been sent.
              </p>
              <p className="mt-3 text-[1rem] leading-7 text-muted">
                Zenesis has your details. If you want a faster follow-up, you can continue on WhatsApp now.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openWhatsAppConsultation(submittedPayload)}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold !text-white shadow-[0_16px_36px_rgba(37,211,102,0.24)] transition-colors hover:bg-[#1ebe5d]"
              >
                Continue on WhatsApp
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubmittedPayload(null);
                  setSelectedShortcutLabels([]);
                  setAdditionalNote("");
                }}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-foreground/12 bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-[#f8f5ef]"
              >
                Send another enquiry
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-7 grid gap-4">
              <div className="grid gap-2">
                <p className="text-[1.02rem] font-semibold text-foreground md:text-[1.08rem]">
                  What do you need help with?
                </p>
                <p className="text-sm leading-6 text-muted md:text-[0.98rem]">
                  Select the topics that apply and we will build the message for you.
                </p>
                {presetEnquiry || selectedShortcutLabels.length ? (
                  <p className="rounded-xl border border-accent/12 bg-[rgba(36,75,168,0.06)] px-4 py-3 text-sm font-medium leading-6 text-foreground">
                    {selectedShortcutLabels.length
                      ? `Selected topics: ${selectedShortcutLabels.join(", ")}`
                      : `Request: ${presetEnquiry}`}
                  </p>
                ) : null}
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
                      }}
                      className={`rounded-full border px-4 py-2.5 text-[0.98rem] font-medium transition-colors ${
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
                  <CountryCodePicker
                    countryCodeId={countryCodeId}
                    selectedCountryLabel={selectedCountryLabel}
                    selectedCountryValue={selectedCountryValue}
                    onSelectedCountryLabelChange={setSelectedCountryLabel}
                  />

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

              <label className="grid gap-2 text-sm font-semibold text-foreground" htmlFor={noteId}>
                <span>
                  Additional note <span className="font-normal text-muted">(optional)</span>
                </span>
                <textarea
                  id={noteId}
                  value={additionalNote}
                  onChange={(event) => setAdditionalNote(event.currentTarget.value)}
                  rows={2}
                  className="resize-none rounded-xl border border-foreground/12 bg-white px-4 py-3 text-base font-normal text-foreground shadow-inner outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_4px_rgba(36,75,168,0.1)]"
                  placeholder="Add any short detail you want included."
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-[#11232a] px-6 py-3 text-sm font-semibold !text-white shadow-[0_16px_36px_rgba(17,35,42,0.16)] transition-colors hover:bg-[#18343d]"
            >
              Submit enquiry
            </button>
          </>
        )}
      </div>
    </form>
  );
}

type ConsultationModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  presetEnquiry?: string;
};

export function ConsultationModal({
  isOpen,
  onOpenChange,
  presetEnquiry,
}: ConsultationModalProps) {
  const nameId = useId();
  const countryCodeId = useId();
  const mobileId = useId();
  const emailId = useId();
  const noteId = useId();
  const [selectedCountryLabel, setSelectedCountryLabel] = useState<string>(
    countryCodes[0].label,
  );
  const [selectedShortcutLabels, setSelectedShortcutLabels] = useState<string[]>(
    [],
  );
  const [additionalNote, setAdditionalNote] = useState("");
  const [submittedPayload, setSubmittedPayload] = useState<ConsultationLeadPayload | null>(null);
  const selectedCountryValue =
    countryCodes.find((item) => item.label === selectedCountryLabel)?.value ??
    "+971";
  const enquiryValue = useMemo(
    () =>
      buildEnquiryMessage(selectedShortcutLabels, presetEnquiry, additionalNote),
    [additionalNote, presetEnquiry, selectedShortcutLabels],
  );

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
    const payload: ConsultationLeadPayload = {
      name: String(form.get("name") ?? "").trim(),
      countryCode: selectedCountryValue,
      mobile: String(form.get("mobile") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      enquiry: enquiryValue.trim(),
      source: "modal",
      pagePath: window.location.pathname,
      pageTitle: document.title,
    };

    submitConsultationLeadToZohoWebform(payload);
    setSubmittedPayload(payload);
  }

  function closeModal() {
    onOpenChange(false);
  }

  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className="consultation-backdrop fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#11232a]/78 px-3 py-2 backdrop-blur-md md:items-center md:px-5 md:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-form-title"
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) {
          event.stopPropagation();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          event.stopPropagation();
          closeModal();
        }
      }}
    >
      <form
        onSubmit={onSubmit}
        className="consultation-panel flex min-h-0 max-h-[calc(100dvh-1rem)] w-full max-w-4xl flex-col overflow-hidden rounded-[1.4rem] border border-white/20 bg-[#fffdfa] shadow-[0_36px_120px_rgba(0,0,0,0.34)] md:max-h-[calc(100dvh-2rem)] md:max-w-[42rem] md:rounded-[1.55rem]"
      >
        <div className="relative shrink-0 overflow-hidden border-b border-white/10 bg-[#11232a] px-5 pb-4 pt-4 text-white md:px-6 md:pb-5 md:pt-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(36,75,168,0.48),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_42%)]" />
          <button
            type="button"
            aria-label="Close consultation form"
            className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-white/10 text-lg leading-none text-white shadow-sm transition-all hover:bg-white/16 active:scale-95 active:bg-white/24 md:right-6 md:top-6"
            onPointerDown={(event) => {
              event.preventDefault();
              event.stopPropagation();
            }}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              closeModal();
            }}
          >
            ×
          </button>

          <div className="relative z-10 pr-14">
            <Image
              src="/logos/zenesis-logo-full.webp"
              alt="Zenesis Corporation"
              width={300}
              height={72}
              sizes="134px"
              className="h-8 w-auto object-contain brightness-0 invert md:h-8"
              priority
            />
            <h2
              id="consultation-form-title"
              className="mt-3 text-[1.55rem] font-semibold leading-tight tracking-normal text-white md:mt-4 md:text-[2rem]"
            >
              Schedule a free consultation
            </h2>
          </div>
        </div>

        <div className="relative min-h-0 overflow-y-auto p-4 md:p-5">
          {submittedPayload ? (
            <div className="grid gap-5">
              <div className="rounded-[1.35rem] border border-foreground/10 bg-[#f8f5ef] p-5">
                <p className="text-[1.18rem] font-semibold tracking-[-0.03em] text-foreground">
                  Your enquiry has been sent.
                </p>
                <p className="mt-3 text-[1rem] leading-7 text-muted">
                  Zenesis has your details. If you want to continue immediately, you can open WhatsApp now.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => openWhatsAppConsultation(submittedPayload)}
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold !text-white shadow-[0_16px_36px_rgba(37,211,102,0.24)] transition-colors hover:bg-[#1ebe5d]"
                >
                  Continue on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center rounded-full border border-foreground/12 bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-[#f8f5ef]"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="grid gap-3 md:gap-3.5">
                <div className="grid gap-2">
                  <p className="text-[1.02rem] font-semibold text-foreground md:text-[1.08rem]">
                    What do you need help with?
                  </p>
                  <p className="text-sm leading-6 text-muted md:text-[0.98rem] md:leading-6">
                    Select the topics that apply and we will build the message for you.
                  </p>
                  {presetEnquiry || selectedShortcutLabels.length ? (
                    <p className="rounded-xl border border-accent/12 bg-[rgba(36,75,168,0.06)] px-4 py-3 text-sm font-medium leading-6 text-foreground">
                      {selectedShortcutLabels.length
                        ? `Selected topics: ${selectedShortcutLabels.join(", ")}`
                        : `Request: ${presetEnquiry}`}
                    </p>
                  ) : null}
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
                        }}
                        className={`rounded-full border px-4 py-2.5 text-[0.98rem] font-medium transition-colors md:px-4 md:py-2 md:text-[0.95rem] ${
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

                <div className="grid gap-3 md:grid-cols-2">
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
                </div>

                <div className="grid gap-2">
                  <p className="text-sm font-semibold text-foreground">Mobile number</p>
                  <div className="grid grid-cols-[7.35rem_minmax(0,1fr)] gap-3 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
                    <CountryCodePicker
                      countryCodeId={countryCodeId}
                      selectedCountryLabel={selectedCountryLabel}
                      selectedCountryValue={selectedCountryValue}
                      onSelectedCountryLabelChange={setSelectedCountryLabel}
                    />

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

                <label className="grid gap-2 text-sm font-semibold text-foreground" htmlFor={noteId}>
                  <span>
                    Additional note <span className="font-normal text-muted">(optional)</span>
                  </span>
                  <textarea
                    id={noteId}
                    value={additionalNote}
                    onChange={(event) => setAdditionalNote(event.currentTarget.value)}
                    rows={2}
                    className="resize-none rounded-xl border border-foreground/12 bg-white px-4 py-3 text-base font-normal text-foreground shadow-inner outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_4px_rgba(36,75,168,0.1)]"
                    placeholder="Add any short detail you want included."
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-full bg-[#11232a] px-6 py-3 text-sm font-semibold !text-white shadow-[0_16px_36px_rgba(17,35,42,0.16)] transition-colors hover:bg-[#18343d] md:mt-5"
              >
                Submit enquiry
              </button>
            </>
          )}
        </div>
      </form>
    </div>,
    document.body
  );
}
