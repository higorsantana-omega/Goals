import React from 'react'

const phrases = [
  "Believe you can and you're halfway there.",
  'The only way to do great work is to love what you do.',
  'You are never too old to set another goal or to dream a new dream.',
  'The future belongs to those who believe in the beauty of their dreams.',
  "Don't watch the clock; do what it does. Keep going.",
  'Keep your face always toward the sunshine—and shadows will fall behind you.',
  'The best way to predict the future is to create it.',
  'What you get by achieving your goals is not as important as what you become by achieving your goals.',
  'Success is not the key to happiness. Happiness is the key to success.'
]

export async function MotivationalPhrase() {
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]

  return (
    <div className="bg-gray-100 py-4 text-center dark:bg-gray-800">
      <p className="text-lg font-bold text-gray-900 dark:text-gray-50">&quot;{randomPhrase}&quot;</p>
    </div>
  )
}
