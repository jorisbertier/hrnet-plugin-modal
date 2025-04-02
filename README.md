## hrnet-plugin-modal

React plugin to easily display a Modal with text

## Install Plugin

You can install this plugin via npm

```sh
npm install hrnet-plugin-modal
```

## Modal Component

# Properties

| Prop          | Type    | Description                            |
|---------------|---------|----------------------------------------|
| `text`        | String  | Display the title into the modal       |
| `closeModal`  | Boolean | Callback to close the modal component  |

## Utilisation

```jsx
import { Modal } from "hrnet-plugin-modal";

function App() {

  const [ modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Modal text={'This is a text dialog'} closeModal={() => setModalIsOpen(true)}/>
    </div>
  );
}

export default App;#   h r n e t - p l u g i n - m o d a l  
 