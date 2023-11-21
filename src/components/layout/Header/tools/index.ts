export const headlineConverter = (headline: string) => {
  if (headline === '') {
    return '전체 헤드라인';
  }

  return headline;
};

export const dateConverter = (date: string) => {
  if (date === '') {
    return '전체 날짜';
  }

  return date.replaceAll('-', '.');
};

export const countriesConverter = (countries: string[]) => {
  if (countries.length === 0) {
    return '전체 국가';
  }

  if (countries.length === 1) {
    return countries[0];
  }

  return `${countries[0]} 외 ${countries.length - 1}개`;
};
