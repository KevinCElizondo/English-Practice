const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

const supabaseUrl = 'https://nfaeuzgznyhiqtqrgzkn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mYWV1emd6bnloaXF0cXJnemtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNTQxMjksImV4cCI6MjA1NDczMDEyOX0.JC8czIyds5zmyC6qWYQ4ti1oReEqkBeq1KAj8Y_1s6w'

const supabase = createClient(supabaseUrl, supabaseKey)

async function executeSQL(filePath) {
    try {
        const sql = fs.readFileSync(filePath, 'utf8')
        const { data, error } = await supabase.rpc('exec_sql', { sql_query: sql })
        
        if (error) throw error
        console.log(`Successfully executed ${path.basename(filePath)}`)
        return true
    } catch (error) {
        console.error(`Error executing ${path.basename(filePath)}:`, error.message)
        return false
    }
}

async function setupDatabase() {
    console.log('Starting database setup...')
    
    // Execute schema.sql
    const schemaPath = path.join(__dirname, '../supabase/schema.sql')
    await executeSQL(schemaPath)
    
    // Execute seed.sql
    const seedPath = path.join(__dirname, '../supabase/seed.sql')
    await executeSQL(seedPath)
    
    console.log('Database setup completed!')
}

setupDatabase()
