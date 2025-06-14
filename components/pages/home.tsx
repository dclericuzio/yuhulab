import HeroHome from '@/components/organisms/hero-home';
import About from '@/components/organisms/about';
import Business from '@/components/organisms/business';
import Fleet from '@/components/organisms/fleet';
import Interested from '@/components/organisms/interested';

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