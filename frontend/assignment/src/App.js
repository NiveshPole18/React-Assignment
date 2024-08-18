import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '20px' }}>How can we help?</h1>
        <SearchBar />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px' }}>
          <Card title="Branches" description="Abstract Branches lets you manage, version, and document your designs in one place." />
          <Card title="Manage your account" description="Configure your account settings, such as your email, profile details, and password." />
          <Card title="Manage organizations, teams, and projects" description="Use Abstract organizations, teams, and projects to organize your people and your work." />
          <Card title="Manage billing" description="Change subscriptions and payment details." />
          <Card title="Authenticate to Abstract" description="Set up and configure SSO, SCIM, and Just-in-Time provisioning." />
          <Card title="Abstract support" description="Get in touch with a human." />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;