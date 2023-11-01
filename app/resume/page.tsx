import Header from '@molecules/header'
import Footer from '@molecules/footer'
import React, { type ReactNode } from 'react'
import Section from '@molecules/section'
import Badge from '@atoms/badge'
import Box from '@molecules/box'
import Paragraph from '@atoms/paragraph'
import Redirect from '@molecules/redirect'
import List from '@atoms/list'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Robert Gontarski',
  description: 'Robert Gontarski - Software Engineer - Golang PHP JavaScript NextJS Symfony GORM'
}

export default function Resume (): ReactNode {
  return (
    <>
      <Header />
      <main>
        <Section title="Contact">
          <Redirect href="https://www.linkedin.com/in/robert-gontarski/" title="Linkedin" target="_blank" linkText="Show more..." isLast={false}>
            <Paragraph isLast={false}>
              Join my professional network
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
        <Section title="Technical Skills">
          <Box isLast={false}>
            <p className="mb-2">Languages I have used professionally or in personal projects.</p>
            <Badge names={['Go', 'PHP', 'JS', 'TS', 'SQL', 'SASS', 'HTML']} />
          </Box>
          <Box isLast={false}>
            <p className="mb-2">Frameworks and libraries I have used professionally or in personal projects.</p>
            <Badge names={['Symfony', 'React', 'Next.js', 'GORM', 'Fiber', 'Bootstrap', 'Tailwind']} />
          </Box>
          <Box isLast={false}>
            <p className="mb-2">Tools I have used professionally or in personal projects.</p>
            <Badge names={['Docker', 'Git', 'GitHub', 'GitLab', 'Firabase', 'Linux', 'macOS', 'Windows', 'Jira', 'Nginx', 'RabbitMQ', 'MySQL', 'Clickhouse']} />
          </Box>
        </Section>
        <Section title="Experience">
          <Box isLast={false} title="Full Stack Software Engineer">
            <Paragraph isLast={false}>
              11/2021 - Present | Viagold ltd.
            </Paragraph>
            <List isLast={true}>
              <li>creation and development of internal applications</li>
              <li>creation and configuration of environments</li>
              <li>verifying the code of other developers</li>
              <li>code review</li>
              <li>creating documentation</li>
              <li>creating tests</li>
            </List>
          </Box>
          <Box isLast={false} title="Full Stack Software developer">
            <Paragraph isLast={false}>
              05/2022 - Present | Omega Code
            </Paragraph>
            <List isLast={true}>
              <li>creation and development of internal applications</li>
              <li>creation and configuration of environments</li>
              <li>verifying the code of other developers</li>
              <li>code review</li>
              <li>creating documentation</li>
            </List>
          </Box>
          <Box isLast={false} title="Teacher - Mentor">
            <Paragraph isLast={false}>
              10/2022 - Present | Coders Lab
            </Paragraph>
            <List isLast={true}>
              <li>lecturing people</li>
              <li>technical support and knowledge throughout the course</li>
            </List>
          </Box>
          <Box isLast={false} title="Author">
            <Paragraph isLast={false}>
              05/2023 - 08-2023 | Helion
            </Paragraph>
            <List isLast={true}>
              <li>developing training for beginners</li>
            </List>
          </Box>
          <Box isLast={false} title="Full Stack developer">
            <Paragraph isLast={false}>
              05/2021 - 11/2021 | Omega Code
            </Paragraph>
            <List isLast={true}>
              <li>creation and development of internal applications</li>
              <li>creation and configuration of environments</li>
              <li>verifying the code of other developers</li>
              <li>code review</li>
              <li>creating documentation</li>
            </List>
          </Box>
          <Box isLast={false} title="Full Stack developer">
            <Paragraph isLast={false}>
              09/2019 - 04/2021 | Startup e-lerning
            </Paragraph>
            <List isLast={true}>
              <li>creation and development of internal applications</li>
              <li>creation and configuration of environments</li>
              <li>creating documentation</li>
            </List>
          </Box>
          <Box isLast={true} title="Full Stack developer">
            <Paragraph isLast={false}>
              09/2019 - 04/2021 | BPO International
            </Paragraph>
            <List isLast={true}>
              <li>creation and development of internal applications</li>
              <li>creation and configuration of environments</li>
              <li>verifying the code of other developers</li>
              <li>code review</li>
              <li>creating documentation</li>
            </List>
          </Box>
        </Section>
        <Section title="Education">
          <Box isLast={true}>
            <Paragraph isLast={true}>
              2016 – 2019 | CV Liceum Ogólnokształcące im. Zbigniewa Herberta
            </Paragraph>
          </Box>
        </Section>
        <Section title="Certificates">
          <Box isLast={false} title="Advanced JS developer">
            <Paragraph isLast={true}>
              2022 | ALX148003G
            </Paragraph>
          </Box>
          <Box isLast={false} title="JS developer">
            <Paragraph isLast={true}>
              2020 | ALX278017E
            </Paragraph>
          </Box>
          <Box isLast={false} title="Advanced PHP developer">
            <Paragraph isLast={true}>
              2019 | ALX203002D
            </Paragraph>
          </Box>
          <Box isLast={false} title="Advanced PHP developer">
            <Paragraph isLast={true}>
              2018 | ALX336027C
            </Paragraph>
          </Box>
        </Section>
      </main>
      <Footer />
    </>
  )
}
