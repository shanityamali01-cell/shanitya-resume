import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { JSX } from 'react';

const portraitUrl =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

const contactEmail = 'shanityamali01@gmail.com';
const contactPhone = '+64225255054';

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const decorativeImages = [
  {
    alt: 'Moon 3D icon',
    className: 'absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0',
    imageClassName: 'w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.1,
    x: -80,
    y: 0,
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  },
  {
    alt: 'Abstract 3D object',
    className:
      'absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0',
    imageClassName: 'w-[100px] sm:w-[140px] md:w-[180px]',
    delay: 0.25,
    x: -80,
    y: 0,
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  },
  {
    alt: 'Lego 3D icon',
    className: 'absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0',
    imageClassName: 'w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.15,
    x: 80,
    y: 0,
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  },
  {
    alt: 'Grouped 3D shapes',
    className:
      'absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0',
    imageClassName: 'w-[130px] sm:w-[170px] md:w-[220px]',
    delay: 0.3,
    x: 80,
    y: 0,
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
  },
];

const services = [
  {
    number: '01',
    name: 'Video Editing',
    description:
      'Clean, engaging edits for educational content, social media, and brand storytelling with polished pacing, structure, and visual flow.',
  },
  {
    number: '02',
    name: 'SolidWorks',
    description:
      'Precise CAD modeling and technical design workflows for product concepts, mechanical parts, prototypes, and visual presentations.',
  },
  {
    number: '03',
    name: '3D Modeling Design',
    description:
      'Custom 3D objects, product visuals, and digital assets shaped for strong presentation, clarity, and creative impact.',
  },
  {
    number: '04',
    name: 'Website Creation',
    description:
      'Modern responsive websites built around clear messaging, sharp visuals, and smooth user experiences that support digital brands.',
  },
];

const projects = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
  },
];

type FadeInProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
} & HTMLAttributes<HTMLElement>;

function FadeIn({
  as = 'div',
  children,
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...props
}: FadeInProps) {
  const MotionElement = useMemo(() => {
    const tag = as as keyof JSX.IntrinsicElements;
    return motion.create(tag);
  }, [as]) as ElementType;

  return (
    <MotionElement
      className={className}
      initial={{ opacity: 0, x, y }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      {...props}
    >
      {children}
    </MotionElement>
  );
}

type MagnetProps = {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
};

function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const element = ref.current;

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const withinPaddedBounds =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding &&
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding;

      if (!withinPaddedBounds) {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
        return;
      }

      setIsActive(true);
      setPosition({
        x: (event.clientX - centerX) / strength,
        y: (event.clientY - centerY) / strength,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [inactiveTransition, padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}

function ContactDetails({ className = '' }: { className?: string }) {
  return (
    <div
      className={`marker-contact flex flex-col gap-2 text-right text-[clamp(1rem,2vw,1.7rem)] text-[#D7E2EA] ${className}`}
    >
      <a href={`tel:${contactPhone}`} className="transition-opacity duration-200 hover:opacity-70">
        {contactPhone}
      </a>
      <a href={`mailto:${contactEmail}`} className="transition-opacity duration-200 hover:opacity-70">
        {contactEmail}
      </a>
    </div>
  );
}

function LiveProjectButton() {
  return (
    <a
      href="#projects"
      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      <span>Live Project</span>
      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
    </a>
  );
}

function HeroSection() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Price', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: `mailto:${contactEmail}` },
  ];

  return (
    <section
      className="relative flex h-screen flex-col bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn as="nav" delay={0} y={-20} className="relative z-20 px-6 pt-6 md:px-10 md:pt-8">
        <ul className="flex items-center justify-between">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

      <div className="relative mt-6 w-full overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            HI, I&apos;M SHANI
          </h1>
        </FadeIn>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={portraitUrl}
              alt="Shani, digital creator"
              className="w-full select-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-6 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]">
            enterpeneur, student of life.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactDetails />
        </FadeIn>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const rowOne = useMemo(() => marqueeImages.slice(0, 11), []);
  const rowTwo = useMemo(() => marqueeImages.slice(11), []);

  useEffect(() => {
    let frame = 0;

    const updateOffset = () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateOffset);
    };

    updateOffset();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pt-24 pb-10 sm:pt-32 md:pt-40"
      aria-label="Featured motion previews"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={rowOne} translateX={offset - 200} />
        <MarqueeRow images={rowTwo} translateX={-(offset - 200)} />
      </div>
    </section>
  );
}

type MarqueeRowProps = {
  images: string[];
  translateX: number;
};

function MarqueeRow({ images, translateX }: MarqueeRowProps) {
  const repeatedImages = useMemo(
    () =>
      Array.from({ length: 3 }).flatMap((_, repeatIndex) =>
        images.map((src, imageIndex) => ({
          src,
          key: `${repeatIndex}-${imageIndex}-${src}`,
        })),
      ),
    [images],
  );

  return (
    <div
      className="flex gap-3"
      style={{
        transform: `translate3d(${translateX}px, 0, 0)`,
        willChange: 'transform',
      }}
    >
      {repeatedImages.map((image) => (
        <img
          key={image.key}
          src={image.src}
          alt=""
          loading="lazy"
          className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
        />
      ))}
    </div>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      {decorativeImages.map((image) => (
        <FadeIn
          key={image.src}
          className={`pointer-events-none ${image.className}`}
          delay={image.delay}
          duration={0.9}
          x={image.x}
          y={image.y}
        >
          <img src={image.src} alt={image.alt} className={image.imageClassName} loading="lazy" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text="I'm a content creator focused on building AI-driven digital experiences, with a strong emphasis on the evolution of finance, from the barter system to the future of money. I combine storytelling, strategy, and modern AI tools to create engaging, educational content designed to inform and scale. My work is centered on simplifying complex financial concepts while building impactful, monetizable digital brands across platforms."
            className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
          />
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.35} y={20}>
            <ContactDetails className="items-center text-center" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

type AnimatedTextProps = {
  text: string;
  className?: string;
};

function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });
  const characters = useMemo(() => Array.from(text), [text]);

  return (
    <p ref={ref} aria-label={text} className={className}>
      {characters.map((character, index) => (
        <AnimatedCharacter
          key={`${character}-${index}`}
          character={character}
          index={index}
          total={characters.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}

type AnimatedCharacterProps = {
  character: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function AnimatedCharacter({
  character,
  index,
  total,
  progress,
}: AnimatedCharacterProps) {
  const start = index / total;
  const end = Math.min(start + 1 / total + 0.025, 1);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const displayCharacter = character === ' ' ? '\u00A0' : character;

  return (
    <span aria-hidden="true" className="relative inline-block">
      <span className="opacity-0">{displayCharacter}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {displayCharacter}
      </motion.span>
    </span>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            y={35}
            className="border-t border-[rgba(12,12,12,0.15)] last:border-b"
          >
            <article className="grid grid-cols-[minmax(78px,0.34fr)_1fr] gap-4 py-8 sm:gap-10 sm:py-10 md:py-12">
              <span className="text-[clamp(3rem,10vw,140px)] font-black uppercase leading-none text-[#0C0C0C]">
                {service.number}
              </span>
              <div className="flex flex-col justify-center gap-4">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight">
                  {service.name}
                </h3>
                <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                  {service.description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Project
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

type ProjectCardProps = {
  project: Project;
  index: number;
  totalCards: number;
};

function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="h-[85vh]">
      <motion.article
        className="project-card sticky overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{
          scale,
          top: `calc(var(--sticky-top) + ${index * 28}px)`,
          transformOrigin: 'top center',
        }}
      >
        <div className="mb-5 flex flex-col gap-5 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-end sm:gap-6 lg:flex lg:items-end">
            <span className="text-[clamp(3rem,10vw,140px)] font-black uppercase leading-none text-[#D7E2EA]">
              {project.number}
            </span>
            <div className="flex flex-col gap-1 pb-1 lg:min-w-[320px]">
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#D7E2EA]/60 sm:text-sm">
                {project.category}
              </span>
              <h3 className="text-[clamp(1.55rem,4.8vw,4.5rem)] font-medium uppercase leading-none tracking-tight text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-5">
          <div className="flex flex-col gap-4 md:w-[40%] md:gap-5">
            <img
              src={project.images[0]}
              alt={`${project.name} preview one`}
              loading="lazy"
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
            <img
              src={project.images[1]}
              alt={`${project.name} preview two`}
              loading="lazy"
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
          <div className="md:w-[60%]">
            <img
              src={project.images[2]}
              alt={`${project.name} preview three`}
              loading="lazy"
              className="h-[clamp(320px,39vw,590px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:h-full md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function App() {
  return (
    <main
      className="min-h-screen bg-[#0C0C0C] font-kanit"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
