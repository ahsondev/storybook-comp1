import React from 'react';

import { Button } from './Button';
import './whyexist.css';

export const WhyExist = () => {
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
          <div className='image-wrapper'>
            <img src="/number-wrapper.png" alt="number-wrapper" />
          </div>
          <div className='number-wrapper'>
            1
          </div>
        </div>
        <div className='item'>
          <div className='problem'>
            <h3>Finding Good Engineers is Hard:</h3>
            <div className='content'>
              you used staffing companies, recriting companies, offer employees referal bounses. You offer 1.5x Google Salaries. But still you can't find employees. We've been there!
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
          <div className='image-wrapper'>
            <img src="/number-wrapper.png" alt="number-wrapper" />
          </div>
          <div className='number-wrapper'>
            2
          </div>
        </div>
        <div className='item'>
          <div className='problem'>
            <h3>Finding Good Engineers is Hard:</h3>
            <div className='content'>
              you used staffing companies, recriting companies, offer employees referal bounses. You offer 1.5x Google Salaries. But still you can't find employees. We've been there!
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
          <div className='image-wrapper'>
            <img src="/number-wrapper.png" alt="number-wrapper" />
          </div>
          <div className='number-wrapper'>
            3
          </div>
        </div>
      </div>
    </div>
  )
}
