export type ConsultationLeadPayload = {
  name: string;
  countryCode: string;
  mobile: string;
  email: string;
  enquiry: string;
  source: "inline-panel" | "modal";
  pagePath: string;
  pageTitle: string;
};

export function splitLeadName(name: string) {
  const trimmedName = name.trim().replace(/\s+/g, " ");

  if (!trimmedName) {
    return {
      firstName: "",
      lastName: "Website enquiry",
    };
  }

  const parts = trimmedName.split(" ");

  if (parts.length === 1) {
    return {
      firstName: "",
      lastName: parts[0],
    };
  }

  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts.at(-1) ?? "Website enquiry",
  };
}

export function buildConsultationDescription(payload: ConsultationLeadPayload) {
  const lines = [
    "Website consultation enquiry",
    "",
    `Source: ${payload.source}`,
    `Page: ${payload.pagePath}`,
    `Page title: ${payload.pageTitle}`,
    `Mobile: ${payload.countryCode} ${payload.mobile}`,
    `Email: ${payload.email}`,
  ];

  if (payload.enquiry.trim()) {
    lines.push("", "Enquiry:", payload.enquiry.trim());
  }

  return lines.join("\n");
}
