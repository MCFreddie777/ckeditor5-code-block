CKEditor 5 Code-Block Feature
========================================

[![npm version](https://badge.fury.io/js/%40ckeditor%2Fckeditor5-block-quote.svg)](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote)

Having a trouble implement code blocks into CKEditor 5? So did I.

This package implements code block support for CKEditor 5.
I took the built-in blockquote plugin, and edited it - the result is a new feature - the code-block option in the toolbar, which saves the paragraph into ```<code>``` element.

See https://github.com/ckeditor/ckeditor5/issues/436
  
## Issues

Feel free to submit issues and enhancement requests.

## Usage

In ckeditor5-build-classic project:

```
npm install https://github.com/MCFreddie777/ckeditor5-code-block
```

Update src/ckeditor.js with:

```js
import CodeBlock from '@mcfreddie777/code-block/src/codeblock';

ClassicEditor.builtinPlugins = [
  // ...
  CodeBlock,
  // ...
];

ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      // ...
      'codeBlock',
      // ...
    ]
  },
};
```

Then

```
npm run build
```



