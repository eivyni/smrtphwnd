import React, { useState } from 'react'

export default function NewPostModal({ onClose, onSubmit }) {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!content.trim()) return setError('O texto não pode ficar vazio')
    if (content.length > 5000) return setError('Máximo de 5000 caracteres')

    const post = {
      content,
      author: author || null,
      created_at: new Date().toISOString(),
    }

    onSubmit(post)
    setContent('')
    setAuthor('')
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-11/12 max-w-lg p-4">
        <h2 className="text-lg font-semibold">Novo texto</h2>
        <form onSubmit={handleSubmit} className="mt-3">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            placeholder="Escreva até 5000 caracteres..."
            className="w-full p-3 border rounded-md"
          />
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Assinar (opcional)"
            className="w-full p-2 mt-2 border rounded-md"
          />

          {error && <div className="text-red-600 mt-2">{error}</div>}

          <div className="flex gap-2 justify-end mt-4">
            <button type="button" className="px-4 py-2" onClick={onClose}>Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
