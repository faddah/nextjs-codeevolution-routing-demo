import LineChart from "./line-chart";

function BarChart() {
	return <h2>Bar Chart</h2>;
}

export default function Dashboard() {
	return (
		<>
			<h1 style={{ textDecoration: "underline" }}>Dashboard</h1>
			<BarChart />
			<LineChart />
		</>
	);
}