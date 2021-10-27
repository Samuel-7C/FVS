import User from './user';

interface Family {
  name: string;
  familyUid: string;
  members: { user: User; role: UserRole }[];
  photos: string[];
  videos;
}

enum UserRole {
  Admin,
  Member,
}

export default Family;
