const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://nfaeuzgznyhiqtqrgzkn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mYWV1emd6bnloaXF0cXJnemtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNTQxMjksImV4cCI6MjA1NDczMDEyOX0.JC8czIyds5zmyC6qWYQ4ti1oReEqkBeq1KAj8Y_1s6w'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
    try {
        const { data, error } = await supabase.from('users').select('*').limit(1)
        if (error) throw error
        console.log('Supabase connection successful!')
        console.log('Data:', data)
    } catch (error) {
        console.error('Error connecting to Supabase:', error.message)
    }
}

testConnection()
