type BannerProps = {
    custom: string;
    title: string;
  };
  
export default function Title({ custom, title }: BannerProps) {
    return (
        <span className={`${custom} mb-[0.1rem] md:mb-[0.2rem] text-[0.25rem] md:text-[0.35rem] font-bold animation-effect`}>
            {title}
        </span>
    );
}
  