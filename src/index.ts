import ExpoTemiModule from "./ExpoTemiModule";

export function isReady(): boolean {
  return ExpoTemiModule.isReady();
}

export function speak(text: string): void {
  return ExpoTemiModule.speak(text);
}

export function getMapList(): MapModel[] {
  return ExpoTemiModule.getMapList();
}

export function loadMap(mapId: string): void {
  return ExpoTemiModule.loadMap(mapId);
}

export function getMapData(): any {
  return ExpoTemiModule.getMapData();
}

export function goToPosition(
  position: Position,
  backwards: boolean,
  noByPass: boolean,
  speedLevel: SpeedLevel
): void {
  const { x, y, yaw, tiltAngle } = position;
  return ExpoTemiModule.goToPosition(
    x,
    y,
    yaw,
    tiltAngle,
    backwards,
    noByPass,
    speedLevel
  );
}

export function setKioskModeOn(on: boolean): void {
  return ExpoTemiModule.setKioskModeOn(on);
}

export enum SpeedLevel {
  HIGH = "high",
  MEDIUM = "medium",
  SLOW = "slow",
}

export interface Position {
  x: number;
  y: number;
  yaw: number;
  tiltAngle: number;
}

export interface MapImage {
  typeId: string;
  rows: number;
  cols: number;
  dt: string;
  data: number[];
}

export interface MapInfo {
  height: number;
  width: number;
  originX: number;
  originY: number;
  resolution: number;
}

export interface MapModel {
  id: string;
  name: string;
}

export interface LayerPose {
  x: number;
  y: number;
  theta: number;
}

export interface Layer {
  layerCreationUTC: number;
  layerCategory: number;
  layerId: string;
  layerThickness: number;
  layerStatus: number;
  layerPoses: LayerPose[];
  layerDirection: number;
  layerData: string;
}

export interface MapDataModel {
  mapImage: MapImage;
  mapId: string;
  mapInfo: MapInfo;
}
