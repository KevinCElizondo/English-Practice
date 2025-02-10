export type User = {
  id: string;
  email: string;
  display_name: string | null;
  avatar_url: string | null;
  level: number;
  points: number;
  created_at: string;
  updated_at: string;
}

export type Module = {
  id: string;
  day: number;
  title: string;
  description: string;
  difficulty_level: 'beginner' | 'intermediate' | 'advanced';
  vocabulary: string[];
  activities: Activity[];
  created_at: string;
  updated_at: string;
}

export type Activity = {
  type: 'flashcard' | 'translation' | 'conversation' | 'quiz';
  content: any;
  points: number;
}

export type Progress = {
  id: string;
  user_id: string;
  module_id: string;
  completed: boolean;
  score: number | null;
  completed_at: string | null;
  created_at: string;
}

export type Evaluation = {
  id: string;
  user_id: string;
  module_id: string;
  score: number;
  feedback: string | null;
  created_at: string;
}

export type Achievement = {
  id: string;
  name: string;
  description: string;
  icon_url: string | null;
  points: number;
  created_at: string;
}

export type UserAchievement = {
  id: string;
  user_id: string;
  achievement_id: string;
  earned_at: string;
}
