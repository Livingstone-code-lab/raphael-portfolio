export default function SectionHeading({ index, eyebrow, title, italic }) {
  return (
    <div className="section-heading reveal">
      <div className="section-number">{index} <span>—</span> {eyebrow}</div>
      <h2>{title} <em>{italic}</em></h2>
    </div>
  )
}