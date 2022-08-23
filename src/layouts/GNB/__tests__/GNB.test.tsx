import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { RecoilRoot, useRecoilState } from 'recoil';
import GNB from '../GNB';

describe('GNB', () => {
	it('header는 화면에 노출되어야 한다.', () => {
		render(
			<RecoilRoot>
				<GNB />
			</RecoilRoot>
		);

		const header = screen.getByTestId(/GNB-header/i);
		expect(header).toBeInTheDocument();
	});
});
