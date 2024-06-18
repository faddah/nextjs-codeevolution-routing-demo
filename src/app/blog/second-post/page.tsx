import Image from "next/image";

export default function SecondPost(): JSX.Element {
	return (
		<div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
			<h1>My Absolutely ASTOUNDING, even MOAR thoughtful, Second Blog Post!</h1>

			<Image
				className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
				src="/faddah-aladdin-theater.jpg"
				alt="Faddah in the back row of the audience at the Aladdin Theater, Portland, Oregon, U.S."
				width={500}
				height={400}
				priority
			/>

			<p>Readymade vibecession leggings unicorn four loko, normcore neutra next level microdosing single-origin coffee cray tattooed. Direct trade lyft ugh, grailed vegan glossier crucifix taiyaki art party hot chicken. Letterpress DSA mustache normcore bruh, shoreditch tilde roof party. Shabby chic cornhole kinfolk mustache offal bespoke hot chicken. Beard pabst kogi pug, chambray poke farm-to-table flexitarian iPhone humblebrag vibecession tousled. Mlkshk af four dollar toast yes plz, forage etsy blog polaroid distillery JOMO flannel yuccie deep v gatekeep kitsch.</p>

			<p>Tote bag blog schlitz thundercats palo santo lomo listicle godard neutral milk hotel everyday carry lumbersexual pug food truck waistcoat. Tacos skateboard solarpunk vape cred shabby chic schlitz echo park direct trade thundercats enamel pin blackbird spyplane. Gluten-free live-edge af letterpress, godard four loko you probably haven&apos;t heard of them blackbird spyplane drinking vinegar twee palo santo wolf street art praxis adaptogen. Twee polaroid venmo knausgaard cornhole gentrify, tumeric VHS DIY la croix tonx cliche. YOLO keffiyeh small batch, listicle glossier twee enamel pin meh plaid. Four loko marfa blue bottle bespoke shaman. Helvetica forage heirloom, farm-to-table 8-bit shoreditch chillwave sriracha cloud bread microdosing roof party umami scenester same direct trade.</p>

			<p>iPhone flexitarian knausgaard, authentic seitan ethical marfa readymade la croix chicharrones kogi direct trade everyday carry. Tofu DSA church-key butcher subway tile bodega boys, marxism try-hard iPhone migas tote bag forage meh af man bun. JOMO selfies praxis, plaid artisan you probably haven&apos;t heard of them franzen biodiesel truffaut taiyaki asymmetrical. Man braid twee ascot drinking vinegar, chartreuse wolf succulents fingerstache next level roof party af grailed readymade banjo ennui. Ugh same cupping jean shorts organic fanny pack.</p>

			<p>Dummy text? More like dummy thicc text, amirite?</p>
		</div >);

}