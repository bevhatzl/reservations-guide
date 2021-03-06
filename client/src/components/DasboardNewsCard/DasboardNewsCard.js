import React from "react";
import "./style.css"

function DashboardNewsCard(props) {
  
return (  
    <div className="dashboardCard">
        {props.bulletins.map(item => (    
        <div className="dashboardCard card cardBackground" id="card-bulletin" key={item._id}>
            <div className="card-body">        
                <h4>Added By: {item.hotel_name}</h4><span>At: {new Date(item.entry_date).toLocaleDateString("en-AU")}</span>
                <h3 className="card-subtitle">{item.bulletin_title}</h3>
                <br />
                <p id="bulletin-text">{item.message}</p>
            </div>
        </div>
        ))}
    </div>
)

}

export default DashboardNewsCard;



