import Breakpoints from '@media-ui/core/src/components/Breakpoints';
import Icon from '@media-ui/core/src/components/Icon';
import LikeIcon from '@paradigm/icons/src/mailru/actions/like.svg';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from './Button';

const stories = storiesOf('Media app|Button', module).addParameters({
  readme: {
    sidebar: require('./README.md'),
  },
});

stories.add('with a button', () => (
  <React.Fragment>
    <Breakpoints hidden={['touch']}>
      <Button onClick={action('clicked')}>
        <React.Fragment>
          <Icon icon={LikeIcon} />
          Submit
        </React.Fragment>
      </Button>
    </Breakpoints>
  </React.Fragment>
));
