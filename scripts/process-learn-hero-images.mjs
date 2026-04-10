/**
 * Resize generated Learn hero JPEGs to manifest dimensions (cover crop, center).
 * Usage: node scripts/process-learn-hero-images.mjs
 * Expects sources under tmp/learn-hero-sources/ (see jobs below).
 */
import sharp from 'sharp'
import { existsSync } from 'fs'
import { mkdir } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const srcDir = join(root, 'tmp', 'learn-hero-sources')

const jobs = [
  {
    input: 'learn-hub.jpg',
    output: join(root, 'public', 'images', 'learn', 'learn-hub-hero-orthodox-manuscript.jpg'),
    width: 1600,
    height: 1040,
  },
  {
    input: 'scripture-hero.jpg',
    output: join(root, 'public', 'images', 'learn', 'scripture-reading-path-manuscript.jpg'),
    width: 1440,
    height: 880,
  },
  {
    input: 'liturgy-hero.jpg',
    output: join(root, 'public', 'images', 'learn', 'liturgy-qidase-hero.jpg'),
    width: 1440,
    height: 880,
  },
  {
    input: 'church-history-hero.jpg',
    output: join(root, 'public', 'images', 'learn', 'church-history-sacred-map.jpg'),
    width: 1440,
    height: 880,
  },
  {
    input: 'church-year-hero.jpg',
    output: join(root, 'public', 'images', 'learn', 'church-year-cycle-hero.jpg'),
    width: 1440,
    height: 880,
  },
  {
    input: 'teachings-hero.jpg',
    output: join(root, 'public', 'images', 'learn', 'teachings-sacraments-hero-seven-mysteries.jpg'),
    width: 1200,
    height: 900,
  },
]

async function main() {
  await mkdir(dirname(jobs[0].output), { recursive: true })

  for (const job of jobs) {
    const inputPath = join(srcDir, job.input)
    if (!existsSync(inputPath)) {
      console.error(`Missing source: ${inputPath}`)
      process.exitCode = 1
      continue
    }
    await sharp(inputPath)
      .resize(job.width, job.height, {
        fit: 'cover',
        position: 'centre',
      })
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(job.output)
    console.log(`Wrote ${job.output} (${job.width}×${job.height})`)
  }
}

main()
