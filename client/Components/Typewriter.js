import Typewriter from "typewriter-effect";

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
