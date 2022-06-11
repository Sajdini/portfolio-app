import json from "./json-to-csv.png";
import jsonPoster from "./json-to-csv-poster.png";
import ecom from "./ecom.png";
import ecomPoster from "./ecom-poster.png";

import linkedin from "./linkedin.png";
import linkedinPoster from "./linkedin-poster.png";

import countries from "./countries.png";
import countriesPoster from "./countries-poster.png";
export const biographyData = [
  {
    age: "2012-2016",
    description:
      "Studied Economics in International Balkan University in Skopje,Macedonia",
  },
  {
    age: "2017-2018",
    description:
      "Finished Master Studies in International Balkan University in Skopje, Macedonia, and went abroad for a student summer job.",
  },
  {
    age: "2018-2021",
    description:
      " Worked as an executive administrator, assistant financial manager,assistant project manager, ESL online teacher in several companies",
  },
  {
    age: "2021-Present",
    description:
      "Decided to make a career switch. I quit my former job, and started to learn web development on my own. Started with html, css, Javascript, then proceeded to learn the React Framwework. Right now, i am pursuing a MERN stack course, to enable myself for some more complex projects",
  },
];

export const portfolioInfo = [
  {
    name: "Json To Csv",
    link: "https://62a3bdbb863c2a1ea570fea1--startling-piroshki-fd7f0d.netlify.app/",
    description:
      "This project serves to convert a Json file into CSV, and vice versa",
    image: json,
    id: 1,
    posterImg: jsonPoster,
  },

  {
    name: "Ecommerce App",
    link: "https://ecommerce-app-nu.vercel.app/",
    image: ecom,
    id: 2,
    description: "This is a fullstack ecom webpage, using Netxjs and sanity",
    posterImg: ecomPoster,
  },

  {
    name: "Linkedin Clone",
    link: "https://62a4ab091ac5a02e77301aa5--magenta-chimera-7bab08.netlify.app/",
    image: linkedin,
    id: 3,
    posterImg: linkedinPoster,
    description:
      "This project is a linkedin Clone. For now, only login page works. In the future the whole project will be completed",
  },
  {
    name: "Countries List",
    link: "https://62a4b4e51ffcb331b950ab39--delicate-pie-5e9d68.netlify.app/",
    image: countries,
    id: 4,
    description:
      "This project gets and shows information about countries via a RESTful API",
    posterImg: countriesPoster,
  },
];
