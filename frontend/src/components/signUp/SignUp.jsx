import React from 'react';
import { Fields, Footer, Header, ProgressBarStl, SignUpDoneStl, SignUpWrapper } from "./styles/S_SignUp";
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { MdContactPhone, MdOutlineDone } from 'react-icons/md';
import { BiHide } from 'react-icons/bi';
import { Button } from '../buttons/Button';
import { useState } from 'react';

const SignUp = () =>  <PageOne />

const PageOne = () => {
  const [next, setNext] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    // handle Next
    setNext(true);
  }

  return (
    <>
      { !next ? (<SignUpWrapper>
        <form onSubmit={handleNext}>
          <Header>
            <h1>Become a member</h1>
            <p>Let's set up your membership account</p>
            <ProgressBar />
          </Header>

          <Fields>
            <div>
              <label htmlFor="username">Username</label>
              <div>
                <input type="text" id="username" placeholder='Allyson' />
                <FaUser />
              </div>
            </div>

            <div id="extended">
              <label htmlFor="email">Email</label>
              <div>
                <input type="email" id="email" placeholder='example@gmail.com' />
                <FaEnvelope />
              </div>
            </div>

            <div>
              <label htmlFor="fullName">Full Name</label>
              <div>
                <input type="text" id="fullName" placeholder='Full Name' />
                <FaUser />
              </div>
            </div>

            <div>
              <label htmlFor="country">Country</label>
              <div>
                <select id="country">
                  <option>Select Country</option>
                  <option>Aaa</option>
                  <option>Bbb</option>
                  <option>Ccc</option>
                  <option>Ddd</option>
                </select>
              </div>
            </div>
          </Fields>

          <Footer>
            <Button primary> Next </Button>
            <p>Are you a member? <span>Log in</span></p>
          </Footer>

        </form>
      </SignUpWrapper>) : <PageTwo /> }
    </>
  )
}

const PageTwo = () => {
  const [done, setDone] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    // handle Join request
    setDone(true);
  }
  
  return(
    <>
      { !done ? (<SignUpWrapper>
        <form onSubmit={handleJoin}>

        <Header>
          <h1>Become a member</h1>
          <p>Let's set up your membership account</p>
          <ProgressBar pageTwo={true} />
        </Header>

        <Fields>
          <div>
            <label htmlFor="phoneNumber">Username</label>
            <div>
              <input type="tel" id="phoneNumber" placeholder='Phone Number' />
              <MdContactPhone />
            </div>
          </div>

          <div id="extended">
            <label htmlFor="passwrod">Password</label>
            <div>
              <input type="password" id="password" placeholder='Must be at least 8 characters' />
              <BiHide id="clickable" />
            </div>
            <small>
              Password should include: <br />
              Upper and lower case letters <br />
              Numbers <br />
              Symbols e.g @,#
            </small>
          </div>

          <div id="extended">
            <label htmlFor="password">Confirm Password</label>
            <div>
              <input type="password" id="password" placeholder='Must be at least 8 characters' />
              <BiHide id="clickable" />
            </div>
          </div>

        </Fields>

        <Footer>
          <Button primary> Join </Button>
        </Footer>

        </form>
      </SignUpWrapper>) : <SignUpDone /> }
    </>
  )
}

const SignUpDone = () => (
  <SignUpDoneStl>

    <ProgressBar done={true} />

    <img src="/svgs/mark_good.svg" alt="" />
    
    <h3>
      Congratulations!!! <br />
      You&apos;re now a Readems member
    </h3>

    <Button primary>Go to Homepage</Button>
  </SignUpDoneStl>
)

const ProgressBar = ({ pageTwo, done }) => {
  return (
    <ProgressBarStl pageTwo={pageTwo} done={done}> {/* Progress Bar Styling Container */}
      <div>1</div>
      <div>2</div>
      <div> <MdOutlineDone /> </div>
    </ProgressBarStl>
  )
}

export default SignUp;