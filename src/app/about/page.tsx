import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		absolute: 'About Our Comapny | The Faddah Company',
	},
	description: 'About Information on The Faddah Company',
}

export default function About(): JSX.Element {
	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem" }}>
			<h1>About Our Company</h1>
			<Image
				src="/glass-office-towers.jpg"
				alt="About Image - Glass Office Towers"
				width={500}
				height={400}
				priority
			/>
		</div>
	);
}