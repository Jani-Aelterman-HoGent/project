import React, { useState } from 'react';
import axios from 'axios';
import './MusicForm.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const PlaylistForm: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/playlists', { name });
      if (response.status === 201) {
        alert('Playlist created successfully');
        setName('');
      }
    } catch (error) {
      alert('Failed to create playlist');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="Playlist Name" variant="outlined" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <br />
      <Button variant="contained">Create Playlist</Button>
    </form>
  );
};

export default PlaylistForm;