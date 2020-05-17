sc.OPTIONS_DEFINITION['keys-jump'] = {
  type: 'CONTROLS',
  init: { key1: ig.KEY.CTRL },
  cat: sc.OPTION_CATEGORY.CONTROLS,
  hasDivider: true,
  header: 'jetpack',
};

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
