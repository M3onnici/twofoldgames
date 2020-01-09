import React from 'react';
import { Scroll, Mouse, Scroller } from './scrollDown.css';

class ScrollDown extends React.Component {
  render() {
    return (
      <Scroll>
        <Mouse>
          <Scroller></Scroller>
        </Mouse>
      </Scroll>
    );
  }
}
export default ScrollDown;
