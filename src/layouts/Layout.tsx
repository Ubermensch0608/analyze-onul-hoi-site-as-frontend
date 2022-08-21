import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';
import GNB from './GNB';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<GNB />
			<Main>{children}</Main>
		</>
	);
};

const Main = styled.main``;

export default Layout;
