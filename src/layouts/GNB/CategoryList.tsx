import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CategoryInterface } from 'src/@types/layout';
import CategoryItem from './CategoryItem';

const CategoryList = () => {
	const { data: categories, isFetching } = useQuery<{ categories: CategoryInterface[] }>(
		['category'],
		async () => await axios.get('/api/layout/category').then((res) => res.data)
	);

	if (isFetching) {
		return <div>fetching...</div>;
	}

	console.log(categories);

	return (
		<List>
			{categories?.categories.map((category) => (
				<CategoryItem key={`categories-${category.id}`} category={category} />
			))}
		</List>
	);
};

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 21px;
`;

export default CategoryList;
