
import React from 'react';
import Header from './components/Header';
import BreakingNewsTicker from './components/BreakingNewsTicker';
import TopicNavigation from './components/TopicNavigation';
import NewsGrid from './components/NewsGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreakingNewsTicker />
      <Header />
      <TopicNavigation />
      
      <main className="flex-grow">
        <NewsGrid />
      </main>

      <Footer />
    </div>
  );
}

export default App;
