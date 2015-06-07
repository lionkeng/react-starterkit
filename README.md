# react-starterkit
NOT PRODUCTION READY
A simple starterkit with material-ui, react-router, and webpack.

# How to use
* clone this repo
* go to the root directory of your project, and install dependencies:
```
cd <project folder>
npm install
```

* For development, we use [webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html) for hotswapping. 
```
npm run dev
```
In your browser, type `http://localhost:5050`

* For deployment, we webpack everything and put them in the dist folder.
```
npm run deploy
```



## Resources
* For an example of a boilerplate that uses react hot loader, and includes a server side implementation with hapi, see [Thomas Coopman's boilerplate](https://github.com/tcoopman/boilerplate-webpack-react). 
* For a nice description of how-tos for using webpack with reactjs, many have referenced Pete Hunt's [webpack-howto](https://github.com/petehunt/webpack-howto). 
* That said, I found [Christian Alfoni's react-webpack cookbook](https://christianalfoni.github.io/react-webpack-cookbook/) very helpful.

## License

Copyright (c) 2015 Keng Lim

MIT (http://opensource.org/licenses/MIT)
