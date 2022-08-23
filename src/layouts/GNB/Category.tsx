import styled from '@emotion/styled';
import CategoryList from './CategoryList';

const Category = () => {
	return (
		<CategroySection data-testid="moreContentsSection">
			<article>
				<CategoryList />
			</article>
		</CategroySection>
	);
};

const CategroySection = styled.section`
	position: relative;
	padding: 40px 0 16px;
	@media (min-width: 768px) {
		width: 1280px;
		margin: 0 auto;
	}
`;

export default Category;
