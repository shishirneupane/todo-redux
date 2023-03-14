export type TTodo = {
  id: string;
  title: string;
}

export enum DismissedState {
  DEFAULT = 'default',
  REQUESTED = 'requested',
  DISMISSED = 'dismissed',
}
