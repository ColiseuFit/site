const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://okcjuxtboxbqpkracpgj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rY2p1eHRib3hicXBrcmFjcGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDE5NDcsImV4cCI6MjA5MDA3Nzk0N30.jcfNaTmQANgYA5r3cUy2TkPJgdxRJm6KFCSf9P2sTn8';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testLogin(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log(`Failed for ${email}:${password} - ${error.message}`);
      return false;
    }
    console.log(`SUCCESS for ${email}:${password}!`);
    return true;
  } catch (e) {
    console.log(`Error testing ${email}:${password}: ${e.message}`);
    return false;
  }
}

const passwords = ['coliseu123', 'atleta123', 'admin123', '12345678', 'coliseufit123', 'coliseu@123'];

(async () => {
  console.log('--- TESTING TESTER ---');
  for (const pw of passwords) {
    await testLogin('coliseutx@gmail.com', pw);
  }
})();
