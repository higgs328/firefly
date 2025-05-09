export interface UserInfo {
  name: string;
  givenName: string;
  email: string;
  picture?: string;
}

export interface EsriUserProfile {
  username: string;
  udn: string | null;
  id: string;
  fullName: string;
  availableCredits: number;
  assignedCredits: number;
  categories: string[];
  emailStatus: 'verified' | 'unverified';
  emailStatusDate: number;
  firstName: string;
  lastName: string;
  preferredView: string | null;
  description: string | null;
  email: string;
  userType: 'arcgisonly' | 'enterprise' | 'both';
  idpUsername: string | null;
  favGroupId: string;
  lastLogin: number;
  mfaEnabled: boolean;
  mfaEnforcementExempt: boolean;
  storageUsage: number;
  storageQuota: number;
  orgId: string;
  role: string;
  privileges: string[];
  level: string;
  userLicenseTypeId: string;
  disabled: boolean;
  tags: string[];
  culture: string;
  cultureFormat: string;
  region: string;
  units: string;
  thumbnail: string | null;
  access: 'private' | 'org' | 'public';
  created: number;
  modified: number;
  provider: string;
  groups: EsriGroup[];
  appInfo?: {
    appId: string;
    itemId: string;
    appOwner: string;
    orgId: string;
    appTitle: string;
    privileges: string[];
  };
}

export interface EsriGroup {
  id: string;
  title: string;
  isInvitationOnly: boolean;
  owner: string;
  description: string | null;
  snippet: string | null;
  tags: string[];
  typeKeywords: string[];
  phone: string | null;
  sortField: string;
  sortOrder: 'asc' | 'desc';
  isViewOnly: boolean;
  featuredItemsId: string | null;
  thumbnail: string | null;
  created: number;
  modified: number;
  access: 'private' | 'org' | 'public';
  capabilities: string[];
  isFav: boolean;
  isReadOnly: boolean;
  protected: boolean;
  autoJoin: boolean;
  notificationsEnabled: boolean;
  provider: string | null;
  providerGroupName: string | null;
  leavingDisallowed: boolean;
  hiddenMembers: boolean;
  membershipAccess: 'org' | 'collaboration' | string;
  displaySettings?: {
    itemTypes: string;
  };
  properties: unknown | null;
  userMembership: {
    username: string;
    memberType: 'member' | 'admin' | 'owner';
    applications?: number;
  };
}
