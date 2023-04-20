# Components Guide (Read the [Project Structure](./project-structure.md) doc first)

## Components theory

In this project, there are 3 types of components that are used every component satisfies a necessity and fits a purpose, this theory makes the code more maintainable and keeps the codebase better structured. As you already know, a *component* is a piece of JavaScript/TypeScript code that we can reuse as part of any UI, but with the theory explained here, the term *component* will have a more extended meaning. Now we will get through every one of component types with their examples:

#### 1 - Components: 

These are the lowest type in the list. Components are characterized for being not able to do lot of things standalone and need to be used with other components to achieve a goal, this type of component is usually a piece of UI that can be reused across the application. A component could use multiple components to build itself up.

This type of components must always be place within `src/components` folder or a feature component folder (`[feature-name]/components`), if the component is used only in that feature or it has a particular behaviour that would belong only to that feature but could be exported to use anywhere in the project.

e.g: Header, Footer, Button, Input, Modal, etc.   
e.g in code: [Form Control component](../src/components/form-control)

**NOTE**: A component must never implement any API Calls (Communication with a server), if you want to implement API Calls, then the next type of components is a good fit for this.

#### 2 - Modules: 

There are the middle type in the list. Modules are elements that can be implemented standalone and/or carry logic within its declaration; are smart elements that could run certain tasks and/or be a bigger part of UI. since modules are considered smart elements, can implement any type of API Call (Communication with a server).  

These type of components must be placed within a feature component folder, inside modules folder (`[feature-name]/modules`). 

e.g: Search input, Filterable lists, Hero section (any UI Section), Items feed, etc. 
e.g in code: [Career Openings Module](../src/features/careers/modules/careers-openings-list/index.tsx)

#### 3 - Pages: 

These are the highest type in the list. Pages are a complete view for a single route in Next.js, pages can implement logic and will always implement feature specific modules, plus, it can implement custom rendering techniques that come with Next.js framework (SSR, SSG, ISR, CSR from React library). These are smarter that modules. 

These type of files have a special place in Next.js, which is the `pages` directory.

e.g: Home, About, Careers, Contact, Careers/[id], etc.  
e.g in code: [Home page](../pages/index.tsx)

## Development musts:

#### Colocate things as close as possible to where it's being used

Keep components, functions, styles, state, etc. as close as possible to the component where it's being used. This will not only make your codebase more readable and easier to understand but it will also improve your application performance since it will reduce redundant re-renders on state updates.

**e.g**: Let us say that you are working in a feature named `comments` and you want to create a custom hook for handling related logic, perhaps you would be tempted to create this hook in the `src/hooks` folder, instead, create a hook folder inside `comments` feature folder and place there the custom hook. 

#### Components declaration

To declare components there is a rule set into [.eslintrc.json](../.eslintrc.json) that will enforce that component are declared by using const declaration and not function declaration.

e.g: 

Wrong: 

```
export function MyComponent(): JSX.Element { 
    return <h1>Hello world</h1>
}
```

Correct: 

```
export const MyComponent = (): JSX.Element => { 
    return <h1>Hello world</h1>
}
```

#### Do not include multiple components inside a file

When creating components, try not to create multiple components inside the same file, as this will add extra complexity into a component and will be harder to maintain, instead, create another component and import it inside the file you require it.

**NOTE**: There are exceptions to this, if you need to implement some wrapper into a component that will do some extra work that is required so that the component can work perfectly, you can create a component wrapper and export the component wrapper instead of the component without wrapping, 

e.g: ErrorBoundary, ClientOnly wrapping, Context Provider, etc.  
e.g: [Modal component](../src/components/modal/index.tsx)

## Components Documentation

[Storybook](https://storybook.js.org/) is a great tool for developing and testing components in isolation. Think of it as a catalogue of all the components your application is using. Very useful for developing and discoverability of components.
