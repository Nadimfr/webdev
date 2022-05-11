import React from 'react'
import photo from '../../assests/Images/photo.png';
import vision from '../../assests/icons/vision.svg';
import mission from '../../assests/icons/mission.svg';
import './aboutus.scss';

const Aboutus = () => {
    return (
        <div className="About_us">
            <div className="First_row">
                <div className="Left_column">
                    <div className="Title">About Us</div>
                    <div className="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo eget arcu faucibus varius tincidunt id nunc. Aliquam pretium lorem id elementum sodales. Quisque varius lectus id tempus ullamcorper. Curabitur in eros sodales metus convallis molestie.</div>
                </div>
                <img className="Image" src={photo} alt="photoo"/>
            </div>
            <div className="Second_row">
                <div className="Left_column">
                    <div className="Title_wrap">
                        <img src={vision}  alt="vision"/>
                        <div className="Title">Our Vision</div>
                    </div>
                    <div className="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo eget arcu faucibus varius tincidunt id nunc. Aliquam pretium lorem id elementum sodales. Quisque varius lectus id tempus ullamcorper. </div>
                </div>

                <div className="Right_column">
                    <div className="Title_wrap">
                        <img src={mission}  alt="mission"/>
                        <div className="Title">Our Mission</div>
                    </div>
                    <div className="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo eget arcu faucibus varius tincidunt id nunc. Aliquam pretium lorem id elementum sodales. Quisque varius lectus id tempus ullamcorper. </div>
                </div>
            </div>
            
        </div>
    )
}

export default Aboutus
