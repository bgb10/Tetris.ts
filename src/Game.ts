import { GameWorld } from './GameWorld'
import { keyboard } from './input/Keyboard'
import { canvas2D } from './Canvas'
import { GAME_CONFIG } from './game.config'

let tetris: GameWorld

function start(): void {
  tetris = new GameWorld(GAME_CONFIG.GAME_WIDTH, GAME_CONFIG.GAME_HEIGHT)
  gameLoop()
}

function gameOverScreen(): void {
  canvas2D.clear()
  canvas2D.drawBackground(GAME_CONFIG.BACKGROUND_COLOR)
  canvas2D.drawText(
    GAME_CONFIG.GAME_OVER_LABEL,
    GAME_CONFIG.GAME_OVER_LABEL_FONT,
    GAME_CONFIG.FONT_COLOR,
    GAME_CONFIG.GAME_OVER_LABEL_POSITION,
    GAME_CONFIG.GAME_OVER_LABEL_POSITION.ALIGNMENT
  )

  canvas2D.drawText(
    GAME_CONFIG.GAME_OVER_YOUR_SCORE_LABEL + tetris.score,
    GAME_CONFIG.GAME_OVER_YOUR_SCORE_LABEL_FONT,
    GAME_CONFIG.FONT_COLOR,
    GAME_CONFIG.GAME_OVER_YOUR_SCORE_LABEL_POSITION,
    GAME_CONFIG.GAME_OVER_LABEL_POSITION.ALIGNMENT
  )

  if (keyboard.isPressed(GAME_CONFIG.START_KEY)) {
    tetris.init()
  }
}

function update(): void {
  tetris.update()
}

function draw(): void {
  canvas2D.clear()
  canvas2D.drawBackground(GAME_CONFIG.BACKGROUND_COLOR)
  tetris.draw()
}

function gameLoop(): void {
  if (tetris.gameOver) {
    gameOverScreen()
  } else {
    update()
    draw()
  }
  keyboard.reset()
  // 1초에 60번 정도 gameLoop 호출, 즉 FPS = 60
  // computing 환경마다 다르나, 일반적으로는 60 frame 근처로 프레임이 뽑힘.
  requestAnimationFrame(gameLoop)
}

start()
