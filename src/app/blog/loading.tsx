"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const myTimeOut = setTimeout(() => {
			setLoading(false);
		}, 3000);
		return () => clearTimeout(myTimeOut);
	}, []);
	if (loading) {
		return (
			<div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem" }}>
				<h3>Loading...</h3>
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
					src="/cute-anime-bear-loading-progress-bar-animation.gif"
					alt="Cute Anime Bear Loading Progress Bar Animation"
					width={200}
					height={200}
					priority
				/>
			</div>
		);
	}
	return null;
}