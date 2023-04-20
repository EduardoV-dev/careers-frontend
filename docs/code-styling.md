# Code styling

When working on projects, it is important that you remain consistent throughout the codebase and follow the best practices. To guarantee the quality of the codebase, you need to analyze different levels of the applications code.

#### File naming convention

The convention for creating new files or renaming them, must be kebab-case, kebab-case uses only lowercase characters and spacing is replaced by hyphen (-). 

e.g: layout-header, openings-list, a-big-component-name

#### Code naming convention: 

1. **functions, hooks, variables, constants**: camelCase (e.g respectively: greetPerson, useUserState, isWorking, careerOpenings).   

2. **components, interfaces, types, enums**: UpperCamelCase (e.g respectively: MyAwesomeComponent, User, ButtonColors, CardSizes).

   1. Avoid naming Types or Interfaces with Prefixes such as T for types (TButtonColors) and I(IUser) for interfaces, since this is not a good convention to follow for JavaScript language. but this can lead to an exception, if you have another element that overlaps with your type/interface naming, use the prefixes to overcome this issue.  

#### Prefer function declaration as consts declarations instead of function

Const functions are better since they can lead a little bit of less code because of its sintax, besides this reason, prefer it because it is a newer standard than `function` keyword declaration. These could lead to an exception: *if you need to access to `this` object in a function, implement the `function` keyword declaration since const declaration does not have access to `this` object*. 

e.g: 

Wrong:

```
function myAwesomeFunction(input: string): string {
    return `Hello world ${input}`;
}
```

Correct:

```
const myAwesomeFunction = (input: string): string => `Hello world ${input}`;
```

## Resources

### Clean Code

This is the most abstract level of code standardization. It's related to the implementations independent of the programming language. It will help the readability of your code.

[Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

### Naming

One of the most important points of the Clean Code is how you name your functions, variables, components, etc. Use this amazing guide to understand how to write better variable names.

[Naming Cheatsheet](https://github.com/kettanaito/naming-cheatsheet)
