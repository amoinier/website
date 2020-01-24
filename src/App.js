import React, { Fragment } from 'react';
import styled from 'styled-components'

import utils from './utils'
import Main from './components/Main'

const LeftPart = styled.div`
display: grid;
grid-template-rows: 600px auto;

@media screen and ${utils.deviceScreen.laptopL} {
  display: none;
}
`

const RightPart = styled.div`
  @media screen and ${utils.deviceScreen.laptopL} {
    display: none;
  }
`

function App() {
  return (
    <Fragment>
      <LeftPart>
        <div style={{clipPath: 'circle(600px at 100% 0)', backgroundColor: utils.themeColor}}></div>
      </LeftPart>
      <Main>
      </Main>
      <RightPart>
      </RightPart>
    </Fragment>
  );
}

export default App;
