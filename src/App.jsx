import { useState } from 'react'
import './App.css'

const initialMovies = [
  { id: 1, title: 'Интерстеллар', genre: 'Фантастика' },
  { id: 2, title: 'Матрица', genre: 'Фантастика' },
  { id: 3, title: '1+1', genre: 'Комедия' },
]

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const filteredMovies = initialMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  )

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Киносписок, наверх">
          <span className="wordmark-mark" aria-hidden="true">К</span>
          <span>КИНОСПИСОК</span>
        </a>
        <span className="topbar-note">ЛИЧНАЯ КОЛЛЕКЦИЯ <span>·</span> 2026</span>
      </header>

      <section className="library" id="top" aria-labelledby="page-title">
        <div className="intro">
          <p className="eyebrow"><span className="eyebrow-dot" /> МОЯ КОЛЛЕКЦИЯ</p>
          <h1 id="page-title">Фильмы <span>для вечера.</span></h1>
          <p className="intro-copy">Избранное, которое всегда под рукой.</p>
        </div>

        <section className="movie-section" aria-labelledby="list-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">АРХИВ <span className="archive-number">01</span></p>
              <h2 id="list-title">Мой список</h2>
            </div>
            <p className="movie-count" aria-live="polite">
              <strong>{filteredMovies.length}</strong>
              <span>{filteredMovies.length === 1 ? 'фильм' : 'фильма'}</span>
            </p>
          </div>

          <label className="search-field">
            <span className="search-icon" aria-hidden="true" />
            <span className="visually-hidden">Поиск фильма по названию</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Найти фильм..."
            />
            {searchQuery && (
              <button
                className="clear-search"
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Очистить поиск"
              >
                ×
              </button>
            )}
          </label>

          <div className="movie-list">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <article className="movie-row" key={movie.id}>
                  <span className="movie-index">0{movie.id}</span>
                  <h3>{movie.title}</h3>
                  <span className={`genre-tag ${movie.genre === 'Комедия' ? 'genre-comedy' : ''}`}>
                    {movie.genre}
                  </span>
                  <span className="row-arrow" aria-hidden="true">↗</span>
                </article>
              ))
            ) : (
              <p className="empty-state" role="status">Фильм не найден</p>
            )}
          </div>
        </section>

        <footer className="page-footer">
          <span>СОБРАНО С ЛЮБОВЬЮ К КИНО</span>
          <span>КОЛЛЕКЦИЯ <strong>№ 001</strong></span>
        </footer>
      </section>
    </main>
  )
}

export default App
