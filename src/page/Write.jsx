import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Write.css';
class Write extends Component {
  /**
   * @return {Component} Component
   */
  render() {
    return (
      <div className='formdiv'>
        <div>
          <h3 className='h33'>글쓰기</h3>
        </div>
        <Form>
          <Form.Group className='mb-4' controlId='exampleForm.ControlInput1'>
            <Form.Label>제목</Form.Label>
            <Form.Control className='title' placeholder='제목을 입력하시오.' />
          </Form.Group>
          <Form.Group className='mb-4' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>내용</Form.Label>
            <Form.Control className='textarea' placeholder='내용을 입력하시오.' />
          </Form.Group>
          <Form.Group className='mb-4' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>작성일</Form.Label>
            <Form.Control className='day' placeholder='날짜를 입력하시오.' />
          </Form.Group>
        </Form>
        <Button variant='info'>작성완료</Button>
        <Button variant='secondary'>취소</Button>
      </div>
    );
  }
}

export default Write;
