import React, { useState, useEffect } from 'react';
import { connect } from "react-redux"
import axios from "axios";
import { bindActionCreators } from "redux";
import  * as dataActions  from "../../redux/actions/Index"
import List from "./component/List";
import Form from "./component/Form";

const X_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWUyMjJjNmFmOTU2MjAwMTFiNmI5YmEiLCJpYXQiOjE1OTE4NzgzNDIsImV4cCI6MTU5MTk2NDc0Mn0.pdSl7F3P9OIiTjAVynb_wfgyw9anNxQ7RiaJcIONQ6I';

const requestInstance = axios.create({
    headers:{
        "x-access-token": X_ACCESS_TOKEN,
        "Content-Type":"application/json"
    },
    baseURL: 'http://dauth.daios.net/v1',
    timeout: 3000,
    timeoutErrorMessage: '다시 시도 바랍니다.',
});

const Main = ({dataActions, input}) => {

    const [getPostData, setGetPostData] = useState([]);

    useEffect(() => {
        async function responseDelay () {
            await showPost();
        }
        responseDelay();
    },[])

    const InputChange = (e) => {
        const target = e.target;

        dataActions.addInputData( target.name, target.value );
    }

    const creatPost = async (e) => {

        e.preventDefault();
        
       try {
            
            if (Object.values(input).filter(v => v).length !== 2) {
                alert('내용을 입력 바랍니다.');
                return;
            }

           const response = await requestInstance.post("/boards", input);
            
            dataActions.initializeInputData();

            let createRequestResult = await response.data;

            setGetPostData(getPostData.concat(createRequestResult.data));
            
            return createRequestResult;

        } catch(error) {
            console.log('Error', error.message);            
        }
        
    }
    
    const showPost = async () => {

        try {
            const response = await requestInstance.get("/boards");
            return setGetPostData(await response.data.data);
        } catch (error) {
            console.error('Error', error.message);
        }
    }
    
    return (
        <div>
            <Form input={input} onSubmit={creatPost} onChange={InputChange} />
            <List list={getPostData} />
        </div>
    );
};

const mapStateToProps = ({InputData}) => {
    return {
        input: InputData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dataActions: bindActionCreators(dataActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);