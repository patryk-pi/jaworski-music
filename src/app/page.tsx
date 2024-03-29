import Arrow from "@/components/Arrow/Arrow";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Video from "@/components/Video/Video";
import { ParallaxProvider } from "react-scroll-parallax";

const Home = () => {
    return (
        <>
            <Navbar />
            <Video
                source={"/DJVid.mp4"}
                parallax={false}
                speed={-800}
                marTop={"0rem"}
            />
            <Hero />
            <Footer />
        </>
    );
};

export default Home;
