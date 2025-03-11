# react-bounded-draggable-modal

A draggable modal component with boundary support for React and Next.js.

## Installation

```bash
npm install react-bounded-draggable-modal
```

or

```bash
yarn add react-bounded-draggable-modal
```

## Usage

```tsx
import React, { useState } from "react";
import Modal from "react-bounded-draggable-modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onOutsideClick={handleOutsideClick}
        header={<div>Modal Header</div>}
        classNames={{
          modal: "custom-modal",
          header: "custom-header",
          body: "custom-body",
        }}
      >
        <div>Modal Content</div>
      </Modal>
    </div>
  );
};

export default App;
```

## Props

### ModalProps

| Name            | Type                | Description                                                                 |
|-----------------|---------------------|-----------------------------------------------------------------------------|
| `isOpen`        | `boolean`           | Whether the modal is open or not.                                           |
| `onOutsideClick`| `() => void`        | Function to handle clicks outside the modal.                                |
| `header`        | `React.ReactNode`   | Content to be displayed in the modal header.                                |
| `children`      | `React.ReactNode`   | Content to be displayed in the modal body.                                  |
| `classNames`    | `ClassNames`        | Optional class names for modal, header, and body.                           |

### ClassNames

| Name     | Type     | Description                          |
|----------|----------|--------------------------------------|
| `modal`  | `string` | Class name for the modal container.  |
| `header` | `string` | Class name for the modal header.     |
| `body`   | `string` | Class name for the modal body.       |

## License

MIT
