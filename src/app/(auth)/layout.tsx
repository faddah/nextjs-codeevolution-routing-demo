"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles.css";
import { useState } from "react";

const navLinks = [
	{ text: "Register", href: "/register" },
	{ text: "Login", href: "/login" },
	{ text: "Logout", href: "/logout" },
	{ text: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const [input, setInput] = useState("");

	return (
		<div style={{ margin: "3%" }}>
			<div>
				<input type="text" value={input} onChange={e => setInput(e.target.value)} className="border-dashed border-2 border-indigo-300" />
			</div>
			<ul>
				{navLinks.map((link) => {
					const isActive = pathname.startsWith(link.href);
					return (
						<li key={link.href}>
							<Link
								href={link.href}
								key={link.text}
								className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
								{link.text}
							</Link>
						</li>
					);
				})}
			</ul>
			{children}
			- - - - - - - - - - - - - - - - - - -
			<br />
			<Link href="/">Go Home</Link>
		</div>
	);
}