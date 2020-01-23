import React, { Fragment } from 'react';
import styled from 'styled-components'

import utils from './utils'
import Main from './components/Main'

const LeftPart = styled.div`
clip-path: circle(600px at 100% 0);
background-color: ${utils.themeColor};

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
    </LeftPart>
    <Main>
    </Main>
    <RightPart>
    </RightPart>
    </Fragment>
  );
}

export default App;
