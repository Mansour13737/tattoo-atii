export type TattooItem = {
  id: number;
  category: string;
  address: string;
  code: string;
};

function generateTattooCode(category: string, id: number): string {
  const catPrefix = category.substring(0, 2).toUpperCase();
  
  const idPart = id.toString().padStart(3, '0');
  
  return `${catPrefix}${idPart}`;  
}

export const Tattos: TattooItem[] = [
  { id: 1 ,category : 'forearm', address : '/tattoos/simple/1-Forearm/1.jpg' },
  { id: 2 ,category : 'forearm', address : '/tattoos/simple/1-Forearm/2.jpg' },
  { id: 3 ,category : 'forearm', address : '/tattoos/simple/1-Forearm/3.jpg' },
  { id: 4 ,category : 'forearm', address : '/tattoos/simple/1-Forearm/4.jpg' },
  { id: 5 ,category : 'wrist', address : '/tattoos/simple/2-Wrist/1.jpg' },
  { id: 6 ,category : 'wrist', address : '/tattoos/simple/2-Wrist/2.jpg' },
  { id: 7 ,category : 'wrist', address : '/tattoos/simple/2-Wrist/3.jpg' },
  { id: 8 ,category : 'upper-arm', address : '/tattoos/simple/3-Upper Arm/1.jpg' },
  { id: 9 ,category : 'upper-arm', address : '/tattoos/simple/3-Upper Arm/2.jpg' },
  { id: 10 ,category : 'upper-arm', address : '/tattoos/simple/3-Upper Arm/3.jpg' },
  { id: 11 ,category : 'shoulder-blade', address : '/tattoos/simple/4-Shoulder Blade/1.jpg' },
  { id: 12 ,category : 'shoulder-blade', address : '/tattoos/simple/4-Shoulder Blade/2.jpg' },
  { id: 13 ,category : 'shoulder-blade', address : '/tattoos/simple/4-Shoulder Blade/3.jpg' },
  { id: 14 ,category : 'shoulder-blade', address : '/tattoos/simple/4-Shoulder Blade/4.jpg' },
  { id: 15 ,category : 'shoulder-blade', address : '/tattoos/simple/4-Shoulder Blade/5.jpg' },
  { id: 16 ,category : 'shoulder-blade', address : '/tattoos/simple/4-Shoulder Blade/6.jpg' },
  { id: 17 ,category : 'shoulder-blade', address : '/tattoos/simple/4-Shoulder Blade/7.jpg' },
  { id: 18 ,category : 'shoulder-blade', address : '/tattoos/simple/4-Shoulder Blade/8.jpg' },
  { id: 19 ,category : 'shoulder-blade', address : '/tattoos/simple/4-Shoulder Blade/9.jpg' },
  { id: 20 ,category : 'shoulder-blade', address : '/tattoos/simple/4-Shoulder Blade/10.jpg' },
  { id: 21 ,category : 'shoulder-blade', address : '/tattoos/simple/4-Shoulder Blade/11.jpg' },
  { id: 22 ,category : 'shoulder-blade', address : '/tattoos/simple/4-Shoulder Blade/12.jpg' },
  { id: 23 ,category : 'back', address : '/tattoos/simple/5-Back/1.jpg' },
  { id: 24 ,category : 'back', address : '/tattoos/simple/5-Back/2.jpg' },
  { id: 25 ,category : 'back', address : '/tattoos/simple/5-Back/3.jpg' },
  { id: 26 ,category : 'back', address : '/tattoos/simple/5-Back/4.jpg' },
  { id: 27 ,category : 'back', address : '/tattoos/simple/5-Back/5.jpg' },
  { id: 28 ,category : 'neck-nape', address : '/tattoos/simple/10-Neck-Nape/1.jpg' },
  { id: 29 ,category : 'neck-nape', address : '/tattoos/simple/10-Neck-Nape/2.jpg' },
  { id: 30 ,category : 'finger', address : '/tattoos/simple/11-Finger/1.jpg' },
  { id: 31 ,category : 'finger', address : '/tattoos/simple/11-Finger/2.jpg' },
  { id: 32 ,category : 'finger', address : '/tattoos/simple/11-Finger/3.jpg' },
  { id: 33 ,category : 'finger', address : '/tattoos/simple/11-Finger/4.jpg' },
  { id: 34 ,category : 'finger', address : '/tattoos/simple/11-Finger/5.jpg' },
  { id: 35 ,category : 'finger', address : '/tattoos/simple/11-Finger/6.jpg' },
  { id: 36 ,category : 'finger', address : '/tattoos/simple/11-Finger/7.jpg' },
  { id: 37 ,category : 'finger', address : '/tattoos/simple/11-Finger/8.jpg' },
  { id: 38 ,category : 'finger', address : '/tattoos/simple/11-Finger/9.jpg' },
  { id: 39 ,category : 'finger', address : '/tattoos/simple/11-Finger/10.jpg' },
  { id: 40 ,category : 'finger', address : '/tattoos/simple/11-Finger/11.jpg' },
  { id: 41 ,category : 'finger', address : '/tattoos/simple/11-Finger/12.jpg' },
  { id: 42 ,category : 'finger', address : '/tattoos/simple/11-Finger/13.jpg' },
  { id: 43 ,category : 'finger', address : '/tattoos/simple/11-Finger/14.jpg' },
  { id: 44 ,category : 'finger', address : '/tattoos/simple/11-Finger/15.jpg' },
  { id: 45 ,category : 'finger', address : '/tattoos/simple/11-Finger/16.jpg' },
  { id: 46 ,category : 'finger', address : '/tattoos/simple/11-Finger/17.jpg' },
  { id: 47 ,category : 'finger', address : '/tattoos/simple/11-Finger/18.jpg' },
  { id: 48 ,category : 'collarbone', address : '/tattoos/simple/13-Collarbone/1.jpg' },
  { id: 49 ,category : 'collarbone', address : '/tattoos/simple/13-Collarbone/2.jpg' },
  { id: 50 ,category : 'collarbone', address : '/tattoos/simple/13-Collarbone/3.jpg' },
  { id: 51 ,category : 'collarbone', address : '/tattoos/simple/13-Collarbone/4.jpg' },
  { id: 52 ,category : 'collarbone', address : '/tattoos/simple/13-Collarbone/5.jpg' },
  { id: 53 ,category : 'upper-foot', address : '/tattoos/simple/16-Upper-Foot/1.jpg' },
  { id: 54 ,category : 'upper-foot', address : '/tattoos/simple/16-Upper-Foot/2.jpg' },
  { id: 55 ,category : 'upper-foot', address : '/tattoos/simple/16-Upper-Foot/3.jpg' },
  { id: 56 ,category : 'ankle', address : '/tattoos/simple/21-Ankle/1.jpg' },
  { id: 57 ,category : 'ankle', address : '/tattoos/simple/21-Ankle/2.jpg' },
  { id: 58 ,category : 'ankle', address : '/tattoos/simple/21-Ankle/3.jpg' },
].map(item => ({
  ...item,
  code: generateTattooCode(item.category, item.id),
}));
