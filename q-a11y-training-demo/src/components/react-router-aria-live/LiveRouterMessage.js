import React from 'react';
import LiveMessage from '../react-aria-live/LiveMessage';
import LiveRouterHOC from './LiveRouterHOC';

const LiveRouterMessage = ({ message }) =>
  <LiveMessage message={message} aria-live="polite" />;

export default LiveRouterHOC(LiveRouterMessage);
