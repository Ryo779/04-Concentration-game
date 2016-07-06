//myScene.js
var gameScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var gamelayer = new MyLayer();
        this.addChild(gameLayer);
    }
});
var size = cc.director.getWinSize();
var sprite = cc.Sprite.create(res.HelloWorld_png);
sprite.setPosition(size.width / 2, size.height / 2);
sprite.setScale(0.8);
this.addChild(sprite, 0);


    onTouchBegan: function(touch, event) {
        return true;
    },
    onTouchMoved: function(touch, event) {},
    onTouchEnded: function(touch, event) {
        // 次のシーンに切り替える
        cc.director.runScene(new NextScene());
    },
});


