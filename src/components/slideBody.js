import { Link } from "gatsby";
import React from "react";
import { Router, navigate } from "@reach/router";

// import { DOMParser } from 'xmldom';

// export default function slideBody({ html }) {
//   return (
//     <div className='w-full h-full grid grid-cols-2 grid-rows-1 grid-flow-row-dense gap-8 m-4 border-solid border-4 border-gray-600'>
//       <div
//         className='flex flex-col justify-start items-start pt-24' 
//         dangerouslySetInnerHTML={{ __html: html }}
//       />
//     </div>
//   )
// }

class SlideDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      showFrame: false,
      currentSlide: 1
    };
    // this.handleClick = this.handleClick.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // advance() {
  //   navigate(`#${this.state.currentSlide}`)  
  //   this.setState(state => ({
  //     currentSlide: this.state.currentSlide + 1
  //   }));  
  // }

  // revert() {
  //   navigate(`#${this.state.currentSlide}`)  
  //   this.setState(state => ({
  //     currentSlide: this.state.currentSlide - 1
  //   }));  
  // }

  // handleClick() {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // }

  // handleKeyPress(e) {
  //   if (e.key==='f' && e.type==='keydown') {
  //     this.setState(state => ({
  //       showFrame: true
  //     }));
  //   } else if (e.key==='f' && e.type==='keyup') {
  //     this.setState(state => ({
  //       showFrame: false
  //     }));
  //   } else if (e.key==='ArrowRight' && e.type==='keyup') {
  //     this.advance();
  //   } else if (e.key==='ArrowLeft' && e.type==='keyup') {
  //     this.revert();
  //   }
  // }

  componentDidMount(){
    // document.addEventListener("keydown", this.handleKeyPress, false);
    // document.addEventListener("keyup", this.handleKeyPress, false);
  }

  // componentWillUnmount(){
  //   document.removeEventListener("keydown", this.handleKeyPress, false);
  //   document.removeEventListener("keyup", this.handleKeyPress, false);
  // }

  render() {
    const frameClasses = this.state.showFrame ? 'border-2 border-solid border-red-400' : '';

    return (
      <div className={frameClasses}>
        <button onClick={this.handleClick}>CLICK ME</button>
        <div className='h-64 bg-red-300' id='1'>CONTENT</div>
        <div className='h-64 bg-green-300' id='2'>CONTENT</div>
        <div className='h-64 bg-blue-300' id='3'>CONTENT</div>
      </div>
    )
  }
}

export default SlideDeck