import { render, screen } from '@testing-library/react';
import GNB from '../GNB';

describe('GNB', () => {
	it('nav는 화면에 노출되어야한다.', () => {
		render(<GNB />);

		const nav = screen.getByRole('navigation');
		expect(nav).toBeInTheDocument();
	});
});
