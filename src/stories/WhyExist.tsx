import React from 'react'
import styled from "styled-components"

import './_font.scss'

interface PropsType {}

export const WhyExist = (props: PropsType) => {
  return (
    <WhyExistContainer>
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
    </WhyExistContainer>
  )
}

const WhyExistContainer = styled.div`
  background-color: #e16146;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 60px;

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    padding: 0;
    font-size: 60px;
    font-family: 'Roboto';
  }

  .comment {
    margin-top: 60px;
    text-align: center;
    font-size: 16px;
    line-height: 30px;
    font-family: 'Roboto';
  }

  .problem-solution {
    display: flex;
    flex-direction: column;
    margin: 40px 0 0 0;

    .icon-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;

      img {
        display: block;
      }
    }

    .header {
      background: #eda865;
      display: flex;
      padding: 10px 20px;
      justify-content: space-between;
      text-transform: uppercase;
      font-family: 'Roboto';
      font-weight: bold;
    }

    .item {
      display: flex;
      position: relative;
      .problem, .solution {
        flex: 1;
        border: 1px solid #eda865;
        border-top: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 20px;
        text-align: left;
        font-family: 'Roboto';
        font-size: 12px;

        h3 {
          font-size: 16px;
          text-align: left;
          margin: 0 0 10px 0;
          font-family: 'Roboto';
          font-weight: 500;
        }

        ul {
          margin: 0 0 0 20px;
          list-style-type: disc;

          li {
            margin: 0;
            text-align: left;
          }
        }
      }

      .problem {
        padding-right: 80px;
        border-right: none;
      }

      .solution {
        padding-left: 80px;
      }

      .image-wrapper {
        position: absolute;
        width: 50px;
        height: 50px;
        left: calc(50% - 16px);
        top: calc(50% - 25px);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .number-wrapper {
        position: absolute;
        width: 50px;
        height: 50px;
        left: calc(50% - 25px);
        top: calc(50% - 25px);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        font-weight: bold;
        font-family: 'Roboto';
      }
    }
  }
}

@media (max-width: 768px) {
  .why-exist {
    padding: 30px;
  
    h2 {
      font-size: 40px;
    }
  
    .comment {
      margin-top: 20px;
      font-size: 14px;
      line-height: 24px;
    }
  
    .problem-solution {
      display: flex;
      flex-direction: column;
      margin: 40px 0 0 0;
  
      .icon-wrapper {
  
        img {
          width: 90%;
        }
      }
  
      .item {
        position: unset;
        display: flex;
        flex-direction: column;
        .problem, .solution {
          position: relative;
          flex: 1;
          border: 1px solid #eda865;
          border-top: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 20px;
          text-align: left;
          font-family: 'Roboto';
          font-size: 12px;
  
        }
  
        .problem {
          padding-bottom: 60px;
        }
  
        .solution {
          padding-top: 80px;
        }
  
        .image-wrapper {
          position: absolute;
          width: unset;
          height: unset;
          left: calc(50% - 60px);
          bottom: -58px;
          top: unset;
          transform: rotate(90deg);

          img {
            display: block;
          }
        }
  
        .number-wrapper {
          position: absolute;
          width: 50px;
          height: unset;
          left: calc(50% - 25px);
          bottom: -25px;
          top: unset;
        }
      }
    }
  }
`;
