import React, { useState } from 'react';
import axios from 'axios';
import './MusicForm.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const MusicForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/music', {
        title,
        artist,
        album,
        link,
      });
      if (response.status === 201) {
        alert('Music added successfully');
        setTitle('');
        setArtist('');
        setAlbum('');
        setLink('');
      }
    } catch (error) {
      alert('Failed to add music');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="Title" variant="outlined" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <br />
      <TextField id="outlined-basic" label="Artist" variant="outlined" type="text" value={artist} onChange={(e) => setArtist(e.target.value)} required />
      <br />
      <TextField id="outlined-basic" label="Album" variant="outlined" type="text" value={album} onChange={(e) => setAlbum(e.target.value)} required />
      <br />
      <TextField id="outlined-basic" label="Link" variant="outlined" type="text" value={link} onChange={(e) => setLink(e.target.value)} required />
      <br />
      {/* <button type="submit">Add Music</button> */}
      <Button variant="contained">Add Music</Button>
    </form>
  );
};

export default MusicForm;