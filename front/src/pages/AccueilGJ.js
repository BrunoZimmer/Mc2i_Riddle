import React from 'react';

function HomePage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif', backgroundColor: '#F2F2F2' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#4CAF50', color: '#FFF' }}>
        <h1>GreenJobs</h1>
        <nav>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
            <li style={{ cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s ease-in-out' }}>Home</li>
            <li style={{ cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s ease-in-out' }}>Jobs</li>
            <li style={{ cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s ease-in-out' }}>About</li>
            <li style={{ cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s ease-in-out' }}>Contact</li>
          </ul>
        </nav>
      </header>
      <main style={{ padding: '3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Find Your Green Job Today</h2>
        <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
          <label style={{ fontSize: '1.5rem' }}>Enter your location:</label>
          <input type="text" style={{ fontSize: '1.5rem', padding: '0.5rem', border: '1px solid #4CAF50', borderRadius: '5px' }} />
          <button type="submit" style={{ fontSize: '1.5rem', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', backgroundColor: '#4CAF50', color: '#FFF', cursor: 'pointer', transition: 'all 0.3s ease-in-out' }}>Search</button>
        </form>
      </main>
      <footer style={{ backgroundColor: '#4CAF50', color: '#FFF', padding: '1rem', textAlign: 'center' }}>
        <p>&copy; 2023 GreenJobs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
