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
    /*youtubedl(link, {
      output: path.join(__dirname, `../downloads/${title}.%(ext)s`),
      exec: 'yt-dlp', // Explicitly set the path to yt-dlp
    }).then(output => {
      console.log(output);
    }).catch(err => {
      console.error(err);
    });*/

    //const youtubedl = require('youtube-dl-exec')

/*youtubedl('https://www.youtube.com/watch?v=6xKWiCMKKJg', {
  dumpSingleJson: true,
  noCheckCertificates: true,
  noWarnings: true,
  preferFreeFormats: true,
  addHeader: ['referer:youtube.com', 'user-agent:googlebot']
});*/

    //youtubedl('https://www.youtube.com/watch?v=6xKWiCMKKJg');

    /*import {exec} from 'child_process'
//if you don't use module use this line instead:
// const { exec } = require('child_process')

exec('yt-dlp "https://music.youtube.com/watch?v=LA4MvUJHFbQ&si=to-mmxm1VDtbhXVy"', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
  }
  else if (stderr) {
    console.log(`stderr: ${stderr}`);
  }
  else {
    console.log(stdout);
  }
})*/

    res.status(201).json(newMusic);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add music' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});