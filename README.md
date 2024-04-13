## USING YARN (Recommend)

- yarn install
- yarn start

## USING NPM

- npm i OR npm i --legacy-peer-deps
- npm start


/**

{
  "name": "@khairy/khairy-kit-react",
  "author": "Sandy Mohammed ",
  "version": "4.1.0",
  "description": "Javascript Version",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject",
    "lint": "eslint --ext .js,.jsx .",
    "lint:fix": "eslint --fix --ext .js,.jsx .",
    "prettier": "prettier --write 'src/**/*.{js,jsx}'",
    "clear-all": "rm -rf build node_modules",
    "re-start": "rm -rf build node_modules && yarn install && yarn start",
    "re-build": "rm -rf build node_modules && yarn install && yarn build"
  },
  "eslintConfig": {
    "extends": [
      "react-app"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "dependencies": {
    "@auth0/auth0-spa-js": "^2.0.0",
    "@emotion/cache": "^11.10.5",
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.0",
    "@fullcalendar/daygrid": "^5.11.3",
    "@fullcalendar/interaction": "^5.11.3",
    "@fullcalendar/list": "^5.11.3",
    "@fullcalendar/react": "^5.11.3",
    "@fullcalendar/timegrid": "^5.11.3",
    "@fullcalendar/timeline": "^5.11.3",
    "@hello-pangea/dnd": "^16.1.0",
    "@hookform/resolvers": "^2.9.10",
    "@iconify/react": "^4.0.0",
    "@mui/icons-material": "^5.15.14",
    "@mui/lab": "^5.0.0-alpha.109",
    "@mui/material": "^5.15.14",
    "@mui/system": "^5.10.15",
    "@mui/x-data-grid": "^5.17.13",
    "@mui/x-date-pickers": "^5.0.9",
    "@react-pdf/renderer": "^3.0.1",
    "@reduxjs/toolkit": "^1.9.0",
    "amazon-cognito-identity-js": "^6.0.1",
    "apexcharts": "^3.36.3",
    "autosuggest-highlight": "^3.3.4",
    "axios": "^1.2.0",
    "change-case": "^4.1.2",
    "date-fns": "^2.29.3",
    "firebase": "^9.14.0",
    "framer-motion": "^7.6.12",
    "highlight.js": "^11.7.0",
    "history": "^5.3.0",
    "i18next": "^22.0.6",
    "i18next-browser-languagedetector": "^7.0.1",
    "lodash": "^4.17.21",
    "mapbox-gl": "^2.11.0",
    "notistack": "^2.0.8",
    "nprogress": "^0.2.0",
    "numeral": "^2.0.6",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-apexcharts": "^1.4.0",
    "react-dom": "^18.2.0",
    "react-dropzone": "^14.2.3",
    "react-helmet-async": "^1.3.0",
    "react-hook-form": "^7.39.5",
    "react-i18next": "^12.0.0",
    "react-lazy-load-image-component": "^1.5.6",
    "react-map-gl": "^7.0.19",
    "react-markdown": "^8.0.3",
    "react-organizational-chart": "^2.2.0",
    "react-quill": "^2.0.0-beta.4",
    "react-redux": "^8.0.5",
    "react-router": "^6.4.3",
    "react-router-dom": "^6.4.3",
    "react-scripts": "^5.0.0",
    "react-slick": "^0.29.0",
    "redux": "^4.2.0",
    "redux-persist": "^6.0.0",
    "rehype-highlight": "^6.0.0",
    "rehype-raw": "^6.1.1",
    "remark-gfm": "^3.0.1",
    "simplebar": "^5.3.9",
    "simplebar-react": "^2.4.3",
    "slick-carousel": "^1.8.1",
    "stylis": "^4.1.3",
    "stylis-plugin-rtl": "^2.1.1",
    "web-vitals": "^3.1.0",
    "worker-loader": "^3.0.8",
    "yet-another-react-lightbox": "^2.2.2",
    "yup": "^0.32.11"
  },
  "devDependencies": {
    "@babel/core": "^7.20.2",
    "@babel/eslint-parser": "^7.19.1",
    "eslint": "^8.28.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-prettier": "^8.5.0",
    "eslint-config-react-app": "^7.0.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jsx-a11y": "^6.6.1",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.31.11",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "^2.8.0",
    "typescript": "^4.9.3"
  },
  "overrides": {
    "nth-check": "2.1.1"
  }
}


*/