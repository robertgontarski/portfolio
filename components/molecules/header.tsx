import Section from '@molecules/section'
import { type ReactNode } from 'react'
import Paragraph from '@atoms/paragraph'

export default function Header (): ReactNode {
  return (
    <header>
      <Section title={null}>
        <a href="https://www.linkedin.com/in/robert-gontarski/" target="_blank"
           className="text-2xl mb-4 font-bold hover:text-emerald-600 transition-colors duration-300">Robert
          Gontarski</a>
        <Paragraph isLast={true}>
          Software Engineer
        </Paragraph>
      </Section>
    </header>
  )
}
