// import { useState, useEffect } from "react";
import { greet } from "../utils/greet";

export default function Main(): JSX.Element {
  return <h1>{greet("World")}</h1>;
}
