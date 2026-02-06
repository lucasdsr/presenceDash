import sharp from 'sharp'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const svgPath = join(root, 'public', 'assets', 'map', 'map-no-pins.svg')
const outDir = join(root, 'public', 'assets', 'map')

const W = 952
const H = 632

const svg = readFileSync(svgPath)

await sharp(svg)
  .resize(W, H)
  .webp({ quality: 82 })
  .toFile(join(outDir, 'map-no-pins.webp'))

await sharp(svg)
  .resize(W * 2, H * 2)
  .webp({ quality: 82 })
  .toFile(join(outDir, 'map-no-pins@2x.webp'))
