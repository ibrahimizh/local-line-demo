import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import APICall from './util';

import './CustomersList.css';

export default () => {
    const [myCustomers,setMyCustomers] = useState([]);

    const fetchMyCustomers = async () => {
        const res = await APICall();
        setMyCustomers(res);
    };

    useEffect(()=>{
        fetchMyCustomers();
    },[]);

    console.log("myCustomers");
    console.log(myCustomers);

    const sortedCustomers = myCustomers.sort((a,b)=>a.business_name > b.business_name ? 1:-1);

    console.log("sortedCustomers");
    console.log(sortedCustomers);

    const renderedCustomers=Object.values(
        sortedCustomers
        .map((customer,index) => {
        return (
            <div key={index} className="row">
                <label className="businessName">
                    {customer.business_name}
                </label>
                <label className="address">
                    {customer.city}, {customer.province}
                </label>
            </div>
        );
    }));

    return (
        <div className="roundedPanel">
            <div className="row heading">
                <h4>My Customers</h4>
            </div>
            {renderedCustomers}            
            <div className="footer">&nbsp;</div>
        </div>
    );
};


