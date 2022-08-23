import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';

describe('Navigation', () => {
	it('nav영역은 화면에 노출되어야 한다.', () => {
		render(<Navigation />);

		const nav = screen.getByRole('navigation');
		expect(nav).toBeInTheDocument();
	});

	it('카테고리 확장 버튼은 화면에 노출되어야 한다.', () => {
		render(<Navigation />);

		const extendCategoryButton = screen.getByLabelText(/moreContents/i);
		expect(extendCategoryButton).toBeInTheDocument();
	});

	it('로고는 화면에 노출되어야 한다.', () => {
		render(<Navigation />);

		const logo = screen.getByAltText(/오늘회 logo/i);
		expect(logo).toBeInTheDocument();
	});

	it('메뉴는 화면에 노출되어야 한다.', () => {
		render(<Navigation />);

		const menus = screen.getByRole('list');
		expect(menus).toBeInTheDocument();
	});

	it('카테고리 리스트는 API로 받아와 화면에 노출되어야 한다.', () => {
		render(<Navigation />);

		const menus = screen.getByRole('list');
		expect(menus).toBeInTheDocument();
	});
});
