import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

// cách viết này e muốn dùng function component cho nó đơn giản và gọn gàng thôi.
// nếu a chưa quen em có thể viết class component phía dưới cho a dễ theo dõi
// với cách viết function component thì mỗi params truyền vào trong component là 1 props nha anh

const HeaderNav = ({ match, history, location }) => {
console.log("TCL: HeaderNav -> { match, history, location }", { match, history, location })
  
  return (
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About Page</Link>
      </li>
    </ul>
  )
}

// class HeaderNav extends PureComponent {
  
//   render() {
//     const { match, history, location } = this.props;
//     console.log("TCL: HeaderNav -> { match, history, location }", { match, history, location })
//     return (
//       <ul>
//         <li>
//           <Link to="/home">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About Page</Link>
//         </li>
//       </ul>
//     );
//   }
// }


export default withRouter(HeaderNav);