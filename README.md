-----------------------------------------------------------------------------------
Step 1: npm run build.

Step 2: npm run start
------------------------------------------------------------------------------------
Build Process Documentation
------------------------------------------------------------------------------------
1. Execute "npm run build", the moment we do that, Nuxt.js loads the nuxt.config.js file, with the provided environment variables, modules, plugins, and otehr settings. It defines how the the build will be processed. Nuxt.js uses Webpack under the hood to bundle the application so it starts by creating a Webpack build instance.

2. Depending on the settings in the build section of nuxt.config.js, custom configurations (like Babel, transpilers, or CSS preprocessors) are applied, in our case webpack minifies the JavaScript and CSS assets to reduce file size. This includes removing unnecessary white spaces, comments, and optimizing code structures.

3. Nuxt.js builds two folders,
Client Bundle - The front-end JavaScript code that runs in the browser.
Server Bundle - The server-side code for server-side rendering (SSR), if SSR mode is true.
Webpack will compile JavaScript, components, and any other assets (like SCSS or images) into optimized bundles for each.

4. Then it perform tree shaking to removes unused code, and code splitting which divides the application into smaller chunks that can be loaded on demand. This reduces the initial load time of your application.

5. During the build process, Nuxt.js generates a .nuxt directory. It contains the compiled client and server bundles, and the configuration needed to run the application. It is also used to serve the production build of the application.

6. After all assets have been processed, bundled, and optimized, Nuxt.js finishes the build process. Now we have a fully optimized set of files that can be served for production.

7. Now to view the production build, we just need to execute "npm run start" command.

8. Once the build is complete, the application is ready to be deployed to a server or a CDN. The compiled code in the ".nuxt" and "dist" (in case of SSG) folders is served in production environments.

----------------------------------------------------------------------------------
Short description highlighting the areas of the program that are unique/important.
----------------------------------------------------------------------------------
1. Utilized Server-Side Rendering (SSR) to improve both SEO and the initial load performance of the application. By rendering the pages on the server, I ensured that users receive fully rendered HTML on their first request, which enhances the user experience and makes the site more accessible to search engines. This approach resulted in faster FCP,LCP and other web vitals, so that users can see the content more quickly, improving engagement and retention.

2. Implemented Infinite Scroll feature for loading and displaying a list of movies to enhance the user experience. It eliminates the need for pagination, offering a smoother browsing experience where content loads automatically as the user scrolls. (although Pagination has its own seperate advatages)

3. Implemented Shimmer UI (skeleton loading) while fetching data, giving users visual feedback during content loading. This helps keeps the interface responsive and reduces perceived loading times, resulting in a smoother user experience.

4. Leveraging Resource Hinting with "preconnect" to establish early connections to AWS domain for faster loading of movie poster image and google fonts URL to ensure fonts load quickly and without delay.
