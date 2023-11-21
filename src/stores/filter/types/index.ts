import { Country } from '@/components/modal/filter/types';

export interface FilterStore {
  headline: string;
  date: string;
  countries: Country[];
}
