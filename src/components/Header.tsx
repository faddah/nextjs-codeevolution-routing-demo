import exp from "constants";

// create a standard next.js component paget called Header
export default function Header(): JSX.Element {
	return (
		<header
			style={{
				backgroundColor: "lightblue",
				padding: "1rem",
				textAlign: "center"
			}}
		>
			<h3>Header</h3>
		</header>
	);
}