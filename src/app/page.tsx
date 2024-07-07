import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem" }}>
			<h1>Welcome Home!</h1>

			<div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
					src="/pickle-rick.jpg"
					alt="I'M PICKLE RICK!"
					width={180}
					height={200}
					priority
				/>
			</div>

			<h2>I&apos;M PICKLE RICK! WUBBA LUBBA DUB DUB!</h2>

			<ul>
				<li><Link href="/about">Our About Pages</Link></li>
				<li><Link href="/products">Our Producs</Link></li>
				<li><Link href="/blog">Our Blog</Link></li>
				<li><Link href="/register">Register</Link></li>
			</ul>
		</div>
	);
}