# setup micro-frontend with turborepo

npx create-turbo@latest mfe-architecutre

# to install all dependencies package
pnpm install 

# to run the app

pnpm dev

# create a new movie react app

pnpx create-react-app movies --template typescript

# change the start to dev in the movie app
    "dev": "react-scripts start",

# add tsconfig to dependencies section with reference the tsconfig in workspace 
 "tsconfig": "workspace:*",

 # remove the node_modules in the movie app folder
 rm -rf node_modules

 # make the linkage to the workspace

 pnpm i

 # to fix the "TS2339: Property 'toBeInTheDocument' does not exist on type 'JestMatchers<HTMLElement>'." errors.

pnpm i @types/testing-library__jest-dom -D


# add ui package to the moview app

"ui": "workspace.*"


# to fix the compile errors update package.json configuration by adding the following 
Compiled with problems:X

ERROR in ../../packages/ui/Button.tsx 5:9

Module parse failed: Unexpected token (5:9)
File was processed with these loaders:
 * ../../node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.5.7_cduugdvdzx7dfkit7irvewwovq/node_modules/@pmmmwh/react-refresh-webpack-plugin/loader/index.js
 * ../../node_modules/.pnpm/source-map-loader@3.0.1_webpack@5.72.1/node_modules/source-map-loader/dist/cjs.js
You may need an additional loader to handle the result of these loaders.
| import * as React from "react";
| export const Button = () => {
>   return <button>Boop</button>;
| };
| 

```json
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "dev": "tsc --watch --outDir dist",
    "build": "tsc --outDir dist",
    "lint": "eslint *.ts*"
  },

```

# add @mantine/core and @mantine/hooks to the ui folder
cd packages/ui
pnpm install @mantine/hooks @mantine/core

# add @mantine/core and @mantine/hooks to the movie app
cd apps/movie
pnpm install @mantine/hooks @mantine/core

# add Mantine AppShell to ui package

``` jsx
import {AppShell as MantineAppShell} from "@mantine/core";

export const AppShell: React.FunctionComponent =() => (
    <MantineAppShell>
        <div>Hello World</div>
    </MantineAppShell>
)
```

# update @types/react @types/react-dom from 17 to version 18 in the package.json in ui folder

    "@types/react": "^18.0.9",
    "@types/react-dom": "^18.0.5",
    "react": "^18.1.0",


# set up Mantine Color Theme

```jsx harmony
<MantineProvider
    withGlobalStyles 
    withNormalizeCSS 
    theme={{colorScheme}}
  >
    <MantineAppShell padding="md">
      <Header
        height={60}
        p="xs"
        sx={{ display: 'flex' }}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[8],
          },
        })}
      >
        <Title>{title}</title>
      </Header>
      <div>Hello World</div>
    </MantineAppShell>
  </MantineProvider>

```

# add react-router to ui package

pnpm i react-router-dom

# copy ui package to setup the store project 
cd packages
cp -r ui store


# remove all devDependencies package and then add zustand for state management

pnpm add zustand











