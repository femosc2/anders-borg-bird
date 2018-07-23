function Bird() {
    this.y = height/2;
    this.x = 64;
    this.gravity = 0.8;
    this.lift = -12;
    this.velocity = 0;
    this.img = loadImage("graphics/jonas.png");

    this.show = function()  {
        fill(255);
        image(this.img, this.x, this.y, 64, 64);
    };

    this.up = function() {
        this.velocity += -this.gravity*10;
        this.velocity += this.lift;
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity *= 0.9;


        if (this.y > height) {
            this.y = height;
            this.velocity= 0;
        }


        if (this.y < 0) {
            this.y = 0;
            this.velocity= 0;
        }
    };
}