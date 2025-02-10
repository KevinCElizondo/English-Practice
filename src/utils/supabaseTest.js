import { supabase } from '../services/supabaseClient';

export const testSupabaseConnection = async () => {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('count')
            .single();
            
        if (error) throw error;
        console.log('Supabase connection successful!');
        return true;
    } catch (error) {
        console.error('Supabase connection error:', error.message);
        return false;
    }
};
