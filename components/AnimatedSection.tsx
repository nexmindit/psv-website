import { Fade } from "react-awesome-reveal";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function AnimatedSection({ className = "", children }: Props) {
  return (
    <Fade triggerOnce>
      <section className={className}>{children}</section>
    </Fade>
  );
}
