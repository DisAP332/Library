# library

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

--tailwind watchmode

bunx tailwindcss -i ./style.css -o ./dist/output.css --watch

# Notes

Make sure you always add ["dom"] to the tsconfig.json file in the "lib" array. This is because the DOM is not part of the standard library, and therefore must be added manually.

You will need to have a ? before you append child. This is because the element may not exist, and therefore you need to check if it exists before you append it.

Make sure to say that the elements your grabbing are inputs by saying HTMLInputElement. This is because the value property is not part of the standard HTML element, and therefore you need to specify that it is an input element.

# Features

- uses hashmap to store data
- deletion and addition of data in Library
- uses hashmap in order to prevent duplicate books
- added read or not method to change read status
