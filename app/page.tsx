import React, { type ReactElement } from 'react'
import Section from '@molecules/section'
import Redirect from '@molecules/redirect'
import Paragraph from '@atoms/paragraph'
import Badge from '@atoms/badge'
import Footer from '@molecules/footer'
import Header from '@molecules/header'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Robert Gontarski',
  description: 'Robert Gontarski - Software Engineer - Golang PHP JavaScript NextJS Symfony GORM'
}

export default function Home (): ReactElement {
  return (
    <>
      <Header />
      <main>
        <Section title="About">
          <Paragraph isLast={false}>
            I am a software engineer with a passion for building applications. I have a strong background in <span
            className="text-neutral-900 dark:text-neutral-50 font-bold">Golang</span>, <span className="text-neutral-900 dark:text-neutral-50 font-bold">PHP</span> and <span className="text-neutral-900 dark:text-neutral-50 font-bold">JavaScript</span>. I am currently working as a full stack engineer.
          </Paragraph>
          <Paragraph isLast={true}>
            Currently, in addition to my work as a programmer, I am developing as a lecturer at <a
            href="https://coderslab.pl" target="_blank" className="text-neutral-900 dark:text-neutral-50 font-bold hover:text-emerald-600 dark:hover:text-emerald-600 transition-colors duration-300">CodersLab</a>,
            where I pass on my knowledge and experience to younger programmers. I am happy to contribute to the
            education of the next generation of IT professionals.
          </Paragraph>
        </Section>
        <Section title="Projects">
          <Redirect href="https://github.com/robertgontarski/film-converter" target="_blank" title="Movie compiler" linkText="Show more..." isLast={false}>
            <Paragraph isLast={false}>
              It is the concept of unlimited cloud storage based on youtube private videos
            </Paragraph>
            <Badge names={['golang', 'films']} />
          </Redirect>
          <Redirect href="https://github.com/robertgontarski/film-converter" target="_blank" title="GOKIT" linkText="Show more..." isLast={true}>
            <Paragraph isLast={false}>
              Predefined logging into files and environment variables reader for go projects
            </Paragraph>
            <Badge names={['golang', 'logging', 'env']} />
          </Redirect>
        </Section>
        <Section title="Contact">
          <Redirect href="https://www.linkedin.com/in/robert-gontarski/" title="Linkedin" target="_blank" linkText="Show more..." isLast={false}>
            <Paragraph isLast={false}>
              Join my professional network
            </Paragraph>
          </Redirect>
          <Redirect href="https://twitter.com/RobertGontarski" isLast={false} title="Twitter" target="_blank" linkText="Show more...">
            <Paragraph isLast={false}>
              Be up to date with my tweets
            </Paragraph>
          </Redirect>
          <Redirect href="https://github.com/robertgontarski" title="Github" target="_blank" linkText="Show more..." isLast={false}>
            <Paragraph isLast={false}>
              You can find my other projects
            </Paragraph>
          </Redirect>
          <Redirect href="mailto:gontrebor@gmail.com" isLast={true} title="E-mail" linkText="Send email...">
            <Paragraph isLast={false}>
              Write to me
            </Paragraph>
          </Redirect>
        </Section>
        <Section title="Resume">
          <Redirect href="/resume" isLast={true} title="Website" target="_blank" linkText="Show more...">
            <Paragraph isLast={false}>
              Show my resume on this website
            </Paragraph>
          </Redirect>
        </Section>
      </main>
      <Footer />
    </>
  )
}
