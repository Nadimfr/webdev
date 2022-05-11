import React from 'react'
import '../Notifications/notifications.scss';

const Notifications = () => {
    return (
        <div className="Notifications">
            <h1 className="Title">Notifications</h1>

            <div className="Latest">
                <p className="Subtitle">Today</p>

                <div style={{display:"flex", flexDirection:"column",gap:"20px",marginBottom:"5%"}}>
                    <div className="Not">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p className="Time">2 min ago</p>
                    </div>

                    <div className="Not">
                        <p>Product passes inspection</p>
                        <p>4 hrs ago</p>
                    </div>
                </div>

                <p className="Subtitle">Last Week</p>
            
                <div style={{display:"flex", flexDirection:"column",gap:"20px",marginBottom:"5%"}}>
                    <div className="Not">
                        <p>Product passes inspection</p>
                        <p>3 days ago</p>
                    </div>

                    <div className="Not">
                        <p>Product passes inspection</p>
                        <p>5 days ago</p>
                    </div>
                </div>

                <p className="Subtitle">Last Month</p>

                <div style={{display:"flex", flexDirection:"column",gap:"20px",marginBottom:"5%"}}>
                    <div className="Not">
                        <p>Product passes inspection</p>
                        <p>1 month ago</p>
                    </div>

                    <div className="Not">
                        <p>Product passes inspection</p>
                        <p>1 month ago</p>
                    </div>
                </div>

                <p className="Subtitle">Last Year</p>

                <div style={{display:"flex", flexDirection:"column",gap:"20px",marginBottom:"5%"}}>
                    <div className="Not">
                        <p>Product passes inspection</p>
                        <p>5 months ago</p>
                    </div>

                    <div className="Not">
                        <p>Product passes inspection</p>
                        <p>9 months ago</p>
                    </div>
                </div>

            </div>

            <p onClick="" className="Clear">Clear all</p>
            
        </div>
    )
}

export default Notifications
