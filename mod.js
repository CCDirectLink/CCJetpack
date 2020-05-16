ig.input.bind(ig.KEY.CTRL, 'jump');

ig.ENTITY.Player.inject({
  update(...args) {
    if (ig.input.state('jump')) {
      ig.game.playerEntity.doJump(
        150, // zVel (vertical velocity)
        16, // callbackHeight
        250, // maxVel (max horizontal velocity in mid-air)
      );
    }

    return this.parent(...args);
  },
});
