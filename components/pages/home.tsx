import HeroHome from '@/components/organisms/hero-home';
import Partner from '@/components/organisms/partner';
import About from '@/components/organisms/about';
import Total from '@/components/organisms/total';
import Business from '@/components/organisms/business';
import Interested from '@/components/organisms/interested';

export default function Home() {
    return (
        <>
            <HeroHome/>
            <About/>
            <Total/>
            <Business/>
            <Partner/>
            <Interested/>
        </>
    );
}