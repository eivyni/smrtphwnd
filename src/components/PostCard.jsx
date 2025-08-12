import React from 'react'

export default function PostCard({ post }) {
  const safeText = post.content
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

  return (
    <article className="bg-white p-4 rounded-2xl shadow-sm">
      <div className="text-sm text-gray-700 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: safeText }} />
      <div className="mt-3 text-xs text-gray-400 flex justify-between">
        <span>{post.author ? post.author : 'Anônimo'}</span>
        <span>{new Date(post.created_at).toLocaleString()}</span>
      </div>
    </article>
  )
}
