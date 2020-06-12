import React from 'react';
import styled from "styled-components";

const List = (props) => {
    return (
        <ListItem>
            <li>
                <span>ID</span>
                <span>별명</span>
                <ItemTitle>내용</ItemTitle>
                <em>생성일</em>
                <span>버전</span>                
            </li>
            {props.list.map((item,idx) => (
            <li key={idx}>
                <span>{item._id}</span>
                <span>{item.nickName}</span>
                <ItemContent>{item.content}</ItemContent>
                <em>{item.createdAt}</em>
                <span>{item.__v}</span>
            </li>))}
    </ListItem>
    );
};

const ListItem = styled.ul`

    margin-top: 30px;
    border-top: 1px solid #ccc;

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-bottom: 1px solid #ccc;
    }

    span, p, em {
        width: 25%;
    }
 
    span, em {
        display: block;
        text-align: center;
        font-style: normal;
    }

`

const ItemContent = styled.p`
    text-align: left;
`

const ItemTitle = styled.p`
    text-align: center;
`
export default List;