# Sound Files

This directory contains audio files for the MacOS 9 retro interface.

## Required Files

### click.mp3
A classic Mac click sound effect for navigation and button clicks.

**Where to get it:**
- Download from: https://freesound.org/ (search for "Mac click" or "UI click")
- Or use: https://soundbible.com/ (search for "click sound")
- Recommended: A short (50-150ms), subtle click sound similar to MacOS 9 interface sounds

**Alternative:**
You can create your own click sound or use any short click/beep sound effect.

## Installation

1. Download a click sound effect (MP3 format)
2. Rename it to `click.mp3`
3. Place it in this directory (`/public/sounds/click.mp3`)

The sound will automatically play when users:
- Click navigation links in the navbar
- Click buttons (Download Resume, project links, etc.)

**Note:** If the sound file is missing, the site will work normally without audio (the code silently fails if audio can't load).
