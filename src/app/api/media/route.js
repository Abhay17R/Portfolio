import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // 1. Locate the public/media folder
    const mediaDir = path.join(process.cwd(), 'public', 'media');

    // 2. Check if folder exists
    if (!fs.existsSync(mediaDir)) {
      return NextResponse.json([]);
    }

    // 3. Read files
    const files = fs.readdirSync(mediaDir);

    // 4. Filter and Format Data
    const mediaFiles = files
      .filter(file => /\.(mp3|mp4|wav|mkv)$/i.test(file)) // Sirf media files
      .map((file, index) => {
        const isVideo = /\.(mp4|mkv|mov)$/i.test(file);
        return {
          id: index,
          title: file.replace(/\.[^/.]+$/, ""), // Extension hata ke naam dikhaye
          artist: "Unknown Artist", // Metadata read karna complex hai, filhal static
          url: `/media/${file}`,
          type: isVideo ? 'video' : 'audio',
          cover: isVideo 
            ? "https://img.icons8.com/fluency/48/video-file.png" 
            : "https://img.icons8.com/color/48/musical-notes.png"
        };
      });

    return NextResponse.json(mediaFiles);
  } catch (error) {
    return NextResponse.json({ error: "Failed to scan media" }, { status: 500 });
  }
}