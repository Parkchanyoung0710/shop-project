import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import "./Board.css";
class Board extends Component {
    /**
     * @return {Component} Component
     */
    
    render() {
        
        return (
            <div className="bd">
                <div className="h22">

                <h2>게시판</h2>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>1</td>
                            <td>게시글1</td>
                            <td>art</td>
                            <td>23-07-05</td>
                        </tr>
                        <tr>
                            
                            <td>2</td>
                            <td>게시글2</td>
                            <td>stJay</td>
                            <td>23-07-15</td>
                        </tr>
                        <tr>
                            
                            <td>3</td>
                            <td>게시글3</td>
                            <td>abc123</td>
                            <td>23-07-16</td>
                        </tr>
                        <tr>
                            
                            <td>4</td>
                            <td>게시글4</td>
                            <td>Tea</td>
                            <td>23-07-22</td>
                        </tr>
                        <tr>
                            
                            <td>5</td>
                            <td>게시글5</td>
                            <td>Tellla</td>
                            <td>23-08-16</td>
                        </tr>
                        <tr>
                            
                            <td>6</td>
                            <td>게시글6</td>
                            <td>seaa</td>
                            <td>23-08-02</td>
                        </tr>
                        <tr>
                            
                            <td>7</td>
                            <td>게시글7</td>
                            <td>abc123</td>
                            <td>23-08-23</td>
                        </tr>
                        <tr>
                            
                            <td>8</td>
                            <td>게시글8</td>
                            <td>aaa</td>
                            <td>23-08-28</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>게시글9</td>
                            <td>aaa</td>
                            <td>23-08-29</td>
                        </tr>
                        <tr>
                            
                            <td>10</td>
                            <td>게시글10</td>
                            <td>abc123</td>
                            <td>23-09-01</td>
                        </tr>
                        
                    </tbody>
                </Table>
               

                <Button variant="info" >글쓰기</Button>
                <Button variant="info">수정하기</Button>
                <Button variant="danger">삭제하기</Button>
               
            </div>
            
        );
    }
}



export default Board;