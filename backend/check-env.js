// Quick script to check if environment variables are set
require('dotenv').config();

console.log('🔍 Checking environment variables...\n');

const required = {
  'MONGO_URL': process.env.MONGO_URL,
  'JWT_SECRET': process.env.JWT_SECRET,
};

const optional = {
  'PORT': process.env.PORT || '5000 (default)',
  'FRONTEND_URL': process.env.FRONTEND_URL || 'http://localhost:3000 (default)',
};

let allSet = true;

console.log('Required variables:');
Object.entries(required).forEach(([key, value]) => {
  if (value) {
    console.log(`  ✅ ${key}: ${value.substring(0, 20)}...`);
  } else {
    console.log(`  ❌ ${key}: NOT SET`);
    allSet = false;
  }
});

console.log('\nOptional variables:');
Object.entries(optional).forEach(([key, value]) => {
  console.log(`  ℹ️  ${key}: ${value}`);
});

if (!allSet) {
  console.log('\n❌ Missing required environment variables!');
  console.log('Please create a .env file in the backend directory with:');
  console.log('MONGO_URL=your_mongodb_connection_string');
  console.log('JWT_SECRET=your_secret_key_here');
  process.exit(1);
} else {
  console.log('\n✅ All required environment variables are set!');
  process.exit(0);
}

