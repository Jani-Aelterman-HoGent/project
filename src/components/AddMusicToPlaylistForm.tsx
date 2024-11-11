import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MusicForm.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const AddMusicToPlaylistForm: React.FC = () => {
  const [playlists, setPlaylists] = useState([]);
  const [music, setMusic] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState('');
  const [selectedMusic, setSelectedMusic] = useState('');

  useEffect(() => {
    const fetchPlaylists = async () => {
      const response = await axios.get('http://localhost:5000/playlists');
      setPlaylists(response.data);
    };

    const fetchMusic = async () => {
      const response = await axios.get('http://localhost:5000/music');
      setMusic(response.data);
    };

    fetchPlaylists();
    fetchMusic();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/playlists/${selectedPlaylist}/music`, {
        musicId: selectedMusic,
      });
      if (response.status === 200) {
        alert('Music added to playlist successfully');
        setSelectedPlaylist('');
        setSelectedMusic('');
      }
    } catch (error) {
      alert('Failed to add music to playlist');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Playlist:
        <select value={selectedPlaylist} onChange={(e) => setSelectedPlaylist(e.target.value)} required>
          <option value="">Select a playlist</option>
          {playlists.map((playlist: any) => (
            <option key={playlist.id} value={playlist.id}>
              {playlist.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Select Music:
        <select value={selectedMusic} onChange={(e) => setSelectedMusic(e.target.value)} required>
          <option value="">Select music</option>
          {music.map((track: any) => (
            <option key={track.id} value={track.id}>
              {track.title}
            </option>
          ))}
        </select>
      </label>
      <Button variant="contained">Add Music to Playlist</Button>
    </form>
  );
};

export default AddMusicToPlaylistForm;