import React from 'react'
import ItemNumber from './ItemNumber'
import {
  ComponentContainer,
  ComponentHeader,
  ComponentComment,
  ProblemSolution,
  TableLogo,
  TableHeader,
  TableItem,
  TableItemHeader,
  TableItemUl,
  Problem,
  Solution,
} from './Components'

import './styles/main.scss'

interface PropsType {}

export const WhyExist = (props: PropsType) => {
  return (
    <ComponentContainer>
      <ComponentHeader>Why we exist</ComponentHeader>
      <ComponentComment>
        It's hard to find talented engineers.
        Whether you're a ting startup, or a huge corporation.
        Whether you can afford $60 salary or $300k, there will always be a startage good engineers.
        <br/>
        Our company formed due to a very unique partnership.
        Tall, our CEO comes from technical background.
        He's been working at startups and large corporations, including Percolate, WSJ, and the Federal Reserve.
        He is incoled in the frontend and opensource communities, and is constantly at conferences.
        <br/>
        Dilli, our CLO, comes from a legal background. He's been working with immigration for 10 years and system like the book of this hand.
        <br/>
        We indentifiled some problems in the industries and how combining our unique talents can solve them.
      </ComponentComment>
      <ProblemSolution>
        <TableLogo>
          <img src="/problem_solution_icon.png" alt="problem-solution" />
        </TableLogo>
        <TableHeader>
          <div>Problem</div>
          <div>Solution</div>
        </TableHeader>
        <TableItem>
          <Problem>
            <TableItemHeader>Finding Good Engineers is Hard:</TableItemHeader>
            <div className='content'>
              you used staffing companies, recriting companies, offer employees referal bounses. You offer 1.5x Google Salaries. But still you can't find employees. We've been there!
            </div>
            <ItemNumber number={1} />
          </Problem>
          <Solution>
            <TableItemHeader>We're Developers Ourselves, and are Constantly Hanging Around Other Devs, Such as at:</TableItemHeader>
            <div className='content'>
              <TableItemUl>
                <li>Hackathons</li>
                <li>Conferences</li>
                <li>Tech events/Meetup Groups</li>
              </TableItemUl>
              Also a lot of our engineers come from oversees
            </div>
          </Solution>
        </TableItem>
        <TableItem>
          <Problem>
            <TableItemHeader>Interviewing Takes Forever:</TableItemHeader>
            <div className='content'>
              I worked for a company that was offering amazing salaries benefits and stock optios. We had a team of 8 engineers, and were ambitious to scale up. But all the condates sent to us were not qualified.
            </div>
            <ItemNumber number={2} />
          </Problem>
          <Solution>
            We don't waste your time with junior and mid-level developers.
            <br/>
            We ONLY recruit the top 5%. Our intensive 6 hour interview process ensures that our employees are yop notch. We also work directly with these developers for a month on our internal consulting projects.
          </Solution>
        </TableItem>
        <TableItem>
          <Problem>
            <TableItemHeader>Finding Good Engineers is Hard:</TableItemHeader>
            <div className='content'>
              you used staffing companies, recriting companies, offer employees referal bounses. You offer 1.5x Google Salaries. But still you can't find employees. We've been there!
            </div>
            <ItemNumber number={3} />
          </Problem>
          <Solution>
            <TableItemHeader>We're Developers Ourselves, and are Constantly Hanging Around Other Devs, Such as at:</TableItemHeader>
            <div className='content'>
              <TableItemUl>
                <li>Hackathons</li>
                <li>Conferences</li>
                <li>Tech events/Meetup Groups</li>
              </TableItemUl>
              Also a lot of our engineers come from oversees
            </div>
          </Solution>
        </TableItem>
      </ProblemSolution>
    </ComponentContainer>
  )
}
