import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CategoryInterface } from 'src/@types/layout';
import { useCategory } from 'src/hooks/useCategory';
import CategoryItem from './CategoryItem';

const CategoryList = () => {
	const { data: categories, isFetching } = useCategory();

	if (isFetching) {
		return <div>fetching...</div>;
	}

	return (
		<List data-testid="categoryList">
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
