import Link from "next/link";

export default function ProductDetailsLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			{children}
			<h2><Link href="/products">Featured Products</Link></h2>
			{/* <Carousel /> */}
		</>
	);
}