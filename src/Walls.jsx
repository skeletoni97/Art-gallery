import { BoxGeometry, Group, Mesh, MeshBasicMaterial } from "three";

export const Walls = () => {
  const wallsGroup = new Group();
  // Создайте геометрию и материал для стен
  const wallGeometry = new BoxGeometry(20, 6, 0.1);
  const smallwallGeometry = new BoxGeometry(6, 3, 0.1);
  const wallMaterial = new MeshBasicMaterial({ color: 0x808080 }); // Серый цвет

///////frontWall
  const frontWall = new Mesh(wallGeometry, wallMaterial);
  frontWall.position.z = -10;

  wallsGroup.add(frontWall);
  
 
///////////leftWall
  const leftWall = new Mesh(wallGeometry, wallMaterial);
  leftWall.rotation.y = Math.PI / 2; 
  leftWall.position.x = -10; 

  wallsGroup.add(leftWall);

/////////rightWall
  const rightWall = new Mesh(wallGeometry, wallMaterial);
  rightWall.position.x = 10;
  rightWall.rotation.y = Math.PI / 2;

  wallsGroup.add(rightWall);

///////backWall
  const backWall = new Mesh(wallGeometry, wallMaterial);
  backWall.position.z = 10;
  wallsGroup.add(backWall);
///////
///////SMALL frontWall
const leftFrontWall = new Mesh(smallwallGeometry, wallMaterial);
  leftFrontWall.position.z = -7;
  leftFrontWall.position.x = -7;

  wallsGroup.add(leftFrontWall);

  const rightfrontWall = new Mesh(smallwallGeometry, wallMaterial);
  rightfrontWall.position.z = -4;
  rightfrontWall.position.x = 7;

  wallsGroup.add(rightfrontWall);
/////////// SMALL leftWall
const leftWallright = new Mesh(smallwallGeometry, wallMaterial);
leftWallright.rotation.y = Math.PI / 2; 
leftWallright.position.x = -4;
leftWallright.position.z = -10; 

wallsGroup.add(leftWallright);
///////// SMALL rightWall
const rightWallleft = new Mesh(smallwallGeometry, wallMaterial);
rightWallleft.position.x = 4;
rightWallleft.rotation.y = Math.PI / 2;
rightWallleft.position.z = -7; 

wallsGroup.add(rightWallleft);
///////SMALL backWall
  return <primitive object={wallsGroup} />;
};