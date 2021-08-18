# Portfolio3
Third iteration of a personal website. This time tackling the react library by facebook.

It is missing the folder for node_modules, because I think that is a waste of space for github. You can find the appropriate node modules in the npm installation. Instructions for npm installation can be found in the linked facebook tutorial in react below.

## Previous Websites:

* [Portfolio2](https://brian-cai.github.io/portfolio2) - Learning Animations and the Webstorm IDE (Summer 2017)
* [CS1100 Website](http://brian-cai.github.io/portfolio1) - 1st ever Portfolio, learned bootstrap and html: (Fall 2015)

## Tutorials and Sources for Portfolio3:

* [Intro to React](https://reactjs.org/tutorial/tutorial.html)
* [Setting up React on Github Pages](https://github.com/gitname/react-gh-pages)
* [React Bootstrap Documentation](https://react-bootstrap.github.io/getting-started/introduction/)
* [NPM React Carousel Package](https://www.npmjs.com/package/react-bootstrap-carousel)


## Random Notes about Custom Domains

* Creating a Custom Domain was annoying --- `npm run deploy` overwrites the CNAME for github pages which took me a while to figure out. You will have to go to settings and type in the custom url again so github creates/commits/pushes the CNAME file again.
* You have to have your package.json know your url, and have your DNS have the github pages ips added.