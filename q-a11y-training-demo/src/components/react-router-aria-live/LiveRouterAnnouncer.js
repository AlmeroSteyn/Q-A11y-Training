import React from 'react';
import PoliteAnnouncer from '../react-aria-live/PoliteAnnouncer';
import LiveRouterHOC from './LiveRouterHOC';

const LiveRouterAnnouncer = ({ message }) =>
  <PoliteAnnouncer message={message} />;

export default LiveRouterHOC(LiveRouterAnnouncer);
