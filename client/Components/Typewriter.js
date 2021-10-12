import Typewriter from "typewriter-effect";
import styles from "../styles/Home.module.css";

export default function TypewriterComponent({ text }) {
  return (
    <Typewriter
      options={{
        strings: text,
        loop: true,
        autoStart: true,
      }}
    />
  );
}
