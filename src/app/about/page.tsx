import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Facundo Martin. I build systems that scale—and occasionally break them to learn',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Facundo. I build systems that scale—and occasionally break
            them to learn
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My journey began as a Frontend Engineer where I fell hard for
              Tailwind CSS. Their <s>utility-first approach</s> philosophy
              towards UI design opened my eyes to a clearer path for crafting
              interfaces. This foundation naturally evolved into my work with
              the T3 stack, where I discovered rapid prototyping and end-to-end
              ownership.
            </p>
            <p>
              Throughout the years, I&apos;ve always liked building things from
              zero-to-one. From requirements to architecture to deployment,
              nothing beats that feeling of shipping a complete solution. This
              process has made me deeply grateful for the pioneers behind tools
              like Tailwind CSS, shadcn/ui, and Linear—true giants whose
              shoulders I stand on.
            </p>
            <p>
              Over years of shipping MVPs and untangling performance bottlenecks
              at Til, my interest has evolved from writing code to crafting
              systems where code is just the implementation detail. I&apos;ve
              learned that the real magic happens at the architecture level—when
              you design patterns that compound their value over time, making
              every new feature easier to build than the last.
            </p>
            <p>
              Today, I&apos;m searching for that sweet spot between rapid
              innovation and sustainable engineering. I&apos;m fascinated by
              technical challenges that require both pragmatic solutions and
              forward-thinking design—like the problems Turso is solving with
              edge databases. I want to build systems that balance immediate
              needs with long-term sustainability, where{' '}
              <b>craftsmanship doesn&apos;t have to be sacrificed for speed.</b>
            </p>
            <p>
              When I&apos;m not knee-deep in code, you&apos;ll find me running
              through the park with my dog, working out at the gym, or playing
              paddle with friends on weekends. I&apos;ve also been gathering the
              courage to start Brazilian jiu-jitsu. Maybe 2025 is the year I
              finally sign up...
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:facundomartin98@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              facundomartin98@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
