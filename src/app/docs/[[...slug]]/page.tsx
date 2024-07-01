export default function Docs({
	params,
}: {
	params: {
		slug: string[];
	};
}) {
	// Re-write the following if - else as a switch statement
	switch (params.slug?.length) {
		case 3:
			return <h1>Viewing Docs for Feature {params.slug[0]}, Concept {params.slug[1]}, and Example {params.slug[2]}.</h1>;
		case 2:
			return <h1>Viewing Docs for Feature {params.slug[0]} and Concept {params.slug[1]}.</h1>;
		case 1:
			return <h1>Viewing Docs for Feature {params.slug[0]}.</h1>;
		default:
			return <h1>Docs Home Page</h1>;
	}
}