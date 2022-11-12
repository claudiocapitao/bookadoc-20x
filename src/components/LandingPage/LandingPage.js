import react from 'react';
import * as GS from '../Styles/GeneralStyles.styles';

const LandingPage = () => {
    const text = "Landing Page";

    return (
      <GS.Section>
        <GS.Container>
          {text}
        </GS.Container>
      </GS.Section>
    )
}

export default LandingPage;