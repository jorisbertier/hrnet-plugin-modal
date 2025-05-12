# hrnet-plugin-modal

React plugin to easily display a Modal with text

# Install Plugin

You can install this plugin via npm

```sh
npm install hrnet-plugin-modal
```
## Prerequisite

- React 17.x ou highter
- Node.js ≥ 18.x
- npm ≥ 7.x

# Modal Component

## Properties

| Prop          | Type    | Description                                |
|---------------|---------|--------------------------------------------|
| `text`        | String  | Display the title into the modal           |
| `onClose`     | Function | Callback executed when the modal is closed |
| `isOpen`      | Boolean | Control display of the modal               |

# Use Modal

```jsx
import { Modal } from "hrnet-plugin-modal";

function App() {

   const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Modal isOpen={isOpen} text={'This is a text dialog'} closeModal={() => setIsOpen(false)}/>
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

## Contribute

1. Fork repository
2. `npm install`  
3. `npm run dev`  
4. Create a branch`feature/nom-fonctionnalité`  
5. `npm test` to run the test
6. Open a Pull Request  

# License

This component is distributed under MIT license.