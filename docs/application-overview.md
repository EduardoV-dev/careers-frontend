# Application overview

It is a website that display relevant information about a fictitial company (JLR) that is looking to create an appealing set of pages for careers inside the company. 

## Features: 

* Static Site Generation (SEO and performance improvements).
* Headless CMS ussage (Strapi). 
* Internationalization across the pages.
* Landing page with appealing content and career openings section included (with filters by role and country).
* Careers detail page (`/careers/[id]`) for watching in detail the career full information.
  - * Includes an application form to submit an application to any job by passing the users' information and finally, sends an email to the desired email address with the application form data included.

## Data model

The application contains the following models: 

* Career Role: A career role value which a career will be associated with.
* Career Country: A country value which a career will be associated with.
* Career: Represents career openings that come from Strapi CMS and will be listed in the career openings section.

## Get started

Prerequisites:   

* Node version: >= 16 and < 18 (Node version 18 has some issues regarding to fetch api that is implemented into Next.js, could be fixed in posterior versions of Next.js).

* yarn version: 1.22+ (Could also work with previous versions).

To set up the app, execture the following commands.

```
git clone https://github.com/EduardoV-dev/careers-frontend.git
cd careers-frontend
cp .env.development .env
yarn
```

`yarn dev`:

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser

`yarn build`:

Generates a Next.js app build for production mode, this will enhance the performance of the app and will be ready for deployment!.
