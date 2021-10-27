import Family from './family';

interface User {
  username: string;
  fullname: string;
  email: string;
  userId: string;
  memberOf: Family[];
}

export default User;
