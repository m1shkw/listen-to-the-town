const sceneSettings = {
  height: 826,
  houseHeight: 500,
  houseBorder: 10,
  noteHeight: 60,
  moonTop: 60,
  moonBottom: 420,
  fogMinHeight: 37,
  fogMaxHeight: 500,
  rainTop: 60,
  filtersHeight: 74
}

const layouts = {
  desktop: {
    width: 1440,
    minHeight: 900,
    houseWidth: 180,
    moonLeft: 1070,
    moonSize: 100,
    houses: [
      { type: 'big', x: 30, y: 460 },
      { type: 'small', x: 230, y: 341 },
      { type: 'big', x: 430, y: 591 },
      { type: 'big', x: 630, y: 342 },
      { type: 'small', x: 830, y: 471 },
      { type: 'big', x: 1030, y: 591 },
      { type: 'big', x: 1230, y: 342 }
    ]
  },
  tablet: {
    width: 768,
    minHeight: 900,
    houseWidth: 163,
    moonLeft: 560,
    moonSize: 100,
    houses: [
      { type: 'big', x: 30, y: 461 },
      { type: 'small', x: 212, y: 341 },
      { type: 'big', x: 393, y: 591 },
      { type: 'big', x: 574, y: 341 }
    ]
  },
  mobile: {
    stretch: true,
    joined: true,
    width: 390,
    minHeight: 770,
    moonLeft: 295,
    moonSize: 70,
    houses: [
      { type: 'small', y: 413 },
      { type: 'big', y: 497 },
      { type: 'small', y: 363 }
    ]
  }
}

const houseTypes = {
  big: { columns: 2, rows: 4, rowHeight: 120 },
  small: { columns: 3, rows: 6, rowHeight: 80 }
}

const chords = {
  Cmaj9: ['C3', 'G3', 'B3', 'D4', 'E4'],
  Fmaj7: ['F2', 'C3', 'E3', 'A3'],
  Dm9: ['D3', 'F3', 'A3', 'C4', 'E4'],
  G69: ['G2', 'D3', 'E3', 'A3', 'B3'],
  Am9: ['A2', 'E3', 'G3', 'B3', 'C4']
}

// prettier-ignore
const modes = {
  day: {
    bpm: 100,
    scale: ['C4', 'D4', 'E4', 'G4', 'A4', 'C5', 'D5'],
    chords: ['Cmaj9', 'Cmaj9', 'Fmaj7', 'Fmaj7'],
    beat: [
      'C1', null, null, null, 'C1', null, null, null,
      'C1', null, null, null, 'C1', null, 'C1', null
    ],
    cityVolume: -14,
    moonVolume: -36,
    windowsSynth: {
      harmonicity: 1,
      modulationIndex: 2,
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.002, decay: 0.2, sustain: 0, release: 0.2 },
      modulationEnvelope: { attack: 0.002, decay: 0.1, sustain: 0, release: 0.1 }
    },
    chorusWet: 0,
    delayWet: 0.1,
    filterFrequency: 9000,
    reverbWet: 0.15,
    rain: 0.15,
    lightWindows: [
      { house: 0, column: 0, row: 1 },
      { house: 0, column: 1, row: 0 },
      { house: 1, column: 1, row: 0 },
      { house: 1, column: 2, row: 4 },
      { house: 2, column: 1, row: 0 },
      { house: 3, column: 0, row: 0 },
      { house: 3, column: 1, row: 1 },
      { house: 4, column: 0, row: 3 },
      { house: 4, column: 2, row: 1 },
      { house: 5, column: 0, row: 1 },
      { house: 5, column: 1, row: 0 },
      { house: 6, column: 0, row: 2 },
      { house: 6, column: 1, row: 0 }
    ]
  },
  evening: {
    bpm: 76,
    scale: ['D4', 'E4', 'F4', 'A4', 'B4', 'C5', 'D5'],
    chords: ['Dm9', 'Dm9', 'G69', 'G69'],
    beat: [
      'C1', null, null, null, null, null, 'C1', null,
      null, null, 'C1', null, null, null, null, null
    ],
    cityVolume: -24,
    moonVolume: -36,
    windowsSynth: {
      harmonicity: 1,
      modulationIndex: 0.8,
      oscillator: { type: 'sine' },
      envelope: { attack: 0.02, decay: 0.5, sustain: 0.3, release: 1 },
      modulationEnvelope: { attack: 0.02, decay: 0.3, sustain: 0.2, release: 0.5 }
    },
    chorusWet: 0.6,
    delayWet: 0.3,
    filterFrequency: 3500,
    reverbWet: 0.35,
    rain: 0.3,
    lightWindows: [
      { house: 0, column: 0, row: 0 },
      { house: 0, column: 0, row: 2 },
      { house: 1, column: 0, row: 3 },
      { house: 1, column: 1, row: 1 },
      { house: 1, column: 1, row: 4 },
      { house: 2, column: 0, row: 1 },
      { house: 2, column: 1, row: 0 },
      { house: 3, column: 0, row: 1 },
      { house: 3, column: 1, row: 3 },
      { house: 4, column: 0, row: 2 },
      { house: 4, column: 1, row: 1 },
      { house: 4, column: 1, row: 4 },
      { house: 4, column: 2, row: 3 },
      { house: 5, column: 0, row: 1 },
      { house: 5, column: 1, row: 0 },
      { house: 6, column: 0, row: 2 },
      { house: 6, column: 1, row: 0 }
    ]
  },
  night: {
    bpm: 56,
    scale: ['A3', 'C4', 'D4', 'E4', 'G4', 'A4', 'C5'],
    chords: ['Am9', 'Am9', 'Fmaj7', 'Fmaj7'],
    beat: [
      ['D1', 'D1'], null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null
    ],
    cityVolume: -36,
    moonVolume: -28,
    windowsSynth: {
      harmonicity: 3,
      modulationIndex: 5,
      oscillator: { type: 'sine' },
      envelope: { attack: 0.002, decay: 0.8, sustain: 0, release: 0.8 },
      modulationEnvelope: { attack: 0.002, decay: 0.3, sustain: 0, release: 0.2 }
    },
    chorusWet: 0.15,
    delayWet: 0.35,
    filterFrequency: 2500,
    reverbWet: 0.6,
    rain: 0.6,
    lightWindows: [
      { house: 0, column: 0, row: 1 },
      { house: 1, column: 1, row: 2 },
      { house: 3, column: 0, row: 0 },
      { house: 4, column: 1, row: 1 },
      { house: 5, column: 0, row: 1 }
    ]
  }
}

const windowsVoice = {
  synth: { node: null },
  chorus: {
    settings: {
      wet: 0,
      frequency: 1.5,
      delayTime: 3.5,
      depth: 0.7,
      spread: 180
    },
    node: null
  },
  delay: {
    settings: { wet: 0.1, delayTime: '8n.', feedback: 0.3 },
    node: null
  },
  filter: {
    settings: { type: 'lowpass', frequency: 9000, rolloff: -12 },
    node: null
  },
  reverb: {
    settings: { wet: 0.15, decay: 5, preDelay: 0.02 },
    node: null
  },
  channel: {
    settings: { volume: -10, pan: 0 },
    node: null
  },
  sequence: { node: null }
}

const dropsVoice = {
  synth: {
    settings: {
      volume: -4,
      oscillator: { type: 'sine' },
      envelope: { attack: 0.002, decay: 0.3, sustain: 0, release: 0.4 }
    },
    node: null
  },
  delay: {
    settings: { wet: 0.3, delayTime: '8n', feedback: 0.35 },
    node: null
  },
  reverb: {
    settings: { wet: 0.4, decay: 6, preDelay: 0.02 },
    node: null
  },
  channel: {
    settings: { volume: -10, pan: 0 },
    node: null
  },
  loop: { node: null }
}

const moonVoice = {
  synth: {
    settings: {
      volume: -8,
      oscillator: { type: 'fattriangle', count: 3, spread: 18 },
      envelope: { attack: 2, decay: 1, sustain: 0.7, release: 4 }
    },
    node: null
  },
  filter: {
    settings: { type: 'lowpass', frequency: 1500, rolloff: -12 },
    node: null
  },
  reverb: {
    settings: { wet: 0.4, decay: 8, preDelay: 0.1 },
    node: null
  },
  channel: {
    settings: { volume: 0, pan: 0 },
    node: null
  },
  sequence: { node: null }
}

const cityVoice = {
  noise: {
    settings: { type: 'brown', volume: -36 },
    node: null
  },
  autoFilter: {
    settings: {
      frequency: 0.07,
      baseFrequency: 160,
      octaves: 3.5,
      depth: 0.7
    },
    node: null
  },
  channel: {
    settings: { volume: -4, pan: 0 },
    node: null
  }
}

const beatVoice = {
  synth: {
    settings: {
      volume: -2,
      pitchDecay: 0.04,
      octaves: 4,
      envelope: { attack: 0.002, decay: 0.4, sustain: 0, release: 0.3 }
    },
    node: null
  },
  filter: {
    settings: { type: 'lowpass', frequency: 400, rolloff: -24 },
    node: null
  },
  channel: {
    settings: { volume: -10, pan: 0 },
    node: null
  },
  sequence: { node: null }
}

const voices = {
  windows: windowsVoice,
  drops: dropsVoice,
  moon: moonVoice,
  city: cityVoice,
  beat: beatVoice
}

let layout = layouts.desktop
let sceneScale = 1
let sceneWidth = 1440
let stretch = 1
let currentMode = 'day'
let fogAmount = 0
let moonHeight = 0.75
let soundStarted = false
let paused = true
let draggingMoon = false
let draggingFog = false
let steps = []

function initWindowsVoice() {
  const stepNumbers = []

  for (let i = 0; i < steps.length; i++) {
    stepNumbers.push(i)
  }

  windowsVoice.synth.node = new Tone.PolySynth(Tone.FMSynth)
  windowsVoice.chorus.node = new Tone.Chorus(
    windowsVoice.chorus.settings
  ).start()
  windowsVoice.delay.node = new Tone.FeedbackDelay(windowsVoice.delay.settings)
  windowsVoice.filter.node = new Tone.Filter(windowsVoice.filter.settings)
  windowsVoice.reverb.node = new Tone.Reverb(windowsVoice.reverb.settings)
  windowsVoice.channel.node = new Tone.Channel(
    windowsVoice.channel.settings
  ).toDestination()

  windowsVoice.synth.node.chain(
    windowsVoice.chorus.node,
    windowsVoice.delay.node,
    windowsVoice.filter.node,
    windowsVoice.reverb.node,
    windowsVoice.channel.node
  )

  windowsVoice.sequence.node = new Tone.Sequence(
    (time, step) => {
      if (!voiceOn('windows')) return

      const notes = []
      const playingWindows = []

      steps[step].forEach((windowElement) => {
        if (windowElement.classList.contains('on')) {
          notes.push(windowNote(windowElement))
          playingWindows.push(windowElement)
        }
      })

      if (notes.length === 0) return

      windowsVoice.synth.node.triggerAttackRelease(notes, '8n', time)

      Tone.getDraw().schedule(() => {
        playingWindows.forEach((windowElement) => flashWindow(windowElement))
      }, time)
    },
    stepNumbers,
    '8n'
  ).start(0)
}

function initDropsVoice() {
  dropsVoice.synth.node = new Tone.Synth(dropsVoice.synth.settings)
  dropsVoice.delay.node = new Tone.FeedbackDelay(dropsVoice.delay.settings)
  dropsVoice.reverb.node = new Tone.Reverb(dropsVoice.reverb.settings)
  dropsVoice.channel.node = new Tone.Channel(
    dropsVoice.channel.settings
  ).toDestination()

  dropsVoice.synth.node.chain(
    dropsVoice.delay.node,
    dropsVoice.reverb.node,
    dropsVoice.channel.node
  )

  dropsVoice.loop.node = new Tone.Loop((time) => {
    Tone.getDraw().schedule(() => {
      dropFrom(Math.random() * sceneWidth, sceneSettings.rainTop)
    }, time)
  }, '8n').start(0)
}

function initMoonVoice() {
  moonVoice.synth.node = new Tone.PolySynth(
    Tone.Synth,
    moonVoice.synth.settings
  )
  moonVoice.filter.node = new Tone.Filter(moonVoice.filter.settings)
  moonVoice.reverb.node = new Tone.Reverb(moonVoice.reverb.settings)
  moonVoice.channel.node = new Tone.Channel(
    moonVoice.channel.settings
  ).toDestination()

  moonVoice.synth.node.chain(
    moonVoice.filter.node,
    moonVoice.reverb.node,
    moonVoice.channel.node
  )

  moonVoice.sequence.node = new Tone.Sequence(
    (time, chord) => {
      moonVoice.synth.node.triggerAttackRelease(chords[chord], '1m', time)
    },
    modes[currentMode].chords,
    '1m'
  ).start(0)
}

function initCityVoice() {
  cityVoice.noise.node = new Tone.Noise(cityVoice.noise.settings)
  cityVoice.autoFilter.node = new Tone.AutoFilter(
    cityVoice.autoFilter.settings
  ).start()
  cityVoice.channel.node = new Tone.Channel(
    cityVoice.channel.settings
  ).toDestination()

  cityVoice.noise.node.chain(cityVoice.autoFilter.node, cityVoice.channel.node)
  cityVoice.noise.node.start()
}

function initBeatVoice() {
  beatVoice.synth.node = new Tone.MembraneSynth(beatVoice.synth.settings)
  beatVoice.filter.node = new Tone.Filter(beatVoice.filter.settings)
  beatVoice.channel.node = new Tone.Channel(
    beatVoice.channel.settings
  ).toDestination()

  beatVoice.synth.node.chain(beatVoice.filter.node, beatVoice.channel.node)

  beatVoice.sequence.node = new Tone.Sequence(
    (time, note) => {
      beatVoice.synth.node.triggerAttackRelease(note, '16n', time)
    },
    modes[currentMode].beat,
    '8n'
  ).start(0)
}

function startSound() {
  Tone.start()

  initWindowsVoice()
  initDropsVoice()
  initMoonVoice()
  initCityVoice()
  initBeatVoice()

  soundStarted = true

  changeMode(currentMode)
  muteVoices()

  Tone.getTransport().start()
}

function changeMode(mode) {
  const settings = modes[mode]
  currentMode = mode
  document.body.className = mode

  document.querySelectorAll('.FilterButton').forEach((button) => {
    button.classList.toggle('active', button.dataset.mode === mode)
  })

  if (!soundStarted) return

  Tone.getTransport().bpm.rampTo(settings.bpm, 2)
  windowsVoice.synth.node.set(settings.windowsSynth)
  windowsVoice.chorus.node.wet.rampTo(settings.chorusWet, 1)
  windowsVoice.delay.node.wet.rampTo(settings.delayWet, 1)
  moonVoice.sequence.node.events = settings.chords
  beatVoice.sequence.node.events = settings.beat
  cityVoice.noise.node.volume.rampTo(settings.cityVolume, 2)
  dropsVoice.loop.node.probability = settings.rain

  changeFog(fogAmount)
  changeMoonHeight(moonHeight)
}

function lightWindows(mode) {
  const houseElements = document.querySelectorAll('.House')

  document.querySelectorAll('.Window').forEach((windowElement) => {
    windowElement.classList.remove('on')
  })

  modes[mode].lightWindows.forEach((lightWindow) => {
    const house = layout.houses[lightWindow.house]

    if (!house) return

    const houseType = houseTypes[house.type]

    if (lightWindow.column >= houseType.columns) return
    if (lightWindow.row >= houseType.rows) return

    const houseElement = houseElements[lightWindow.house]
    const index = lightWindow.row * houseType.columns + lightWindow.column

    houseElement.children[index].classList.add('on')
  })
}

function changeFog(amount) {
  const settings = modes[currentMode]
  fogAmount = amount

  if (!soundStarted) return

  windowsVoice.reverb.node.wet.rampTo(
    settings.reverbWet + (0.95 - settings.reverbWet) * amount,
    0.3
  )
  windowsVoice.filter.node.frequency.rampTo(
    settings.filterFrequency * (1 - 0.85 * amount),
    0.3
  )
  dropsVoice.reverb.node.wet.rampTo(0.4 + 0.55 * amount, 0.3)
  moonVoice.reverb.node.wet.rampTo(0.4 + 0.5 * amount, 0.3)
}

function changeMoonHeight(height) {
  const settings = modes[currentMode]
  moonHeight = height

  if (!soundStarted) return

  moonVoice.synth.node.volume.rampTo(settings.moonVolume + 26 * height, 0.3)
  moonVoice.filter.node.frequency.rampTo(300 + 2700 * height, 0.3)
}

function muteVoices() {
  if (!soundStarted) return

  document.querySelectorAll('.VoiceButton').forEach((button) => {
    const voice = voices[button.dataset.voice]
    let volume = voice.channel.settings.volume

    if (!button.classList.contains('active')) volume = -Infinity

    voice.channel.node.volume.linearRampTo(volume, 0.5)
  })
}

function windowNote(windowElement) {
  const scale = modes[currentMode].scale
  let index = Number(windowElement.dataset.level) - 1

  if (index < 0) index = 0
  if (index > scale.length - 1) index = scale.length - 1

  return scale[index]
}

function flashWindow(windowElement) {
  windowElement.classList.add('playing')
  setTimeout(() => windowElement.classList.remove('playing'), 150)
}

function playDrop(x) {
  if (!soundStarted || paused) return

  const scale = modes[currentMode].scale
  let index = Math.floor((x / sceneWidth) * scale.length)

  if (index < 0) index = 0
  if (index > scale.length - 1) index = scale.length - 1

  const note = Tone.Frequency(scale[index]).transpose(12)
  dropsVoice.synth.node.triggerAttackRelease(note, '16n')
}

function initHouses() {
  const city = document.getElementById('city')
  let step = 0

  layout.houses.forEach((house) => {
    const houseType = houseTypes[house.type]
    const houseElement = document.createElement('div')
    const bottom = sceneSettings.height - house.y - sceneSettings.houseHeight

    houseElement.classList.add('House', house.type)
    houseElement.style.bottom = `${bottom}px`

    for (let row = 0; row < houseType.rows; row++) {
      for (let column = 0; column < houseType.columns; column++) {
        const windowElement = document.createElement('div')
        const windowCenter =
          house.y +
          sceneSettings.houseBorder +
          row * houseType.rowHeight +
          houseType.rowHeight / 2
        const level = Math.round(
          (sceneSettings.height - windowCenter) / sceneSettings.noteHeight
        )

        windowElement.classList.add('Window')
        windowElement.dataset.step = step + column
        windowElement.dataset.level = level
        houseElement.appendChild(windowElement)
      }
    }

    step += houseType.columns
    city.appendChild(houseElement)
  })

  placeHouses()

  for (let i = 0; i < step; i++) {
    steps.push([])
  }

  document.querySelectorAll('.Window').forEach((windowElement) => {
    steps[windowElement.dataset.step].push(windowElement)

    windowElement.addEventListener('click', () => {
      if (!voiceOn('windows')) return

      windowElement.classList.toggle('on')

      if (soundStarted && !paused && windowElement.classList.contains('on')) {
        windowsVoice.synth.node.triggerAttackRelease(
          windowNote(windowElement),
          '8n'
        )
        flashWindow(windowElement)
      }
    })
  })
}

function voiceOn(voice) {
  const button = document.querySelector(`[data-voice="${voice}"]`)
  return button.classList.contains('active')
}

function houseWidth() {
  const count = layout.houses.length

  if (layout.joined) {
    return (sceneWidth + sceneSettings.houseBorder * (count - 1)) / count
  }

  return layout.houseWidth * stretch
}

function houseLeft(index) {
  if (layout.joined) return index * (houseWidth() - sceneSettings.houseBorder)

  return layout.houses[index].x * stretch
}

function placeHouses() {
  document.querySelectorAll('.House').forEach((houseElement, index) => {
    houseElement.style.left = `${houseLeft(index)}px`
    houseElement.style.width = `${houseWidth()}px`
  })
}

function dropFrom(x, y) {
  if (paused || !voiceOn('drops')) return

  const scene = document.getElementById('scene')
  const offset = scene.offsetHeight - sceneSettings.height
  let landing = scene.offsetHeight

  layout.houses.forEach((house, index) => {
    const left = houseLeft(index)

    if (x >= left && x <= left + houseWidth()) {
      landing = house.y + offset
    }
  })

  const distance = landing - y - 12
  const duration = (landing - y) * 4
  const drop = document.createElement('div')

  drop.classList.add('Drop')
  drop.style.left = `${x}px`
  drop.style.top = `${y}px`
  drop.style.setProperty('--distance', `${distance}px`)
  drop.style.animationDuration = `${duration}ms`
  scene.appendChild(drop)

  setTimeout(() => {
    playDrop(x)
    drop.classList.add('hidden')
    setTimeout(() => drop.remove(), 400)
  }, duration)
}

function showRipple(x, y) {
  const scene = document.getElementById('scene')
  const ripple = document.createElement('div')

  ripple.classList.add('Ripple')
  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`
  ripple.addEventListener('animationend', () => ripple.remove())
  scene.appendChild(ripple)
}

function hideDrops() {
  document.querySelectorAll('.Drop, .Ripple').forEach((element) => {
    element.classList.add('hidden')
    setTimeout(() => element.remove(), 400)
  })
}

function initSky() {
  const sky = document.getElementById('sky')

  sky.addEventListener('click', (e) => {
    if (paused || !voiceOn('drops')) return

    const skyRect = sky.getBoundingClientRect()
    const x = (e.clientX - skyRect.left) / sceneScale
    const y = (e.clientY - skyRect.top) / sceneScale

    showRipple(x, y)
    dropFrom(x, y)
  })
}

function initMoon() {
  const moon = document.getElementById('moon')
  const scene = document.getElementById('scene')
  const range = sceneSettings.moonBottom - sceneSettings.moonTop

  moon.style.width = `${layout.moonSize}px`
  moon.style.height = `${layout.moonSize}px`
  moon.style.top = `${sceneSettings.moonBottom - moonHeight * range}px`

  moon.addEventListener('pointerdown', () => {
    draggingMoon = true
  })

  document.addEventListener('pointermove', (e) => {
    if (!draggingMoon) return

    const sceneTop = scene.getBoundingClientRect().top
    let top = (e.clientY - sceneTop) / sceneScale - layout.moonSize / 2

    if (top < sceneSettings.moonTop) top = sceneSettings.moonTop
    if (top > sceneSettings.moonBottom) top = sceneSettings.moonBottom

    moon.style.top = `${top}px`
    changeMoonHeight((sceneSettings.moonBottom - top) / range)
  })

  document.addEventListener('pointerup', () => {
    draggingMoon = false
  })
}

function initFog() {
  const fogCloud = document.getElementById('fogCloud')
  const fogController = document.getElementById('fogController')
  const scene = document.getElementById('scene')
  const range = sceneSettings.fogMaxHeight - sceneSettings.fogMinHeight

  fogController.addEventListener('pointerdown', () => {
    draggingFog = true
  })

  document.addEventListener('pointermove', (e) => {
    if (!draggingFog) return

    const sceneBottom = scene.getBoundingClientRect().bottom
    let height = (sceneBottom - e.clientY) / sceneScale

    if (height < sceneSettings.fogMinHeight) height = sceneSettings.fogMinHeight
    if (height > sceneSettings.fogMaxHeight) height = sceneSettings.fogMaxHeight

    const amount = (height - sceneSettings.fogMinHeight) / range

    fogCloud.style.height = `${height}px`
    fogCloud.style.opacity = 1 - 0.5 * amount
    fogController.style.bottom = `${height + 3}px`
    changeFog(amount)
  })

  document.addEventListener('pointerup', () => {
    draggingFog = false
  })
}

function chooseLayout() {
  if (window.innerWidth <= 600) return 'mobile'
  if (window.innerWidth <= 1024) return 'tablet'
  return 'desktop'
}

function resizeScene() {
  const scene = document.getElementById('scene')
  const moon = document.getElementById('moon')
  const widthScale = window.innerWidth / layout.width
  const heightScale =
    window.innerHeight / (layout.minHeight + sceneSettings.filtersHeight)

  sceneScale = Math.min(widthScale, heightScale)
  sceneWidth = layout.width

  if (layout.stretch) sceneWidth = window.innerWidth / sceneScale

  stretch = sceneWidth / layout.width
  scene.style.width = `${sceneWidth}px`
  scene.style.marginLeft = `${-sceneWidth / 2}px`
  moon.style.left = `${layout.moonLeft * stretch}px`
  document.documentElement.style.setProperty('--scale', sceneScale)
  placeHouses()
}

function initScene() {
  const layoutName = chooseLayout()

  layout = layouts[layoutName]
  document.body.dataset.layout = layoutName

  resizeScene()
  window.addEventListener('resize', resizeScene)
}

function initFilters() {
  document.querySelectorAll('.FilterButton').forEach((button) => {
    button.addEventListener('click', () => {
      lightWindows(button.dataset.mode)
      changeMode(button.dataset.mode)
    })
  })
}

function initVoiceButtons() {
  const city = document.getElementById('city')

  document.querySelectorAll('.VoiceButton').forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('active')
      city.classList.toggle('dark', !voiceOn('windows'))
      muteVoices()
    })
  })
}

function initSoundToggle() {
  const soundToggle = document.getElementById('soundToggle')

  soundToggle.addEventListener('click', () => {
    soundToggle.classList.toggle('muted')
    paused = soundToggle.classList.contains('muted')

    if (paused) {
      Tone.getDestination().mute = true
      Tone.getTransport().pause()
      hideDrops()
    } else if (!soundStarted) {
      startSound()
    } else {
      Tone.getDestination().mute = false
      Tone.getTransport().start()
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initScene()
  initHouses()
  initSky()
  initMoon()
  initFog()
  initFilters()
  initVoiceButtons()
  initSoundToggle()
  lightWindows(currentMode)
  changeMode(currentMode)
})
