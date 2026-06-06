export type SiteOverview = {
  responseWindow: string
  serviceGroups: number
  featuredPages: number
}

const overview: SiteOverview = {
  responseWindow: '1 business day',
  serviceGroups: 6,
  featuredPages: 7,
}

export async function getSiteOverview() {
  return overview
}
