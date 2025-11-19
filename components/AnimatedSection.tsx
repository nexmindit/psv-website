import { Fade } from "react-awesome-reveal";

interface Props {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function AnimatedSection({
  className = "",
  children,
  delay = 0,
  duration = 1000,
  direction = "up",
}: Props) {
  return (
    <Fade
      triggerOnce
      delay={delay}
      duration={duration}
      direction={direction}
      className={className}
    >
      {children}
    </Fade>
  );
}
