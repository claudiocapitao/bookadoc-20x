import react from 'react';
import * as GS from '../../Styles/GeneralStyles.styles';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';

const LandingPage = () => {
    const text = "Landing Page";

    return (
      <GS.Section>
        <GS.Container>
          <Text>
            {text}
          </Text>
          <Button onClick={() => console.log('Test')}>Get Started</Button>
        </GS.Container>
      </GS.Section>
    )
}

export default LandingPage;