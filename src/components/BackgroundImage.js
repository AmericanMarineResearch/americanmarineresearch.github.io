// BackgroundImage.js
// Yuan Wang

import React, {Component } from 'react';
import { Black } from '../global/Colors.js'

const BACKGROUND_IMAGE_URL = 'http://oceana.org/sites/default/files/shutterstock_273670535.jpg'

export default class BackgroundImage extends Component {

  render() {
  	return (
      <div 
        style={{
          display: 'flex',
          flex: 1,
          backgroundImage: `url('`+ this.props.background + `')`,

        }}
        class={this.props.pan} >
        
        <div
          style={{...{
            display: 'flex',
            flex: 1,
            backgroundColor: this.props.backgroundColor
          }, ...this.props.contentStyle}}>
          {this.props.children}
        </div>      
      </div>
            
      );
  }
}

BackgroundImage.defaultProps = {
  background: BACKGROUND_IMAGE_URL, 
  backgroundColor: Black(0.5),
  pan: 'pan6',
  contentStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
};