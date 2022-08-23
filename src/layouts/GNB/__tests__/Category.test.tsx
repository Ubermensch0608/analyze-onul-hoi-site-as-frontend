import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Category from '../Category';
import GNB from '../GNB';
import { CategoryInterface } from 'src/@types/layout';

const server = setupServer(
	rest.get('/api/layout/category', (req, res, ctx) => {
		return res(
			ctx.json({
				id: '0',
				title: '제철회',
				imageSrc: '',
				isUpdated: true,
			})
		);
	})
);

describe('Category', () => {
	it('최초에 카테고리는 화면에 노출되지 않아야 한다.', () => {
		const category = screen.queryByTestId(/moreContentsSection/i);
		expect(category).not.toBeInTheDocument();
	});

	it('버튼을 눌렀을 때 카테고리는 화면에 노출되어야 한다.', async () => {
		render(
			<RecoilRoot>
				<GNB />
			</RecoilRoot>
		);

		const button = screen.getByRole('button');
		fireEvent.click(button);

		const category = await screen.findByTestId(/moreContentsSection/i);
		expect(category).toBeInTheDocument();
	});

	it('카테고리가 노출되어있는 상태에서 버튼을 재차 누르면 카테고리가 화면에 노출되지 않아야 한다.', async () => {
		render(
			<RecoilRoot>
				<GNB />
			</RecoilRoot>
		);

		const button = screen.getByRole('button');
		fireEvent.click(button);

		const category = await screen.findByTestId(/moreContentsSection/i);
		expect(category).toBeInTheDocument();

		fireEvent.click(button);
		expect(category).not.toBeInTheDocument();
	});

	it('카테고리는 카테고리 리스트를 노출시켜야 한다.', () => {
		render(<Category />);

		const list = screen.getByRole('list');
		expect(list).toBeInTheDocument();
	});

	it('카테고리는 카테고리 아이템이 화면에 노출되어야 한다.', async () => {
		render(<Category />);

		await waitFor(() => screen.getByRole('item'));
		expect(screen.getByRole('item')).toHaveTextContent('제철회');
	});
});
