import React from 'react';

const sampleModules = [
  {
    id: 1,
    day: 1,
    title: 'Basic Greetings',
    description: 'Learn common greetings and introductions',
    difficulty_level: 'beginner',
    vocabulary: ['hello', 'hi', 'good morning', 'good afternoon', 'goodbye', 'see you later'],
    activities: [
      {
        type: 'flashcard',
        content: { front: 'Hello', back: 'A common greeting' },
        points: 5
      },
      {
        type: 'translation',
        content: { text: 'Good morning, how are you?', answer: 'Buenos días, ¿cómo estás?' },
        points: 10
      }
    ]
  },
  {
    id: 2,
    day: 2,
    title: 'Restaurant Vocabulary',
    description: 'Essential words for ordering food',
    difficulty_level: 'beginner',
    vocabulary: ['menu', 'order', 'water', 'food', 'bill', 'waiter'],
    activities: [
      {
        type: 'flashcard',
        content: { front: 'Menu', back: 'List of available food items' },
        points: 5
      },
      {
        type: 'conversation',
        content: { scenario: 'Ordering food at a restaurant' },
        points: 15
      }
    ]
  }
];

function App() {
  const [modules, setModules] = React.useState(() => {
    const savedModules = localStorage.getItem('modules');
    return savedModules ? JSON.parse(savedModules) : sampleModules;
  });
  const [currentModule, setCurrentModule] = React.useState(null);
  const [currentActivity, setCurrentActivity] = React.useState(null);
  const [userPoints, setUserPoints] = React.useState(() => {
    const savedPoints = localStorage.getItem('userPoints');
    return savedPoints ? parseInt(savedPoints) : 0;
  });

  // Guardar módulos y puntos en localStorage cuando cambien
  React.useEffect(() => {
    localStorage.setItem('modules', JSON.stringify(modules));
    localStorage.setItem('userPoints', userPoints.toString());
  }, [modules, userPoints]);

  const startModule = (module) => {
    setCurrentModule(module);
    setCurrentActivity(module.activities[0]);
  };

  const completeActivity = () => {
    if (!currentActivity || !currentModule) return;
    
    setUserPoints(prev => prev + currentActivity.points);
    
    const currentIndex = currentModule.activities.indexOf(currentActivity);
    if (currentIndex < currentModule.activities.length - 1) {
      setCurrentActivity(currentModule.activities[currentIndex + 1]);
    } else {
      alert('¡Módulo completado! Ganaste puntos extra.');
      setUserPoints(prev => prev + 20); // Bonus por completar el módulo
      setCurrentModule(null);
      setCurrentActivity(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>English Learning Platform</h1>
        <p>Welcome to your intensive English learning journey!</p>
        <div className="user-points">
          Points: {userPoints}
        </div>
      </header>
      
      <main>
        {!currentModule ? (
          <section className="modules-list">
            <h2>Available Modules</h2>
            <div className="modules-grid">
              {modules.map((module) => (
                <div key={module.id} className="module-card">
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                  <div className="module-info">
                    <span>Day {module.day}</span>
                    <span>Level: {module.difficulty_level}</span>
                  </div>
                  <button onClick={() => startModule(module)}>
                    Start Learning
                  </button>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="activity-section">
            <h2>{currentModule.title} - Activity</h2>
            <div className="activity-card">
              {currentActivity.type === 'flashcard' ? (
                <div className="flashcard">
                  <h3>{currentActivity.content.front}</h3>
                  <p>{currentActivity.content.back}</p>
                </div>
              ) : (
                <div className="translation">
                  <h3>Translate:</h3>
                  <p>{currentActivity.content.text}</p>
                  <p>Answer: {currentActivity.content.answer}</p>
                </div>
              )}
              <button onClick={completeActivity}>
                Complete Activity ({currentActivity.points} points)
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
