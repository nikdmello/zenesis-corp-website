import {
  buildConsultationDescription,
  splitLeadName,
  type ConsultationLeadPayload,
} from "@/lib/consultation-lead";

const zohoWebformConfig = {
  actionUrl:
    process.env.NEXT_PUBLIC_ZOHO_WEBFORM_ACTION_URL?.trim() ??
    "https://crm.zoho.com/crm/WebToLeadForm",
  xnQsjsdp:
    process.env.NEXT_PUBLIC_ZOHO_WEBFORM_XNQSJSDP?.trim() ??
    "1796cd2929583d00e0ac0dd65b0d23b478d1412123ceb61328063f9183e114ca",
  xmIwtLD:
    process.env.NEXT_PUBLIC_ZOHO_WEBFORM_XMIWTLD?.trim() ??
    "e88a052f40ae58c6e60efb4817c4b1c656e4da353d7c59c9f23b699161ccf691b43b4030d402aa59a50455116f0e9d8d",
  actionType:
    process.env.NEXT_PUBLIC_ZOHO_WEBFORM_ACTION_TYPE?.trim() ?? "TGVhZHM=",
  returnUrl:
    process.env.NEXT_PUBLIC_ZOHO_WEBFORM_RETURN_URL?.trim() ?? "null",
  zcGad: process.env.NEXT_PUBLIC_ZOHO_WEBFORM_ZCGAD?.trim() ?? "",
  leadSource:
    process.env.NEXT_PUBLIC_ZOHO_WEBFORM_LEAD_SOURCE?.trim() ?? "Chat",
};

function ensureZohoTargetFrame() {
  const frameName = "zenesis-zoho-webform-target";
  let frame = document.querySelector<HTMLIFrameElement>(`iframe[name="${frameName}"]`);

  if (!frame) {
    frame = document.createElement("iframe");
    frame.name = frameName;
    frame.title = "Zoho webform target";
    frame.style.display = "none";
    document.body.appendChild(frame);
  }

  return frameName;
}

function appendHiddenField(form: HTMLFormElement, name: string, value: string) {
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = name;
  input.value = value;
  form.appendChild(input);
}

export function submitConsultationLeadToZohoWebform(payload: ConsultationLeadPayload) {
  if (
    !zohoWebformConfig.actionUrl ||
    !zohoWebformConfig.xnQsjsdp ||
    !zohoWebformConfig.xmIwtLD
  ) {
    return false;
  }

  const { firstName, lastName } = splitLeadName(payload.name);
  const target = ensureZohoTargetFrame();
  const form = document.createElement("form");

  form.method = "POST";
  form.action = zohoWebformConfig.actionUrl;
  form.target = target;
  form.style.display = "none";

  appendHiddenField(form, "xnQsjsdp", zohoWebformConfig.xnQsjsdp);
  appendHiddenField(form, "xmIwtLD", zohoWebformConfig.xmIwtLD);
  appendHiddenField(form, "actionType", zohoWebformConfig.actionType);
  appendHiddenField(form, "returnURL", zohoWebformConfig.returnUrl);

  if (zohoWebformConfig.zcGad) {
    appendHiddenField(form, "zc_gad", zohoWebformConfig.zcGad);
  }

  appendHiddenField(form, "First Name", firstName);
  appendHiddenField(form, "Last Name", lastName);
  appendHiddenField(form, "Email", payload.email);
  appendHiddenField(form, "Phone", `${payload.countryCode} ${payload.mobile}`.trim());
  appendHiddenField(form, "Description", buildConsultationDescription(payload));
  appendHiddenField(form, "Lead Source", zohoWebformConfig.leadSource);
  appendHiddenField(form, "aG9uZXlwb3Q", "");

  document.body.appendChild(form);
  form.submit();
  form.remove();

  return true;
}
