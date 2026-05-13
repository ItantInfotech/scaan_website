/*
 * Contact desks shown in the homepage closing CTA (SPEC.md §5.8).
 * Recipient email addresses to be confirmed with client (SPEC.md §16.5).
 */
export type ContactDesk = {
  label: string;
  value: string;
};

export const CONTACTS: readonly ContactDesk[] = [
  { label: "Sales", value: "sales@scaan.tech" },
  { label: "Careers", value: "careers@scaan.tech" },
  { label: "Mumbai HQ", value: "Mumbai · India" },
  { label: "Pune", value: "Pune · India" },
] as const;
