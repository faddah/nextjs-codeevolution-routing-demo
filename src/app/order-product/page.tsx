"use client";
import { useRouter } from "next/navigation";

export default function OrderProductPage() {
	const router = useRouter();
	const handleClick = () => {
		console.log('Order Placed Successfully!');
		// eslint-disable-next-line no-alert
		alert('Order Placed Successfully!');
		router.push('/');
	};
	return (
		<>
			<h1>Welcome to Order Product</h1>
			<button onClick={handleClick}>Place Order</button>
		</>
	);
}