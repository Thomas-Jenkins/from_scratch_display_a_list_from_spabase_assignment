const SUPABASE_URL = 'https://sushgnkqkgfdkwxudpdy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1c2hnbmtxa2dmZGt3eHVkcGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAwNjEyMDEsImV4cCI6MTk3NTYzNzIwMX0.PWaLx9CyI6jaOzBx-1JPnId6_IrMlC4rYSEFZtsLwPw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getJobs() {
    const response = await client.from('jobs').select('*');
    return response.data;
}

export async function getJob(id) {
    const response = await client.from('jobs').select('*').match({ id }).single();
    return response.data; 
}
