import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CategoryInterface } from 'src/@types/layout';

export const useCategory = () => {
	return useQuery<{ categories: CategoryInterface[] }>(
		['category'],
		async () => await axios.get('/api/layout/category').then((res) => res.data)
	);
};
