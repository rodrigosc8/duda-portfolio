function getProjectYearRank(project) {
  const year = String(project?.year ?? "");

  if (/decorrer/i.test(year)) {
    return Number.POSITIVE_INFINITY;
  }

  const match = year.match(/\d{4}/);
  return match ? Number.parseInt(match[0], 10) : Number.NEGATIVE_INFINITY;
}

export function sortProjectsByYear(projects) {
  return [...projects]
    .map((project, index) => ({ project, index }))
    .sort((left, right) => {
      const yearDifference = getProjectYearRank(right.project) - getProjectYearRank(left.project);
      return yearDifference || left.index - right.index;
    })
    .map(({ project }) => project);
}
