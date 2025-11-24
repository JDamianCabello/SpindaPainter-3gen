# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Spinda Painter is a web tool for customizing and visualizing the unique spot patterns on the Pokemon Spinda based on its PID (Personal Identification). This is a tribute to the original Gen III Spinda Painter tool.

Live demo: https://jdamiancabello.github.io/SpindaPainter-3gen/

## Running the Project

This is a static HTML/CSS/JavaScript application with no build process:

```bash
# Simply open index.html in a browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

## Architecture

### File Structure

- `index.html` - Main application with embedded JavaScript for Spinda rendering and interaction
- `assets.js` - Base64-encoded sprite assets (Spinda base image and spot overlays)
- `pidUtils.js` - PID manipulation utilities (generation, validation, clipboard)
- `translations.js` - i18n support for Spanish and English

### Core Concepts

**PID System**: The 32-bit PID determines:
- Spot positions: Each of 4 spots uses 8 bits (4 for X offset, 4 for Y offset)
- Nature: `PID % 25` indexes into 25 natures
- Gender: `(PID & 0xFF) < 0x7F` = female
- Ability: `(PID & 1)` determines ability slot

**Rendering**: Uses two canvas layers:
- `baseCanvas` (64x64) - Base Spinda sprite
- `resultCanvas` (64x64) - Final composite with spots
- Spots are DOM elements for drag interaction, scaled 8x (`MAGNIFICATION = 8`)

**Coordinate System**: Spots have base coordinates (`BASE_COORDS`) and an origin offset (`ORIGIN`). The PID provides 0-15 pixel offsets from these base positions.

### Key Functions (in index.html)

- `setSpot()` - Positions a spot element based on PID bits
- `updatePIDFromSpots()` - Reverse: calculates PID from current spot positions
- `drawResult()` - Composites final Spinda image on result canvas
- `handleMouseMove()`/`handleTouchMove()` - Drag handling with grid snapping

### Global Variables

- `pid` - Current 8-character hex PID string
- `spots[]` - Array of {x, y} positions for 4 spots
- `currentLanguage` - 'es' or 'en' (defined in translations.js)
