import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ImageViewer } from 'antd-mobile';
import { useState } from 'react';
import { ImgViewer, demoImages, demoImage } from './img-viewer';

export default {
  component: ImgViewer,
  title: 'UiAntd/ImgViewer',
} as ComponentMeta<typeof ImgViewer>;

const Template: ComponentStory<typeof ImgViewer> = (args) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handlerOnClose = () => {
    setIsVisible(false);
  };
  const handlerClickBtn = () => {
    setIsVisible(true);
  };
  return (
    <>
      <Button onClick={handlerClickBtn}>Click me</Button>
      <ImgViewer
        {...args}
        isVisible={isVisible}
        handlerOnClose={handlerOnClose}
      />
    </>
  );
};
const TemplateNoCaching: ComponentStory<typeof ImgViewer> = () => {
  return (
    <Button
      onClick={() => {
        ImageViewer.Multi.show({ images: demoImages });
      }}
    >
      Not remeber
    </Button>
  );
};
const TemplateTimout: ComponentStory<typeof ImgViewer> = () => {
  return (
    <Button
      onClick={() => {
        const handler = ImageViewer.show({ image: demoImage });
        setTimeout(() => handler.close(), 3000);
      }}
    >
      Disappear after 3s
    </Button>
  );
};
export const SinglePrimary = Template.bind({});
SinglePrimary.args = {
  dataInput: demoImage,
};
export const SingleTimeout = TemplateTimout.bind({});
SingleTimeout.args = {
  dataInput: demoImage,
};
export const MultiPrimary = Template.bind({});
MultiPrimary.args = {
  dataInput: demoImages,
  defaultIndex: 0,
};
export const MultiNotRembeberIndex = TemplateNoCaching.bind({});
MultiNotRembeberIndex.args = {
  dataInput: demoImages,
  defaultIndex: 0,
};
