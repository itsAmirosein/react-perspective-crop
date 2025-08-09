# ReactPerspectiveCrop

ReactPerspectiveCrop is a powerful React component that allows users to crop images in any custom shape by positioning draggable bullets, offering precise control over crop regions along with seamless image data retrieval and download capabilities.

## Installation

```bash
npm install react-perspective-crop
```

or

```bash
yarn add react-perspective-crop
```

or

```bash
pnpm add react-perspective-crop
```

## Peer Dependencies

This package requires the following peer dependencies to be installed in your project:

- `react` (version ^18.0.0)
- `react-dom` (version ^18.0.0)
- `styled-components` (version ^6.0.0)

Please ensure these packages are installed in your project to avoid warnings or errors.

## Props

| Prop Name                  | Type                                                                | Description                                                          |
| -------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `imageSrc`                 | `string`                                                            | The source URL of the image to be cropped.                           |
| `bulletsDefaultCordinates` | `Array<{id:number,  x: number, y: number }>`                        | The default positions of the draggable bullets within the container. |
| `onChange`                 | `(coordinates: Array<{ id:number, x: number, y: number }>) => void` | Callback function triggered whenever bullet positions change.        |
| `downloadCroppedImg`       | `(fn: Function) => void`                                            | Function to download the cropped image (accessible via ref).         |
| `width`                    | `number \| string`                                                  | The width of the container in pixels.                                |
| `height`                   | `number \| string`                                                  | The height of the container in pixels.                               |

## Usage

```tsx
import React, { useRef, useState } from "react";
import ReactCropper from "react-cropper-component";

export default function App() {
  const [coordinates, setCoordinates] = useState([
    { id: 1, x: 10, y: 20 },
    { id: 2, x: 40, y: 50 },
    { id: 3, x: 600, y: 50 },
    { id: 4, x: 40, y: 500 },
  ]);

  const downloadFunction = useRef<Function>(null);

  const handleDownload = () => {
    if (downloadFunction.current) {
      downloadFunction.current();
    }
  };

  return (
    <div>
      <ReactCropper
        imageSrc="/example.jpg"
        bulletsDefaultCordinates={coordinates}
        onChange={(coords) => setCoordinates(coords)}
        downloadCroppedImg={(fn: Function) => {
          downloadFunction.current = fn;
        }}
        width={500}
        height={400}
      />
      <button onClick={handleDownload}>Download Cropped Image</button>
    </div>
  );
}
```

## Notes

- The image will always be displayed within the container's dimensions.
- Bullets can always be moved within their container boundaries, unless the default coordinates provided place them outside of the container’s bounds.
- To download the cropped image, you must use a ref:
  - The downloadCroppedImg prop gives you a function through its argument.
  - You should store that function in a ref and call it whenever you want to download the image.
  - If you call this function directly inside the downloadCroppedImg prop callback, the image will be downloaded immediately on component mount.

## License

MIT License
