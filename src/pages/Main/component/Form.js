import React from 'react';
import styled from "styled-components";

const Form = ({input, onChange, onSubmit}) => {

    return (
        <Section>
           <form onSubmit={onSubmit} method="post"> 
                <InputList>
                    <li>별명: <Input placeholder={"별명"} onChange={onChange} name="nickName" value={input.nickName} type="text"/></li>
                    <li> 내용: <Input placeholder={"내용"}  onChange={onChange} name="content" value={input.content} type="text"/></li>
                </InputList>
                <Button type="submit">제출</Button>
            </form>
            
        </Section>
    );
};

const Section = styled.div`
    margin-top: 25px;
    padding: 10px 0;
    text-align: center;
    background-color: #efefef;
`

const InputList = styled.ol`
    display: inline-block;

    li {
        display: inline-block;
        margin-right: 20px;
    }

` 

const Input = styled.input`
  width: 400px;
  margin: 10px ;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #333;
`;

const Button = styled.button`
    display: inline-block;
    width: 100px;
    padding: 11px 10px;
    text-align: center;
    color: #fff;
    background-color: #333;
`

export default Form;