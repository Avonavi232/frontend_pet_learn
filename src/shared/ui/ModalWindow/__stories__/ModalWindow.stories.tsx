import { ComponentMeta, ComponentStory } from '@storybook/react';

import { useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ModalWindow } from '../ModalWindow';

export default {
  title: 'shared/ModalWindow',
  component: ModalWindow,
} as ComponentMeta<typeof ModalWindow>;

const Template: ComponentStory<typeof ModalWindow> = (props) => {
  const [isOpened, setOpened] = useState(props.open);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть модалку</Button>
      <ModalWindow open={isOpened} onClose={() => setOpened(false)}>
        {props.children}
      </ModalWindow>
    </>
  );
};

export const LightPrimary = Template.bind({});
LightPrimary.args = {
  open: false,
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias dolorum eligendi fuga fugit harum
      praesentium quis rem similique? Animi architecto ea eius incidunt laudantium natus nisi quidem quos voluptatem.
    </>
  ),
};

export const LightOpened = Template.bind({});
LightOpened.args = {
  open: true,
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias dolorum eligendi fuga fugit harum
      praesentium quis rem similique? Animi architecto ea eius incidunt laudantium natus nisi quidem quos voluptatem.
    </>
  ),
};
