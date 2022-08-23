import { atom } from 'recoil';

export const categoryLayoutState = atom<boolean>({
	key: 'category-layout-atom',
	default: false,
});
