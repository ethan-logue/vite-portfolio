import { useCursor } from "./useCursor";

interface Options {
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
}

const useCursorHandlers = (options: Options = {}) => {
  const { setCursor } = useCursor();

  const onMouseEnter = (event: React.MouseEvent) => {
    if (options.onMouseEnter) {
      options.onMouseEnter(event);
    }
    setCursor({ hover: true });
  };

  const onMouseLeave = (event: React.MouseEvent) => {
    if (options.onMouseLeave) {
      options.onMouseLeave(event);
    }
    setCursor({ hover: false });
  };

  return { onMouseEnter, onMouseLeave };
};

export default useCursorHandlers;