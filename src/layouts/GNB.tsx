import Image from 'next/image';
import Link from 'next/link';
import MainLogo from '../../public/assets/images/main/onulhoi_logo.svg';

const GNB = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link href="/">
							<Image src={MainLogo} alt="오늘회 아이콘" />
						</Link>
					</li>
					<li>
						<Link href="/recommend">후기많은 상품</Link>
					</li>
					<li>
						<Link href="/productCombination">꿀조합</Link>
					</li>
					<li>
						<Link href="/newProduct">신상품</Link>
					</li>
					<li>
						<Link href="/commingSoldout">품절임박</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default GNB;
