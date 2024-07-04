import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<h2>404 - Review Not Found</h2>
			<p>Could not find requested Review</p>
			<Link href="/products">Return To Products</Link>
		</div>
	);
}
