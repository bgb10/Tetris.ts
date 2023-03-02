export const GAME_CONFIG: any = {
  // PHYSICS
  // 속도와 관련이 있음. 초당 60프레임 정도인데 40프레임만 지나고 update 하면 40/60 초마다 한번씩 떨어지겠지.
  UPDATE_AFTER_X_FRAMES: 40,

  // SIZING
  GAME_WIDTH: 15, // 가로 칸수
  GAME_HEIGHT: 20, // 세로 칸수
  CANVAS_MIN_WIDTH: 300,
  CANVAS_MIN_HEIGHT: 400,
  CELL_SIZE: 20,
  NEXT_SHAPE_CELL_SIZE: 5,
  STROKE_WIDTH: 0.5,

  // COLORS
  BACKGROUND_COLOR: '#28363B',
  STROKE_COLOR: 'black',
  SHAPE_COLORS: ['#F9B38F', '#BF6C86', '#84AF9C', '#6D5C80', '#FFA3D0', '#439F9E', '#EF5F3C'],

  // TEXTS
  SCORE_LABEL_FONT: '10px Comic Sans MS',
  NEXT_SHAPE_LABEL_FONT: '10px Comic Sans MS',
  GAME_OVER_LABEL_FONT: '25px Comic Sans MS',
  GAME_OVER_YOUR_SCORE_LABEL_FONT: '15px Comic Sans MS',
  FONT_COLOR: 'white',
  SCORE_LABEL: 'Score: ',
  NEXT_SHAPE_LABEL: 'Next Shape: ',
  GAME_OVER_LABEL: 'Game Over!',
  GAME_OVER_YOUR_SCORE_LABEL: 'Your Score: ',

  // POSITIONS
  // 여기서 alignment 는 x, y 가 글자의 어디 기준으로 있는지를 정의한다. left 를 예를 들면, x, y 지점으로부터 오른쪽으로 글이 있을 것이다.
  NEXT_SHAPE_POSITION: { X: 283, Y: 6 },
  SCORE_LABEL_POSITION: { X: 5, Y: 13, ALIGNMENT: 'left' },
  NEXT_SHAPE_LABEL_POSITION: { X: 215, Y: 13, ALIGNMENT: 'left' },
  GAME_OVER_LABEL_POSITION: { X: 150, Y: 200, ALIGNMENT: 'center' },
  GAME_OVER_YOUR_SCORE_LABEL_POSITION: { X: 150, Y: 235, ALIGNMENT: 'center' },

  // KEYS
  START_KEY: 32,
  LEFT_KEY: 37,
  RIGHT_KEY: 39,
  UP_KEY: 38,
  DOWN_KEY: 40,
  DROP: 13,

  // RULES
  FILLED_LINE_BONUS: 100,
  DROPPED_SHAPE_BONUS: 2,
  LOWERED_SHAPE_BONUS: 1
}
