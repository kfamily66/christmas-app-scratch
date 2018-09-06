import React from "react";

const Footer = props => (
  <footer>
    <div className="row">
      <div className="footer__arrows">
        {props.counter.current !== 4 && (
          <h2 className="footer__arrow" onClick={props.triggerArrowDown}>
            &#709;
          </h2>
        )}
        {props.counter.current !== 0 && (
          <h2 className="footer__arrow" onClick={props.triggerArrowUp}>
            &#708;
          </h2>
        )}
      </div>
      {props.counter.current === 3 && (
        <div>
          <ul className="list__terms">
            <li>
              <a href="" className="link--list">
                General terms
              </a>
            </li>
            <li className="child--list list--padding">
              <a href="" className="link--list">
                Delivery terms
              </a>
            </li>
            <li>
              <a href="" className="link--list">
                Privacy terms
              </a>
            </li>
          </ul>
        </div>
      )}
      {props.counter.current === 4 && <p>Scroll up</p>}
      {(props.counter.current === 0 ||
        props.counter.current === 1 ||
        props.counter.current === 2) && (
        <p className="scrollDown--text">Scroll down</p>
      )}

      <h2 className="inline__text">
        {props.counter.current + 1}
        <span className="inline--number">/5</span>
      </h2>
    </div>
  </footer>
);

export default Footer;
