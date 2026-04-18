export const TAGS = {
  DUPLICATED: 'duplicated',
  ADDED: 'added',
  EMPTY: 'empty',
  EXIST: 'exist',
  DOES_NOT_EXIST: 'does not exist',
  REMOVED: 'removed',
  UPDATED: 'updated',
  CLEARED: 'cleared',
  FULL: 'full',
  NO_MATCH: 'no match',
  MISSING: 'missing',
  NOT_GIT_REPO: 'not git repo'
} as const;


export type TagsType = (typeof TAGS)[keyof typeof TAGS];
