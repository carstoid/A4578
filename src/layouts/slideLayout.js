// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { StaticQuery, graphql } from 'gatsby';
// import SlideHeader from '../components/slideHeader';
// import SlideBody from '../components/slideBody';

// class TemplateWrapper extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       slideIndex: 0,
//     };
//   }
//   NEXT = [13, 32, 39];
//   PREV = 37;

//   html = this.props.children.props.data.slide.html;
//   fragments = this.html.split('<hr>');

//   swipeLeft = () => {
//     this.setState({slideIndex: this.state.slideIndex += 1})
//   };

//   swipeRight = () => {
//     this.setState({slideIndex: this.state.slideIndex -= 1})
//   };

//   navigate = ({ keyCode }) => {
//     const now = this.state.slideIndex;
//     const slidesLength = this.fragments.length;

//     if (keyCode === this.PREV && now === 0) {
//       return false;
//     } else if (this.NEXT.indexOf(keyCode) !== -1 && now + 1 === slidesLength) {
//       return false;
//     } else if (this.NEXT.indexOf(keyCode) !== -1) {
//       this.setState({slideIndex: this.state.slideIndex += 1})
//     } else if (keyCode === this.PREV) {
//       this.setState({slideIndex: this.state.slideIndex -= 1})
//     }
//   };

//   componentDidMount() {
//     document.addEventListener('keydown', this.navigate);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.navigate);
//   }

//   render() {
//     const index = this.props.children.props.data.slide.index;
//     const { location, children, site, slidesLength } = this.props;

//     return (
//       <div>
//         <SlideHeader
//           name={site.siteMetadata.name}
//           title={site.siteMetadata.title}
//           date={site.siteMetadata.date}
//           pageNums={[this.state.slideIndex + 1, this.fragments.length]}
//         />
//         <div id="slide" className="w-full">
//           <SlideBody html={this.fragments[this.state.slideIndex]} /> 
//         </div>
//       </div>
//     );
//   }
// }

// TemplateWrapper.propTypes = {
//   children: PropTypes.node,
//   data: PropTypes.object,
// };

// export default props => (
//   <StaticQuery
//     query={graphql`
//       query IndexQuery {
//         site {
//           siteMetadata {
//             name
//             title
//             date
//           }
//         }
//         allSlide {
//           edges {
//             node {
//               id
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <TemplateWrapper
//         site={data.site}
//         slidesLength={data.allSlide.edges.length}
//         {...props}
//       />
//     )}
//   />
// );