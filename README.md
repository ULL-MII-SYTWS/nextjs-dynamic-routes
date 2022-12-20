
## Setup

```
npm install
npm run dev
```

Then visit: http://localhost:3000/nextjs-dynamic-routes


## Next.js dynmaic routes references

See:

1. The lab introduction to the jam stack: <https://dmsi.netlify.app/practicas/nextjs#introduction-to-the-jam-stack-with-nextjs-react-rest-and-netlify>
2. <https://nextjs.org/learn/foundations/from-react-to-nextjs>
1. <https://nextjs.org/docs/routing/dynamic-routes>

## GH deployment with next export

To deploy to GH pages we have used 
`next export` that allow us to export our Next.js application to static HTML,
which can be run standalone without the need of a Node.js server. 
It is recommended to only use `next export` if you don't need any of the 
unsupported features requiring a server.

See <https://nextjs.org/docs/advanced-features/static-html-export>

```
➜  nextjs-dynamic-routes git:(main) npm run build

> from-react-to-nextjs@1.0.0 build
> next build && next export -o docs && touch docs/.nojekyll
```

Also we have added a `.nojekyll` file to the `docs` folder to avoid
Jekyll to process the files.

Furthermore, we have added `basePath` to the `next.config.js` file to
avoid the 404 error when we deploy to GH pages.

```js 
➜  nextjs-dynamic-routes git:(main) ✗ cat next.config.js 
module.exports = {
  //distDir: 'docs',
  basePath: '/nextjs-dynamic-routes'
}
```



## Path

```
➜  nextjs-dynamic-routes git:(main) pwd
/Users/casianorodriguezleon/campus-virtual/2223/learning/nextjs-learning/nextjs-dynamic-routes
```