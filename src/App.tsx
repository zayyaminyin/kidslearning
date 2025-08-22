import React, { useState } from 'react'
import './App.css'

function App() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const learningTopics = [
    {
      id: 1,
      title: '🔤 Alphabet',
      description: 'Learn your ABCs',
      color: '#FF6B6B',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
      icon: '🔤'
    },
    {
      id: 2,
      title: '🔢 Numbers',
      description: 'Count from 1 to 10',
      color: '#4ECDC4',
      gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
      icon: '🔢'
    },
    {
      id: 3,
      title: '🎨 Colors',
      description: 'Discover the rainbow',
      color: '#45B7D1',
      gradient: 'linear-gradient(135deg, #45B7D1 0%, #96C93D 100%)',
      icon: '🎨'
    },
    {
      id: 4,
      title: '🐾 Animals',
      description: 'Meet friendly creatures',
      color: '#FFA726',
      gradient: 'linear-gradient(135deg, #FFA726 0%, #FF7043 100%)',
      icon: '🐾'
    },
    {
      id: 5,
      title: '🌍 Geography',
      description: 'Explore the world',
      color: '#AB47BC',
      gradient: 'linear-gradient(135deg, #AB47BC 0%, #8E24AA 100%)',
      icon: '🌍'
    },
    {
      id: 6,
      title: '🎵 Music',
      description: 'Make beautiful sounds',
      color: '#26A69A',
      gradient: 'linear-gradient(135deg, #26A69A 0%, #00897B 100%)',
      icon: '🎵'
    }
  ]

  return (
    <div className="App">
      <div className="floating-shapes">
        <div className="shape shape-1">⭐</div>
        <div className="shape shape-2">🌟</div>
        <div className="shape shape-3">✨</div>
        <div className="shape shape-4">💫</div>
        <div className="shape shape-5">⭐</div>
        <div className="shape shape-6">🌟</div>
      </div>
      
      <header className="App-header">
        <div className="title-container">
          <h1 className="main-title">🎓 Kids Learning App</h1>
          <div className="title-decoration">
            <span className="sparkle">✨</span>
            <span className="sparkle">✨</span>
            <span className="sparkle">✨</span>
          </div>
        </div>
        <p className="welcome-text">Welcome to your learning adventure!</p>
        <div className="mascot">🐱</div>
      </header>
      
      <main className="App-main">
        <div className="learning-section">
          <h2 className="section-title">📚 What would you like to learn today?</h2>
          <div className="learning-cards">
            {learningTopics.map((topic, index) => (
              <div
                key={topic.id}
                className={`card ${selectedCard === topic.id ? 'selected' : ''}`}
                style={{ 
                  '--card-color': topic.color,
                  '--card-gradient': topic.gradient
                } as React.CSSProperties}
                onClick={() => setSelectedCard(topic.id)}
                onMouseEnter={() => setSelectedCard(topic.id)}
                onMouseLeave={() => setSelectedCard(null)}
              >
                <div className="card-icon">{topic.icon}</div>
                <h3 className="card-title">{topic.title}</h3>
                <p className="card-description">{topic.description}</p>
                <div className="card-decoration">
                  <div className="card-sparkle">✨</div>
                  <div className="card-sparkle">✨</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <footer className="App-footer">
        <p>Made with ❤️ for little learners</p>
      </footer>
    </div>
  )
}

export default App
