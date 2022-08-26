import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiPopupFixedContainer } from './ui-popup-fixed-container';

export default {
  component: UiPopupFixedContainer,
  title: 'UiPopupFixedContainer',
} as ComponentMeta<typeof UiPopupFixedContainer>;

const Template: ComponentStory<typeof UiPopupFixedContainer> = (args) => (
  <UiPopupFixedContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  content: {
    header: <h1>Welcome Gift</h1>,
    main: (
      <>
        <div className="styles_message__1Pdj_">
          Hãy nhập email, số điện thoại của bạn để nhận được mã giảm 20% cho đơn
          hàng đầu tiên.
        </div>
        <div className="styles_inputForm__2Se1f">
          <div className="input-field" data-radium="true">
            <div data-radium="true">
              <input
                placeholder="Nhập email hoặc số điện thoại..."
                type="text"
                name="email"
                data-radium="true"
                value=""
              />
            </div>
            <div data-radium="true"></div>
          </div>
          <div className="style_submitButton__9P48u style_isDisabled__3sXlK">
            {' '}
            <div className="style_content__2g_Wo">
              <div>Gửi</div>
            </div>
            <div className="style_overlay__2Cbxe"></div>{' '}
          </div>
        </div>
      </>
    ),
  },
};
