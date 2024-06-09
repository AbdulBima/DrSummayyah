import Audio from "@/components/Audio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import DeskLanding from "@/components/DeskLanding";
import Landing from "@/components/Landing";
import PoliticsMobile from "@/components/PoliticsMobile";
import Video from "@/components/Video";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<DeskLanding />
			<Landing />
			<Blog />
			<Video />
			<PoliticsMobile />
			<Audio />
		</div>
	);
}
