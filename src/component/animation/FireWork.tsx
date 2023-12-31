const AFTERIMG_COUNT = 5;
type VectorProps ={
	x:number;
	y:number;
}
class Vector {
	private x:number;
	private y:number;
	
	constructor(x:number,y:number){
		this.x = x;
		this.y = y;
	}
	add(b:VectorProps){
		this.x += b.x;
		this.y += b.y;
	}
	clone(){
		return new Vector(this.x,this.y)
	}
}
class Particle {
	private AFTERIMG_COUNT:number;
	private life:number;
	
	constructor(x:number,y:number,vel_x:number,vel_y:number,color:String){
		this.AFTERIMG_COUNT = AFTERIMG_COUNT;
		this.life = 1;
	}
}
export class FireWork{
	
}