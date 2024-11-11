import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import youtubedl from 'youtube-dl-exec';
import path from 'path';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.post('/music', async (req, res) => {
  const { title, artist, album, link } = req.body;
  try {
    const newMusic = await prisma.music.create({
      data: { title, artist, album, link },
    });

    // Download the video using youtube-dl-exec
    youtubedl(link, {
      output: path.join(__dirname, `../downloads/${title}.%(ext)s`),
      exec: 'yt-dlp',
    }).then(output => {
      console.log(output);
    }).catch(err => {
      console.error(err);
    });

    res.status(201).json(newMusic);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add music' });
  }
});

app.post('/playlists', async (req, res) => {
  const { name } = req.body;
  try {
    const newPlaylist = await prisma.playlist.create({
      data: { name },
    });
    res.status(201).json(newPlaylist);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create playlist' });
  }
});

app.post('/playlists/:id/music', async (req, res) => {
  const { id } = req.params;
  const { musicId } = req.body;
  try {
    const updatedPlaylist = await prisma.playlist.update({
      where: { id: Number(id) },
      data: {
        music: {
          connect: { id: Number(musicId) },
        },
      },
    });
    res.status(200).json(updatedPlaylist);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add music to playlist' });
  }
});

app.get('/playlists/:id/download', async (req, res) => {
  const { id } = req.params;
  try {
    const playlist = await prisma.playlist.findUnique({
      where: { id: Number(id) },
      include: { music: true },
    });

    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }

    // Logic to download the playlist
    // For simplicity, we just return the playlist data
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ error: 'Failed to download playlist' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});