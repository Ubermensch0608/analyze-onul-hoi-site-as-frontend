import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { CategoryInterface } from 'src/@types/layout';

interface Props {
	category: CategoryInterface;
}

const CategoryItem: FC<Props> = ({ category }) => {
	return (
		<Item>
			<Link href={`/categories/${category.id}`}>
				<InnerContents>
					<Image src={category.imageSrc} alt={`onul-hoi category ${category.title}`} width={80} height={80} />
					<span>{category.title}</span>
				</InnerContents>
			</Link>
		</Item>
	);
};

const Item = styled.li`
	width: 80px;
	height: 160px;
`;

const InnerContents = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	cursor: pointer;
	> span {
		margin-top: 10px;
		white-space: break-spaces;
		word-break: keep-all;
	}
	:hover {
		font-weight: 700;
		> span img {
			border-radius: 50%;
			background-color: #f2f2f2;
		}
	}
`;

export default CategoryItem;
