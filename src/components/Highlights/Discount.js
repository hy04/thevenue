import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {
    state={
        discountStart:0,
        discountEnd:30
    }
    ///animation for showing the change of the numbers.
    porcentage=()=>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart:this.state.discountStart+1
            })
        }
    }
    ///update and re-render the page
    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={()=> this.porcentage()}//call back function after fade animation
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 28th December</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            </p>
                            <MyButton 
                                text="Purchase tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="http://google.com"
                            />
                        </div>
                    </Slide>    
                </div>
            </div>
        );
    }
}

export default Discount;