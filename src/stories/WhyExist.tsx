import React from 'react';

import './whyexist.scss';

interface PropsType {}

export const WhyExist = (props: PropsType) => {
  return (
    <div className='why-exist'>
      <h2>Why we exist</h2>
      <div className='comment'>
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
      </div>
      <div className='problem-solution'>
        <div className='icon-wrapper'>
          <img src="/problem_solution_icon.png" alt="problem-solution" />
        </div>
        <div className='header'>
          <div>Problem</div>
          <div>Solution</div>
        </div>
        <div className='item'>
          <div className='problem'>
            <h3>Finding Good Engineers is Hard:</h3>
            <div className='content'>
              you used staffing companies, recriting companies, offer employees referal bounses. You offer 1.5x Google Salaries. But still you can't find employees. We've been there!
            </div>
            <div className='image-wrapper'>
              <img src="/number-wrapper.png" alt="number-wrapper" />
            </div>
            <div className='number-wrapper'>
              1
            </div>
          </div>
          <div className='solution'>
            <h3>We're Developers Ourselves, and are Constantly Hanging Around Other Devs, Such as at:</h3>
            <div className='content'>
              <ul>
                <li>Hackathons</li>
                <li>Conferences</li>
                <li>Tech events/Meetup Groups</li>
              </ul>
              Also a lot of our engineers come from oversees
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='problem'>
            <h3>Interviewing Takes Forever:</h3>
            <div className='content'>
              I worked for a company that was offering amazing salaries benefits and stock optios. We had a team of 8 engineers, and were ambitious to scale up. But all the condates sent to us were not qualified.
            </div>
            <div className='image-wrapper'>
              <img src="/number-wrapper.png" alt="number-wrapper" />
            </div>
            <div className='number-wrapper'>
              2
            </div>
          </div>
          <div className='solution'>
            We don't waste your time with junior and mid-level developers.
            <br/>
            We ONLY recruit the top 5%. Our intensive 6 hour interview process ensures that our employees are yop notch. We also work directly with these developers for a month on our internal consulting projects.
          </div>
        </div>
        <div className='item'>
          <div className='problem'>
            <h3>Finding Good Engineers is Hard:</h3>
            <div className='content'>
              you used staffing companies, recriting companies, offer employees referal bounses. You offer 1.5x Google Salaries. But still you can't find employees. We've been there!
            </div>
            <div className='image-wrapper'>
              <img src="/number-wrapper.png" alt="number-wrapper" />
            </div>
            <div className='number-wrapper'>
              3
            </div>
          </div>
          <div className='solution'>
            <h3>We're Developers Ourselves, and are Constantly Hanging Around Other Devs, Such as at:</h3>
            <div className='content'>
              <ul>
                <li>Hackathons</li>
                <li>Conferences</li>
                <li>Tech events/Meetup Groups</li>
              </ul>
              Also a lot of our engineers come from oversees
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
