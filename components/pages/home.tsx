import HeroHome from '@/components/organisms/home/hero-home';
import About from '@/components/organisms/home/about';
import Business from '@/components/organisms/home/business';
import Contact from '@/components/organisms/home/contact';

export default function Home() {
    return (
        <>
            <HeroHome/>
            <About/>
            <Business/>
            <Contact/>
        </>
    );
}