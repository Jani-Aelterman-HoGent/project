import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MusicForm from './components/MusicForm';
import PlaylistForm from './components/PlaylistForm';
import AddMusicToPlaylistForm from './components/AddMusicToPlaylistForm';
import NavigationBar from './components/NavigationBar';
import DownloadPage from './pages/DownloadPage';

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/create-playlist" element={<PlaylistForm />} />
        <Route path="/add-music" element={<AddMusicToPlaylistForm />} />
        <Route path="/download-playlist" element={<DownloadPage />} />
        <Route path="/" element={<MusicForm />} />
      </Routes>
    </Router>
  );
};

export default App;