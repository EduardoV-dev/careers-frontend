# Errors Handling

There is no application that is except of errors, since they are part of the software, because anything could go wrong anytime. Controlling errors is an important task to provide a really good user experience, by controlling errors, we make sure that when an error appears, our application does not crash entirely, this can be achieved through multiple means.

### Server Errors (StatusCode: 5xx)

Next.js has a good way for handling this type of errors when the server has some issues (Perhaps there was an issue while trying to fetch data in SSR mode, or any other rendering strategy), Next.js will acknowledge when a Server side error has ocurred, and it will display the next page to the user: 

![Server Error Page](https://user-images.githubusercontent.com/42711013/86484940-f95cd000-bd89-11ea-820e-af5f6190b156.png)

This is great, but we are not really giving enough feedback to the user to know what has happened, fortunately, this page can be customized to match the desired UI and message that we would like to emit to the user. This can be achieved by implementing a `500.tsx` file within `pages` directory.

[Custom Server Error Page](../pages/500.tsx)

### Not Found Errors (StatusCode: 404)

There are two main cases in which this error happens:

1. A route the user tried to visit, does not exists (perhaps they tried to enter in /non-existing/route, clearly this does not exists lol).

2. When fetching resources from an API, the resource we wanted to retrieve does not exists.  

We will get through both of them and how to control them.

#### Route does not exist (Case 1)

When this happens, by default Next.js will display a default 404 page that will tell the user that the route they wanted to navigate do not exists, 404 page looks like this:

![404 Page](https://maxschmitt.me/post-media/next-js-default-404-page/nextjs-404-page.png)

This page has a clear message of the error. To create a custom 404 page, we can create a `404.tsx` file within the `pages` folder.

[Custom Page Not Found](../pages/404.tsx)

#### Resource not found (Case 2)

For fetching data in this application, fetch API is being extended and used ([Fetcher declaration](../src/lib/fetcher.ts)), when fetching, inside `fetcher` function, we check if the statusCode is equal to 404 (resource not found error), if this is true, an error with the `404` message will be thrown.

To control this error, we go the API call for the fetching we are implementing, surround API call will trycatch block and within the catch clause, check if the `error.message` attribute is equal to `404`, if this is true, this means that the resource we wanted to fetch does not exist, therefore, we will return `null` to tell that the resource does not exist.

After we encounter the 404 error and handled it with the API Call implementation by returning null, in the UI, we can check if the resource is null or not, to display a custom not found error or, display the data of the resource in case it does exist. 

[Example of handling error within API call](../src/features/careers/api/get-career-by-id.ts)  
[Example of handling error within UI](../src/features/careers/modules/details-job/index.tsx)
