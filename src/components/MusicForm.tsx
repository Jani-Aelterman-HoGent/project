import React, { useState } from 'react';
import axios from 'axios';
import './MusicForm.css';

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
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <br />
      <label>
        Artist:
        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} required />
      </label>
      <br />
      <label>
        Album:
        <input type="text" value={album} onChange={(e) => setAlbum(e.target.value)} required />
      </label>
      <br />
      <label>
        Link:
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Add Music</button>
    </form>
  );
};

export default MusicForm;