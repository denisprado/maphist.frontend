import React from "react";
import { useSelector } from "react-redux";
import { Container } from "./styles";
import MapWithMarker from "../MapWithMarker";

const toCamel = s =>
  s.replace(/([-_][a-z])/gi, $1 =>
    $1
      .toUpperCase()
      .replace("-", "")
      .replace("_", "")
  );
const isArray = function(a) {
  return Array.isArray(a);
};
const isObject = function(o) {
  return o === Object(o) && !isArray(o) && typeof o !== "function";
};
const keysToCamel = function(o) {
  if (isObject(o)) {
    const n = {};

    Object.keys(o).forEach(k => {
      n[toCamel(k)] = keysToCamel(o[k]);
    });

    return n;
  }
  if (isArray(o)) {
    return o.map(i => keysToCamel(i));
  }

  return o;
};

function ProjectContent() {
  const p = keysToCamel(useSelector(state => state.projects.active));

  return p ? (
    <Container>
      <h1>{p.title}</h1>
      <h3>{`${p.startYear} - ${p.endYear}`}</h3>
      <MapWithMarker />
      <p>{p.description}</p>
      <p>{`Lat: ${p.lat} Lng: ${p.lng}`}</p>
    </Container>
  ) : null;
}

export default ProjectContent;
