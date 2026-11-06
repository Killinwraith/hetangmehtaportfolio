import { useRef } from "react";
import styles from "./ProjectDial.module.css";

const CENTER = { x: 255, y: 260 };
const PIVOT = { x: 515, y: 100 };
const ARM_LENGTH = 260;
const ARM_BASE_ANGLE = 115;
const ARM_SWEEP = 4;
const RING = { inner: 118, outer: 182 };
const LABEL_RADIUS = 136;

const round = (value) => Math.round(value * 100) / 100;
const radians = (degrees) => (degrees * Math.PI) / 180;
const polar = (radius, degrees) => ({
  x: round(radius * Math.cos(radians(degrees))),
  y: round(radius * Math.sin(radians(degrees))),
});
const pad = (value) => String(value).padStart(2, "0");

const segmentAngle = (index, count) => -90 + ((index + 0.5) * 360) / count;

const segmentPath = (index, count) => {
  const size = 360 / count;
  const start = -90 + index * size + 0.7;
  const end = -90 + (index + 1) * size - 0.7;
  const large = end - start > 180 ? 1 : 0;
  const a = polar(RING.outer, start);
  const b = polar(RING.outer, end);
  const c = polar(RING.inner, end);
  const d = polar(RING.inner, start);
  return `M${a.x} ${a.y}A${RING.outer} ${RING.outer} 0 ${large} 1 ${b.x} ${b.y}L${c.x} ${c.y}A${RING.inner} ${RING.inner} 0 ${large} 0 ${d.x} ${d.y}Z`;
};

// The arm settles at a slightly different angle for each project. The disc then
// turns so that the chosen segment sits exactly under the arm's tip.
const armAngle = (index, count) =>
  count > 1
    ? ARM_BASE_ANGLE + (index / (count - 1) - 0.5) * ARM_SWEEP
    : ARM_BASE_ANGLE;

const discRotation = (index, count) => {
  const angle = radians(armAngle(index, count));
  const tipX = PIVOT.x + ARM_LENGTH * Math.cos(angle);
  const tipY = PIVOT.y + ARM_LENGTH * Math.sin(angle);
  const tipAngle = (Math.atan2(tipY - CENTER.y, tipX - CENTER.x) * 180) / Math.PI;
  return round(tipAngle - segmentAngle(index, count));
};

/*
  The hero object. To swap it, build another component that takes the same
  props ({ items, selectedIndex, onSelect }) and export it from HeroObject.js.
*/
export const ProjectDial = ({ items, selectedIndex, onSelect }) => {
  const count = items.length;
  const target = discRotation(selectedIndex, count);

  // Always turn the short way round.
  const rotation = useRef(target);
  rotation.current =
    target + 360 * Math.round((rotation.current - target) / 360);

  return (
    <svg
      className={styles.dial}
      viewBox="0 0 640 520"
      role="img"
      aria-label={`Project dial, set to ${items[selectedIndex].title}`}
    >
      <defs>
        <linearGradient id="dial-plinth" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--plinth-light)" />
          <stop offset="1" stopColor="var(--plinth)" />
        </linearGradient>
        <linearGradient id="dial-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.14" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="dial-arm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--arm)" />
          <stop offset="1" stopColor="var(--arm-shade)" />
        </linearGradient>
        <radialGradient id="dial-knob" cx="0.38" cy="0.32" r="0.8">
          <stop offset="0" stopColor="#fafafa" />
          <stop offset="1" stopColor="#a9a9a9" />
        </radialGradient>
      </defs>

      <g className={styles.plinthShadow}>
        <rect
          x="50"
          y="40"
          width="540"
          height="440"
          rx="30"
          fill="url(#dial-plinth)"
          stroke="var(--plinth-edge)"
          strokeWidth="3"
        />
      </g>

      {[
        [72, 62],
        [568, 62],
        [72, 458],
        [568, 458],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`} className={styles.screw}>
          <circle cx={x} cy={y} r="6" />
          <path d={`M${x - 3.5} ${y}H${x + 3.5}`} />
        </g>
      ))}

      <circle
        className={styles.discShadow}
        cx={CENTER.x}
        cy={CENTER.y}
        r="190"
        fill="var(--disc)"
      />

      <g transform={`translate(${CENTER.x} ${CENTER.y})`}>
        <g
          className={styles.turning}
          style={{ transform: `rotate(${rotation.current}deg)` }}
        >
          <circle r="190" fill="var(--disc)" />
          {[96, 102, 108, 114].map((radius) => (
            <circle key={radius} r={radius} className={styles.groove} />
          ))}
          {items.map((item, index) => {
            const angle = segmentAngle(index, count);
            const label = polar(LABEL_RADIUS, angle);
            const isActive = index === selectedIndex;
            return (
              <g
                key={item.slug}
                className={onSelect ? styles.selectable : undefined}
                onClick={onSelect ? () => onSelect(index) : undefined}
              >
                <path
                  d={segmentPath(index, count)}
                  className={isActive ? styles.segmentActive : styles.segment}
                />
                <g transform={`translate(${label.x} ${label.y})`}>
                  {/* Counter-rotates so the numbers always stay upright. */}
                  <text
                    className={`${styles.turning} ${
                      isActive ? styles.labelActive : styles.label
                    }`}
                    style={{ transform: `rotate(${-rotation.current}deg)` }}
                  >
                    {pad(index + 1)}
                  </text>
                </g>
              </g>
            );
          })}
        </g>

        <circle r="190" fill="url(#dial-sheen)" pointerEvents="none" />
        <circle r="74" fill="var(--accent-strong)" />
        <circle r="74" fill="url(#dial-sheen)" />
        <text y="11" className={styles.hubNumber}>
          {pad(selectedIndex + 1)}
        </text>
        <text y="37" className={styles.hubTotal}>
          of {pad(count)}
        </text>
      </g>

      <g className={styles.readout}>
        <rect x="462" y="408" width="106" height="46" rx="14" />
        <circle className={styles.led} cx="482" cy="431" r="4.5" />
        <text x="497" y="436">
          {pad(selectedIndex + 1)}/{pad(count)}
        </text>
      </g>

      <g transform={`translate(${PIVOT.x} ${PIVOT.y})`}>
        {[-70, -46, -22, 2, 26].map((angle) => {
          const from = polar(44, angle);
          const to = polar(50, angle);
          return (
            <line
              key={angle}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              className={styles.tick}
            />
          );
        })}
        <g className={styles.armShadow}>
          <g
            className={styles.swing}
            style={{
              transform: `rotate(${round(armAngle(selectedIndex, count))}deg)`,
            }}
          >
            <g className={styles.idle}>
              <rect
                x="-62"
                y="-13"
                width="34"
                height="26"
                rx="6"
                fill="var(--plinth-edge)"
              />
              <rect
                x="-30"
                y="-7"
                width="238"
                height="14"
                rx="7"
                fill="url(#dial-arm)"
                stroke="var(--plinth-edge)"
                strokeWidth="1.5"
              />
              <path
                d="M204 -12H250L262 0L250 12H204Z"
                fill="url(#dial-arm)"
                stroke="var(--plinth-edge)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="256" cy="0" r="2.5" fill="var(--plinth-edge)" />
            </g>
          </g>
        </g>
        <circle r="30" fill="url(#dial-knob)" stroke="var(--plinth-edge)" strokeWidth="1.5" />
        <circle r="8" fill="var(--plinth-edge)" />
      </g>
    </svg>
  );
};
