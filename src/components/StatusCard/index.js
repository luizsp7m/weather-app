import React from 'react';

import { Container } from './styles';

function StatusCard() {
  return (
    <Container>
      <div className="title">Humidity</div>

      <div className="number">
        <span>84</span> %
      </div>
    </Container>
  );
}

export default StatusCard;