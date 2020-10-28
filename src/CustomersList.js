import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import APICall from './util';
import SelectedCustomer from './SelectedCustomer';
import './CustomersList.css';

export default () => {
    const [myCustomers,setMyCustomers] = useState([]);
    const [selectedCustomer,setSelectedCustomer]=useState({});

    const fetchMyCustomers = async () => {
        const res = await APICall();
        setMyCustomers(res.sort((a,b)=>a.business_name > b.business_name ? 1:-1));
    };

    useEffect(()=>{
        fetchMyCustomers();
    },[]);

    useEffect(()=>{
        if(selectedCustomer?.business_name){
            ReactDOM.render(
                <SelectedCustomer customer={selectedCustomer} />,
                document.getElementById('viewCustomer')
              );
        }
    },[selectedCustomer]);

    const renderCustomers = () => {
        const customersList=Object.values(
            myCustomers
            .map((customer,index) => {
            return (
                <div key={index} className="row">
                    
                    <div className="customerColumn">
                        <label className="businessName">
                            {customer.business_name}
                        </label>
                        <label className="address">
                            {customer.city}, {customer.province}
                        </label>
                    </div>
    
                    <div className="viewColumn">
                        <button className="buttonView" onClick={()=>setSelectedCustomer(customer)}>View</button>
                    </div>
    
                    <div className="deleteColumn">
                        <button className="buttonDelete" onClick={()=>deleteCustomer(customer)}>x</button>
                    </div>  
    
                </div>
            );
        }));

        return (
            <div className="roundedPanel">
                <div className="row heading">
                    <h4>My Customers</h4>
                </div>
                {customersList}            
                <div className="footer">
                    <div className="pageButtonsContainer">
                        <button className="pageButton bgWhite">&lt;</button>
                        <button className="pageButton" disabled>1</button>
                        <button className="pageButton bgWhite">&gt;</button>
                    </div>
                </div>
            </div>
        );
    };

    const deleteCustomer = (customerToDelete) => {
        if (window.confirm("Are you sure to delete "+customerToDelete.business_name+"?")) { 
            setMyCustomers(myCustomers.filter(c=>c.business_name!=customerToDelete.business_name));
        }        
    };

    return renderCustomers();  

    
};


