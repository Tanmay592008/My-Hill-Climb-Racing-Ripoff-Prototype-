var car

var frontTire,backTire,fronttireImg,backtireImg
var carImg

var gamestate = play
var play
var end

var ground,groundImg

var surface,surfaceImg

var fuel = 300
var fuelcanImg,lowfuelImg,fuelImg
var fuelCan,lowFuel,fuel,fuelIcon

var driverBody,driverHead,driverbodyImg,driverheadImg

var gameOverImg,gameOver

function preload(){

carImg = loadImage("Car.png")

fronttireImg = loadImage("Tire.png")
backtireImg = loadImage("Tire.png")

groundImg = loadImage("terrain-ground2.png")

surfaceImg = loadImage("terrain-surface2_origin.png")

driverbodyImg = loadImage("driver-body.png")
driverheadImg = loadImage("driver-head.png")

fuelcanImg = loadImage("fuel-canister.png")
lowfuelImg = loadImage("fuel-warning.png")
fuelImg = loadImage("fuel-icon.png")

gameOverImg = loadImage("out of fuel no bg.png")


}

function setup() {
createCanvas(windowWidth,windowHeight)

//creating car
car = createSprite(0,height-385)
car.addImage("Car.png", carImg)
car.scale = 0.4

//creating front tire
frontTire = createSprite()
frontTire.addImage("Tire.png", fronttireImg)
frontTire.scale = 0.3
frontTire.rotation=50

//creating back tire
backTire = createSprite()
backTire.addImage("Tire.png",backtireImg)
backTire.scale = 0.3

//creating ground
ground = createSprite(width / 2,height - 100)
ground.addImage("terrain-ground2.png",groundImg)

//creating surface
surface = createSprite()
surface.addImage("terrain-surface2.png",surfaceImg)
surface.y = ground.y-260
surface.x = ground.x

//creating driver body
driverBody = createSprite()
driverBody.addImage("driver-body.png",driverbodyImg) 
driverBody.scale = 0.7

//creating driver head
driverHead = createSprite()
driverHead.addImage("driver-head.png",driverheadImg)
driverHead.scale = 0.4

//creating fuel can
fuelCan = createSprite(800,410)
fuelCan.addImage("fuel-canister.png",fuelcanImg)
fuelCan.scale = 0.5

//creating fuel
fuelIcon = createSprite(1350,25)
fuelIcon.addImage("fuel-icon.png",fuelImg)
fuelIcon.scale = 0.7

//creating low fuel warning
lowFuel = createSprite(width / 2,height / 2-150)
lowFuel.addImage("fuel-warning.png",lowfuelImg)
lowFuel.scale = 0.5
lowFuel.visible = false

//creating game over
gameOver = createSprite(width / 2,height / 2-260)
gameOver.addImage("out of fuel no bg.png",gameOverImg)
gameOver.visible = false


//increasing depth
//increasing car depth
car.depth = ground.depth+1
car.depth = surface.depth+1 
car.depth = driverBody.depth+1
car.depth = fuelCan.depth+1



//increasing both the tires depth
frontTire.depth = surface.depth+1
backTire.depth = surface.depth+1

}

function draw() {
background(100)
drawSprites()

text("fuel: "+ fuel, 1400,30);
textSize(12)

text("NOTE: This is a prototype,and not completed",700,50)
text("I am working for the finished product",700,65)
text("Use wasd keys to move",700,80)

gamestate = play

//increasing car depth for continoues effect
car.depth = ground.depth+1
car.depth = surface.depth+1
car.depth = fuelCan.depth+1

driverBody.depth = fuelCan.depth+1

frontTire.depth = fuelCan.depth+1
backTire.depth = fuelCan.depth+1

if (gamestate === play){

    if (fuel > 0){

        //car controls
        if (keyDown("d")){
            car.x = car.x+10
        
            frontTire.rotation +=20
        
            backTire.rotation +=20
        
            fuel = fuel + Math.round(-1);
        }
        
        if (keyDown("a")){
            car.x = car.x-10
        
            frontTire.rotation -=20
        
            backTire.rotation -=20
    
            fuel = fuel + Math.round(-1);
        }

        //background
        if (car.x >= 700 && (keyDown("d"))){
            car.x = 700
    
            ground.x = ground.x-10
            surface.x = surface.x-10
            fuelCan.x = fuelCan.x-10
    
        }
    }

    
    
   
    
    //creating infinite background
    if (ground.x < 550){
        ground.x = ground.width/2;
    }

    if (surface.x < 550){
        surface.x = surface.width/2;
    }

    //adjusting positions
    //adjusting tires position
    //front tire
    frontTire.x = car.x-31
    frontTire.y = car.y+19

    //back tire
    backTire.x = car.x+33
    backTire.y = car.y+19

    //driver head and body
    driverBody.x = car.x+1
    driverBody.y = car.y-4
  
    driverHead.x = driverBody.x-1
    driverHead.y = driverBody.y-23

    if (fuel == 50){
      lowFuel.visible = true
    }

    

    if (fuel <=  0){
       fuel = 0
       
        gamestate = end
    
    }

    
}

if (fuel === 0){
    gameOver.visible = true
}
}
