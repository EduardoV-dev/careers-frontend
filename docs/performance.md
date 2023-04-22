# Performance

### Code Splitting

Code splitting is a technique of splitting production JavaScript into smaller files, thus allowing the application to be only partially downloaded. Any unused code will not be downloaded until it is required by the application.

Implement code splitting into components that are not required in the first render or the user will not see without any application-user interaction (click, keydown, etc).

Hint: When `yarn build` has finished, size and first load js statistics are displayed next to route name (page), if some of these have **red** values, try entering into those pages code and implement lazy loading by "try and error method" (try lazy loading into different components or modules, until statistics turn green). 

Do not code split everything as it might even worsen your application's performance.
For achieving code splitting in Next.js you can use [dynamic imports](https://nextjs.org/docs/advanced-features/dynamic-import). 

[Dynamic import example](../pages/index.tsx)

### Component and state optimizations

* Do not put everything in a single state. That might trigger unnecessary re-renders. Instead split the global state into multiple stores according to where it is being used.

* Keep the state as close as possible to where it is being used. This will prevent re-rendering components that do not depend on the updated state.

* If you have a piece of state that is initialized by an expensive computation, use the state initializer function instead of executing it directly because the expensive function will be run only once as it is supposed to. e.g:

```javascript
// instead of this which would be executed on every re-render:
const [state, setState] = React.useState(myExpensiveFn());

// prefer this which is executed only once:
const [state, setState] = React.useState(() => myExpensiveFn());
```

* If you develop an application that requires the state to track many elements at once, you might consider state management libraries with atomic updates such as [recoil](https://recoiljs.org/) or [jotai](https://jotai.pmnd.rs/).

### Image optimizations

Consider lazy loading images that are not in the viewport.

Use modern image formats such as WEBP for faster image loading.

Use `srcset` to load the most optimal image for the clients screen size.

### Web vitals

Since Google started taking web vitals in account when indexing websites, you should keep an eye on web vitals scores from [Lighthouse](https://web.dev/measure/) and [Pagespeed Insights](https://pagespeed.web.dev/).
