import React from 'react';
import { supabase } from './services/supabaseClient';

function App() {
  const [modules, setModules] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchModules() {
      try {
        const { data, error } = await supabase
          .from('modules')
          .select('*')
          .order('day', { ascending: true });

        if (error) throw error;
        setModules(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchModules();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>English Learning Platform</h1>
        <p>Welcome to your intensive English learning journey!</p>
      </header>
      
      <main>
        <section className="modules-list">
          <h2>Available Modules</h2>
          {modules.length === 0 ? (
            <p>No modules available yet. Please check back later.</p>
          ) : (
            <div className="modules-grid">
              {modules.map((module) => (
                <div key={module.id} className="module-card">
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                  <div className="module-info">
                    <span>Day {module.day}</span>
                    <span>Level: {module.difficulty_level}</span>
                  </div>
                  <button onClick={() => console.log('Module selected:', module.id)}>
                    Start Learning
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
