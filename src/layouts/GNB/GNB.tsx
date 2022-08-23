import styled from '@emotion/styled';
import Category from './Category';
import Navigation from './Navigation';
import { useRecoilValue } from 'recoil';
import { categoryLayoutState } from 'src/store/layout';

const GNB = () => {
	const isCategoryLayoutShown = useRecoilValue(categoryLayoutState);

	return (
		<Header data-testid="GNB-header">
			<Navigation />
			{isCategoryLayoutShown && <Category />}
		</Header>
	);
};

const Header = styled.header`
	position: relative;
	z-index: 99;
	left: 0;
	top: 0;
	width: 100%;
	border-bottom: 1px solid #ebebeb;
	background-color: #fff;
	box-shadow: 0 2px 10px rgb(0 0 0 / 5%);
	::before {
		content: '';
		position: absolute;
		top: 108px;
		width: 100%;
		border-bottom: 1px solid #ebebeb;
	}
`;

export default GNB;
