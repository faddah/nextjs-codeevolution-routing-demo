import Image from "next/image";

export default function FirstPost(): JSX.Element {
	return (
		<div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
			<h1>My Simply AMAZING First Blog Post!!</h1>

			<Image
				className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
				src="/faddah-airplane-beer.jpg"
				alt="Faddah kicking back a beer on an airplane."
				width={500}
				height={400}
				priority
			/>

			<p>YOLO XOXO waistcoat keffiyeh mumblecore meditation, af jean shorts taiyaki subway tile cray. Shaman selfies before they sold out single-origin coffee fanny pack neutra. Art party butcher pitchfork blackbird spyplane lomo chicharrones four loko. Yr palo santo kale chips, poutine 3 wolf moon big mood ramps sustainable succulents direct trade tonx blackberry pill. Snackwave poutine lo-fi, pug copper mug portland.</p>
			<p>Marxism tbh tofu flexitarian franzen PBR&B pinterest fashion axe craft beer sartorial air plant austin. Four dollar toast mukbang bruh, crucifix viral dreamcatcher hashtag sartorial cronut taiyaki affogato marxism normcore. Four loko snackwave trust fund fashion axe next level cupping, tumeric fit. Big mood try-hard mixtape, tumeric man braid hella slow-carb fanny pack gluten-free bodega boys mukbang. Blue bottle viral knausgaard yuccie godard mukbang subway tile, sus XOXO vice. Tofu enamel pin microdosing, meggings selfies succulents artisan DSA kogi actually 3 wolf moon migas hot chicken.</p>
			<p>Gluten-free deep v butcher aesthetic williamsburg gentrify jawn iPhone coloring book. Pug pabst meh 8-bit +1 kogi cornhole copper mug try-hard knausgaard crucifix prism banh mi. Af four dollar toast ethical ramps hell of single-origin coffee la croix 3 wolf moon fanny pack bicycle rights. Kogi health goth kickstarter, wolf fit meggings lyft four loko selfies salvia.</p>
			<p>Dummy text? More like dummy thicc text, amirite?</p>
		</div >);
}