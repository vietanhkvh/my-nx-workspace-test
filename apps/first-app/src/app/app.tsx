// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import UiSlider from 'libs/ui-slider/src/lib/ui-slider';

export function App() {
  return (
    <>
      <UiSlider
        arrContent={[
          {
            id: 1,
            content: () => (
              <img
                src="https://cdn.shopify.com/s/files/1/0592/3369/7845/files/Halio_web.jpg?v=1660533507&width=1100"
                alt=""
              />
            ),
          },
          {
            id: 2,
            content: () => (
              <img
                src="https://cdn.shopify.com/s/files/1/0592/3369/7845/files/ONE_IN_A_MELON_BANNER.png?v=1660299007&width=1100"
                alt=""
              />
            ),
          },
          {
            id: 3,
            content: () => (
              <img
                src="https://cdn.shopify.com/s/files/1/0592/3369/7845/files/ORANGE_BANNER.jpg?v=1660529073&width=1100"
                alt=""
              />
            ),
          },
        ]}
        timeChange={2000}
        type={'dot'}
      />
    </>
  );
}

export default App;
