import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import APICall from './util';

export default () => {
    const [myCustomers,setMyCustomers] = useState([]);

    const fetchMyCustomers = async () => {
        const res = await APICall();
        setMyCustomers(res);
    };

    useEffect(()=>{
        fetchMyCustomers();
    },[]);

    console.log(myCustomers);

    return (
        <h1>My Customers</h1>
    );
};


