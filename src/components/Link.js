import Link from 'gatsby-link';

import generateBase from '../utils/generate-base';
import Text from './Text';

export default Text.withComponent(generateBase(Link));
