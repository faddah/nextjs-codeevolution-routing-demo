import { notFound } from "next/navigation";

export default function Review({ params }: { params: { productId: string, reviewId: string } }) {
	const prodId = parseInt(params.productId);
	if (prodId > 1000 || prodId < 0) {
		return notFound();
	}
	return <h1>Review {params.reviewId} for Product {params.productId}</h1>;
}