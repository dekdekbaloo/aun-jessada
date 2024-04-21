import React, { useState, useEffect, useRef } from "react";
import { StaggeredMotion, spring } from "react-motion";
import PropTypes from "prop-types";
import _ from "lodash";

function lerp(a, b, t) {
  return (b - a) * t + a;
}

function distance(x1, y1, x2, y2) {
  const a = x2 - x1;
  const b = y2 - y1;

  return Math.sqrt(a * a + b * b);
}

const GuitarString = ({
  pickX,
  pickY,
  segments,
  pickThreshold,
  magneticThreshold,
  affectedRange,
  head,
  tail,
  stiffness,
  damping,
}) => {
  const [dragged, setDragged] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragY, setDragY] = useState(0);

  const expectedPositions = Array(segments)
    .fill()
    .map((x, i) => {
      const step = i / segments;
      return {
        x: lerp(head.x, tail.x, step),
        y: lerp(head.y, tail.y, step),
      };
    });

  function getClosestPoint(x, y) {
    const distances = expectedPositions.map(({ x: _x, y: _y }, i) => ({
      i,
      dist: distance(x, y, _x, _y),
    }));

    return _.minBy(distances, "dist");
  }

  useEffect(() => {
    const closestPoint = getClosestPoint(pickX, pickY);
    if (dragged) {
      if (closestPoint.dist >= pickThreshold) {
        setDragged(false);
      } else {
        setDragX(pickX);
        setDragY(pickY);
      }
    } else if (closestPoint.dist <= magneticThreshold) {
      startDrag(pickX, pickY);
    }
  }, [pickX, pickY]);

  function startDrag(pickX, pickY) {
    setDragged(true);
    setDragX(pickX);
    setDragY(pickY);
  }

  function stopDrag(e) {
    setDragged(false);
  }

  const closestPoint = getClosestPoint(dragX, dragY);

  return (
    <StaggeredMotion
      defaultStyles={expectedPositions}
      styles={(prevStyles) =>
        prevStyles.map((prevStyle, i) => {
          const expected = expectedPositions[i];
          const isPivot = i === 0 || i === segments - 1;
          if (isPivot) {
            return expected;
          }

          if (dragged && pickThreshold >= closestPoint.dist) {
            if (closestPoint.i === i) return { x: dragX, y: dragY };
            const draggedExpect = expectedPositions[closestPoint.i];
            const dx = dragX - draggedExpect.x;
            const dy = dragY - draggedExpect.y;
            const strength = Math.abs(closestPoint.i - i) / affectedRange;
            if (strength < 1) {
              const cosStrength = Math.cos(strength * Math.PI * 0.5);
              return {
                x: expected.x + dx * cosStrength,
                y: expected.y + dy * cosStrength,
              };
            }
          }
          const springOption = {
            stiffness: stiffness,
            damping: damping,
          };
          return {
            x: spring(expected.x, springOption),
            y: spring(expected.y, springOption),
          };
        })
      }
    >
      {(styles) => {
        const d = styles.reduce(
          (d, { x, y }, i) =>
            i === 0 ? `M${head.x} ${head.y} ` : d + `L${x} ${y} `,
          ""
        );
        return <path d={d} stroke="black" fill="transparent" />;
      }}
    </StaggeredMotion>
  );
};

GuitarString.propTypes = {
  segments: PropTypes.number,
  pickThreshold: PropTypes.number,
  magneticThreshold: PropTypes.number,
  affectedRange: PropTypes.number,
  head: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  tail: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  stiffness: PropTypes.number,
  damping: PropTypes.number,
};

GuitarString.defaultProps = {
  head: { x: 0, y: 0 },
  tail: { x: 500, y: 500 },
  pickThreshold: 100,
  magneticThreshold: 10,
  affectedRange: 60,
  segments: 100,
  stiffness: 1500,
  damping: 10,
};

const Guitar = ({ width, height }) => {
  const [pick, setPick] = useState({ x: 0, y: 0 });

  const containerRef = useRef();

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPick({ x, y });
  };

  return (
    <svg
      width={width}
      height={height}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {Array(10)
        .fill()
        .map((x, i) => (
          <GuitarString
            key={i}
            pickX={pick.x}
            pickY={pick.y}
            head={{ x: 0, y: 10 + i * 40 }}
            segments={60}
            affectedRange={20}
            pickThreshold={50}
            magneticThershold={5}
            damping={3}
          />
        ))}
    </svg>
  );
};

export default Guitar;
