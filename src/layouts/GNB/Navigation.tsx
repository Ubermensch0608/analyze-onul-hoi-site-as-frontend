import { useSetRecoilState } from 'recoil';
import Image from 'next/image';
import Link from 'next/link';

import { categoryLayoutState } from 'src/store/layout';
import CategroyButtonIcon from 'public/assets/images/GNB/btn_ctg_gnb.svg';
import CategroyOffButtonIcon from 'public/assets/images/GNB/btn_ctg_gnb_close.svg';

import MainLogo from 'public/assets/images/GNB/onulhoi_logo.svg';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Navigation = () => {
	const setIsCategoryOpened = useSetRecoilState(categoryLayoutState);

	return (
		<Nav>
			<MoreContentsButton
				aria-label="moreContents"
				css={css`
					background-image: url(${CategroyButtonIcon.src});
					&:hover {
						background-image: url(${CategroyOffButtonIcon.src});
					}
				`}
				onClick={() => setIsCategoryOpened((prev) => !prev)}
			/>

			<Link href="/">
				<a>
					<Image src={MainLogo} alt="오늘회 logo" />
				</a>
			</Link>

			<Menus>
				<Menu>
					<Link href="/recommend">후기많은 상품</Link>
				</Menu>
				<Menu>
					<Link href="/productCombination">꿀조합</Link>
				</Menu>
				<Menu>
					<Link href="/newProduct">신상품</Link>
				</Menu>
				<Menu>
					<Link href="/commingSoldout">품절임박</Link>
				</Menu>
			</Menus>
		</Nav>
	);
};

const Nav = styled.nav`
	display: flex;
	align-items: center;
	width: 100%;
	@media (min-width: 768px) {
		padding: 20px 0;
		margin: 0 auto;
		width: 1280px;
	}
`;

const MoreContentsButton = styled.button`
	position: relative;
	left: 0;
	width: 44px;
	height: 44px;
	font-size: 0;
	line-height: 0;
	text-indent: -9999px;
	color: transparent;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	background-color: inherit;
	border: none;
	cursor: pointer;
	margin-right: 15px;
`;

const Menus = styled.ul`
	display: flex;
	align-items: center;
	gap: 20px;
	margin-left: 24px;
	margin-top: 6px;
`;

const Menu = styled.li`
	display: flex;
	align-items: center;
	font-size: 18px;
	min-height: 44px;
	line-height: 44px;
	color: #000;
`;

export default Navigation;
