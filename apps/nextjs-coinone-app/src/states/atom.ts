import { atom } from 'recoil';

export const registerStep = atom({
  key: 'registerStep',
  default: 1,
});

export const registerDataObj = atom({
  key: 'registerDataObj',
  default: {},
});
