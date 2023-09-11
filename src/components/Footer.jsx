import React from 'react';


import {BsFacebook, BsTwitter,BsGoogle,BsGithub,BsInstagram,BsLinkedin} from "react-icons/bs"
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';


export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://ko-kr.facebook.com/' role='button'>
            <BsFacebook className="icon" size="25"/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/?lang=ko' role='button'>
            <BsTwitter className="icon" size="25"/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.google.co.kr/?hl=ko' role='button'>
          <BsGoogle className="icon" size="25"/>
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/' role='button'>
          <BsInstagram className="icon" size="25"/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://kr.linkedin.com/' role='button'>
          <BsLinkedin className="icon" size="25"/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/' role='button'>
          <BsGithub className="icon" size="25"/>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='./'>
          onepick.com
        </a>
      </div>
    </MDBFooter>
  );
}