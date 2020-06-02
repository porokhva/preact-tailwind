import { h } from 'preact';
import { Link } from 'preact-router/match';


const Header = () => (
	<header class='w-full bg-grey-lightest p-2'>
		<h1>Preact App</h1>
		<nav>
			<Link class='text-orange mr-2' href="/">Home</Link>
			<Link class='text-orange mr-2' href="/profile">Me</Link>
			<Link class='text-orange mr-2' href="/profile/john">John</Link>
		</nav>
	</header>
);

export default Header;
