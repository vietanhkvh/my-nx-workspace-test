// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import {UiSlider} from '@my-nx-workspace/ui-slider'

export function App() {
  return <>
  <NxWelcome title="first-app" />
  <UiSlider/>
  </>;
}

export default App;
