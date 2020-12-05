import { Component } from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import { appData } from './appData';

class Footer extends Component {
  render() {
    return (
      <footer css={tw`py-4 text-blue-600 text-center`}>
        <p>{
          this.props.footerText.split('\n').map( line => (
            <span key={line}>
              {line}<br/>
            </span>
          )
        )}</p>
      </footer>
    );
  }
}

export default Footer;
