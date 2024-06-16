import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { ErrorBoundary } from 'react-error-boundary';
const UseMyWidget = ({ url_responsive_voice, url, element }) => {

  const _load_js = (async () => {
    try {

      const body_2 = document.querySelector("body");
      const script_2 = document.createElement("script");
      script_2.setAttribute(
        "src",
        url
      );
      script_2.async = true;
      await body_2.appendChild(script_2);
    } catch (e) {
      console.log('Error')
    }


  });
  useEffect(() => {
    _load_js();

  });
  return (
    <ErrorBoundary>
      <section>
        <Container>{element}</Container>
      </section>
    </ErrorBoundary>
  );
};






UseMyWidget.propTypes = {
  element: PropTypes.element.isRequired,
  url: PropTypes.string.isRequired
};

export default React.memo(UseMyWidget);

