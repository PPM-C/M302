export default function Hobbies({ items = [] }) {
if (!items.length) return <p>No hay aficiones todavía.</p>;
return (
<ul>
{items.map((hobbie, i) => (
<li key={i}>{hobbie}</li>
))}
</ul>
);
}