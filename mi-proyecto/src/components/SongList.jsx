function SongCard({ song }) {
return (
<article className="song">
<img src={song.imagenAlbum} alt={`Portada de ${song.album}`} />
<div className="song-info">
<h4>{song.titulo}</h4>
<p>
<strong>Álbum:</strong> {song.album}
</p>
<p>
<strong>Duración:</strong> {song.duracion}
</p>
<p>
<strong>Valoración:</strong> {"⭐".repeat(song.valoracion)}
</p>
</div>
</article>
);
}


export default function SongList({ songs = [] }) {
if (!songs.length) return <p>No hay canciones todavía.</p>;
return (
<div className="song-grid">
{songs.map((s) => (
<SongCard key={`${s.titulo}-${s.album}`} song={s} />)
)}
</div>
);
} 