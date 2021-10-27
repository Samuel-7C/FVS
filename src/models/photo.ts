import Family from './family';
import User from './user';

export default interface Photo {
  uuid: string;
  belongsTo: Family;
  postedBy: User;
  sharedWith: Family[];
  meta: Meta;
}

interface Meta {
  size: number;
  resolution: string;
  codec: string;
  date: string;
}
