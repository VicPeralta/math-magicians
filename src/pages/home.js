import React from 'react';
import './home.css';

const introduction = `
Mathematics (from Ancient Greek μάθημα (máthēma) 'knowledge, study, learning') is an area of knowledge, which includes the study of such topics as numbers (arithmetic and number theory), formulas and related structures (algebra), shapes and spaces in which they are contained (geometry), and quantities and their changes (calculus and analysis). There is no general consensus about its exact scope or epistemological status.

Most of mathematical activity consists of discovering and proving (by pure reasoning) properties of abstract objects. These objects are either abstractions from nature (such as natural numbers or lines), or (in modern mathematics) abstract entities of which certain properties, called axioms, are stipulated. A proof consists of a succession of applications of some deductive rules to already known results, including previously proved theorems, axioms and (in case of abstraction from nature) some basic properties that are considered as true starting points of the theory under consideration. The result of a proof is called a theorem.

Mathematics is widely used in science for modeling phenomena. This enables the extraction of quantitative predictions from experimental laws. For example, the movement of planets can be predicted with high accuracy using Newton's law of gravitation combined with mathematical computation. The independence of mathematical truth from any experimentation implies that the accuracy of such predictions depends only on the adequacy of the model for describing the reality. So when some inaccurate predictions arise, it means that the model must be improved or changed, not that the mathematics is wrong. For example, the perihelion precession of Mercury cannot be explained by Newton's law of gravitation, but is accurately explained by Einstein's general relativity. This experimental validation of Einstein's theory shows that Newton's law of gravitation is only an approximation (which still is very accurate in everyday life).

Mathematics is essential in many fields, including natural sciences, engineering, medicine, finance, computer science and social sciences. Some areas of mathematics, such as statistics and game theory, are developed in direct correlation with their applications, and are often grouped under the name of applied mathematics. Other mathematical areas are developed independently from any application (and are therefore called pure mathematics), but practical applications are often discovered later. A fitting example is the problem of integer factorization, which goes back to Euclid, but which had no practical application before its use in the RSA cryptosystem (for the security of computer networks).

`;
const Home = () => (
  <div className="homePage">
    <h1>Welcome to our page</h1>
    <p>
      {introduction}
    </p>
    <cite><a href="https://en.wikipedia.org/wiki/Mathematics">Wikipedia source</a></cite>

  </div>
);

export default Home;
