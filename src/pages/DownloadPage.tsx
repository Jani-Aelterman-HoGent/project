import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const DownloadPage: React.FC = () => {
  const [link, setLink] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState('');

  useEffect(() => {
    const fetchPlaylists = async () => {
      const response = await axios.get('http://localhost:5000/playlists');
      setPlaylists(response.data);
    };

    fetchPlaylists();
  }, []);

  const handleDownloadMusic = async () => {
    try {
      const response = await axios.post('http://localhost:5000/music', { link });
      if (response.status === 201) {
        alert('Music downloaded successfully');
        setLink('');
      }
    } catch (error) {
      alert('Failed to download music');
    }
  };

  const handleDownloadPlaylist = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/playlists/${selectedPlaylist}/download`);
      if (response.status === 200) {
        alert('Playlist downloaded successfully');
        setSelectedPlaylist('');
      }
    } catch (error) {
      alert('Failed to download playlist');
    }
  };

  return (
    <div>
      <h2>Download Muziek of Playlist</h2>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="YouTube Link"
          variant="outlined"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <Button variant="contained" onClick={handleDownloadMusic}>
          Download Muziek
        </Button>
        <FormControl fullWidth>
          <InputLabel>Select Playlist</InputLabel>
          <Select
            value={selectedPlaylist}
            onChange={(e: SelectChangeEvent) => setSelectedPlaylist(e.target.value)}
          >
            {playlists.map((playlist: any) => (
              <MenuItem key={playlist.id} value={playlist.id}>
                {playlist.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" onClick={handleDownloadPlaylist}>
          Download Playlist
        </Button>
      </Box>
    </div>
  );
};

export default DownloadPage;