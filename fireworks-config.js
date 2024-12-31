const fireworksConfig = {
    hue: {
      min: 0,
      max: 345
    },
    rocketsPoint: {
      min: 50,
      max: 50
    },
    opacity: 0.5,
    acceleration: 1.02,
    friction: 0.97,
    gravity: 1.5,
    particles: 60,
    explosion: 5,
    mouse: {
      click: false,
      move: false,
      max: 1
    },
    boundaries: {
      debug: false,
      height: 965,
      width: 1920,
      x: 50,
      y: 50
    },
    sound: {
      enabled: true,
      files: [
        "https://fireworks.js.org/sounds/explosion0.mp3",
        "https://fireworks.js.org/sounds/explosion1.mp3",
        "https://fireworks.js.org/sounds/explosion2.mp3"
      ],
      volume: {
        min: 30,
        max: 50
      }
    },
    delay: {
      min: 20,
      max: 40
    },
    brightness: {
      min: 50,
      max: 80
    },
    decay: {
      min: 0.015,
      max: 0.03
    },
    flickering: 50,
    intensity: 30,
    traceLength: 3,
    traceSpeed: 10,
    lineWidth: {
      explosion: {
        min: 1,
        max: 4
      },
      trace: {
        min: 0.1,
        max: 1
      }
    },
    lineStyle: "round",
    autoresize: true
  };