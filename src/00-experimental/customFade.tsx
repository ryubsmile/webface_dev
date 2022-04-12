import { Fade } from 'react-awesome-reveal';

export default function customFade(props: any) {
  return (
    <Fade duration={400} direction="up" fraction={0.5} damping={0.2}>
      <>{props.children}</>
    </Fade>
  );
}
