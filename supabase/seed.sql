-- Insert sample modules
INSERT INTO modules (day, title, description, difficulty_level, vocabulary, activities) VALUES
(1, 'Basic Greetings', 'Learn common greetings and introductions', 'beginner', 
    ARRAY['hello', 'hi', 'good morning', 'good afternoon', 'goodbye', 'see you later'],
    '[
        {"type": "flashcard", "content": {"front": "Hello", "back": "A common greeting"}, "points": 5},
        {"type": "translation", "content": {"text": "Good morning, how are you?", "answer": "Buenos días, ¿cómo estás?"}, "points": 10}
    ]'::jsonb
),
(2, 'Restaurant Vocabulary', 'Essential words for ordering food', 'beginner',
    ARRAY['menu', 'order', 'water', 'food', 'bill', 'waiter'],
    '[
        {"type": "flashcard", "content": {"front": "Menu", "back": "List of available food items"}, "points": 5},
        {"type": "conversation", "content": {"scenario": "Ordering food at a restaurant"}, "points": 15}
    ]'::jsonb
);

-- Insert sample achievements
INSERT INTO achievements (name, description, icon_url, points) VALUES
('First Step', 'Complete your first module', 'https://example.com/badge1.png', 50),
('Quick Learner', 'Complete a module with 100% score', 'https://example.com/badge2.png', 100);
