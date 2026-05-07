type LogoProps = {
  className?: string
  stroke?: string
  strokeWidth?: number
}

export default function Logo({ className, stroke = '#FF2D87', strokeWidth = 18 }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1400 900"
      className={className}
      aria-label="MK — Malu Klein"
      role="img"
    >
      <text
        x="700"
        y="760"
        textAnchor="middle"
        style={{
          fontFamily: "'Anton', Impact, 'Arial Narrow', sans-serif",
          fontWeight: 400,
          fontSize: '850px',
          letterSpacing: '-30px',
          fill: 'none',
          stroke,
          strokeWidth,
          paintOrder: 'stroke',
        }}
      >
        MK
      </text>
    </svg>
  )
}
