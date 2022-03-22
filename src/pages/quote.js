import './quote.css';

const Quote = () => (
  <div className="quote">
    <figure>
      <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>
          Good mathematicians see analogies.
          Great mathematicians see analogies between analogies.
        </p>
      </blockquote>
      <figcaption>
        —Stefan Banach,
        <cite>
          Brave New World
        </cite>
      </figcaption>
    </figure>
  </div>
);

export default Quote;
