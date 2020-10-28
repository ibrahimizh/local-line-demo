import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import "./SelectedCustomer.css";

function SelectedCustomer({customer}) {
    const [myCustomer,setMyCustomer] = useState(customer);
    
    const reset = () => {
        setMyCustomer({});
        ReactDOM.render(
            <></>,
            document.getElementById('viewCustomer')
          );
    };

    if(myCustomer?.business_name){
        return (
        <div className="modal">
            <div className="modalContent">
                <div className="header">
                    <div className="customerNameColumn">
                        <h3>{myCustomer.business_name}</h3>
                    </div>
                    <div className="closeColumn">
                        <button className="closeButton" onClick={()=>reset()}>X</button>
                    </div>
                </div>
                <div className="row1">
                    <div className="splitColumn leftColumn">
                        <div className="row1">
                            <label className="caption">Location</label>
                        </div>
                        <div className="row1">
                            <label className="value">{myCustomer.city}, {myCustomer.province}</label>
                        </div>

                        <div className="row1">
                            <label className="caption">Product Catalog</label>
                        </div>
                        <div className="row1">
                            <select className="input">
                                {/* <option value="-1" disabled selected>Select a catalog</option> */}
                            </select>
                        </div>

                        <div className="row1">
                            <button className="buttonLarge bgGreen">Send Catalog</button>
                        </div>

                        <div className="row1">
                            <label className="caption">Average Order</label>
                        </div>
                        <div className="row1">
                            <label className="value">${myCustomer.customer_info?.buyer_average_order}</label>
                        </div>

                        <div className="row1">
                            <label className="caption">Sales this month</label>
                        </div>
                        <div className="row1">
                            <label className="value">${myCustomer.customer_info?.buyer_average_order}</label>
                        </div>
                    </div>
                    <div className="splitColumn rightColumn">
                        <div className="row1">
                            <label className="caption">Phone</label>
                        </div>
                        <div className="row1">
                            <label className="value">{myCustomer.phone}</label>
                        </div>

                        <div className="row1">
                            <label className="caption">Last Delivery</label>
                        </div>
                        <div className="row1">  
                            {myCustomer.customer_info?.last_delivery_date?                          
                            <label className="value">
                                {moment(myCustomer.customer_info?.last_delivery_date).format('MMMM Do YYYY')}                            
                            </label>:<span></span>
                            }
                        </div>

                        <div className="row1">
                            <button className="buttonLarge bgPurple">Add Note</button>
                        </div>

                        <div className="row1">
                            <label className="caption">Orders This Month</label>
                        </div>
                        <div className="row1">
                            <label className="value">{myCustomer.customer_info?.orders_this_month}</label>
                        </div>

                        <div className="row1">
                            <label className="caption">Total Sales</label>
                        </div>
                        <div className="row1">
                            <label className="value">${myCustomer.customer_info?.buyer_average_order}</label>
                        </div>
                    </div>
                </div>
                <div className="line"><span>&nbsp;</span></div>
            </div>
        </div>
        );
    }
    
    return (<></>);
    
  }
  
  export default SelectedCustomer;