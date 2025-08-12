import React, { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import PostCard from './components/PostCard'
import NewPostModal from './components/NewPostModal'

export default function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    setLoading(true)
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200)

    if (!error) setPosts(data)
    setLoading(false)
  }

  async function handleNewPost(post) {
    setPosts(prev => [post, ...prev])
    setShowModal(false)

    const { error } = await supabase
      .from('posts')
      .insert([{ content: post.content, author: post.author }])

    if (error) fetchPosts()
    else fetchPosts()
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">smartphowned</h1>
        <p className="text-sm text-gray-600">Um banco de textos público — poste até 5000 caracteres.</p>
      </header>

      <main className="max-w-4xl mx-auto mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? <div>Carregando...</div> : posts.map(p => <PostCard key={p.id} post={p} />)}
        </div>
      </main>

      <button
        aria-label="Adicionar"
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-2xl"
        onClick={() => setShowModal(true)}
      >
        +
      </button>

      {showModal && (
        <NewPostModal
          onClose={() => setShowModal(false)}
          onSubmit={handleNewPost}
        />
      )}
    </div>
  )
}
