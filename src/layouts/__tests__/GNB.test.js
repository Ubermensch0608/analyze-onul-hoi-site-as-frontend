import { fireEvent, render, screen } from '@testing-library/react';
import GNB from '../GNB';

describe('GNB', () => {
	it('nav는 화면에 노출되어야한다.', () => {
		render(<GNB />);

		const nav = screen.getByRole('navigation');
		expect(nav).toBeInTheDocument();
	});

	it('logo는 화면에 노출되어야한다.', () => {
		render(<GNB />);

		const logo = screen.getByAltText(/오늘회 logo/i);
		expect(logo).toBeInTheDocument();
	});

	it('menus는 화면에 노출되어야한다.', () => {
		render(<GNB />);

		const menus = screen.getByRole('list');
		expect(menus).toBeInTheDocument();
	});

	it('menus는 화면에 노출되어야한다.', () => {
		render(<GNB />);

		const menus = screen.getByRole('list');
		expect(menus).toBeInTheDocument();
	});
});

describe('GNB - 확장메뉴', () => {
	it('확장 메뉴 버튼은 화면에 노출되어야한다.', () => {
		render(<GNB />);

		const buttonMenu = screen.getByRole('button');
		expect(buttonMenu).toBeInTheDocument();
	});

	it('확장 메뉴 버튼을 클릭하기 전엔 카테고리 메뉴가 노출되지 않아야한다.', () => {
		render(<GNB />);

		const buttonMenu = screen.getByRole('button');
		const moreContentsSection = screen.getByLabelText(/moreContentsSection/i);

		expect(moreContentsSection).not.toContainHTML('<article>opened</article');
	});

	it('확장 메뉴 버튼을 클릭하면 카테고리 메뉴가 노출되어야한다.', () => {
		render(<GNB />);

		const buttonMenu = screen.getByRole('button');
		const moreContentsSection = screen.getByLabelText(/moreContentsSection/i);

		fireEvent.click(buttonMenu);
		expect(moreContentsSection).toContainHTML('<article>opened</article');
	});
});
