import React from 'react'
import styled from "styled-components"
import ItemNumber from './ItemNumber'
import * as Components from './Components'

import './styles/main.scss'

interface PropsType {}

export const WhyExist = (props: PropsType) => {
  return (
    <Components.ComponentContainer>
      <Components.ComponentHeader>Why we exist</Components.ComponentHeader>
      <Components.ComponentComment>
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
      </Components.ComponentComment>
      <Components.ProblemSolution>
        <Components.TableLogo>
          <img src="/problem_solution_icon.png" alt="problem-solution" />
        </Components.TableLogo>
        <Components.TableHeader>
          <div>Problem</div>
          <div>Solution</div>
        </Components.TableHeader>
        <Components.TableItem>
          <Components.Problem>
            <Components.TableItemHeader>Finding Good Engineers is Hard:</Components.TableItemHeader>
            <div className='content'>
              you used staffing companies, recriting companies, offer employees referal bounses. You offer 1.5x Google Salaries. But still you can't find employees. We've been there!
            </div>
            <ItemNumber number={1} />
          </Components.Problem>
          <Components.Solution>
            <Components.TableItemHeader>We're Developers Ourselves, and are Constantly Hanging Around Other Devs, Such as at:</Components.TableItemHeader>
            <div className='content'>
              <Components.TableItemUl>
                <li>Hackathons</li>
                <li>Conferences</li>
                <li>Tech events/Meetup Groups</li>
              </Components.TableItemUl>
              Also a lot of our engineers come from oversees
            </div>
          </Components.Solution>
        </Components.TableItem>
        <Components.TableItem>
          <Components.Problem>
            <Components.TableItemHeader>Interviewing Takes Forever:</Components.TableItemHeader>
            <div className='content'>
              I worked for a company that was offering amazing salaries benefits and stock optios. We had a team of 8 engineers, and were ambitious to scale up. But all the condates sent to us were not qualified.
            </div>
            <ItemNumber number={2} />
          </Components.Problem>
          <Components.Solution>
            We don't waste your time with junior and mid-level developers.
            <br/>
            We ONLY recruit the top 5%. Our intensive 6 hour interview process ensures that our employees are yop notch. We also work directly with these developers for a month on our internal consulting projects.
          </Components.Solution>
        </Components.TableItem>
        <Components.TableItem>
          <Components.Problem>
            <Components.TableItemHeader>Finding Good Engineers is Hard:</Components.TableItemHeader>
            <div className='content'>
              you used staffing companies, recriting companies, offer employees referal bounses. You offer 1.5x Google Salaries. But still you can't find employees. We've been there!
            </div>
            <ItemNumber number={3} />
          </Components.Problem>
          <Components.Solution>
            <Components.TableItemHeader>We're Developers Ourselves, and are Constantly Hanging Around Other Devs, Such as at:</Components.TableItemHeader>
            <div className='content'>
              <Components.TableItemUl>
                <li>Hackathons</li>
                <li>Conferences</li>
                <li>Tech events/Meetup Groups</li>
              </Components.TableItemUl>
              Also a lot of our engineers come from oversees
            </div>
          </Components.Solution>
        </Components.TableItem>
      </Components.ProblemSolution>
    </Components.ComponentContainer>
  )
}
