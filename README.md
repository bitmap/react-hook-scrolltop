# react-hook-scrolltop

[React Hook](https://reactjs.org/docs/hooks-intro.html) for detecting if you're scrolled to the top of the window.

## Install

```
npm install react-hook-scrolltop
```

## Usage

Returns `true` when at the top of the page, `false` when the user scrolls away.

```js
import React, { useState, useRef } from 'react'
import useScrollTop from 'react-hook-scrolltop'

const Header = () => {
  const isTopOfPage = useScrollTop();

  return (
    <header style={{ backgroundColor: isTopOfPage ? 'transparent' : 'white' }}>
      {...}
    </header>
  );
};
```

## License
[MIT](https://github.com/bitmap/react-hook-scrolltop/blob/master/LICENSE)
