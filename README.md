# hrnet-plugin-modal

React plugin to easily display a Modal with text

# Install Plugin

You can install this plugin via npm

```sh
npm install hrnet-plugin-modal
```

# Modal Component

## Properties

| Prop          | Type    | Description                            |
|---------------|---------|----------------------------------------|
| `text`        | String  | Display the title into the modal       |
| `closeModal`  | Boolean | Callback to close the modal component  |

# Use Modal

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

export default App;
```

# Version

To run this project, we recommend using Node.js version 18.x.x or higher.

You can check your current Node.js version by running:

```sh
node -v
```

# License

This component is distributed under MIT license.