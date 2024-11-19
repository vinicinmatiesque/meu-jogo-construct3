const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Platform.Cnds.IsJumping
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{Chão: 0},
	{Lava: 0},
	{Moeda: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{elemento: 0}
];

self.InstanceType = {
	Chão: class extends self.ISpriteInstance {},
	Lava: class extends self.ISpriteInstance {},
	Moeda: class extends self.ISpriteInstance {},
	elemento: class extends self.ISpriteInstance {}
}