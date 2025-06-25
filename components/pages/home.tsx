import HeroHome from '@/components/organisms/home/hero-home';
import About from '@/components/organisms/home/about';
import Business from '@/components/organisms/home/business';
import Fleet from '@/components/organisms/home/fleet';
import Interested from '@/components/organisms/home/interested';

export default function Home() {
    return (
        <>
            <HeroHome/>
            <About/>
            <Business/>
            <Fleet/>
            <Interested/>
        </>
    );
}