export type ContactActionSource = {
  email: string;
  linkedin: string;
  phone: string;
  cvDownload: string;
  cvOnline: string;
};

export type ContactAction = {
  href: string;
  label: string;
  external?: boolean;
};

export function getContactActions(contact: ContactActionSource): ContactAction[] {
  const actions: ContactAction[] = [];

  if (contact.cvDownload) {
    actions.push({
      href: contact.cvDownload,
      label: "Download CV"
    });
  }

  if (contact.cvOnline) {
    actions.push({
      href: contact.cvOnline,
      label: "View CV Online",
      external: true
    });
  }

  return actions;
}
